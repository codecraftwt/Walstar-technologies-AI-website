import Image from 'next/image';
import {
  cleanPill,
  renderHeadingParts,
  renderMultilineText,
  renderTextWithBreaks,
} from '@/components/common/SectionPrimitives';
import { WalstarButton } from '@/components/common/WalstarButton';
import {
  INTRO_VARIANT_CONFIGS,
  resolveIntroVariant,
} from '@/components/services/serviceVariants';
import { getStrapiMediaUrl } from '@/lib/strapi';
import type { SvcIntroSection } from '@/types/strapi';

/**
 * Reusable Service Intro section supporting all 5 service page variants
 * (AI Solutions, Custom Software, Digital Marketing, Web & SaaS, Mobile App).
 */
export function SvcIntroBlock({ section }: { section: SvcIntroSection }) {
  const variant = resolveIntroVariant(section);
  const config = INTRO_VARIANT_CONFIGS[variant];

  const strapiUrl = getStrapiMediaUrl(section.image?.url);
  const imageUrl = strapiUrl || config.defaultImage;
  const altText =
    section.image?.alternativeText ||
    (config.mode === 'ai'
      ? section.headingPrefix || 'Walstar Software Engineering'
      : config.defaultAlt);

  const prefix = section.headingPrefix?.trim() || '';
  const serif = section.headingSerif?.trim() || '';
  const suffix = section.headingSuffix?.trim() || '';

  const pillLabel = cleanPill(section.pill) || config.defaultPill;
  const headingContent = renderHeadingParts(
    prefix || config.defaultHeadingPrefix,
    serif || config.defaultHeadingSerif,
    suffix || config.defaultHeadingSuffix
  );

  if (config.mode === 'modern') {
    return (
      <section className="introduction-section sec intro svc-intro" aria-labelledby="introduction-title">
        <div className="page-container introduction-section__layout wrap">
          <div
            className="introduction-section__image svc-intro-ph ph"
            role="img"
            aria-label={altText}
          >
            <Image
              src={imageUrl}
              alt={altText}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="introduction-section__content svc-intro-copy">
            <span className="section-badge pill">{pillLabel}</span>
            <h2 className="introduction-section__title svc-heading" id="introduction-title">
              {headingContent}
            </h2>
            <p className="introduction-section__text lead svc-lead-desc">
              {section.description
                ? renderTextWithBreaks(section.description)
                : config.defaultDescription}
            </p>
            <WalstarButton
              variant="orange"
              href={section.ctaHref || config.defaultCtaHref}
              className="button button--primary"
            >
              {section.ctaLabel || config.defaultCtaLabel}
            </WalstarButton>
          </div>
        </div>
      </section>
    );
  }

  const isCustom = config.mode === 'custom';

  return (
    <section className={isCustom ? 'sec intro svc-intro--custom' : 'sec intro svc-intro service-intro-section'}>
      <div className={isCustom ? 'wrap' : 'wrap svc-intro-grid intro-grid service-intro-grid'}>
        <div
          className={isCustom ? 'ph' : 'svc-intro-ph ph service-intro-media'}
          role="img"
          aria-label={section.image?.alternativeText || section.pill || config.defaultAlt}
        >
          <Image
            src={imageUrl}
            alt={altText}
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
            className="object-cover"
            priority
          />
        </div>

        <div className={isCustom ? undefined : 'svc-intro-copy service-intro-copy'}>
          <span className="pill">{pillLabel}</span>
          <h2 className={isCustom ? undefined : 'svc-heading'}>{headingContent}</h2>
          {section.description ? (
            <p className={isCustom ? undefined : 'lead svc-lead-desc'}>
              {isCustom ? renderTextWithBreaks(section.description) : renderMultilineText(section.description)}
            </p>
          ) : isCustom ? (
            <p>{config.defaultDescription}</p>
          ) : null}
          {section.ctaLabel || isCustom ? (
            <WalstarButton variant="orange" href={section.ctaHref || config.defaultCtaHref}>
              {section.ctaLabel || config.defaultCtaLabel}
            </WalstarButton>
          ) : null}
        </div>
      </div>
    </section>
  );
}
