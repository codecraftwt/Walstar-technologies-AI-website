import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import { Suspense } from 'react';
import { DetailShell } from '@/components/common/DetailShell';
import { PageLoadingSkeleton } from '@/components/common/PageLoadingSkeleton';
import { WalstarButton } from '@/components/common/WalstarButton';
import { PageSectionsRenderer } from '@/components/page-renderer/PageSectionsRenderer';
import {
  CANONICAL_SERVICE_PAGE_SLUGS,
  resolveCanonicalServiceSlug,
} from '@/lib/cms-routes';
import { getResolvedPageBySlug, getServiceBySlug, getStrapiMediaUrl } from '@/lib/strapi';

async function ServiceContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug).trim();

  const canonicalSlug = resolveCanonicalServiceSlug(decodedSlug);
  if (canonicalSlug && canonicalSlug !== decodedSlug) {
    redirect(`/services/${encodeURIComponent(canonicalSlug)}`);
  }

  // Dynamically resolve full Page Dynamic Zone sections matching the exact slug stored in Strapi
  const { data: pageData, source } = await getResolvedPageBySlug(decodedSlug);
  if (
    pageData &&
    pageData.page?.sections &&
    pageData.page.sections.length > 0 &&
    (pageData.page.pageType === 'service' || CANONICAL_SERVICE_PAGE_SLUGS.has(decodedSlug))
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
    <DetailShell backHref="/services" backLabel="← Back to Services">
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
