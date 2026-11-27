import {
  cleanPill,
  renderHeadingParts,
  renderMultilineText,
  renderTextWithBreaks,
} from '@/components/common/SectionPrimitives';
import { renderNamedSvgIcon } from '@/components/services/ServiceIcons';
import { resolveBenefitsVariant } from '@/components/services/serviceVariants';
import type { SvcBenefitItem, SvcBenefitsSection } from '@/types/strapi';

function BenefitCardListItem({
  item,
  index,
  tall,
  passTitleToIcon,
}: {
  item: SvcBenefitItem;
  index: number;
  tall: boolean;
  passTitleToIcon: boolean;
}) {
  return (
    <li className={tall ? 'benefit-card benefit-card--tall' : 'benefit-card'}>
      <div className="benefit-card__icon-panel">
        {renderNamedSvgIcon(item.icon, index, passTitleToIcon ? item.title : undefined)}
      </div>
      <h3 className="benefit-card__title">{renderTextWithBreaks(item.title)}</h3>
      {item.description ? (
        <p className="benefit-card__description">{renderTextWithBreaks(item.description)}</p>
      ) : null}
    </li>
  );
}

/**
 * Reusable Service Benefits section supporting:
 * - 5-column card list (Digital Marketing, Web & SaaS, Mobile App)
 * - 2-column split grid with full-width dark highlight card (Custom Software)
 * - 5-column interactive dark-hover matrix (AI Solutions)
 */
export function SvcBenefitsBlock({ section }: { section: SvcBenefitsSection }) {
  const items = section.benefitItems ?? section.benefitCards ?? [];
  const pillText = cleanPill(section.pill) || 'Benefits';
  const variant = resolveBenefitsVariant(section);

  if (variant === 'mobile-app' || variant === 'web-saas' || variant === 'digital-marketing') {
    const isTall = variant === 'mobile-app' || variant === 'web-saas';
    const defaultPrefix =
      variant === 'mobile-app'
        ? 'Our Mobile App\n'
        : variant === 'web-saas'
          ? 'How Web & SaaS Development\n Helps Your '
          : 'How Digital Marketing Helps Your Business';
    const defaultSerif =
      variant === 'mobile-app'
        ? 'Development Process'
        : variant === 'web-saas'
          ? 'Business Grow'
          : 'Grow';

    return (
      <section className="benefits-section sec svc-benefits" aria-labelledby="benefits-title">
        <div className="page-container wrap">
          <div className="section-heading hd2">
            <span className="section-badge pill">{pillText}</span>
            <h2 className="section-heading__title svc-heading" id="benefits-title">
              {renderHeadingParts(
                section.headingPrefix?.trim() || defaultPrefix,
                section.headingSerif?.trim() || defaultSerif,
                section.headingSuffix
              )}
            </h2>
          </div>
          <ul className="benefit-card-list">
            {items.map((item, idx) => (
              <BenefitCardListItem
                key={`${item.title}-${item.id ?? idx}`}
                item={item}
                index={idx}
                tall={isTall}
                passTitleToIcon={isTall}
              />
            ))}
          </ul>
        </div>
      </section>
    );
  }

  if (variant === 'custom-software') {
    const regularItems = items.filter((it) => !it.isDark);
    const darkItem = items.find((it) => it.isDark);

    return (
      <section className="sec ben">
        <div className="wrap">
          <div>
            <span className="pill">{pillText}</span>
            <h2>
              {renderHeadingParts(
                section.headingPrefix?.trim() || 'How Custom Software',
                section.headingSerif?.trim() || 'Helps Your Business',
                section.headingSuffix
              )}
            </h2>
          </div>

          <div className="bg">
            {regularItems.map((item, idx) => (
              <article key={`${item.title}-${item.id ?? idx}`} className="bc">
                <i>{renderNamedSvgIcon(item.icon, idx)}</i>
                <h4>{renderTextWithBreaks(item.title)}</h4>
                {item.description ? <p>{renderTextWithBreaks(item.description)}</p> : null}
              </article>
            ))}

            {darkItem ? (
              <article className="dk2">
                <i>{renderNamedSvgIcon(darkItem.icon || 'net', 99)}</i>
                <div>
                  <h4>{renderTextWithBreaks(darkItem.title)}</h4>
                  {darkItem.description ? (
                    <p>{renderTextWithBreaks(darkItem.description)}</p>
                  ) : null}
                </div>
              </article>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="sec svc-benefits service-benefits-section">
      <div className="wrap">
        <div className="hd2 svc-benefits-head service-heading-block">
          <span className="pill">{pillText}</span>
          <h2 className="svc-heading">
            {renderHeadingParts(
              section.headingPrefix?.trim() || 'What an AI Automation do',
              section.headingSerif?.trim() || 'for Your Business?',
              section.headingSuffix
            )}
          </h2>
        </div>

        {items.length > 0 ? (
          <div className="svc-b5 service-benefits-grid-5">
            {items.map((item, idx) => (
              <article
                key={`${item.title}-${item.id ?? idx}`}
                className="svc-bn service-benefit-item"
              >
                <i className="svc-bn-icon" aria-hidden="true">
                  {renderNamedSvgIcon(item.icon, idx)}
                </i>
                <h4 className="svc-bn-title">{item.title}</h4>
                {item.description ? (
                  <p className="svc-bn-desc">{renderMultilineText(item.description)}</p>
                ) : null}
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
