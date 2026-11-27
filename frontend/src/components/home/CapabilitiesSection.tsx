'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { OverlappingCtaBanner } from '@/components/common/OverlappingCtaBanner';
import { getStrapiMediaUrl } from '@/lib/strapi';
import type { CapabilitiesSection, ServiceItem, ProcessStep } from '@/types/strapi';
import { DEFAULT_PROCESS_STEPS } from '@/lib/default-landing';
import { WalstarButton, WalstarButtonArrow } from '@/components/common/WalstarButton';
import { renderHeadingParts } from '@/components/common/SectionPrimitives';

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
    colorClass: 'c-lav',
    tag: 'Work smarter',
    iconImage: '/images/capabilities/ai-solutions.png',
    icon: <WwdIcon1 />,
    title: 'AI Solutions & Business Automation',
    description:
      'Build AI-powered applications, intelligent agents, chatbots, and automated workflows that reduce repetitive work and improve business efficiency.',
    moreLabel: 'Explore AI solutions',
    href: '/services/ai-solutions-business-automation',
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
        Digital Marketing &amp; Performance Growth
      </>
    ),
    description:
      'Improve AI-search visibility, attract relevant visitors, generate qualified leads, and optimize digital campaigns using measurable performance data.',
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
        Custom Software Development
      </>
    ),
    description:
      'Simplify business operations with custom ERP systems, CRM platforms, inventory management, automated workflows, and connected business applications.',
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
        Web &amp; SaaS Product Development
      </>
    ),
    description:
      'Fast, secure, search-friendly websites and scalable SaaS platforms, built on modern technology with performance and SEO included from day one.',
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
        Mobile App Development
      </>
    ),
    description:
      'Create user-friendly Android and iOS applications with scalable backends, intuitive interfaces, and reliable integrations.',
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
        ECommerce &amp; Shopify Solutions
      </>
    ),
    description:
      'Build online stores, B2B commerce portals, and scalable digital shopping experiences with payment, shipping, and inventory integrations.',
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
        Cloud, DevOps &amp; Platform Engineering
      </>
    ),
    description:
      'Ship faster and scale with confidence. We design secure cloud architecture and automate deployment so your applications stay fast, stable and cost-efficient.',
    moreLabel: 'Explore Cloud & DevOps',
    href: '/services/cloud-devops-platform-engineering',
  },
  {
    slug: 'cybersecurity-managed-it',
    isWide: false,
    colorClass: 'c-mint',
    tag: 'Stay protected',
    iconImage: '/images/capabilities/cybersecurity.png',
    icon: <WwdIcon8 />,
    title: (
      <>
        Cybersecurity &amp; Managed IT Services
      </>
    ),
    description:
      'Protect digital systems, maintain application health, resolve technical issues, and keep your business applications secure and reliable.',
    moreLabel: 'Security & Support',
    href: '/services/cybersecurity-managed-it',
  },
  {
    slug: 'ui-ux-product-design',
    isWide: false,
    colorClass: 'c-cream',
    tag: 'Design that works',
    iconImage: '/images/capabilities/ui-ux-design.png',
    icon: <WwdIcon9 />,
    title: (
      <>
        UI/UX &amp; Product Design
      </>
    ),
    description:
      'Design that makes people act. We turn research and testing into clear, on-brand interfaces that increase sign-ups, sales and retention.',
    moreLabel: 'Explore Product Design',
    href: '/services/ui-ux-product-design',
  },
  {
    slug: 'white-label-development-dedicated-teams',
    isWide: false,
    colorClass: 'c-mint',
    tag: 'Build together',
    iconImage: '/images/capabilities/dedicated-teams.png',
    icon: <WwdIcon10 />,
    title: (
      <>
        White-Label Development &amp; Dedicated Teams
      </>
    ),
    description:
      'Extend your team without the hiring burden. Work with us as a confidential delivery partner, or add dedicated developers to your own workflow.',
    moreLabel: 'Development Partnerships',
    href: '/services/white-label-development-dedicated-teams',
  },
  {
    slug: 'amazon-ebc-brand-content',
    isWide: false,
    colorClass: 'c-sky',
    tag: 'Brand impact',
    iconImage: '/images/capabilities/ecommerce.png',
    icon: <WwdIcon11 />,
    title: (
      <>
        Amazon EBC &amp; Brand Content
      </>
    ),
    description:
      'Enhance Amazon listings with compelling A+ Content, Brand Stories, and professional Brand Stores that build trust and drive conversions.',
    moreLabel: 'Amazon EBC services',
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
  const isLegacyHeading =
    (!section.headingPrefix || section.headingPrefix.trim() === 'What we') &&
    (!section.headingSerif || section.headingSerif.trim() === 'do');
  const prefix = isLegacyHeading
    ? 'Custom Software, AI, Cloud, Security\nand Digital Growth'
    : section.headingPrefix || 'Custom Software, AI, Cloud, Security\nand Digital Growth';
  const serif = isLegacyHeading
    ? 'Under One Roof'
    : section.headingSerif || 'Under One Roof';
  const isLegacySubtitle =
    !section.subtitle ||
    section.subtitle.trim() ===
      'End-to-end AI services engineered for performance, data security';
  const subtitle = isLegacySubtitle
    ? 'From AI-driven automation to custom enterprise software, we deliver digital solutions that solve real problems, streamline operations, and help businesses scale.'
    : section.subtitle!;

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

    return {
      ...defaultCard,
      tag: matchingService.tag || defaultCard.tag,
      colorClass: defaultCard.colorClass,
      isWide: typeof matchingService.isWide === 'boolean' ? matchingService.isWide : defaultCard.isWide,
      iconImage: strapiIcon || defaultCard.iconImage,
      href,
    };
  });

  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const cardBgMap: Record<string, string> = {
    'c-lav': 'bg-[#ECEEFD]',
    'c-sky': 'bg-[#DEEEFF]',
    'c-peach': 'bg-[#FDEEEA]',
    'c-pink': 'bg-[#FDEEEA]',
    'c-mint': 'bg-[#ECF5F0]',
    'c-cream': 'bg-[#F8F5EE]',
    'c-offwhite': 'bg-[#F8F5EE]',
    'c-grey': 'bg-[#EBF0F5]',
  };

  return (
    <>
      <section
        className="section-container-90 relative z-[2] mt-[clamp(28px,3vw,48px)] pb-28 md:pb-32 bg-[#001930] rounded-4xl py-15"
        id="cap"
        aria-labelledby="wwd-title"
      >
        <div className="mx-auto w-full">
          <div className="text-center">
            <span className="pill">{pill}</span>
            <h2
              id="wwd-title"
              className="section-heading my-4 text-center !text-white"
            >
              <span className="whitespace-pre-line">{prefix}</span>{' '}
              {serif ? (
                <span className="section-heading-serif">{serif}</span>
              ) : null}
            </h2>
            <p className="mx-auto max-w-[min(760px,92vw)] text-center text-[clamp(13.5px,0.9vw,15px)] leading-[1.6] text-[#dbeaff]">
              {subtitle}
            </p>
          </div>

          <div className="mx-auto mt-[clamp(32px,2.6vw,44px)] grid w-[94%] grid-cols-1 gap-x-[clamp(16px,1.25vw,22px)] gap-y-[clamp(18px,1.4vw,26px)] sm:grid-cols-2 lg:grid-cols-4">
            {cardsToRender.map((card, idx) => {
              const bgClass = cardBgMap[card.colorClass] || 'bg-[#ECEEFD]';
              return (
                <article
                  key={`${card.tag}-${idx}`}
                  className={`group relative flex min-h-[clamp(235px,16vw,280px)] w-full flex-col rounded-2xl transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_16px_32px_rgba(0,0,0,0.24)] ${
                    card.isWide
                      ? 'sm:col-span-2 p-[clamp(28px,2vw,36px)] pb-[clamp(24px,1.7vw,30px)]'
                      : 'p-[clamp(22px,1.7vw,30px)]'
                  } ${bgClass}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-block rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#0A6FD8]">
                      {card.tag}
                    </span>
                    <span
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#0B1D36] shadow-sm sm:h-10 sm:w-10 [&_img]:h-5 [&_img]:w-5 [&_svg]:h-4 [&_svg]:w-4 sm:[&_svg]:h-5 sm:[&_svg]:w-5"
                      aria-hidden="true"
                    >
                      {renderCardIcon(card)}
                    </span>
                  </div>
                  <h3 className="mt-4 w-full font-[Poppins,system-ui,sans-serif] text-[18px] font-medium leading-[24px] tracking-[-0.21px] text-[#001930] sm:min-h-[52px] sm:text-[21px] sm:leading-[26px]">
                    {typeof card.title === 'string' ? card.title.replace(/\s+/g, ' ').trim() : card.title}
                  </h3>
                  <p className="mt-2 font-[Poppins,system-ui,sans-serif] text-[14px] font-normal leading-[20px] text-[#4b5563] sm:text-[15px] sm:leading-[22px]">
                    {card.description}
                  </p>
                  <Link
                    className={`mt-auto inline-flex items-center gap-1.5 pt-4 font-[Poppins,system-ui,sans-serif] text-[15px] font-medium leading-[15px] text-[#0b6ad8] transition-colors hover:text-[#005bb5] ${
                      card.isWide ? 'border-t border-[#0B1D36]/15 pt-[clamp(16px,1.2vw,20px)]' : ''
                    }`}
                    href={card.href}
                  >
                    {card.moreLabel} <WwdArrowIcon />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <OverlappingCtaBanner
        title={section.ctaBannerTitle || "Have a Project in Mind? Let's Build It Together."}
        description={
          section.ctaBannerDescription ||
          "Whether you're planning an AI solution, developing custom business software, modernizing an existing application, or improving your digital growth, Walstar Technologies can help you explore the right approach. Tell us what you want to achieve. We'll discuss your requirements and the next steps."
        }
        ctaLabel={section.ctaBannerLabel || 'Discuss Your Project ↗'}
        ctaHref={section.ctaBannerHref || '/contact'}
      />

      {showProcess && sortedSteps.length > 0 ? (
        <section
          className="relative z-[1] -mt-[clamp(260px,28vw,480px)] bg-[#DDEFFF] pt-[calc(clamp(260px,28vw,480px)+clamp(52px,4.5vw,84px))] pb-[clamp(68px,5.4vw,100px)]"
          id="process"
          aria-label="Process"
        >
          <div className="section-container-80 mx-auto w-[min(1606px,83.44vw)]">
            {/* Top Row: Header + Steps 3 & 4 */}
            <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-4">
              <div className="lg:col-span-2">
                {processPill ? <span className="pill">{processPill}</span> : null}
                <h2 className="section-heading mt-3 text-left text-[#0B1D36]">
                  <span>{processHeadingPrefix}</span>{' '}
                  {processHeadingSerif ? (
                    <span className="section-heading-serif">
                      {processHeadingSerif}
                    </span>
                  ) : null}
                  <br />
                  <span>{processHeadingSuffix}</span>
                </h2>
              </div>

              {stepThree ? (
                <div
                  onMouseEnter={() => setHoveredStep(3)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="relative flex h-[181px] w-full flex-col items-center justify-center gap-2 rounded-none bg-white p-6 text-center text-[#0B1D36] shadow-[0_8px_24px_rgba(11,29,54,0.06)] transition-shadow duration-200 hover:shadow-[0_12px_28px_rgba(11,29,54,0.10)] lg:w-[260px]"
                >
                  <h4 className="text-[17px] font-semibold leading-snug">
                    {renderMultilineTitle(stepThree.title)}
                  </h4>
                  <p className="text-[12.5px] leading-relaxed text-[#4b5563]">
                    {stepThree.description}
                  </p>
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -bottom-1.5 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rotate-45 bg-white transition-opacity duration-200 ${
                      hoveredStep === 3 ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
              ) : null}

              {stepFour ? (
                <div
                  onMouseEnter={() => setHoveredStep(4)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="relative flex h-[181px] w-full flex-col items-center justify-center gap-2 rounded-none bg-white p-6 text-center text-[#0B1D36] shadow-[0_8px_24px_rgba(11,29,54,0.06)] transition-shadow duration-200 hover:shadow-[0_12px_28px_rgba(11,29,54,0.10)] lg:w-[260px]"
                >
                  <h4 className="text-[17px] font-semibold leading-snug">
                    {renderMultilineTitle(stepFour.title)}
                  </h4>
                  <p className="text-[12.5px] leading-relaxed text-[#4b5563]">
                    {stepFour.description}
                  </p>
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -bottom-1.5 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rotate-45 bg-white transition-opacity duration-200 ${
                      hoveredStep === 4 ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
              ) : null}
            </div>

            {/* Timeline Track */}
            <div
              className="relative my-8 hidden w-full grid-cols-4 gap-6 lg:grid"
              aria-hidden="true"
            >
              <div className="pointer-events-none absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-[#93C5FD]" />
              {[1, 2, 3, 4].map((dotNum) => (
                <div key={dotNum} className="relative z-10 flex w-[260px] justify-center">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white shadow-sm">
                    <i
                      className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                        hoveredStep === dotNum ? 'bg-[#2F80FF]' : 'bg-[#0B1D36]'
                      }`}
                    />
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Row: Steps 1 & 2 + Note/Video */}
            <div className="mt-6 grid grid-cols-1 items-start gap-6 lg:mt-0 lg:grid-cols-4">
              {stepOne ? (
                <div
                  onMouseEnter={() => setHoveredStep(1)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="relative flex h-[181px] w-full flex-col items-center justify-center gap-2 rounded-none bg-white p-6 text-center text-[#0B1D36] shadow-[0_8px_24px_rgba(11,29,54,0.06)] transition-shadow duration-200 hover:shadow-[0_12px_28px_rgba(11,29,54,0.10)] lg:w-[260px]"
                >
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -top-1.5 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rotate-45 bg-white transition-opacity duration-200 ${
                      hoveredStep === 1 ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <h4 className="text-[17px] font-semibold leading-snug">
                    {renderMultilineTitle(stepOne.title)}
                  </h4>
                  <p className="text-[12.5px] leading-relaxed text-[#4b5563]">
                    {stepOne.description}
                  </p>
                </div>
              ) : null}

              {stepTwo ? (
                <div
                  onMouseEnter={() => setHoveredStep(2)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="relative flex h-[181px] w-full flex-col items-center justify-center gap-2 rounded-none bg-white p-6 text-center text-[#0B1D36] shadow-[0_8px_24px_rgba(11,29,54,0.06)] transition-shadow duration-200 hover:shadow-[0_12px_28px_rgba(11,29,54,0.10)] lg:w-[260px]"
                >
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -top-1.5 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rotate-45 bg-white transition-opacity duration-200 ${
                      hoveredStep === 2 ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <h4 className="text-[17px] font-semibold leading-snug">
                    {renderMultilineTitle(stepTwo.title)}
                  </h4>
                  <p className="text-[12.5px] leading-relaxed text-[#4b5563]">
                    {stepTwo.description}
                  </p>
                </div>
              ) : null}

              <div className="flex flex-col items-start justify-between gap-5 pt-2 lg:col-span-2 lg:pl-6">
                {processNote ? (
                  <p className="max-w-xl text-sm leading-relaxed text-[#0B1D36]/80">
                    {processNote}
                  </p>
                ) : null}
                {processVideoLabel ? (
                  <Link
                    href={processVideoUrl}
                    className="group inline-flex items-center gap-3"
                  >
                    <span
                      className="btn btn-or !inline-flex !h-11 !w-11 !min-w-0 shrink-0 !items-center !justify-center !rounded-full !p-0"
                      aria-hidden="true"
                    >
                      <WalstarButtonArrow
                        width={20}
                        height={20}
                        strokeWidth={1.8}
                      />
                    </span>
                    <span className="text-md font-medium text-[#0B1D36]">
                      {processVideoLabel}
                    </span>
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
