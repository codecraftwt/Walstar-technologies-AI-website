const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateWalstarOrigamiGif() {
  const size = 88; // 2x retina for 44x44 display
  const framesCount = 28;
  const frames = [];

  for (let i = 0; i < framesCount; i++) {
    const t = i / framesCount; // 0 to 1
    // Smooth ease in out for scale: 0.96 to 1.05
    const scale = 1 + 0.04 * Math.sin(t * 2 * Math.PI);
    // Subtle rotation: -4 deg to +4 deg
    const rotate = 3.5 * Math.sin(t * 2 * Math.PI);
    // Light sweep position across width
    const gleamX = -40 + t * 168; // sweeps from left to right

    // Star facet colors with dynamic light reflection
    const light = Math.sin(t * 2 * Math.PI);
    const c1 = light > 0 ? '#ff792a' : '#f4691f';
    const c2 = light > 0 ? '#ff9d63' : '#ff8a48';
    const c3 = light > 0 ? '#f56315' : '#e55a10';

    const svg = `
      <svg width="${size}" height="${size}" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#3AA6FF"/>
            <stop offset="100%" stop-color="#207EE4"/>
          </linearGradient>
          <linearGradient id="gleamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0"/>
            <stop offset="50%" stop-color="#ffffff" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
          </linearGradient>
          <clipPath id="circleClip">
            <circle cx="44" cy="44" r="42"/>
          </clipPath>
        </defs>

        <!-- Circular Blue Badge -->
        <circle cx="44" cy="44" r="42" fill="url(#bgGrad)"/>
        <circle cx="44" cy="44" r="41" fill="none" stroke="#60B7FF" stroke-width="1.5" stroke-opacity="0.6"/>

        <!-- Origami Star Group centered at (44, 44) -->
        <!-- Native viewBox is 32x32, star center is roughly at (20, 17). Scaled by 1.9 -> ~44 -->
        <g transform="translate(44, 44) rotate(${rotate.toFixed(2)}) scale(${scale.toFixed(3)}) translate(-20, -17)">
          <!-- Main wing 1 -->
          <polygon points="10,4 20,16 10,26" fill="${c1}" />
          <!-- Accent wing 2 -->
          <polygon points="20,16 30,12 21,21" fill="${c2}" />
          <!-- Lower wing 3 -->
          <polygon points="21,21 28,30 19,26" fill="${c3}" />
        </g>

        <!-- Dynamic light gleam across the badge -->
        <g clip-path="url(#circleClip)">
          <rect x="${gleamX.toFixed(1)}" y="-20" width="28" height="128"
                fill="url(#gleamGrad)"
                transform="rotate(25 44 44)" />
        </g>
      </svg>
    `;

    const png = await sharp(Buffer.from(svg)).toFormat('png').toBuffer();
    frames.push(png);
  }

  // Composite vertical strip for sharp animated gif
  const strip = await sharp({
    create: {
      width: size,
      height: size * framesCount,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  }).composite(frames.map((input, idx) => ({ input, top: idx * size, left: 0 }))).png().toBuffer();

  const gifBuffer = await sharp(strip, { pageHeight: size, animated: true })
    .gif({ delay: 65, loop: 0 })
    .toBuffer();

  const destDir = path.resolve(__dirname, '../../frontend/public/images/about');
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const destFile1 = path.join(destDir, 'walstar-origami.gif');
  const destFile2 = path.resolve(__dirname, '../../frontend/public/images/walstar-star.gif');

  fs.writeFileSync(destFile1, gifBuffer);
  fs.writeFileSync(destFile2, gifBuffer);

  console.log(`Successfully generated GIF (${gifBuffer.length} bytes):`);
  console.log(`- ${destFile1}`);
  console.log(`- ${destFile2}`);
}

generateWalstarOrigamiGif().catch(console.error);
