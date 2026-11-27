import {
  cleanPill,
  renderHeadingParts,
  renderTextWithBreaks,
} from '@/components/common/SectionPrimitives';
import { WalstarButton } from '@/components/common/WalstarButton';
import { renderNamedSvgIcon } from '@/components/services/ServiceIcons';
import { resolveCapabilitiesVariant } from '@/components/services/serviceVariants';
import type { SvcCapabilitiesSection, SvcCapabilityItem } from '@/types/strapi';

function TaggedCapabilityCard({
  item,
  index,
  roomy,
}: {
  item: SvcCapabilityItem;
  index: number;
  roomy: boolean;
}) {
  return (
    <li className={roomy ? 'capability-card capability-card--roomy' : 'capability-card'}>
      {item.tag ? <span className="capability-card__tag">{item.tag}</span> : null}
      <span className="capability-card__icon" aria-hidden="true">
        {renderNamedSvgIcon(item.icon, index, item.title)}
      </span>
      <h3 className="capability-card__title">{renderTextWithBreaks(item.title)}</h3>
      {item.description ? (
        <p className="capability-card__description">{renderTextWithBreaks(item.description)}</p>
      ) : null}
    </li>
  );
}

function DarkSurfaceCapabilityCard({
  item,
  index,
  totalCount,
}: {
  item: SvcCapabilityItem;
  index: number;
  totalCount: number;
}) {
  const hasCta = Boolean(item.ctaLabel || item.isDark);
  const isWideCta =
    hasCta &&
    (totalCount === 11 || item.title.toLowerCase().includes('accelerate your digital growth'));

  if (isWideCta) {
    return (
      <article className="svc-cap-card svc-cap-card--cta-wide">
        <h3 className="svc-cap-card__title">{renderTextWithBreaks(item.title)}</h3>
        {item.description ? (
          <p className="svc-cap-card__subtitle">{renderTextWithBreaks(item.description)}</p>
        ) : null}
        <WalstarButton variant="orange" href={item.ctaHref || '#contact-form'}>
          {item.ctaLabel || 'Get Started ↗'}
        </WalstarButton>
      </article>
    );
  }

  if (hasCta) {
    return (
      <article className="svc-cap-card svc-cap-card--cta">
        <h3 className="svc-cap-card__title">{renderTextWithBreaks(item.title)}</h3>
        {item.description ? (
          <p className="svc-cap-card__desc svc-cap-card__desc--cta">
            {renderTextWithBreaks(item.description)}
          </p>
        ) : null}
        <WalstarButton variant="orange" href={item.ctaHref || '#contact-form'}>
          {item.ctaLabel || 'Discuss Your Project ↗'}
        </WalstarButton>
      </article>
    );
  }

  return (
    <article className="svc-cap-card">
      <span className="svc-cap-card__icon" aria-hidden="true">
        {renderNamedSvgIcon(item.icon, index, item.title)}
      </span>
      <h3 className="svc-cap-card__title">{renderTextWithBreaks(item.title)}</h3>
      {item.description ? (
        <p className="svc-cap-card__desc">{renderTextWithBreaks(item.description)}</p>
      ) : null}
    </article>
  );
}

/**
 * Reusable Service Capabilities Grid supporting:
 * - Tagged 3-column roomy layout (Mobile App)
 * - Tagged 4-column layout (Web & SaaS)
 * - Dark surface 4-column card grid with optional CTA cards (AI Solutions, Custom Software, Digital Marketing)
 */
export function SvcCapabilitiesBlock({ section }: { section: SvcCapabilitiesSection }) {
  const incomingItems = section.capabilityItems ?? [];
  const pillText = cleanPill(section.pill) || 'Capabilities';
  const variant = resolveCapabilitiesVariant(section);
  const isTagged = variant === 'mobile-app' || variant === 'web-saas';

  if (isTagged) {
    const isThreeCols = variant === 'mobile-app';
    const prefix =
      section.headingPrefix?.trim() ||
      (isThreeCols
        ? 'Mobile App Solutions Designed\n Around '
        : 'Web & SaaS Solutions\n Designed for ');
    const serif = section.headingSerif?.trim() || 'Your Business';
    const suffix = section.headingSuffix?.trim() || '';

    return (
      <section className="capabilities-section" aria-labelledby="capabilities-title">
        <div className="section-heading">
          <span className="section-badge pill">{pillText}</span>
          <h2 className="section-heading__title capabilities-section__title svc-heading" id="capabilities-title">
            {renderHeadingParts(prefix, serif, suffix)}
          </h2>
          {section.description ? (
            <p className="capabilities-section__description">
              {renderTextWithBreaks(section.description)}
            </p>
          ) : null}
        </div>
        <ul
          className={
            isThreeCols
              ? 'capability-card-grid capability-card-grid--three-columns'
              : 'capability-card-grid'
          }
        >
          {incomingItems.map((item, idx) => (
            <TaggedCapabilityCard
              key={`${item.title}-${item.id ?? idx}`}
              item={item}
              index={idx}
              roomy={isThreeCols}
            />
          ))}
        </ul>
      </section>
    );
  }

  const prefix = section.headingPrefix?.trim() || 'What we';
  const serif = section.headingSerif?.trim() || 'Build';
  const suffix = section.headingSuffix?.trim() || '';

  return (
    <section className="wwd svc-capabilities-wwd" aria-label={pillText}>
      <div className="wwd-inner">
        <div className="head capabilities-header">
          <span className="pill">{pillText}</span>
          <h2 className="wwd-heading">{renderHeadingParts(prefix, serif, suffix)}</h2>
          {section.description ? (
            <p className="wwd-subtitle">{renderTextWithBreaks(section.description)}</p>
          ) : null}
        </div>

        <div className="wrap svc-capabilities-grid service-capabilities-grid">
          {incomingItems.map((item, idx) => (
            <DarkSurfaceCapabilityCard
              key={`${item.title}-${item.id ?? idx}`}
              item={item}
              index={idx}
              totalCount={incomingItems.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
