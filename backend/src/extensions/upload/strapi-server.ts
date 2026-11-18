import fs from 'node:fs';
import path from 'node:path';

interface UploadFileLike {
  name?: string;
  hash?: string;
  ext?: string;
  mime?: string;
  filepath?: string;
  tmpWorkingDirectory?: string;
  width?: number | null;
  height?: number | null;
  size?: number;
  sizeInBytes?: number;
  getStream: () => NodeJS.ReadableStream;
}

interface SharpMetadata {
  format?: string;
  width?: number;
  height?: number;
  pageHeight?: number;
  pages?: number;
}

interface SharpOutputInfo {
  width?: number;
  height?: number;
  pageHeight?: number;
  size?: number;
}

interface SharpPipeline {
  metadata(): Promise<SharpMetadata>;
  resize(options: {
    width?: number;
    height?: number;
    fit?: 'inside';
    withoutEnlargement?: boolean;
  }): SharpPipeline;
  gif(options?: { effort?: number }): SharpPipeline;
  toFile(filePath: string): Promise<SharpOutputInfo>;
}

type SharpFactory = (
  input: string,
  options?: { animated?: boolean; limitInputPixels?: boolean | number }
) => SharpPipeline;

interface ImageManipulationService {
  isFaultyImage: (file: UploadFileLike) => Promise<boolean>;
  isOptimizableImage: (file: UploadFileLike) => Promise<boolean>;
  isResizableImage: (file: UploadFileLike) => Promise<boolean>;
  isImage: (file: UploadFileLike) => Promise<boolean>;
  getDimensions: (file: UploadFileLike) => Promise<{ width: number | null; height: number | null }>;
  generateResponsiveFormats: (file: UploadFileLike) => Promise<unknown[]>;
  generateThumbnail: (file: UploadFileLike) => Promise<unknown>;
  optimize: (file: UploadFileLike) => Promise<UploadFileLike>;
  generateFileName: (name: string) => string;
}

// Stay comfortably under Cloudinary's 50 MP animated GIF total-pixel limit and 10 MB file size limit
const MAX_GIF_TOTAL_PIXELS = 42_000_000;
const MAX_GIF_SIZE_BYTES = Math.floor(9.2 * 1024 * 1024);

function isGifFile(file?: UploadFileLike | null): boolean {
  if (!file) return false;
  return (
    file.mime?.toLowerCase() === 'image/gif' ||
    file.ext?.toLowerCase() === '.gif'
  );
}

function bytesToKbytes(bytes: number): number {
  return Math.round((bytes / 1000) * 100) / 100;
}

function getSharp(): SharpFactory {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require('sharp') as SharpFactory;
}

async function optimizeGifForCloud(file: UploadFileLike): Promise<UploadFileLike> {
  if (!file.filepath) {
    return file;
  }

  const sharp = getSharp();
  const meta = await sharp(file.filepath, { limitInputPixels: false }).metadata();
  const width = meta.width ?? 0;
  const frameHeight = meta.pageHeight ?? meta.height ?? 0;
  const pages = Math.max(1, meta.pages ?? 1);
  const totalPixels = width * frameHeight * pages;
  const currentBytes = file.sizeInBytes ?? fs.statSync(file.filepath).size;

  if (
    width <= 0 ||
    frameHeight <= 0 ||
    (totalPixels <= MAX_GIF_TOTAL_PIXELS && currentBytes <= MAX_GIF_SIZE_BYTES)
  ) {
    return file;
  }

  const pixelScale =
    totalPixels > MAX_GIF_TOTAL_PIXELS
      ? Math.sqrt(MAX_GIF_TOTAL_PIXELS / totalPixels)
      : 1;
  const sizeScale =
    currentBytes > MAX_GIF_SIZE_BYTES
      ? Math.sqrt(MAX_GIF_SIZE_BYTES / currentBytes)
      : 1;
  let scale = Math.min(pixelScale, sizeScale, 0.95);

  const baseName = `optimized-gif-${file.hash || Date.now()}.gif`;
  let outPath = file.tmpWorkingDirectory
    ? path.join(file.tmpWorkingDirectory, baseName)
    : `${file.filepath}.optimized.gif`;

  const resizeOnce = async (targetScale: number, targetPath: string) => {
    const targetW = Math.max(64, Math.floor(width * targetScale));
    const targetH = Math.max(64, Math.floor(frameHeight * targetScale));
    return sharp(file.filepath as string, {
      animated: true,
      limitInputPixels: false,
    })
      .resize({
        width: targetW,
        height: targetH,
        fit: 'inside',
        withoutEnlargement: true,
      })
      .gif({ effort: 6 })
      .toFile(targetPath);
  };

  let info = await resizeOnce(scale, outPath);
  let outSize = info.size ?? fs.statSync(outPath).size;

  // Second pass if still over Cloudinary's file size cap
  if (outSize > MAX_GIF_SIZE_BYTES) {
    const secondPath = file.tmpWorkingDirectory
      ? path.join(file.tmpWorkingDirectory, `optimized-gif-2-${file.hash || Date.now()}.gif`)
      : `${file.filepath}.optimized2.gif`;
    scale = Math.min(scale * 0.65, scale * Math.sqrt(MAX_GIF_SIZE_BYTES / outSize));
    info = await resizeOnce(scale, secondPath);
    outPath = secondPath;
    outSize = info.size ?? fs.statSync(outPath).size;
  }

  return {
    ...file,
    filepath: outPath,
    getStream: () => fs.createReadStream(outPath),
    width: info.width ?? width,
    height: info.pageHeight ?? info.height ?? frameHeight,
    size: bytesToKbytes(outSize),
    sizeInBytes: outSize,
  };
}

function wrapImageManipulationService(
  original: ImageManipulationService
): ImageManipulationService {
  return {
    ...original,

    async isResizableImage(file: UploadFileLike) {
      // Skip generating multi-frame GIF thumbnail/small/medium/large variants:
      // sharp animated re-encoding is very slow/memory-heavy and responsive variants
      // easily exceed Cloudinary's 50 MP animated GIF limit. Media Library uses file.url directly.
      if (isGifFile(file)) {
        return false;
      }
      return original.isResizableImage(file);
    },

    async isOptimizableImage(file: UploadFileLike) {
      if (isGifFile(file)) {
        return true;
      }
      return original.isOptimizableImage(file);
    },

    async optimize(file: UploadFileLike) {
      if (isGifFile(file)) {
        return optimizeGifForCloud(file);
      }
      return original.optimize(file);
    },

    async getDimensions(file: UploadFileLike) {
      if (isGifFile(file) && file.filepath) {
        try {
          const sharp = getSharp();
          const meta = await sharp(file.filepath, { limitInputPixels: false }).metadata();
          return {
            width: meta.width ?? null,
            height: meta.pageHeight ?? meta.height ?? null,
          };
        } catch {
          return original.getDimensions(file);
        }
      }
      return original.getDimensions(file);
    },
  };
}

export default (plugin: {
  services: Record<string, unknown>;
}) => {
  const existing = plugin.services['image-manipulation'];

  if (typeof existing === 'function') {
    plugin.services['image-manipulation'] = (...args: unknown[]) => {
      const resolved = (existing as (...a: unknown[]) => ImageManipulationService)(...args);
      return wrapImageManipulationService(resolved);
    };
  } else if (existing && typeof existing === 'object') {
    plugin.services['image-manipulation'] = wrapImageManipulationService(
      existing as ImageManipulationService
    );
  }

  return plugin;
};
