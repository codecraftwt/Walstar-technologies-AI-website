import type { CSSProperties, ReactNode } from 'react';
import Link from 'next/link';
import {
  cleanPill,
  renderHeadingParts,
  renderTextWithBreaks,
} from '@/components/common/SectionPrimitives';
import { WalstarButtonArrow } from '@/components/common/WalstarButton';
import { getStrapiMediaUrl } from '@/lib/strapi';
import type { ServiceGridSection, ServiceItem } from '@/types/strapi';

export interface ServiceGridCardItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  backgroundImage?: string;
  icon: ReactNode;
}

function IconAiChip() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path
        d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <text
        x="12"
        y="14.4"
        fontSize="5.6"
        fontWeight="700"
        textAnchor="middle"
        fontFamily="Poppins, sans-serif"
        className="icon-cutout"
        stroke="none"
      >
        AI
      </text>
    </svg>
  );
}

function IconMegaphone() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 10v4.5h3.2L13 19V5.5L6.2 10z" />
      <path
        d="M15.5 9.5c1.3.8 1.3 4.2 0 5M17.5 7l2-1.2M17.7 12h2.6M17.5 17l2 1.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCodeWindow() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 8.5h18" className="icon-cutout" fill="none" strokeWidth="1.2" />
      <path
        d="M10 11.5L7.8 13.7 10 16M14 11.5l2.2 2.2L14 16"
        className="icon-cutout"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMonitorSettings() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3.5" width="18" height="13.5" rx="2" />
      <path
        d="M9 21h6M12 17v4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="8" cy="8.5" r="1.6" className="icon-cutout" stroke="none" />
      <path
        d="M12 8h6M12 11.5h4M7 12.5h2"
        className="icon-cutout"
        fill="none"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="7"
        y="2.5"
        width="10"
        height="19"
        rx="2.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M10.5 18.8h3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconShoppingBag() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 8.5h15l.9 12.5H3.6z" />
      <path
        d="M8.5 11V7.5a3.5 3.5 0 017 0V11"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCloudShield() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 19a5 5 0 01-.6-9.9A6.2 6.2 0 0118.2 10 4.5 4.5 0 0117.5 19z" />
      <path
        d="M12 11.2l3.2 1.3v2.4c0 1.8-1.4 2.8-3.2 3.5-1.8-.7-3.2-1.7-3.2-3.5v-2.4z"
        className="icon-cutout"
        stroke="none"
      />
    </svg>
  );
}

function IconShieldCheck() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l8 3v6.5c0 5-3.4 8.7-8 10.5-4.6-1.8-8-5.5-8-10.5V5z" />
      <path
        d="M8.3 12l2.7 2.7 4.8-5"
        className="icon-cutout"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconUiDesign() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="14" rx="2" />
      <path
        d="M8.5 21h7M12 17v4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 6.5l3 6h-6z"
        className="icon-cutout"
        fill="none"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconTeam() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9" cy="8" r="3.4" />
      <path d="M2.5 19.5c0-3.6 2.8-5.6 6.5-5.6s6.5 2 6.5 5.6z" />
      <circle cx="17.2" cy="9" r="2.6" />
      <path d="M16.5 14c3 0 5 1.6 5 5h-4.5" />
    </svg>
  );
}

function IconStoreFront() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 9l1.5-5h13L20 9v1a2.5 2.5 0 01-4 1.5 2.5 2.5 0 01-4 0A2.5 2.5 0 018 11.5 2.5 2.5 0 014 10z" />
      <path
        d="M5.5 13v7.5h13V13"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M9 15.5h6l-1 3.5h-4z" stroke="none" />
    </svg>
  );
}

export const SERVICE_GRID_CARDS: ServiceGridCardItem[] = [
  {
    id: 'service-ai-solutions',
    slug: 'ai-solutions-business-automation',
    title: 'AI Solutions & Business Automation',
    description:
      'Build AI-powered applications, intelligent agents, chatbots, and\nautomated workflows that reduce repetitive work and improve\nbusiness efficiency.',
    ctaLabel: 'Explore AI solutions',
    href: '/services/ai-solutions-business-automation',
    backgroundImage: '/images/service-team-ai.png',
    icon: <IconAiChip />,
  },
  {
    id: 'service-digital-marketing',
    slug: 'digital-marketing-performance-growth',
    title: 'Digital Marketing & Performance Growth',
    description:
      'Improve AI-search visibility, attract relevant visitors, generate qualified\nleads, and optimize digital campaigns using measurable performance\ndata.',
    ctaLabel: 'Explore Digital Growth',
    href: '/services/digital-marketing-performance-growth',
    backgroundImage: '/images/services/digital-marketing.png',
    icon: <IconMegaphone />,
  },
  {
    id: 'service-custom-software',
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    description:
      'Simplify business operations with custom ERP systems, CRM platforms,\ninventory management, automated workflows, and connected business\napplications.',
    ctaLabel: 'Explore Business Software',
    href: '/services/custom-software-development',
    backgroundImage: '/images/services/custom-software.png',
    icon: <IconCodeWindow />,
  },
  {
    id: 'service-web-saas',
    slug: 'web-saas-product-development',
    title: 'Web & SaaS Product Development',
    description:
      'Manage finance, sales, inventory, purchasing, and employees with\ncustomized ERP solutions that streamline business operations and reporting.',
    ctaLabel: 'Web & SaaS Development',
    href: '/services/web-saas-product-development',
    backgroundImage: '/images/services/web-saas.png',
    icon: <IconMonitorSettings />,
  },
  {
    id: 'service-mobile-apps',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    description:
      'Create user-friendly Android and iOS applications with scalable backends,\nintuitive interfaces, and reliable integrations.',
    ctaLabel: 'Explore Mobile Apps',
    href: '/services/mobile-app-development',
    backgroundImage: '/images/services/mobile-app.png',
    icon: <IconPhone />,
  },
  {
    id: 'service-ecommerce',
    slug: 'ecommerce-shopify-solutions',
    title: 'ECommerce & Shopify Solutions',
    description:
      'Build online stores, B2B commerce portals, and scalable digital shopping\nexperiences with payment, shipping, and inventory integrations.',
    ctaLabel: 'eCommerce Solutions',
    href: '/services/ecommerce-shopify-solutions',
    backgroundImage: '/images/case-studies/jockey-australia.jpg',
    icon: <IconShoppingBag />,
  },
  {
    id: 'service-cloud-devops',
    slug: 'cloud-devops-platform-engineering',
    title: 'Cloud, DevOps & Platform Engineering',
    description:
      'Scale with confidence through secure cloud architecture and automated\ndeployment, keeping platforms fast, stable and cost-efficient.',
    ctaLabel: 'Cloud Solutions',
    href: '/services/cloud-devops-platform-engineering',
    backgroundImage: '/images/contact-keyboard.jpg',
    icon: <IconCloudShield />,
  },
  {
    id: 'service-cybersecurity',
    slug: 'cybersecurity-managed-it',
    title: 'Cybersecurity & Managed IT Services',
    description:
      'Protect digital systems, maintain application health, resolve technical issues,\nand keep your business applications secure and reliable.',
    ctaLabel: 'Security & Support',
    href: '/services/cybersecurity-managed-it',
    backgroundImage: '/images/contact-hero-building.jpg',
    icon: <IconShieldCheck />,
  },
  {
    id: 'service-ui-ux-design',
    slug: 'ui-ux-product-design',
    title: 'UI/UX & Product Design',
    description:
      'Design that makes people act. We turn research and testing into clear, on-\nbrand interfaces that increase sign-ups, sales and retention.',
    ctaLabel: 'Explore Product Design',
    href: '/services/ui-ux-product-design',
    backgroundImage: '/images/case-studies/patient-financing.jpg',
    icon: <IconUiDesign />,
  },
  {
    id: 'service-white-label-teams',
    slug: 'white-label-development-dedicated-teams',
    title: 'White-Label Development & Dedicated Teams',
    description:
      'Extend your team without the hiring burden. Work with us as a confidential\ndelivery partner, or add dedicated developers to your own workflow.',
    ctaLabel: 'Explore Digital Growth',
    href: '/services/white-label-development-dedicated-teams',
    backgroundImage: '/images/about/who-we-are.jpg',
    icon: <IconTeam />,
  },
  {
    id: 'service-amazon-ebc',
    slug: 'amazon-ebc-brand-content',
    title: 'Amazon EBC & Brand Content',
    description:
      'Enhance your Amazon product listings with compelling A+ Content, engaging\nBrand Stories, and professional Brand Stores that build trust, showcase your\nbrand, and drive more conversions.',
    ctaLabel: 'Explore Amazon EBC Services',
    href: '/services/amazon-ebc-brand-content',
    backgroundImage: '/images/case-studies/jockey-australia.jpg',
    icon: <IconStoreFront />,
  },
];

const DEFAULT_SECTION_DESCRIPTION =
  'We offer a comprehensive range of digital services designed to meet your evolving business needs. From web and software\ndevelopment to digital marketing, AI-powered solutions, and business automation, our expertise helps streamline operations,\nenhance customer experiences, improve efficiency, and create new opportunities for sustainable business growth.';

function isMeaningfulMediaUrl(url?: string | null): url is string {
  if (!url) return false;
  const trimmed = url.trim();
  if (!trimmed) return false;
  return !trimmed.includes('placeholder');
}

function resolveServiceIconBySlug(slug: string): ReactNode {
  const key = slug.toLowerCase();
  if (key.includes('ai')) return <IconAiChip />;
  if (key.includes('marketing') || key.includes('growth')) return <IconMegaphone />;
  if (key.includes('software') || key.includes('erp')) return <IconCodeWindow />;
  if (key.includes('web') || key.includes('saas')) return <IconMonitorSettings />;
  if (key.includes('mobile') || key.includes('app')) return <IconPhone />;
  if (key.includes('ecommerce') || key.includes('shopify')) return <IconShoppingBag />;
  if (key.includes('cloud') || key.includes('devops')) return <IconCloudShield />;
  if (key.includes('cyber') || key.includes('security')) return <IconShieldCheck />;
  if (key.includes('ui') || key.includes('ux') || key.includes('design')) return <IconUiDesign />;
  if (key.includes('team') || key.includes('white-label')) return <IconTeam />;
  if (key.includes('amazon') || key.includes('ebc')) return <IconStoreFront />;
  return <IconCodeWindow />;
}

/**
 * Service Grid section displayed on the /services overview page when clicking
 * the Services tab in the navbar, linking each card to its service detail page.
 */
export function ServiceGrid({
  section,
  fallbackServices,
}: {
  section?: ServiceGridSection;
  fallbackServices?: ServiceItem[];
}) {
  const pillText = cleanPill(section?.pill) || 'Services';
  const hasCustomHeading = Boolean(
    section?.headingPrefix?.trim() ||
      section?.headingSerif?.trim() ||
      section?.headingSuffix?.trim()
  );
  const headingPrefix = hasCustomHeading ? section?.headingPrefix?.trim() || '' : '';
  const headingSerif = hasCustomHeading
    ? section?.headingSerif?.trim() || ''
    : 'Solutions';
  const headingSuffix = hasCustomHeading
    ? section?.headingSuffix?.trim() || ''
    : 'We Deliver';
  const description = section?.description?.trim() || DEFAULT_SECTION_DESCRIPTION;

  const incomingServices =
    section?.services && section.services.length > 0
      ? section.services
      : fallbackServices && fallbackServices.length > 0
        ? fallbackServices
        : [];

  const filterToSelected =
    section?.showAllServices === false &&
    Boolean(section?.services && section.services.length > 0);

  const canonicalCards: ServiceGridCardItem[] = SERVICE_GRID_CARDS.filter((card) => {
    if (!filterToSelected) return true;
    return incomingServices.some((svc) => svc.slug === card.slug);
  }).map((defaultCard) => {
    const matchingService = incomingServices.find(
      (svc) => svc.slug === defaultCard.slug
    );
    if (!matchingService) {
      return defaultCard;
    }

    const strapiMediaUrl = getStrapiMediaUrl(matchingService.image?.url);
    const backgroundImage = isMeaningfulMediaUrl(strapiMediaUrl)
      ? strapiMediaUrl
      : defaultCard.backgroundImage;

    const href =
      matchingService.moreHref?.trim() ||
      `/services/${encodeURIComponent(matchingService.slug || defaultCard.slug)}`;

    return {
      ...defaultCard,
      href,
      backgroundImage,
    };
  });

  const canonicalSlugs = new Set(SERVICE_GRID_CARDS.map((card) => card.slug));
  const extraCards: ServiceGridCardItem[] = incomingServices
    .filter((svc) => svc.slug && !canonicalSlugs.has(svc.slug))
    .map((svc, idx) => {
      const strapiMediaUrl = getStrapiMediaUrl(svc.image?.url);
      return {
        id: `service-${svc.slug || idx}`,
        slug: svc.slug,
        title: svc.title,
        description: svc.description,
        ctaLabel: (svc.more || svc.moreLabel || `Explore ${svc.title}`).replace(/\s*[↗→]\s*$/, ''),
        href: svc.moreHref?.trim() || `/services/${encodeURIComponent(svc.slug)}`,
        backgroundImage: isMeaningfulMediaUrl(strapiMediaUrl)
          ? strapiMediaUrl
          : undefined,
        icon: resolveServiceIconBySlug(svc.slug),
      };
    });

  const cards = [...canonicalCards, ...extraCards];

  return (
    <section className="w-full bg-[#f5f6f8] py-12 md:py-16" aria-labelledby="services-title">
      <div className="section-container-80">
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="section-pill">{pillText}</span>
          <h2 className="section-heading mt-2 text-center" id="services-title">
            {renderHeadingParts(headingPrefix, headingSerif, headingSuffix)}
          </h2>
          <p className="section-description mx-auto mt-3 max-w-[660px] text-center">
            {renderTextWithBreaks(description)}
          </p>
        </div>

        <ul className="grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => {
            const cardStyle = card.backgroundImage
              ? ({
                  backgroundImage: `url('${card.backgroundImage}')`,
                } as CSSProperties)
              : undefined;

            return (
              <li
                key={card.id}
                id={card.id}
                className="group relative flex flex-col items-start justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white bg-cover bg-center p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#364e9c]/40 hover:shadow-md md:p-7"
                style={cardStyle}
              >
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95 transition-opacity duration-300 group-hover:from-white/90 group-hover:via-white/85"
                  aria-hidden="true"
                />
                <div className="relative z-10 flex flex-col items-start">
                  <span
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#f4f7ff] text-[#364e9c] shadow-sm"
                    aria-hidden="true"
                  >
                    {card.icon}
                  </span>
                  <h3 className="text-lg font-bold leading-snug text-[#20232a] md:text-xl">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#5c6473]">
                    {renderTextWithBreaks(card.description)}
                  </p>
                </div>
                <Link
                  className="relative z-10 mt-6 inline-flex items-center gap-2 rounded-full bg-[#364e9c] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#2a3e7d] md:text-sm"
                  href={card.href}
                >
                  <span>{card.ctaLabel}</span>
                  <WalstarButtonArrow width={16} height={16} strokeWidth={1.6} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
