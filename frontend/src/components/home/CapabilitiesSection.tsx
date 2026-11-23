import Image from 'next/image';
import Link from 'next/link';
import { getStrapiMediaUrl } from '@/lib/strapi';
import type { CapabilitiesSection, ServiceItem, ProcessStep } from '@/types/strapi';
import { DEFAULT_PROCESS_STEPS } from '@/lib/default-landing';
import { WalstarButtonArrow } from '@/components/common/WalstarButton';

/* ─── Vector SVG Icons Matching Provided HTML ──────────────────────── */
export function WwdArrowIcon() {
  return (
    <svg
      className="wwd-arrow"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.5 8H13.2M13.2 8L8.8 3.6M13.2 8L8.8 12.4" />
    </svg>
  );
}

export function WwdIcon1() {
  return (
    <svg width="33" height="33" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor" />
      <path d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <text x="12" y="14.4" fontSize="5.6" fontWeight="700" textAnchor="middle" fill="#fff" fontFamily="Poppins,sans-serif">AI</text>
    </svg>
  );
}

export function WwdIcon2() {
  return (
    <svg width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <path d="M3 10v4.5h3.2L13 19V5.5L6.2 10z" fill="currentColor" stroke="none" />
      <path d="M15.5 9.5c1.3.8 1.3 4.2 0 5M17.5 7l2-1.2M17.7 12h2.6M17.5 17l2 1.2" strokeWidth="1.6" />
    </svg>
  );
}

export function WwdIcon3() {
  return (
    <svg width="33" height="33" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2.5" fill="currentColor" />
      <path d="M3 8.5h18" stroke="#fff" strokeWidth="1.4" fill="none" />
      <path d="M10 11.5L7.8 13.7 10 16M14 11.5l2.2 2.2L14 16" stroke="#fff" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WwdIcon4() {
  return (
    <svg width="33" height="33" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="3" y="3.5" width="18" height="13.5" rx="2" fill="currentColor" />
      <path d="M9 21h6M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="8" cy="8.5" r="1.6" fill="#fff" />
      <path d="M12 8h6M12 11.5h4M7 12.5h2" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function WwdIcon5() {
  return (
    <svg width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
      <path d="M10.5 18.8h3" strokeWidth="1.8" />
    </svg>
  );
}

export function WwdIcon6() {
  return (
    <svg width="33" height="33" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.5 8.5h15l.9 12.5H3.6z" fill="currentColor" />
      <path d="M8.5 11V7.5a3.5 3.5 0 017 0V11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function WwdIcon7() {
  return (
    <svg width="33" height="33" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 19a5 5 0 01-.6-9.9A6.2 6.2 0 0118.2 10 4.5 4.5 0 0117.5 19z" fill="currentColor" />
      <path d="M12 11.2l3.2 1.3v2.4c0 1.8-1.4 2.8-3.2 3.5-1.8-.7-3.2-1.7-3.2-3.5v-2.4z" fill="#fff" />
    </svg>
  );
}

export function WwdIcon8() {
  return (
    <svg width="33" height="33" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l8 3v6.5c0 5-3.4 8.7-8 10.5-4.6-1.8-8-5.5-8-10.5V5z" fill="currentColor" />
      <path d="M8.3 12l2.7 2.7 4.8-5" stroke="#fff" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WwdIcon9() {
  return (
    <svg width="33" height="33" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="3" y="3" width="18" height="14" rx="2" fill="currentColor" />
      <path d="M8.5 21h7M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M12 6.5l3 6h-6z" fill="none" stroke="#fff" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

export function WwdIcon10() {
  return (
    <svg width="33" height="33" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="9" cy="8" r="3.4" fill="currentColor" />
      <path d="M2.5 19.5c0-3.6 2.8-5.6 6.5-5.6s6.5 2 6.5 5.6z" fill="currentColor" />
      <circle cx="17.2" cy="9" r="2.6" fill="currentColor" />
      <path d="M16.5 14c3 0 5 1.6 5 5h-4.5" fill="currentColor" />
    </svg>
  );
}

export function WwdIcon11() {
  return (
    <svg width="33" height="33" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4 4h16l1.2 5.5a3 3 0 01-2.9 3.5 3 3 0 01-2.6-1.5A3 3 0 0113 13a3 3 0 01-2-1A3 3 0 018.3 13a3 3 0 01-2.6-1.5 3 3 0 01-2.9-3.5L4 4z" fill="currentColor" />
      <path d="M5 14v5.5a1.5 1.5 0 001.5 1.5h11a1.5 1.5 0 001.5-1.5V14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 17.5h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/* ─── Flexible Icon Rendering Helper ────────────────────────────────── */
export function renderCardIcon(card: WwdCardItem): React.ReactNode {
  // 1. If a custom icon image was uploaded in Strapi CMS (/uploads/ or http)
  // Ensure legacy white vectors (Vector_...png from old dark theme) are filtered out
  const isLegacyWhiteVector =
    typeof card.iconImage === 'string' &&
    (/Vector(_\d+)?_[a-f0-9]+\.png/i.test(card.iconImage) || card.iconImage.includes('Vector_'));

  if (
    card.iconImage &&
    !isLegacyWhiteVector &&
    (card.iconImage.startsWith('/uploads/') || card.iconImage.startsWith('http'))
  ) {
    return (
      <Image
        src={card.iconImage}
        alt=""
        width={33}
        height={33}
        unoptimized
        aria-hidden="true"
        className="wwd-ic-img"
        style={{ objectFit: 'contain', display: 'block', margin: 'auto' }}
      />
    );
  }

  // 2. Prioritize crisp vector SVGs (WwdIcon1 to WwdIcon10)
  if (card.iconSvg) {
    return card.iconSvg;
  }
  if (card.icon && typeof card.icon !== 'string') {
    return card.icon;
  }

  // 3. Fallback to local image asset if provided
  if (card.iconImage) {
    return (
      <Image
        src={card.iconImage}
        alt=""
        width={33}
        height={33}
        unoptimized
        aria-hidden="true"
        className="wwd-ic-img"
        style={{ objectFit: 'contain', display: 'block', margin: 'auto' }}
      />
    );
  }

  if (typeof card.icon === 'string') {
    return <span className="wwd-glyph-icon">{card.icon}</span>;
  }

  return <WwdIcon1 />;
}

/* ─── 10 Showcase Cards Array ───────────────────────────────────────── */
export interface WwdCardItem {
  slug?: string;
  isWide?: boolean;
  colorClass: string;
  tag: string;
  icon?: React.ReactNode;
  iconSvg?: React.ReactNode;
  iconImage?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  moreLabel: string;
  href: string;
}

export const WWD_CARDS: WwdCardItem[] = [
  {
    slug: 'ai-solutions-business-automation',
    isWide: true,
    colorClass: 'c-lav', // #ECF0FF (50% wide card row 1)
    tag: 'Work smarter',
    iconImage: '/images/capabilities/ai-solutions.png',
    icon: <WwdIcon1 />,
    title: (
      <>
        AI Solutions &amp; Business<br />Automation
      </>
    ),
    description: (
      <>
        Build AI-powered applications, intelligent agents, chatbots, and automated
        <br className="d" /> workflows that reduce repetitive work and improve business efficiency.
      </>
    ),
    moreLabel: 'Explore AI solutions',
    href: '/service-1',
  },
  {
    slug: 'digital-marketing-performance-growth',
    isWide: false,
    colorClass: 'c-sky',
    tag: 'Grow with intent',
    iconImage: '/images/capabilities/digital-marketing.png',
    icon: <WwdIcon2 />,
    title: (
      <>
        Digital Marketing &amp;<br />Performance Growth
      </>
    ),
    description: (
      <>
        Get discovered, attract the right
        <br className="d" /> visitors, and turn measurable
        <br className="d" /> campaign performance into
        <br className="d" /> qualified leads.
      </>
    ),
    moreLabel: 'Explore digital growth',
    href: '/services/digital-marketing-performance-growth',
  },
  {
    slug: 'custom-software-development',
    isWide: false,
    colorClass: 'c-peach',
    tag: 'Built around you',
    iconImage: '/images/capabilities/custom-software.png',
    icon: <WwdIcon3 />,
    title: (
      <>
        Custom Software<br />Development
      </>
    ),
    description: (
      <>
        Make complex operations feel
        <br className="d" /> simple with custom ERP, CRM,
        <br className="d" /> inventory, and connected
        <br className="d" /> business systems.
      </>
    ),
    moreLabel: 'Explore business software',
    href: '/services/custom-software-development',
  },
  {
    slug: 'web-saas-product-development',
    isWide: false,
    colorClass: 'c-mint',
    tag: 'Made to scale',
    iconImage: '/images/capabilities/web-saas.png',
    icon: <WwdIcon4 />,
    title: (
      <>
        Web &amp; SaaS Product<br />Development
      </>
    ),
    description: (
      <>
        Launch fast, secure websites
        <br className="d" /> and scalable SaaS products,
        <br className="d" /> with visibility and performance
        <br className="d" /> built in from day one.
      </>
    ),
    moreLabel: 'Web & SaaS development',
    href: '/services/web-saas-product-development',
  },
  {
    slug: 'mobile-app-development',
    isWide: false,
    colorClass: 'c-cream',
    tag: 'Made for people',
    iconImage: '/images/capabilities/mobile-app.png',
    icon: <WwdIcon5 />,
    title: (
      <>
        Mobile App<br />Development
      </>
    ),
    description: (
      <>
        Reach customers wherever they
        <br className="d" /> are with intuitive Android and iOS
        <br className="d" /> apps, dependable integrations,
        <br className="d" /> and a scalable foundation.
      </>
    ),
    moreLabel: 'Explore mobile apps',
    href: '/services/mobile-app-development',
  },
  {
    slug: 'ecommerce-shopify-solutions',
    isWide: false,
    colorClass: 'c-mint',
    tag: 'Sell seamlessly',
    iconImage: '/images/capabilities/ecommerce.png',
    icon: <WwdIcon6 />,
    title: (
      <>
        ECommerce &amp; Shopify<br />Solutions
      </>
    ),
    description: (
      <>
        Create smooth digital shopping
        <br className="d" /> experiences with B2B portals
        <br className="d" /> and the payment, shipping, and
        <br className="d" /> inventory tools you need.
      </>
    ),
    moreLabel: 'Explore eCommerce',
    href: '/services/ecommerce-shopify-solutions',
  },
  {
    slug: 'cloud-devops-platform-engineering',
    isWide: false,
    colorClass: 'c-sky',
    tag: 'Scale confidently',
    iconImage: '/images/capabilities/cloud-devops.png',
    icon: <WwdIcon7 />,
    title: (
      <>
        Cloud, DevOps &amp;<br />Platform Engineering
      </>
    ),
    description: (
      <>
        Ship with confidence using
        <br className="d" /> secure cloud foundations and
        <br className="d" /> smarter deployments that keep
        <br className="d" /> applications fast, stable.
      </>
    ),
    moreLabel: 'Explore cloud solutions',
    href: '/services/cloud-devops-platform-engineering',
  },
  {
    slug: 'cybersecurity-managed-it',
    isWide: false,
    colorClass: 'c-pink',
    tag: 'Stay protected',
    iconImage: '/images/capabilities/cybersecurity.png',
    icon: <WwdIcon8 />,
    title: (
      <>
        Cybersecurity &amp;<br />Managed IT
      </>
    ),
    description: (
      <>
        Protect your systems and keep
        <br className="d" /> applications healthy, secure,
        <br className="d" /> and reliable with responsive
        <br className="d" /> ongoing technical support.
      </>
    ),
    moreLabel: 'Explore security & support',
    href: '/services/cybersecurity-managed-it',
  },
  {
    slug: 'ui-ux-product-design',
    isWide: false,
    colorClass: 'c-grey',
    tag: 'Design that works',
    iconImage: '/images/capabilities/ui-ux-design.png',
    icon: <WwdIcon9 />,
    title: (
      <>
        UI/UX &amp; Product<br />Design
      </>
    ),
    description: (
      <>
        Turn user research and testing
        <br className="d" /> into clear, on-brand
        <br className="d" /> experiences designed to earn
        <br className="d" /> sign-ups, sales.
      </>
    ),
    moreLabel: 'Explore product design',
    href: '/services/ui-ux-product-design',
  },
  {
    slug: 'white-label-development-dedicated-teams',
    isWide: false,
    colorClass: 'c-lav',
    tag: 'Build together',
    iconImage: '/images/capabilities/dedicated-teams.png',
    icon: <WwdIcon10 />,
    title: (
      <>
        White-Label Development &amp;<br />Dedicated Teams
      </>
    ),
    description: (
      <>
        Extend your team without the hiring burden. Work with us as a confidential
        <br className="d" /> delivery partner, or add dedicated developers to your own workflow.
      </>
    ),
    moreLabel: 'Explore team partnerships',
    href: '/contact',
  },
  {
    slug: 'amazon-ebc-brand-content',
    isWide: false,
    colorClass: 'c-peach',
    tag: 'Make your brand stand out',
    iconImage: '/images/capabilities/ecommerce.png',
    icon: <WwdIcon11 />,
    title: (
      <>
        Amazon EBC &amp;<br />Brand Content
      </>
    ),
    description: (
      <>
        Enhance your Amazon listings with
        <br className="d" /> compelling A+ Content, engaging
        <br className="d" /> Brand Stories, and professional Brand
        <br className="d" /> Stores that drive conversions.
      </>
    ),
    moreLabel: 'Explore Amazon EBC Services',
    href: '/services/amazon-ebc-brand-content',
  },
];

/* ─── Format Card Title with Exact 2-Line Break ────────────────────── */
export function formatCardTitle(title?: string | React.ReactNode, slug?: string): React.ReactNode {
  if (!title) return null;
  if (typeof title !== 'string') return title;

  const WRAPS: Record<string, [string, string]> = {
    'ai-solutions-business-automation': ['AI Solutions & Business', 'Automation'],
    'digital-marketing-performance-growth': ['Digital Marketing &', 'Performance Growth'],
    'custom-software-development': ['Custom Software', 'Development'],
    'web-saas-product-development': ['Web & SaaS Product', 'Development'],
    'mobile-app-development': ['Mobile App', 'Development'],
    'ecommerce-shopify-solutions': ['ECommerce & Shopify', 'Solutions'],
    'cloud-devops-platform-engineering': ['Cloud, DevOps &', 'Platform Engineering'],
    'cybersecurity-managed-it': ['Cybersecurity &', 'Managed IT'],
    'ui-ux-product-design': ['UI/UX & Product', 'Design'],
    'white-label-development-dedicated-teams': ['White-Label Development &', 'Dedicated Teams'],
    'amazon-ebc-brand-content': ['Amazon EBC &', 'Brand Content'],
  };

  if (slug && WRAPS[slug]) {
    const [line1, line2] = WRAPS[slug];
    return (
      <>
        {line1}
        <br />
        {line2}
      </>
    );
  }

  const raw = title.trim();
  for (const [line1, line2] of Object.values(WRAPS)) {
    const target = `${line1} ${line2}`.toLowerCase().replace(/&amp;/g, '&');
    if (raw.toLowerCase().replace(/&amp;/g, '&') === target) {
      return (
        <>
          {line1}
          <br />
          {line2}
        </>
      );
    }
  }

  if (raw.includes('\n')) {
    const parts = raw.split('\n');
    return (
      <>
        {parts.map((p, i) => (
          <span key={i} className="multiline-title-part">
            {p}
            {i < parts.length - 1 && <br />}
          </span>
        ))}
      </>
    );
  }

  return title;
}

export function renderMultilineTitle(title?: string | null): React.ReactNode {
  if (!title) return null;
  if (title.includes('\n')) {
    const parts = title.split('\n');
    return (
      <>
        {parts.map((p, i) => (
          <span key={i} className="multiline-title-part">
            {p}
            {i < parts.length - 1 && <br />}
          </span>
        ))}
      </>
    );
  }
  return title;
}

/* ─── Capabilities Block Matching Exact HTML ────────────────────────── */
export function CapabilitiesBlock({
  section,
  fallbackServices,
}: {
  section: CapabilitiesSection;
  fallbackServices?: ServiceItem[];
}) {
  const pill = (section.pill || 'Capabilities').replace(/^[●•\s]+/, '');
  const prefix = section.headingPrefix || 'What we';
  const serif = section.headingSerif || 'do';
  const subtitle =
    section.subtitle ||
    'End-to-end AI services engineered for performance, data security';

  // Process ("From idea to production") configuration
  const showProcess = section.showProcess !== false;
  const processPill = (section.processPill || 'What we do').replace(/^[●•\s]+/, '');
  const processHeadingPrefix = section.processHeadingPrefix || 'From';
  const processHeadingSerif = section.processHeadingSerif || 'idea';
  const processHeadingSuffix = section.processHeadingSuffix || 'to production';
  const processNote =
    section.processNote ||
    'Attaining the best, yet through a certain measure of time, it comes about with great labor and pain. Indeed, even to the slightest degree.';
  const processVideoLabel = section.processVideoLabel || 'Video Presentation';
  const processVideoUrl = section.processVideoUrl || '#cta';

  const stepsToUse: ProcessStep[] =
    section.processSteps && section.processSteps.length > 0
      ? section.processSteps
      : DEFAULT_PROCESS_STEPS;
  const sortedSteps = [...stepsToUse].sort((a, b) => a.stepNumber - b.stepNumber);
  const [stepOne, stepTwo, stepThree, stepFour] = sortedSteps;

  // Pool all available services from Strapi (section-level or global fallback)
  const incomingServices =
    section.services && section.services.length > 0
      ? section.services
      : fallbackServices && fallbackServices.length > 0
      ? fallbackServices
      : [];

  const hasDbServices = incomingServices && incomingServices.length > 0;

  // We map over all 10 canonical cards to guarantee the balanced 50% 25% 25% / 4-column layout,
  // overlaying any matching Strapi service content while preserving exact Figma wraps.
  const cardsToRender: WwdCardItem[] = WWD_CARDS.map((defaultCard, idx) => {
    const matchingService =
      incomingServices.find(
        (s) =>
          s.slug &&
          (defaultCard.slug === s.slug ||
            defaultCard.slug === s.slug.replace(/-development$/, '') ||
            (defaultCard.href && defaultCard.href.endsWith(`/${s.slug}`)))
      ) || (hasDbServices && incomingServices.length > idx ? incomingServices[idx] : null);

    if (!matchingService) {
      return defaultCard;
    }

    const strapiIcon = matchingService.iconImage?.url
      ? getStrapiMediaUrl(matchingService.iconImage.url)
      : null;

    const href =
      matchingService.moreHref ||
      (matchingService.slug
        ? `/services/${matchingService.slug}`
        : defaultCard.href);

    const formattedTitle = matchingService.title
      ? formatCardTitle(matchingService.title, defaultCard.slug)
      : defaultCard.title;

    return {
      ...defaultCard,
      tag: matchingService.tag || defaultCard.tag,
      title: formattedTitle || defaultCard.title,
      description: matchingService.description || defaultCard.description,
      moreLabel: matchingService.more || matchingService.moreLabel || defaultCard.moreLabel,
      colorClass: defaultCard.colorClass,
      isWide: typeof matchingService.isWide === 'boolean' ? matchingService.isWide : defaultCard.isWide,
      iconImage: strapiIcon || defaultCard.iconImage,
      href,
    };
  });

  return (
    <>
      <section className="wwd homepage-capabilities-section" id="cap" aria-labelledby="wwd-title">
        <div className="wwd-inner homepage-capabilities-container">
          <div className="head capabilities-header">
            <span className="pill">{pill}</span>
            <h2 id="wwd-title" className="wwd-heading capabilities-title">
              {prefix} <span className="serif">{serif}</span>
            </h2>
            <p className="wwd-subtitle capabilities-subtitle">{subtitle}</p>
          </div>

          <div className="grid capabilities-grid">
            {cardsToRender.map((card, idx) => (
              <article
                key={`${card.tag}-${idx}`}
                className={`wwd-card card capabilities-card ${card.isWide ? 'w2 capabilities-card--wide ' : ''}${card.colorClass}`}
              >
                <span className="tag capabilities-card-tag">{card.tag}</span>
                <span className="ic capabilities-card-icon" aria-hidden="true">
                  {renderCardIcon(card)}
                </span>
                <h3 className="wwd-card-title capabilities-card-title">{card.title}</h3>
                <p className="wwd-card-desc capabilities-card-desc">{card.description}</p>
                <Link className="more capabilities-card-more" href={card.href}>
                  {card.moreLabel} <WwdArrowIcon />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {showProcess && sortedSteps.length > 0 ? (
        <section className="cap cap-proc-section process-timeline-section" id="process" aria-label="Process">
          <div className="proc process-timeline-container">
            <div className="hd process-timeline-header">
              {processPill ? <span className="pill">{processPill}</span> : null}
              <h2 className="proc-heading process-timeline-heading">
                <span className="proc-heading-text">{processHeadingPrefix}</span>{' '}
                {processHeadingSerif ? (
                  <span className="proc-heading-accent">{processHeadingSerif}</span>
                ) : null}
                <br />
                <span className="proc-heading-text">{processHeadingSuffix}</span>
              </h2>
            </div>

            {stepThree ? (
              <div className={stepThree.isHighlighted ? 'pc up3 pc-top pc-step-3 process-step-card process-step-card--accent process-step-card--top process-step-card--step-3' : 'pc pc-top pc-step-3 process-step-card process-step-card--top process-step-card--step-3'}>
                <h4 className="proc-card-title process-step-title">{renderMultilineTitle(stepThree.title)}</h4>
                <p className="proc-card-desc process-step-desc">{stepThree.description}</p>
              </div>
            ) : null}

            {stepFour ? (
              <div className="pc pc-top pc-step-4 process-step-card process-step-card--top process-step-card--step-4">
                <h4 className="proc-card-title process-step-title">{renderMultilineTitle(stepFour.title)}</h4>
                <p className="proc-card-desc process-step-desc">{stepFour.description}</p>
              </div>
            ) : null}

            <div className="tl process-timeline-track" aria-hidden="true">
              <i className="tl-dot process-timeline-dot" />
              <i className="tl-dot process-timeline-dot" />
              <i className="tl-dot process-timeline-dot" />
              <i className="tl-dot process-timeline-dot" />
            </div>

            {stepOne ? (
              <div className="pc pc-bottom pc-step-1 process-step-card process-step-card--bottom process-step-card--step-1">
                <h4 className="proc-card-title process-step-title">{renderMultilineTitle(stepOne.title)}</h4>
                <p className="proc-card-desc process-step-desc">{stepOne.description}</p>
              </div>
            ) : null}

            {stepTwo ? (
              <div className="pc pc-bottom pc-step-2 process-step-card process-step-card--bottom process-step-card--step-2">
                <h4 className="proc-card-title process-step-title">{renderMultilineTitle(stepTwo.title)}</h4>
                <p className="proc-card-desc process-step-desc">{stepTwo.description}</p>
              </div>
            ) : null}

            <div className="pnote process-footer-note">
              {processNote ? <p className="pnote-text process-footer-note-text">{processNote}</p> : null}
              {processVideoLabel ? (
                <Link className="vid process-video-link" href={processVideoUrl}>
                  <i className="vid-icon process-video-icon" aria-hidden="true">
                    <WalstarButtonArrow
                      className="vid-arrow"
                      width={22.85}
                      height={19.06}
                      viewBox="1.5 2.5 13 11"
                      strokeWidth={1.5}
                    />
                  </i>
                  <span className="vid-label process-video-label">{processVideoLabel}</span>
                </Link>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
