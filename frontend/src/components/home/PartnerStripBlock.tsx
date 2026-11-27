import type { CSSProperties } from 'react';
import Image from 'next/image';
import { getStrapiMediaUrl } from '@/lib/strapi';
import type { PartnerLogo, PartnerStripSection } from '@/types/strapi';

const DEFAULT_MARQUEE_SECONDS = 24;
const MIN_MARQUEE_SECONDS = 4;
const MAX_MARQUEE_SECONDS = 120;

function getPartnerLogoFallback(name?: string | null): string | null {
  if (!name) return null;
  const s = name.toLowerCase();
  if (s.includes('bigcommerce')) return '/images/partners/bigcommerce.png';
  if (s.includes('shopify')) return '/images/partners/shopify.png';
  if (s.includes('blacksmith')) return '/images/partners/blacksmith.png';
  if (s.includes('razorpay')) return '/images/partners/razorpay.png';
  if (s.includes('certified')) return '/images/partners/certified.png';
  if (s.includes('clutch')) return '/images/partners/clutch.png';
  return null;
}

function PartnerLogoContent({
  logo,
  imgClassName,
  textClassName,
}: {
  logo: PartnerLogo;
  imgClassName: string;
  textClassName?: string;
}) {
  const imgUrl = getStrapiMediaUrl(logo.image?.url) || getPartnerLogoFallback(logo.name);
  if (imgUrl) {
    return (
      <Image
        src={imgUrl}
        alt={logo.image?.alternativeText || logo.name}
        fill
        sizes="160px"
        className={imgClassName}
      />
    );
  }

  return <span className={textClassName}>{logo.name}</span>;
}

export function PartnerStripBlock({ section }: { section: PartnerStripSection }) {
  const logos = section.logos ?? [];
  if (logos.length === 0) return null;

  const rawSeconds = section.animationDurationSeconds;
  const durationSeconds =
    typeof rawSeconds === 'number' && Number.isFinite(rawSeconds)
      ? Math.min(MAX_MARQUEE_SECONDS, Math.max(MIN_MARQUEE_SECONDS, rawSeconds))
      : DEFAULT_MARQUEE_SECONDS;
  const directionClass =
    section.scrollDirection === 'right' ? 'is-right' : 'is-left';

  const repeatCount = logos.length < 14 ? Math.ceil(14 / logos.length) : 1;
  const groupLogos = Array.from({ length: repeatCount }, () => logos).flat();

  return (
    <div className="w-full overflow-hidden">
      <div className="relative w-full max-w-full py-9 mx-auto overflow-hidden" aria-label={section.ariaLabel || 'Partners'}>
        <div
          className={`partner-marquee-track flex w-max items-center ${directionClass}`}
          style={
            {
              '--partner-marquee-duration': `${durationSeconds}s`,
            } as CSSProperties
          }
        >
          {[0, 1].map((copyIdx) => (
            <div
              key={copyIdx}
              className="flex shrink-0 items-center gap-10 md:gap-14 pr-10 md:pr-14"
              aria-hidden={copyIdx === 1 ? true : undefined}
            >
              {groupLogos.map((logo, idx) => (
                <div
                  key={`${copyIdx}-${logo.id ?? logo.name}-${idx}`}
                  className="relative h-8 w-28 md:h-10 md:w-36 shrink-0 flex items-center justify-center"
                >
                  <PartnerLogoContent
                    logo={logo}
                    imgClassName="object-contain"
                    textClassName="text-sm font-semibold text-gray-500"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div
        className="section-container-90 h-px bg-gray-200"
        aria-hidden="true"
        role="separator"
      />
    </div>
  );
}
