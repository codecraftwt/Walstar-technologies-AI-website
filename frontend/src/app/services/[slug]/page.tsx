import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import { Suspense } from 'react';
import { DetailShell } from '@/components/common/DetailShell';
import { PageLoadingSkeleton } from '@/components/common/PageLoadingSkeleton';
import { WalstarButton } from '@/components/common/WalstarButton';
import { PageSectionsRenderer } from '@/components/page-renderer/PageSectionsRenderer';
import { getResolvedPageBySlug, getServiceBySlug, getStrapiMediaUrl } from '@/lib/strapi';

const SERVICE_CANONICAL_SLUGS: Record<string, string> = {
  'service-1': 'ai-solutions-business-automation',
  'ai-solutions-automation': 'ai-solutions-business-automation',
  'ai-solutions-and-automation': 'ai-solutions-business-automation',
  'ai-solutions': 'ai-solutions-business-automation',
  'service-2': 'custom-software-development',
  'custom-software': 'custom-software-development',
  'service-3': 'digital-marketing-performance-growth',
  'digital-marketing': 'digital-marketing-performance-growth',
};

async function ServiceContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug).trim();

  const canonicalSlug = SERVICE_CANONICAL_SLUGS[decodedSlug];
  if (canonicalSlug && canonicalSlug !== decodedSlug) {
    redirect(`/services/${encodeURIComponent(canonicalSlug)}`);
  }

  // Dynamically resolve full Page Dynamic Zone sections matching the exact slug stored in Strapi
  const { data: pageData, source } = await getResolvedPageBySlug(decodedSlug);
  if (
    pageData &&
    pageData.page?.sections &&
    pageData.page.sections.length > 0 &&
    (pageData.page.pageType === 'service' ||
      decodedSlug === 'ai-solutions-business-automation' ||
      decodedSlug === 'custom-software-development' ||
      decodedSlug === 'digital-marketing-performance-growth')
  ) {
    return (
      <PageSectionsRenderer
        data={pageData}
        source={source}
        currentPath={`/services/${encodeURIComponent(decodedSlug)}`}
      />
    );
  }

  // Otherwise, load from individual services collection
  const service = await getServiceBySlug(decodedSlug);

  if (!service) {
    notFound();
  }

  const fallbackServiceImage = '/images/placeholder.png';
  const imageUrl = getStrapiMediaUrl(service.image?.url) || fallbackServiceImage;
  const iconImgUrl = getStrapiMediaUrl(service.iconImage?.url);

  return (
    <DetailShell backHref="/#cap" backLabel="← Back to Capabilities">
      <article className="overflow-hidden rounded-2xl border border-[#e3e8f2] bg-white shadow-sm">
        <div className="relative h-52 bg-gradient-to-br from-[#1b1b55] via-[#4b2bb5] to-[#0e0f3a]">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={service.image?.alternativeText || service.title}
              fill
              sizes="100vw"
              className="object-cover"
            />
          ) : null}
        </div>
        <div className="space-y-4 p-8">
          <span className="inline-grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-[#0b1033] p-2.5 text-lg text-white">
            {iconImgUrl ? (
              <Image
                src={iconImgUrl}
                alt=""
                width={26}
                height={26}
                className="h-full w-full object-contain"
              />
            ) : (
              service.icon
            )}
          </span>
          <h1 className="text-3xl font-semibold text-[#12123a]">{service.title}</h1>
          <p className="leading-relaxed text-[#5d6280]">{service.description}</p>
          <div className="pt-4">
            <WalstarButton variant="orange" href="/#footer-consultation">
              Book a Strategy Call
            </WalstarButton>
          </div>
        </div>
      </article>
    </DetailShell>
  );
}

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<PageLoadingSkeleton />}>
      <ServiceContent params={params} />
    </Suspense>
  );
}
