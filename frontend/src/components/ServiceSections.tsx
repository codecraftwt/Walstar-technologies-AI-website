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

/* ─── Custom Challenge SVGs Matching Reference Image ─────────────────── */
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
  const imageUrl = getStrapiMediaUrl(section.image?.url) || '/images/service-team-ai.png';
  const prefix = section.headingPrefix?.trim() || 'AI Agents and Automation that cut';
  const serif = section.headingSerif?.trim() || 'Manual Work';
  const suffix = section.headingSuffix?.trim() || 'and bring in more Leads';

  // Check if standard copy matches reference image to guarantee exact 3-row wrapping
  const isReferenceCopy =
    prefix === 'AI Agents and Automation that cut' &&
    serif === 'Manual Work';

  return (
    <section className="sec svc-intro">
      <div className="wrap svc-intro-grid">
        <div
          className="svc-intro-ph"
          role="img"
          aria-label={section.image?.alternativeText || section.pill || 'Team working with AI automation'}
        >
          <Image
            src={imageUrl}
            alt={section.image?.alternativeText || section.headingPrefix || 'Team collaborating on AI automation'}
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
            <span className="pill">AI Solutions & Business Automation</span>
          )}
          {isReferenceCopy ? (
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
            <WalstarButton variant="orange" href={section.ctaHref || '#contact-form'}>
              {section.ctaLabel}
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

  // Check if standard copy matches reference image to guarantee exact 2-row wrapping
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

const DEFAULT_SVC_CAPABILITY_ITEMS: SvcCapabilityItem[] = [
  {
    id: 1,
    title: 'AI Chatbots & Virtual Assistants',
    description:
      'Deliver faster, more consistent customer support with AI-powered assistants that answer common questions, guide users, qualify leads, and help customers find the information they need.',
  },
  {
    id: 2,
    title: 'Business Process Automation',
    description:
      'Reduce repetitive manual work by automating routine business tasks, approvals, notifications, data entry, and other workflows.',
  },
  {
    id: 3,
    title: 'AI Workflow Automation & Integration',
    description:
      'Connect your business applications and automate processes across CRM systems, ERP platforms, websites, eCommerce stores, and third-party tools.',
  },
  {
    id: 4,
    title: 'Custom AI Development',
    description:
      'Build AI-powered applications, intelligent features, and tailored solutions designed around your business requirements, data, and operational challenges.',
  },
  {
    id: 5,
    title: 'AI Data Processing & Intelligent Analytics',
    description:
      'Turn business data into useful insights with automated data processing, intelligent reporting, pattern analysis, and decision-support tools.',
  },
  {
    id: 6,
    title: 'WhatsApp Business Automation',
    description:
      'Streamline customer communication through automated replies, lead qualification, inquiry management, notifications, and conversational workflows on WhatsApp.',
  },
  {
    id: 7,
    title: 'Generative AI & Business Assistants',
    description:
      'Explore AI-powered assistants that help teams find information, summarize documents, generate content, and work with business knowledge more efficiently.',
  },
  {
    id: 8,
    title: 'AI Integration for Existing Software',
    description:
      'Enhance your current websites, mobile apps, and business software with AI capabilities without necessarily rebuilding your entire technology platform.',
  },
];

function renderSvcCapabilityIcon(item: { icon?: string | null; title?: string }, index: number) {
  const iconMap: Record<number, React.ReactNode> = {
    0: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
    1: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    2: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="6" height="6" rx="1" />
        <rect x="15" y="3" width="6" height="6" rx="1" />
        <rect x="9" y="15" width="6" height="6" rx="1" />
        <path d="M6 9v3a3 3 0 0 0 3 3h3m6-6v3a3 3 0 0 1-3 3" />
      </svg>
    ),
    3: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
      </svg>
    ),
    4: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
    5: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    6: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
      </svg>
    ),
    7: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.5 14.5A2.5 2.5 0 0 0 18 12h-2V7a2 2 0 0 0-2-2h-3a2.5 2.5 0 0 0-5 0H3a2 2 0 0 0-2 2v3a2.5 2.5 0 0 0 0 5v3a2 2 0 0 0 2 2h3a2.5 2.5 0 0 0 5 0h3a2 2 0 0 0 2-2v-2h2a2.5 2.5 0 0 0 2.5-2.5z" />
      </svg>
    ),
  };

  return iconMap[index % 8] || iconMap[0];
}

/* ─── Service Capabilities ───────────────────────────────────────────── */
export function SvcCapabilitiesBlock({ section }: { section: SvcCapabilitiesSection }) {
  const incomingItems = section.capabilityItems ?? [];
  const items = incomingItems.length > 0 ? incomingItems : DEFAULT_SVC_CAPABILITY_ITEMS;
  const rawPill = section.pill || 'Capabilities';
  const pillText = cleanPill(rawPill) || 'Capabilities';

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
          {items.map((item, idx) => (
            <article key={`${item.title}-${item.id ?? idx}`} className="svc-cc">
              <i aria-hidden="true">{renderSvcCapabilityIcon(item, idx)}</i>
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
                className={item.isDark ? 'svc-bn svc-bn--dk' : 'svc-bn'}
              >
                <i aria-hidden="true">{item.icon || '◷'}</i>
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
  const rawPill = section.pill || 'How we work';
  const pillText = cleanPill(rawPill) || 'How we work';

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

  return (
    <section className="svc-rd">
      <div className="wrap svc-rd-inner">
        <span className="pill">{pillText}</span>
        <h2 className="svc-heading" style={{ color: '#FFFFFF', textAlign: 'center' }}>
          <span className="svc-heading-row">
            Ready to Make Your <span className="serif" style={{ color: '#FFFFFF' }}>Business Smarter?</span>
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
          <WalstarButton variant="orange" href={section.ctaHref || '#contact-form'}>
            {section.ctaLabel}
          </WalstarButton>
        ) : null}
      </div>
    </section>
  );
}
