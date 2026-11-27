import {
  cleanPill,
  renderHeadingParts,
  renderMultilineText,
  renderTextWithBreaks,
} from '@/components/common/SectionPrimitives';
import { renderNamedSvgIcon } from '@/components/services/ServiceIcons';
import { resolveApproachVariant } from '@/components/services/serviceVariants';
import type { SvcApproachSection, SvcGetItem } from '@/types/strapi';

function ChecklistColumn({
  items,
  offset,
  classNames,
  passTitleToIcon,
}: {
  items: SvcGetItem[];
  offset: number;
  classNames: { list: string; item: string; icon: string };
  passTitleToIcon: boolean;
}) {
  return (
    <ul className={classNames.list}>
      {items.map((item, idx) => (
        <li key={`${item.label}-${item.id ?? idx}`} className={classNames.item}>
          <span className={classNames.icon} aria-hidden="true">
            {renderNamedSvgIcon(item.icon, offset + idx, passTitleToIcon ? item.label : undefined)}
          </span>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Reusable Service Approach section supporting:
 * - Two-column header + two-column icon checklist (Web & SaaS, Mobile App, Custom Software)
 * - Split copy + single-column icon list (Digital Marketing)
 * - Split copy + dark deliverables box (AI Solutions)
 */
export function SvcApproachBlock({ section }: { section: SvcApproachSection }) {
  const getItems = section.getBoxItems ?? [];
  const pillText = cleanPill(section.pill) || 'Our Approach';
  const variant = resolveApproachVariant(section);

  if (variant === 'web-saas' || variant === 'mobile-app') {
    const midPoint = 4;
    const col1 = getItems.slice(0, midPoint);
    const col2 = getItems.slice(midPoint);

    return (
      <section className="approach-section sec ap" aria-labelledby="approach-title">
        <div className="page-container wrap">
          <div className="approach-section__header">
            <div>
              <span className="section-badge pill">{pillText}</span>
              <h2 className="approach-section__title svc-heading" id="approach-title">
                {renderHeadingParts(
                  section.headingPrefix?.trim() || 'Built for Performance,\n',
                  section.headingSerif?.trim() || 'Flexibility & Growth',
                  section.headingSuffix
                )}
              </h2>
            </div>
            <p className="approach-section__introduction">
              {section.bodyOne ? (
                renderTextWithBreaks(section.bodyOne)
              ) : (
                <>
                  A successful website or SaaS product needs more than attractive design. It
                  <br className="desktop-line-break" /> requires a strong technical foundation, a
                  smooth user experience, and the
                  <br className="desktop-line-break" /> flexibility to adapt as business needs
                  change.
                  <br className="desktop-line-break" /> At Walstar Technologies, we focus on building
                  digital products with:
                </>
              )}
            </p>
          </div>
          <div className="approach-checklist">
            <ChecklistColumn
              items={col1}
              offset={0}
              passTitleToIcon
              classNames={{
                list: 'approach-checklist__column',
                item: 'approach-checklist-item',
                icon: 'approach-checklist-item__icon',
              }}
            />
            <ChecklistColumn
              items={col2}
              offset={midPoint}
              passTitleToIcon
              classNames={{
                list: 'approach-checklist__column',
                item: 'approach-checklist-item',
                icon: 'approach-checklist-item__icon',
              }}
            />
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'digital-marketing') {
    return (
      <section className="growth-strategy-section sec ap" aria-labelledby="growth-strategy-title">
        <div className="page-container growth-strategy-section__layout wrap ap-container">
          <div className="growth-strategy-section__content">
            <span className="section-badge pill">
              {cleanPill(section.pill) || 'Your goals first'}
            </span>
            <h2 className="split-heading__title svc-heading" id="growth-strategy-title">
              {renderHeadingParts(
                section.headingPrefix?.trim() || 'Digital Growth Strategies Tailored to',
                section.headingSerif?.trim() || 'Your Business',
                section.headingSuffix
              )}
            </h2>
            {section.bodyOne ? (
              <p className="growth-strategy-section__paragraph">
                {renderTextWithBreaks(section.bodyOne)}
              </p>
            ) : (
              <>
                <p className="growth-strategy-section__paragraph">
                  Every business has different audiences, competition, budgets, and growth
                  <br className="desktop-line-break" /> objectives. We develop digital marketing
                  strategies around your specific
                  <br className="desktop-line-break" /> needs rather than applying the same approach
                  to every business.
                </p>
                <p className="growth-strategy-section__paragraph">
                  Whether you want to improve organic search rankings, increase qualified
                  <br className="desktop-line-break" /> inquiries, strengthen AI-search visibility,
                  or get more value from paid
                  <br className="desktop-line-break" /> campaigns, we help identify practical
                  opportunities and build a strategy
                  <br className="desktop-line-break" /> aligned with your goals.
                </p>
                <p className="growth-strategy-section__paragraph">
                  Our approach emphasizes useful content, sound technical foundations,
                  <br className="desktop-line-break" /> relevant audience targeting, transparent
                  reporting, and continuous
                  <br className="desktop-line-break" /> improvement.
                </p>
              </>
            )}
            {section.bodyTwo ? (
              <p className="growth-strategy-section__paragraph" style={{ marginTop: 16 }}>
                {renderTextWithBreaks(section.bodyTwo)}
              </p>
            ) : null}
          </div>
          <ChecklistColumn
            items={getItems}
            offset={0}
            passTitleToIcon={false}
            classNames={{
              list: 'growth-principle-list',
              item: 'growth-principle',
              icon: 'growth-principle__icon',
            }}
          />
        </div>
      </section>
    );
  }

  if (variant === 'custom-software') {
    const midPoint = Math.ceil(getItems.length / 2);
    const col1 = getItems.slice(0, midPoint);
    const col2 = getItems.slice(midPoint);

    return (
      <section className="sec ap">
        <div className="wrap">
          <div className="top">
            <div>
              <span className="pill">{pillText}</span>
              <h2>
                {renderHeadingParts(
                  section.headingPrefix?.trim() || 'Software Designed Around',
                  section.headingSerif?.trim() || 'Your Business Requirements',
                  section.headingSuffix
                )}
              </h2>
            </div>
            <p>
              {section.bodyOne ? (
                renderTextWithBreaks(section.bodyOne)
              ) : (
                <>
                  We believe business software should solve real operational challenges rather
                  <br className="d" /> than force your team to change the way everything works.
                  <br className="d" /> Our approach focuses on understanding your requirements and
                  building
                  <br className="d" /> solutions that are practical, reliable, and adaptable.
                </>
              )}
            </p>
          </div>

          <div className="lists">
            <div className="col">
              {col1.map((item, idx) => (
                <div key={`${item.label}-${item.id ?? idx}`} className="it">
                  <i>{renderNamedSvgIcon(item.icon, idx)}</i>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="col">
              {col2.map((item, idx) => (
                <div key={`${item.label}-${item.id ?? idx}`} className="it">
                  <i>{renderNamedSvgIcon(item.icon, midPoint + idx)}</i>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="sec svc-appr service-approach-section">
      <div className="wrap svc-appr-grid service-approach-grid">
        <div className="svc-appr-copy service-approach-copy">
          <span className="pill">{pillText}</span>
          <h2 className="svc-heading">
            {renderHeadingParts(
              section.headingPrefix?.trim() || 'AI Solutions Built Around',
              section.headingSerif?.trim() || 'Your Business',
              section.headingSuffix
            )}
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

        {section.getBoxTitle || getItems.length > 0 ? (
          <div className="svc-get service-deliverables-box">
            {section.getBoxTitle ? (
              <h4 className="svc-get-title">{section.getBoxTitle}</h4>
            ) : null}
            {getItems.map((item, idx) => (
              <div key={`${item.label}-${item.id ?? idx}`} className="svc-get-item service-deliverable-item">
                <i className="svc-get-icon" aria-hidden="true">✓</i>
                <span className="svc-get-label">{item.label}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
