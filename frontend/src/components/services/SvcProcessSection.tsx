import {
  cleanPill,
  renderHeadingParts,
  renderMultilineText,
  renderTextWithBreaks,
} from '@/components/common/SectionPrimitives';
import { WalstarButton } from '@/components/common/WalstarButton';
import { resolveProcessVariant } from '@/components/services/serviceVariants';
import type { SvcProcessSection, SvcProcessStepItem } from '@/types/strapi';

function ProcessGridCard({ step }: { step: SvcProcessStepItem }) {
  return (
    <li className="process-card">
      <span className="process-card__number">{step.number}</span>
      <h3 className="process-card__title">{renderTextWithBreaks(step.title)}</h3>
      {step.description ? (
        <p className="process-card__description">{renderTextWithBreaks(step.description)}</p>
      ) : null}
    </li>
  );
}

/**
 * Reusable Service Process section supporting:
 * - 4-column numbered grid with trailing CTA card (Mobile App)
 * - 3-column numbered grid (Web & SaaS and Custom Software)
 * - 5-step horizontal timeline stepper (Digital Marketing & AI Solutions)
 */
export function SvcProcessBlock({ section }: { section: SvcProcessSection }) {
  const steps = section.steps ?? [];
  const variant = resolveProcessVariant(section);

  if (variant === 'mobile-app' || variant === 'web-saas') {
    const isFourCols = variant === 'mobile-app';
    const pillText = cleanPill(section.pill) || 'Process';
    const prefix =
      section.headingPrefix?.trim() ||
      (isFourCols ? 'Our Mobile App\n' : 'Our Web & SaaS Product\n');
    const serif = section.headingSerif?.trim() || 'Development Process';

    return (
      <section className="process-section" aria-labelledby="process-title">
        <div className="page-container wrap">
          <div className="section-heading hd2">
            <span className="section-badge pill">{pillText}</span>
            <h2 className="section-heading__title svc-heading" id="process-title">
              {renderHeadingParts(prefix, serif, section.headingSuffix)}
            </h2>
          </div>
          <ol
            className={
              isFourCols
                ? 'process-card-grid process-card-grid--four-columns'
                : 'process-card-grid'
            }
          >
            {steps.map((step, idx) => (
              <ProcessGridCard key={`${step.number}-${step.id ?? idx}`} step={step} />
            ))}
            {isFourCols ? (
              <li className="process-card process-card--call-to-action">
                <h3 className="process-card__title">
                  {renderTextWithBreaks(section.ctaCard?.title || 'Ready to Launch\n Your Mobile App?')}
                </h3>
                <p className="process-card__description">
                  {renderTextWithBreaks(
                    section.ctaCard?.description ||
                      'Turn your idea into a powerful\n mobile app built for your\n business goals.'
                  )}
                </p>
                <WalstarButton
                  variant="orange"
                  href={section.ctaCard?.ctaHref || '#contact'}
                  className="button button--primary"
                >
                  {section.ctaCard?.ctaLabel || 'Have an App Idea? ↗'}
                </WalstarButton>
              </li>
            ) : null}
          </ol>
        </div>
      </section>
    );
  }

  if (variant === 'digital-marketing') {
    const pillText = cleanPill(section.pill) || 'How we work';
    return (
      <section className="process-section" aria-labelledby="process-title">
        <div className="page-container">
          <div className="section-heading hd2">
            <span className="section-badge pill">{pillText}</span>
            <h2 className="section-heading__title svc-heading" id="process-title">
              {renderHeadingParts(
                section.headingPrefix?.trim() || 'Our Digital Marketing',
                section.headingSerif?.trim() || 'Process',
                section.headingSuffix
              )}
            </h2>
          </div>
          <ol className="process-timeline">
            {steps.map((step, idx) => (
              <li key={`${step.number}-${step.id ?? idx}`} className="process-step">
                <span className="process-step__number">{step.number}</span>
                <div className="process-step__card">
                  <h3 className="process-step__title">{renderTextWithBreaks(step.title)}</h3>
                  {step.description ? (
                    <p className="process-step__description">{renderTextWithBreaks(step.description)}</p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  if (variant === 'custom-software') {
    const pillText = cleanPill(section.pill) || 'Process';
    return (
      <section className="pr6">
        <div className="hd2" style={{ margin: 0 }}>
          <span className="pill">{pillText}</span>
          <h2>
            {renderHeadingParts(
              section.headingPrefix?.trim() || 'Our Custom Software',
              section.headingSerif?.trim() || 'Development Process',
              section.headingSuffix
            )}
          </h2>
        </div>

        <div className="g6">
          {steps.map((step, idx) => (
            <article key={`${step.number}-${step.id ?? idx}`} className="pc6">
              <b>{step.number}</b>
              <h4>{renderTextWithBreaks(step.title)}</h4>
              {step.description ? <p>{renderTextWithBreaks(step.description)}</p> : null}
            </article>
          ))}
        </div>
      </section>
    );
  }

  const pillText = cleanPill(section.pill) || 'Process';
  return (
    <section className="svc-pr service-process-stepper-section">
      <div className="wrap">
        <div className="hd2 service-heading-block" style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="pill">{pillText}</span>
          <h2 className="svc-heading" style={{ textAlign: 'center' }}>
            {renderHeadingParts(
              section.headingPrefix?.trim() || 'Our AI Development &',
              section.headingSerif?.trim() || 'Automation Process',
              section.headingSuffix
            )}
          </h2>
        </div>

        {steps.length > 0 ? (
          <div className="svc-p5 service-process-stepper-5">
            {steps.map((step, idx) => (
              <div key={`${step.number}-${step.id ?? idx}`} className="svc-pn service-process-step-item">
                <b className="svc-pn-number">{step.number}</b>
                <div className="service-process-card svc-pn-card">
                  <h4 className="svc-pn-title">{step.title}</h4>
                  {step.description ? (
                    <p className="svc-pn-desc">{renderMultilineText(step.description)}</p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
