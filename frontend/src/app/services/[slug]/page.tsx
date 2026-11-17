import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { DetailShell } from '@/components/DetailShell';
import { WalstarButton } from '@/components/WalstarButton';
import { PageSectionsRenderer } from '@/components/PageSectionsRenderer';
import { getResolvedPageBySlug, getServiceBySlug, getStrapiMediaUrl } from '@/lib/strapi';

async function ServiceContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  // If this service has full Page Dynamic Zone sections (e.g. service-1, service-2 / custom-software-development), render PageSectionsRenderer
  const pageLookupSlug =
    decodedSlug === 'ai-solutions-business-automation' || decodedSlug === 'service-1'
      ? 'service-1'
      : decodedSlug === 'custom-software-development' || decodedSlug === 'service-2'
      ? 'service-2'
      : decodedSlug;

  const { data: pageData, source } = await getResolvedPageBySlug(pageLookupSlug);
  if (
    pageData &&
    pageData.page?.sections &&
    pageData.page.sections.length > 0 &&
    (decodedSlug === 'ai-solutions-business-automation' ||
      decodedSlug === 'service-1' ||
      decodedSlug === 'custom-software-development' ||
      decodedSlug === 'service-2' ||
      pageData.page.pageType === 'service')
  ) {
    return <PageSectionsRenderer data={pageData} source={source} />;
  }

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
    <Suspense fallback={<div className="h-72 animate-pulse rounded-2xl bg-zinc-200" />}>
      <ServiceContent params={params} />
    </Suspense>
  );
}
