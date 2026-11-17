import Image from 'next/image';
import { WalstarButton } from '@/components/WalstarButton';
import {
  renderHeadingParts,
  renderMultilineText,
} from '@/components/SectionPrimitives';
import { getStrapiMediaUrl } from '@/lib/strapi';
import type {
  SvcIntroSection,
  SvcChallengesSection,
  SvcCapabilitiesSection,
  SvcCapabilityItem,
  SvcBenefitsSection,
  SvcProcessSection,
  SvcApproachSection,
  SvcCtaSection,
} from '@/types/strapi';

/* ─── Vector Icons Matching Exact Reference SVG Symbols ───────────────── */
export function SvgLayersIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l9 5-9 5-9-5zM3 12l9 5 9-5M3 16l9 5 9-5" />
    </svg>
  );
}

export function SvgUsersIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c0-4 3-6 6.5-6s6.5 2 6.5 6M16 5a3.5 3.5 0 010 7M18 14c2.5.6 4 2.5 4 6" />
    </svg>
  );
}

export function SvgBoxIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l8 4v10l-8 4-8-4V7zM4 7l8 4 8-4M12 11v10" />
    </svg>
  );
}

export function SvgFlowIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
    </svg>
  );
}

export function SvgGridIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
    </svg>
  );
}

export function SvgPlugIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 01-12 0zM12 17v4" />
    </svg>
  );
}

export function SvgBarsIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="12" width="4" height="8" rx="1" />
      <rect x="10" y="4" width="4" height="16" rx="1" />
      <rect x="16" y="9" width="4" height="11" rx="1" />
    </svg>
  );
}

export function SvgTargetIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  );
}

export function SvgSlidersIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 7h10M17 7h4M3 17h4M11 17h10" />
      <circle cx="15" cy="7" r="2" />
      <circle cx="9" cy="17" r="2" />
    </svg>
  );
}

export function SvgBoltIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2L5 14h6l-1 8 8-12h-6z" />
    </svg>
  );
}

export function SvgDbIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.7 3 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3 3 7 3s7-1.3 7-3" />
    </svg>
  );
}

export function SvgNetIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="2.5" />
      <circle cx="5" cy="5" r="2" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <path d="M7 7l3 3M17 7l-3 3M7 17l3-3M17 17l-3-3" />
    </svg>
  );
}

export function SvgShieldIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
      <path d="M8.5 12l2.5 2.5L16 9.5" />
    </svg>
  );
}

export function SvgMonitorIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  );
}

export function SvgHeadsetIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 14v-2a8 8 0 0116 0v2" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M19 19c0 2-3 2-7 2" />
    </svg>
  );
}

export function renderNamedSvgIcon(name?: string | null, index = 0): React.ReactNode {
  const key = name?.toLowerCase().trim() || '';
  if (key === 'layers' || key.includes('erp') || (index === 0 && !name)) return <SvgLayersIcon />;
  if (key === 'users' || key.includes('crm') || index === 1) return <SvgUsersIcon />;
  if (key === 'box' || key.includes('inventory') || index === 2) return <SvgBoxIcon />;
  if (key === 'flow' || key.includes('workflow') || index === 3) return <SvgFlowIcon />;
  if (key === 'grid' || key.includes('application') || index === 4) return <SvgGridIcon />;
  if (key === 'plug' || key.includes('integration') || index === 5) return <SvgPlugIcon />;
  if (key === 'bars' || key.includes('reporting') || index === 6) return <SvgBarsIcon />;
  if (key === 'target' || key.includes('customer')) return <SvgTargetIcon />;
  if (key === 'sliders' || key.includes('operation')) return <SvgSlidersIcon />;
  if (key === 'bolt' || key.includes('productiv')) return <SvgBoltIcon />;
  if (key === 'db' || key.includes('database') || key.includes('centralize')) return <SvgDbIcon />;
  if (key === 'net' || key.includes('network') || key.includes('connect') || key.includes('architecture')) return <SvgNetIcon />;
  if (key === 'shield' || key.includes('security') || key.includes('access')) return <SvgShieldIcon />;
  if (key === 'monitor' || key.includes('interface') || key.includes('ui')) return <SvgMonitorIcon />;
  if (key === 'head' || key.includes('support') || key.includes('maintenance')) return <SvgHeadsetIcon />;
  return <SvgLayersIcon />;
}

/* ─── Challenge SVGs for Service 1 ───────────────────────────────────── */
function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14" />
    </svg>
  );
}

function WorkflowNodesIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M8.5 6h7M7.5 8.2l3 7.6M16.5 8.2l-3 7.6" />
    </svg>
  );
}

function HexNetworkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.5 19.5 6.8v8.6L12 19.8 4.5 15.4V6.8z" />
      <path d="M12 2.5v17.3M4.5 6.8 19.5 15.4M19.5 6.8 4.5 15.4" opacity="0.6" />
      <circle cx="12" cy="11.2" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function UserProcessIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="7" r="3.5" />
      <path d="M6 19c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <rect x="4" y="19" width="16" height="2" rx="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function renderChallengeIcon(icon?: string | null, index = 0) {
  if (icon === 'clock' || icon === '◷' || index === 0) return <ClockIcon />;
  if (icon === 'gear' || icon === '⚙' || index === 1) return <WorkflowNodesIcon />;
  if (icon === 'data' || icon === '✲' || index === 2) return <HexNetworkIcon />;
  if (icon === 'user' || icon === '☻' || index === 3) return <UserProcessIcon />;
  return <ClockIcon />;
}

export function cleanPill(text?: string | null): string {
  if (!text) return '';
  return text.replace(/^[●•\s\u25CF\u2022]+/, '').trim();
}

/* ─── Service Intro ──────────────────────────────────────────────────── */
export function SvcIntroBlock({ section }: { section: SvcIntroSection }) {
  // If Strapi media provided, use it; otherwise fallback to default placeholder
  const strapiUrl = getStrapiMediaUrl(section.image?.url);
  const prefix = section.headingPrefix?.trim() || '';
  const serif = section.headingSerif?.trim() || '';
  const suffix = section.headingSuffix?.trim() || '';

  const isCustomSoftware =
    serif.includes('Custom Software') ||
    prefix.includes('Custom Software') ||
    suffix.includes('Business Works');

  const defaultImage = isCustomSoftware
    ? '/images/placeholder.png'
    : '/images/service-team-ai.png';

  const imageUrl = strapiUrl || defaultImage;

  // Check if standard copy matches reference image to guarantee exact multi-row wrapping
  const isService1ReferenceCopy =
    prefix === 'AI Agents and Automation that cut' &&
    serif === 'Manual Work';

  return (
    <section className="sec intro svc-intro">
      <div className="wrap svc-intro-grid intro-grid">
        <div
          className="svc-intro-ph ph"
          role="img"
          aria-label={section.image?.alternativeText || section.pill || 'Developer typing on a laptop'}
        >
          <Image
            src={imageUrl}
            alt={section.image?.alternativeText || section.headingPrefix || 'Walstar Software Engineering'}
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="svc-intro-copy">
          {section.pill ? (
            <span className="pill">
              {cleanPill(section.pill)}
            </span>
          ) : (
            <span className="pill">
              {isCustomSoftware ? 'Designed to Scale' : 'AI Solutions & Business Automation'}
            </span>
          )}

          {isCustomSoftware ? (
            <h2 className="svc-heading">
              <span className="svc-heading-row">
                Build <span className="serif">Custom Software</span> That
              </span>
              <span className="svc-heading-row">Works the Way Your Business</span>
              <span className="svc-heading-row">Works</span>
            </h2>
          ) : isService1ReferenceCopy ? (
            <h2 className="svc-heading">
              <span className="svc-heading-row">AI Agents and Automation that cut</span>
              <span className="svc-heading-row">
                <span className="serif">Manual Work</span> and bring in
              </span>
              <span className="svc-heading-row">more Leads</span>
            </h2>
          ) : (
            <h2 className="svc-heading">
              {renderHeadingParts(prefix, serif, suffix)}
            </h2>
          )}

          {section.description ? (
            <p className="lead svc-lead-desc">{renderMultilineText(section.description)}</p>
          ) : null}

          {section.ctaLabel ? (
            <WalstarButton variant="orange" href={section.ctaHref || '#cta'}>
              {section.ctaLabel}
            </WalstarButton>
          ) : isCustomSoftware ? (
            <WalstarButton variant="orange" href="#cta">
              Discuss Your Software Project ↗
            </WalstarButton>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/* ─── Service Challenges ─────────────────────────────────────────────── */
export function SvcChallengesBlock({ section }: { section: SvcChallengesSection }) {
  const items = section.challengeItems ?? [];
  const rawPill = section.pill || 'AI Solutions & Business Automation';
  const pillText = cleanPill(rawPill) || 'AI Solutions & Business Automation';
  const prefix = section.headingPrefix?.trim() || 'Turn everyday Business challenges';
  const serif = section.headingSerif?.trim() || 'Intelligent Solutions';
  const suffix = section.headingSuffix?.trim();

  const isReferenceCopy =
    prefix.includes('Turn everyday Business challenges') &&
    serif.includes('Intelligent Solutions');

  return (
    <section className="sec svc-chal">
      <div className="wrap svc-chal-grid">
        <div className="svc-chal-copy">
          <span className="pill">{pillText}</span>
          {isReferenceCopy ? (
            <h2 className="svc-heading">
              <span className="svc-heading-row">Turn everyday Business challenges</span>
              <span className="svc-heading-row">
                into <span className="serif">Intelligent Solutions</span>
              </span>
            </h2>
          ) : (
            <h2 className="svc-heading">
              {renderHeadingParts(prefix, serif, suffix)}
            </h2>
          )}
          {section.bodyOne ? (
            <p className="svc-lead-desc">{renderMultilineText(section.bodyOne)}</p>
          ) : null}
          {section.bodyTwo ? (
            <p className="svc-lead-desc" style={{ marginTop: 16 }}>
              {renderMultilineText(section.bodyTwo)}
            </p>
          ) : null}
        </div>

        {items.length > 0 ? (
          <div className="svc-chal-box">
            {items.map((item, idx) => (
              <div key={`${item.title}-${item.id ?? idx}`} className="svc-chal-item">
                <div className="svc-chal-icon" aria-hidden="true">
                  {renderChallengeIcon(item.icon, idx)}
                </div>
                <div className="svc-chal-text">
                  <b>{item.title}</b>
                  {item.description ? (
                    <span>{renderMultilineText(item.description)}</span>
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

/* ─── Service Capabilities ───────────────────────────────────────────── */
export function SvcCapabilitiesBlock({ section }: { section: SvcCapabilitiesSection }) {
  const incomingItems = section.capabilityItems ?? [];
  const rawPill = section.pill || 'Services';
  const pillText = cleanPill(rawPill) || 'Services';
  const prefix = section.headingPrefix?.trim() || 'Custom Software Solutions for';
  const serif = section.headingSerif?.trim() || 'Business Management';
  const suffix = section.headingSuffix?.trim() || '';

  const isCustomSoftware =
    serif.includes('Business Management') ||
    incomingItems.some((it) => it.isDark || it.icon === 'layers') ||
    Boolean(section.description);

  if (isCustomSoftware) {
    return (
      <section className="sol2 svc-cap-sol2">
        <div className="hd2">
          <span className="pill">{pillText}</span>
          <h2 className="svc-heading">
            <span className="svc-heading-row">Custom Software Solutions for</span>
            <span className="svc-heading-row">
              Better <span className="serif">Business Management</span>
            </span>
          </h2>
          {section.description ? (
            <p className="svc-sol2-desc">{renderMultilineText(section.description)}</p>
          ) : (
            <p className="svc-sol2-desc">
              Every business has its own processes, challenges, and operational requirements. Off-the-shelf software may not always provide the flexibility or functionality you need. Our custom software development services help businesses build applications that fit their workflows, connect their systems, and support their long-term goals.
            </p>
          )}
        </div>

        <div className="g8">
          {incomingItems.map((item, idx) => {
            if (item.isDark) {
              return (
                <article key={`${item.title}-${item.id ?? idx}`} className="sc2 dk">
                  <h4>{renderMultilineText(item.title)}</h4>
                  <WalstarButton variant="orange" href={item.ctaHref || '#cta'}>
                    {item.ctaLabel || 'Discuss Your Project ↗'}
                  </WalstarButton>
                </article>
              );
            }

            return (
              <article key={`${item.title}-${item.id ?? idx}`} className="sc2">
                <i>{renderNamedSvgIcon(item.icon, idx)}</i>
                <h4>{renderMultilineText(item.title)}</h4>
                {item.description ? <p>{renderMultilineText(item.description)}</p> : null}
              </article>
            );
          })}
        </div>
      </section>
    );
  }

  // Fallback to Service 1 Capabilities layout
  return (
    <section className="svc-cap">
      <div className="wrap">
        <div className="hd2" style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="pill">{pillText}</span>
          <h2 className="svc-heading" style={{ textAlign: 'center' }}>
            <span className="svc-heading-row">
              What we <span className="serif">Build</span>
            </span>
          </h2>
        </div>

        <div className="svc-c4">
          {incomingItems.map((item, idx) => (
            <article key={`${item.title}-${item.id ?? idx}`} className="svc-cc">
              <i aria-hidden="true">{renderNamedSvgIcon(item.icon, idx)}</i>
              <h4>{item.title}</h4>
              {item.description ? (
                <p>{renderMultilineText(item.description)}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Service Benefits ───────────────────────────────────────────────── */
export function SvcBenefitsBlock({ section }: { section: SvcBenefitsSection }) {
  const items = section.benefitItems ?? [];
  const rawPill = section.pill || 'Benefits';
  const pillText = cleanPill(rawPill) || 'Benefits';
  const prefix = section.headingPrefix?.trim() || 'How Custom Software';
  const serif = section.headingSerif?.trim() || 'Helps Your Business';
  const suffix = section.headingSuffix?.trim() || '';

  const isCustomSoftware =
    serif.includes('Helps Your Business') ||
    prefix.includes('Custom Software') ||
    items.some((it) => it.isDark && it.title.includes('Connect Your Existing Systems'));

  if (isCustomSoftware) {
    const regularItems = items.filter((it) => !it.isDark);
    const darkItem = items.find((it) => it.isDark);

    return (
      <section className="sec ben svc-benefits-custom">
        <div className="wrap ben-grid">
          <div className="ben-left">
            <span className="pill">{pillText}</span>
            <h2 className="svc-heading">
              <span className="svc-heading-row">How Custom Software</span>
              <span className="svc-heading-row">
                <span className="serif">Helps Your Business</span>
              </span>
            </h2>
          </div>

          <div className="bg ben-right-grid">
            {regularItems.map((item, idx) => (
              <article key={`${item.title}-${item.id ?? idx}`} className="bc">
                <i>{renderNamedSvgIcon(item.icon, idx)}</i>
                <h4>{renderMultilineText(item.title)}</h4>
                {item.description ? <p>{renderMultilineText(item.description)}</p> : null}
              </article>
            ))}

            {darkItem ? (
              <article className="dk2">
                <i>{renderNamedSvgIcon(darkItem.icon || 'net', 99)}</i>
                <div>
                  <h4>{darkItem.title}</h4>
                  {darkItem.description ? (
                    <p>{renderMultilineText(darkItem.description)}</p>
                  ) : null}
                </div>
              </article>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  // Service 1: 5-column layout
  return (
    <section className="sec svc-benefits">
      <div className="wrap">
        <div className="hd2" style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="pill">{pillText}</span>
          <h2 className="svc-heading" style={{ textAlign: 'center' }}>
            <span className="svc-heading-row">What an AI Automation do</span>
            <span className="svc-heading-row">
              <span className="serif">for Your Business?</span>
            </span>
          </h2>
        </div>

        {items.length > 0 ? (
          <div className="svc-b5">
            {items.map((item, idx) => (
              <article
                key={`${item.title}-${item.id ?? idx}`}
                className="svc-bn"
              >
                <i aria-hidden="true">{renderNamedSvgIcon(item.icon, idx)}</i>
                <h4>{item.title}</h4>
                {item.description ? (
                  <p>{renderMultilineText(item.description)}</p>
                ) : null}
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

/* ─── Service Process ────────────────────────────────────────────────── */
export function SvcProcessBlock({ section }: { section: SvcProcessSection }) {
  const steps = section.steps ?? [];
  const rawPill = section.pill || 'Process';
  const pillText = cleanPill(rawPill) || 'Process';
  const prefix = section.headingPrefix?.trim() || 'Our Custom Software';
  const serif = section.headingSerif?.trim() || 'Development Process';
  const suffix = section.headingSuffix?.trim() || '';

  const isCustomSoftware =
    serif.includes('Development Process') ||
    prefix.includes('Custom Software') ||
    steps.length === 6;

  if (isCustomSoftware) {
    return (
      <section className="pr6 svc-pr6">
        <div className="hd2" style={{ margin: '0 auto 36px', textAlign: 'center' }}>
          <span className="pill">{pillText}</span>
          <h2 className="svc-heading" style={{ textAlign: 'center' }}>
            <span className="svc-heading-row">Our Custom Software</span>
            <span className="svc-heading-row">
              <span className="serif">Development Process</span>
            </span>
          </h2>
        </div>

        <div className="g6">
          {steps.map((step, idx) => (
            <article key={`${step.number}-${step.id ?? idx}`} className="pc6">
              <b>{step.number}</b>
              <h4>{renderMultilineText(step.title)}</h4>
              {step.description ? <p>{renderMultilineText(step.description)}</p> : null}
            </article>
          ))}
        </div>
      </section>
    );
  }

  // Service 1: 5-step horizontal timeline stepper
  return (
    <section className="svc-pr">
      <div className="wrap">
        <div className="hd2" style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="pill">{pillText}</span>
          <h2 className="svc-heading" style={{ textAlign: 'center' }}>
            <span className="svc-heading-row">Our AI Development &</span>
            <span className="svc-heading-row">
              <span className="serif">Automation Process</span>
            </span>
          </h2>
        </div>

        {steps.length > 0 ? (
          <div className="svc-p5">
            {steps.map((step, idx) => (
              <div key={`${step.number}-${step.id ?? idx}`} className="svc-pn">
                <b>{step.number}</b>
                <div>
                  <h4>{step.title}</h4>
                  {step.description ? (
                    <p>{renderMultilineText(step.description)}</p>
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

/* ─── Service Approach ───────────────────────────────────────────────── */
export function SvcApproachBlock({ section }: { section: SvcApproachSection }) {
  const getItems = section.getBoxItems ?? [];
  const rawPill = section.pill || 'Our Approach';
  const pillText = cleanPill(rawPill) || 'Our Approach';
  const prefix = section.headingPrefix?.trim() || 'Software Designed Around';
  const serif = section.headingSerif?.trim() || 'Your Business Requirements';
  const suffix = section.headingSuffix?.trim() || '';

  const isCustomSoftware =
    serif.includes('Business Requirements') ||
    prefix.includes('Software Designed Around') ||
    getItems.length === 7 ||
    getItems.some((it) => Boolean(it.icon));

  if (isCustomSoftware) {
    // Split into 2 columns: 4 in col 1, 3 in col 2
    const midPoint = Math.ceil(getItems.length / 2);
    const col1 = getItems.slice(0, midPoint);
    const col2 = getItems.slice(midPoint);

    return (
      <section className="sec ap svc-ap">
        <div className="wrap ap-container">
          <div className="top ap-top">
            <div>
              <span className="pill">{pillText}</span>
              <h2 className="svc-heading">
                <span className="svc-heading-row">Software Designed Around</span>
                <span className="svc-heading-row">
                  <span className="serif">Your Business Requirements</span>
                </span>
              </h2>
            </div>
            {section.bodyOne ? (
              <p className="ap-desc">{renderMultilineText(section.bodyOne)}</p>
            ) : (
              <p className="ap-desc">
                We believe business software should solve real operational challenges rather than force your team to change the way everything works. Our approach focuses on understanding your requirements and building solutions that are practical, reliable, and adaptable.
              </p>
            )}
          </div>

          <div className="lists ap-lists">
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

  // Service 1 Approach
  return (
    <section className="sec svc-appr">
      <div className="wrap svc-appr-grid">
        <div className="svc-appr-copy">
          <span className="pill">{pillText}</span>
          <h2 className="svc-heading">
            <span className="svc-heading-row">AI Solutions Built Around</span>
            <span className="svc-heading-row">
              <span className="serif">Your Business</span>
            </span>
          </h2>
          {section.bodyOne ? (
            <p className="svc-lead-desc">{renderMultilineText(section.bodyOne)}</p>
          ) : null}
          {section.bodyTwo ? (
            <p className="svc-lead-desc" style={{ marginTop: 16 }}>
              {renderMultilineText(section.bodyTwo)}
            </p>
          ) : null}
        </div>

        {(section.getBoxTitle || getItems.length > 0) ? (
          <div className="svc-get">
            {section.getBoxTitle ? (
              <h4>{section.getBoxTitle}</h4>
            ) : null}
            {getItems.map((item, idx) => (
              <div key={`${item.label}-${item.id ?? idx}`}>
                <i aria-hidden="true">✓</i>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

/* ─── Service CTA ─────────────────────────────────────────────────────── */
export function SvcCtaBlock({ section }: { section: SvcCtaSection }) {
  const rawPill = section.pill || "Let's Talk";
  const pillText = cleanPill(rawPill) || "Let's Talk";
  const prefix = section.headingPrefix?.trim() || 'Ready to Build Software';
  const serif = section.headingSerif?.trim() || 'Around Your Business?';
  const suffix = section.headingSuffix?.trim() || '';

  return (
    <section className="svc-rd rd">
      <div className="wrap svc-rd-inner">
        <span className="pill" style={{ background: 'rgba(255, 255, 255, 0.85)', color: '#001930' }}>
          {pillText}
        </span>
        <h2 className="svc-heading" style={{ color: '#0b1d36', textAlign: 'center' }}>
          <span className="svc-heading-row">
            {prefix}{' '}
            <span className="serif" style={{ color: '#FFFFFF' }}>
              {serif}
            </span>
            {suffix ? ` ${suffix}` : ''}
          </span>
        </h2>
        {section.bodyOne ? (
          <p style={{ maxWidth: 640, margin: '14px auto 0', color: '#dbeaff', textAlign: 'center', fontSize: 'clamp(14px, 0.95vw, 16px)', lineHeight: 1.6 }}>
            {renderMultilineText(section.bodyOne)}
          </p>
        ) : null}
        {section.bodyTwo ? (
          <p style={{ maxWidth: 640, margin: '10px auto 24px', color: '#dbeaff', textAlign: 'center', fontSize: 'clamp(14px, 0.95vw, 16px)', lineHeight: 1.6 }}>
            {renderMultilineText(section.bodyTwo)}
          </p>
        ) : null}
        {section.ctaLabel ? (
          <WalstarButton variant="orange" href={section.ctaHref || '#cta'}>
            {section.ctaLabel}
          </WalstarButton>
        ) : (
          <WalstarButton variant="orange" href="#cta">
            Discuss Your Software Project ↗
          </WalstarButton>
        )}
      </div>
    </section>
  );
}

export { CapabilitiesBlock, WWD_CARDS } from '@/components/CapabilitiesSection';

