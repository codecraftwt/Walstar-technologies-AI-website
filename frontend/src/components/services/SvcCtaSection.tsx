import {
  cleanPill,
  renderHeadingParts,
  renderMultilineText,
  renderTextWithBreaks,
} from '@/components/common/SectionPrimitives';
import { WalstarButton } from '@/components/common/WalstarButton';
import {
  resolveCtaVariant,
  type ServiceScreenVariant,
} from '@/components/services/serviceVariants';
import type { SvcCtaSection } from '@/types/strapi';

const CTA_DEFAULTS: Record<
  ServiceScreenVariant,
  {
    prefix: string;
    serif: string;
    bodyOne: string;
    ctaLabel: string;
    ctaHref: string;
    secondaryCtaLabel?: string;
    secondaryCtaHref?: string;
  }
> = {
  'mobile-app': {
    prefix: 'Have an Idea for a\n',
    serif: 'Mobile App?',
    bodyOne:
      "Let's turn your idea into a mobile experience that helps your business connect\n with customers, simplify operations, and create new opportunities for growth.",
    ctaLabel: 'Discuss Your Project ↗',
    ctaHref: '#contact',
    secondaryCtaLabel: 'Contact Our Team ↗',
    secondaryCtaHref: '#contact',
  },
  'web-saas': {
    prefix: 'Have an Idea for Your\n Next ',
    serif: 'Digital Product?',
    bodyOne:
      "Whether you're planning a new website, launching a SaaS startup, or improving an existing web application,\n Walstar Technologies can help turn your idea into a functional digital product.\n Let's discuss your vision, explore the possibilities, and plan the right development approach for your business.",
    ctaLabel: 'Discuss Your Project ↗',
    ctaHref: '#contact',
    secondaryCtaLabel: 'Contact Our Team ↗',
    secondaryCtaHref: '#contact',
  },
  'digital-marketing': {
    prefix: 'Ready to Turn Your Digital Presence Into',
    serif: 'Business Growth?',
    bodyOne:
      "Let's identify the right opportunities to improve your online visibility, reach your\ntarget audience, and generate more meaningful business inquiries.",
    ctaLabel: 'Discuss Your Growth Strategy ↗',
    ctaHref: '#contact',
  },
  'custom-software': {
    prefix: 'Ready to Build Software',
    serif: 'Around Your Business?',
    bodyOne:
      "Let's discuss your business challenges, understand your requirements, and explore<br class=\"d\"> how custom software can simplify your operations and support your growth.",
    ctaLabel: 'Discuss Your Software Project ↗',
    ctaHref: '#cta',
  },
  'ai-solutions': {
    prefix: 'Ready to Build Software',
    serif: 'Around Your Business?',
    bodyOne: '',
    ctaLabel: 'Discuss Your Software Project ↗',
    ctaHref: '#cta',
  },
};

/**
 * Reusable Service CTA banner supporting all 5 service screens
 * (single or dual actions, optional secondary copy).
 */
export function SvcCtaBlock({ section }: { section: SvcCtaSection }) {
  const variant = resolveCtaVariant(section);
  const defaults = CTA_DEFAULTS[variant];
  const pillText = cleanPill(section.pill) || "Let's Talk";
  const prefix = section.headingPrefix?.trim() || defaults.prefix;
  const serif = section.headingSerif?.trim() || defaults.serif;
  const suffix = section.headingSuffix?.trim() || '';

  if (variant === 'mobile-app' || variant === 'web-saas' || variant === 'digital-marketing') {
    const secondaryLabel = section.secondaryCtaLabel ?? defaults.secondaryCtaLabel;
    const secondaryHref = section.secondaryCtaHref ?? defaults.secondaryCtaHref;

    return (
      <section
        className="final-call-to-action-section svc-rd rd"
        aria-labelledby="final-call-to-action-title"
        id="contact"
      >
        <span className="section-badge pill">{pillText}</span>
        <h2 className="final-call-to-action-section__title svc-heading" id="final-call-to-action-title">
          {renderHeadingParts(prefix, serif, suffix)}
        </h2>
        <p className="final-call-to-action-section__text">
          {renderTextWithBreaks(section.bodyOne || defaults.bodyOne)}
        </p>
        {secondaryLabel ? (
          <div className="final-call-to-action-section__actions">
            <WalstarButton
              variant="orange"
              href={section.ctaHref || defaults.ctaHref}
              className="button button--primary"
            >
              {section.ctaLabel || defaults.ctaLabel}
            </WalstarButton>
            <a className="button button--outline-light" href={secondaryHref || '#contact'}>
              {secondaryLabel}
            </a>
          </div>
        ) : (
          <WalstarButton
            variant="orange"
            href={section.ctaHref || defaults.ctaHref}
            className="button button--primary"
          >
            {section.ctaLabel || defaults.ctaLabel}
          </WalstarButton>
        )}
      </section>
    );
  }

  if (variant === 'custom-software') {
    return (
      <section className="rd" id="cta">
        <span className="pill">{pillText}</span>
        <h2>{renderHeadingParts(prefix, serif, suffix)}</h2>
        <p>{renderTextWithBreaks(section.bodyOne || defaults.bodyOne)}</p>
        <WalstarButton variant="orange" href={section.ctaHref || defaults.ctaHref}>
          {section.ctaLabel || defaults.ctaLabel}
        </WalstarButton>
      </section>
    );
  }

  return (
    <section className="svc-rd rd service-cta-banner-section" id="cta">
      <div className="wrap svc-rd-inner service-cta-banner-inner">
        <span className="pill">{pillText}</span>
        <h2 className="svc-heading">
          <span className="svc-heading-row">
            {prefix}{' '}
            <span className="serif">{serif}</span>
            {suffix ? ` ${suffix}` : ''}
          </span>
        </h2>
        {section.bodyOne ? (
          <p className="svc-rd-desc">{renderMultilineText(section.bodyOne)}</p>
        ) : null}
        {section.bodyTwo ? (
          <p className="svc-rd-desc svc-rd-desc--secondary">
            {renderMultilineText(section.bodyTwo)}
          </p>
        ) : null}
        <WalstarButton variant="orange" href={section.ctaHref || defaults.ctaHref}>
          {section.ctaLabel || defaults.ctaLabel}
        </WalstarButton>
      </div>
    </section>
  );
}
