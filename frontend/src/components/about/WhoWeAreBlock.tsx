import Image from 'next/image';
import Link from 'next/link';
import { cleanPill } from '@/components/common/SectionPrimitives';
import { WalstarButtonArrow } from '@/components/common/WalstarButton';
import { getStrapiMediaUrl, STRAPI_IMAGE_PLACEHOLDER } from '@/lib/strapi';
import type { WhoWeAreSection } from '@/types/strapi';

export function WhoWeAreBlock({ section }: { section: WhoWeAreSection }) {
  const imageUrl = getStrapiMediaUrl(section.image?.url) || STRAPI_IMAGE_PLACEHOLDER;
  const rawPill = section.pill || 'Who we are';
  const pillText = cleanPill(rawPill) || 'Who we are';
  const prefix = section.headingPrefix?.trim() || 'A trusted partner for';
  const serif = section.headingSerif || 'what’s next';

  return (
    <section className="w-full bg-white py-12 md:py-16" id="who-we-are">
      <div className="section-container-80 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div
          className="relative min-h-[260px] w-full overflow-hidden rounded-2xl bg-[#f1f3f6] md:min-h-[380px]"
          role={imageUrl ? undefined : 'img'}
          aria-label={imageUrl ? undefined : pillText}
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={section.image?.alternativeText || pillText}
              fill
              sizes="(max-width: 900px) 100vw, (max-width: 1920px) 696px, 696px"
              priority
              className="object-cover"
            />
          ) : null}
        </div>

        <div className="flex flex-col items-start gap-4">
          <span className="section-pill">{pillText}</span>
          <h2 className="section-heading">
            <span className="block">{prefix}</span>
            <span className="block">
              <span className="section-heading-serif">{serif}</span>
              {section.headingSuffix ? (
                <span>{` ${section.headingSuffix}`}</span>
              ) : null}
            </span>
          </h2>
          {section.description ? (
            <div className="section-description mt-1 flex flex-col gap-3">
              {section.description
                .split('\n')
                .map((para) => para.trim())
                .filter(Boolean)
                .map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
            </div>
          ) : null}
          {section.ctaLabel ? (
            <Link
              className="mt-2 inline-flex items-center gap-2.5 rounded-full bg-[#364e9c] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2a3e7d]"
              href={section.ctaHref || '/service-1'}
            >
              <i aria-hidden="true" className="inline-flex items-center justify-center">
                <WalstarButtonArrow />
              </i>
              <span>{section.ctaLabel.replace(/\s*[↗→]\s*$/, '')}</span>
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
