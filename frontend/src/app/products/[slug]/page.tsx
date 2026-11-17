import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { DetailShell } from '@/components/DetailShell';
import { WalstarButton } from '@/components/WalstarButton';
import { getProductBySlug, getStrapiMediaUrl } from '@/lib/strapi';

async function ProductContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(decodeURIComponent(slug));

  if (!product) {
    notFound();
  }

  const fallbackProductImage = '/images/placeholder.png';
  const imageUrl = getStrapiMediaUrl(product.image?.url) || fallbackProductImage;

  return (
    <article className="overflow-hidden rounded-2xl border border-[#e3e8f2] bg-white shadow-sm">
      <div
        className="relative h-56 w-full"
        style={{
          background:
            product.accentGradient ||
            'linear-gradient(135deg,#0d1230,#1a2b6b 60%,#2f80ff)',
        }}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={product.image?.alternativeText || product.name}
            fill
            sizes="100vw"
            className="object-cover"
          />
        ) : null}
      </div>
      <div className="space-y-4 p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#2f80ff]">
          Walstar Product
        </p>
        <h1 className="text-3xl font-semibold text-[#12123a]">{product.name}</h1>
        {product.tagline ? (
          <p className="text-sm font-medium text-[#5d6280]">{product.tagline}</p>
        ) : null}
        <p className="leading-relaxed text-[#5d6280]">{product.description}</p>
        <div className="pt-4">
          <WalstarButton variant="orange" href="/#footer-consultation">
            Request a Demo
          </WalstarButton>
        </div>
      </div>
    </article>
  );
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <DetailShell backHref="/#prod" backLabel="← Back to Products">
      <Suspense fallback={<div className="h-72 animate-pulse rounded-2xl bg-zinc-200" />}>
        <ProductContent params={params} />
      </Suspense>
    </DetailShell>
  );
}
