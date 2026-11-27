import {
  cleanPill,
  renderHeadingParts,
  renderMultilineText,
} from '@/components/common/SectionPrimitives';
import { renderChallengeIcon } from '@/components/services/ServiceIcons';
import type { SvcChallengeItem, SvcChallengesSection } from '@/types/strapi';

function ServiceChallengeCard({
  item,
  index,
}: {
  item: SvcChallengeItem;
  index: number;
}) {
  return (
    <div className="svc-chal-item service-challenge-card">
      <div className="svc-chal-icon" aria-hidden="true">
        {renderChallengeIcon(item.icon, index)}
      </div>
      <div className="svc-chal-text">
        <b className="svc-chal-title">{item.title}</b>
        {item.description ? (
          <span className="svc-chal-desc">{renderMultilineText(item.description)}</span>
        ) : null}
      </div>
    </div>
  );
}

/** Reusable Service Challenges split section. */
export function SvcChallengesBlock({ section }: { section: SvcChallengesSection }) {
  const items = section.challengeItems ?? [];
  const pillText = cleanPill(section.pill) || 'AI Solutions & Business Automation';
  const prefix = section.headingPrefix?.trim() || 'Turn everyday Business challenges';
  const serif = section.headingSerif?.trim() || 'Intelligent Solutions';
  const suffix = section.headingSuffix?.trim();

  return (
    <section className="sec svc-chal service-challenges-section">
      <div className="wrap svc-chal-grid service-challenges-grid">
        <div className="svc-chal-copy service-challenges-copy">
          <span className="pill">{pillText}</span>
          <h2 className="svc-heading">
            {renderHeadingParts(prefix, serif, suffix)}
          </h2>
          {section.bodyOne ? (
            <p className="svc-lead-desc">{renderMultilineText(section.bodyOne)}</p>
          ) : null}
          {section.bodyTwo ? (
            <p className="svc-lead-desc svc-lead-desc--spaced">
              {renderMultilineText(section.bodyTwo)}
            </p>
          ) : null}
        </div>

        {items.length > 0 ? (
          <div className="svc-chal-box service-challenges-box">
            {items.map((item, idx) => (
              <ServiceChallengeCard
                key={`${item.title}-${item.id ?? idx}`}
                item={item}
                index={idx}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
