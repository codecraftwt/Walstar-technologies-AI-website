'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  cleanPill,
  renderHeadingParts,
  renderMultilineText,
} from '@/components/common/SectionPrimitives';
import { WalstarButton, WalstarButtonArrow } from '@/components/common/WalstarButton';
import { GlobalOfficesWorldMap } from '@/components/contact/GlobalOfficesWorldMap';
import { getStrapiMediaUrl, STRAPI_IMAGE_PLACEHOLDER } from '@/lib/strapi';
import type {
  AboutSection,
  GlobalOfficesSection,
  JourneyStatsSection,
  SolutionsGridSection,
  TeamMemberItem,
  TeamShowcaseSection,
  VisionMissionSection,
  WhoWeAreSection,
  WhyChooseSection,
  WhyChooseReason,
  TickerLabelItem,
  WorldMapPinItem,
} from '@/types/strapi';

const FLAG_BACKGROUNDS: Record<NonNullable<WorldMapPinItem['flagVariant']>, string> = {
  us: 'linear-gradient(#b22234 50%, #3c3b6e 50%)',
  in: 'linear-gradient(#f93 33%, #fff 33% 66%, #138808 66%)',
  au: '#1a2a8a',
  uk: 'linear-gradient(135deg, #012169 45%, #c8102e 45% 55%, #012169 55%)',
};

function isExternalHref(href: string): boolean {
  return href.startsWith('http://') || href.startsWith('https://');
}

function TeamMemberCard({
  member,
  variant,
}: {
  member: TeamMemberItem;
  variant: 'executive' | 'avatar';
}) {
  const photoUrl = getStrapiMediaUrl(member.photo?.url) || STRAPI_IMAGE_PLACEHOLDER;
  const baseClass = variant === 'executive' ? 'pp executive-member-card' : 'av advisory-member-card';
  const stateClass = photoUrl ? baseClass : `${baseClass} ${variant === 'executive' ? 'pp--placeholder' : 'av--placeholder'}`;
  const linkedinHref = member.linkedinUrl?.trim();

  const linkedinIcon = (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3.5C4.14 3.5 3.25 4.39 3.25 5.5C3.25 6.6 4.14 7.5 5.25 7.5C6.35 7.5 7.25 6.6 7.25 5.5C7.25 4.39 6.35 3.5 5.25 3.5ZM20.44 13.02C20.44 9.88 18.76 8.22 16.22 8.22C14.43 8.22 13.45 9.2 12.97 9.95V8.5H9.61C9.65 9.48 9.61 19.5 9.61 19.5H12.97V13.36C12.97 13.03 13 12.7 13.1 12.46C13.36 11.8 13.95 11.12 14.95 11.12C16.25 11.12 17.06 12.06 17.06 13.48V19.5H20.44V13.02Z" />
    </svg>
  );

  return (
    <div
      className={stateClass}
      role={photoUrl ? undefined : 'img'}
      aria-label={photoUrl ? undefined : member.name || member.role || 'Team member'}
    >
      {photoUrl ? (
        <Image
          src={photoUrl}
          alt={member.photo?.alternativeText || member.name || member.role || 'Team member'}
          fill
          sizes="(max-width: 560px) 92vw, (max-width: 900px) 46vw, 24vw"
          className="team-member-photo"
        />
      ) : null}

      {member.name ? (
        <div className="chip2 team-member-info">
          <div className="team-member-meta">
            <b className="team-member-name">{member.name}</b>
            {member.role ? (
              <span className="team-member-role">{renderMultilineText(member.role)}</span>
            ) : null}
          </div>
          {linkedinHref ? (
            isExternalHref(linkedinHref) ? (
              <a
                href={linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                className="team-member-linkedin"
                aria-label={`${member.name} LinkedIn profile`}
              >
                {linkedinIcon}
              </a>
            ) : (
              <Link
                href={linkedinHref}
                className="team-member-linkedin"
                aria-label={`${member.name} profile`}
              >
                {linkedinIcon}
              </Link>
            )
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function formatAboutDescription(desc?: string | null): string | null | undefined {
  if (!desc) return desc;
  if (!desc.includes('\n') && desc.includes('intelligent agents') && desc.includes('connected business workflows')) {
    return desc
      .replace(
        'connected business workflows, we design and implement',
        'connected business workflows, we design\nand implement'
      )
      .replace(
        'help businesses save time, improve decisions,',
        'help businesses save time,\nimprove decisions,'
      );
  }
  return desc;
}

export function AboutBlock({ section }: { section: AboutSection }) {
  const primaryImgUrl = getStrapiMediaUrl(section.primaryImage?.url) || STRAPI_IMAGE_PLACEHOLDER;
  const secondaryImgUrl = getStrapiMediaUrl(section.secondaryImage?.url) || STRAPI_IMAGE_PLACEHOLDER;
  const highlightIconUrl = getStrapiMediaUrl(section.highlightIcon?.url) || '/images/about/about-highlight-icon.png';

  return (
    <section className="about" id="about">
      <div className="wrap grid section">
        <div className="photos" aria-hidden={!primaryImgUrl && !secondaryImgUrl}>
          <div className={primaryImgUrl ? 'p1 overflow-hidden' : 'p1 p1--empty overflow-hidden'}>
            {primaryImgUrl ? (
              <Image
                src={primaryImgUrl}
                alt={section.primaryImage?.alternativeText || 'About Walstar'}
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                className="object-cover"
              />
            ) : null}
          </div>
          <div className={secondaryImgUrl ? 'p2 overflow-hidden' : 'p2 p2--empty overflow-hidden'}>
            {secondaryImgUrl ? (
              <Image
                src={secondaryImgUrl}
                alt={section.secondaryImage?.alternativeText || 'Walstar team'}
                fill
                sizes="(max-width: 900px) 60vw, 25vw"
                className="object-cover"
              />
            ) : null}
          </div>
        </div>
        <div>
          {section.tag ? <span className="pill about-pill">{cleanPill(section.tag)}</span> : null}
          <h2 className="about-heading about-intro-heading">
            <span className="about-heading-row about-heading-row--prefix">
              <span className="about-heading-text">{section.headingPrefix}</span>
            </span>
            <span className="about-heading-row about-heading-row--serif">
              {section.headingSerif ? (
                <span className="serif about-heading-serif">{section.headingSerif}</span>
              ) : null}
              {section.headingSuffix ? (
                <span className="about-heading-suffix">{` ${section.headingSuffix}`}</span>
              ) : null}
            </span>
          </h2>
          {section.description ? (
            <p className="lead about-lead-desc" style={{ marginTop: 14, color: '#666666' }}>
              {renderMultilineText(formatAboutDescription(section.description))}
            </p>
          ) : null}
          {section.highlightTitle ? (
            <div className="mini">
              <i className="about-mini-icon">
                {highlightIconUrl ? (
                  <Image
                    src={highlightIconUrl}
                    alt={section.highlightIcon?.alternativeText || section.highlightTitle}
                    width={26}
                    height={26}
                  />
                ) : (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect
                      x="6"
                      y="6"
                      width="12"
                      height="12"
                      rx="3"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M12 9V15M9 12H15M9 3V6M15 3V6M9 18V21M15 18V21M3 9H6M3 15H6M18 9H21M18 15H21"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </i>
              <div className="mini-content">
                <h4 className="mini-title">{section.highlightTitle}</h4>
                <p className="mini-desc">{section.highlightDescription}</p>
              </div>
            </div>
          ) : null}
          {section.ctaLabel ? (
            <WalstarButton variant="orange" href={section.ctaHref || '/about-us'}>
              {section.ctaLabel}
            </WalstarButton>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function WhoWeAreBlock({ section }: { section: WhoWeAreSection }) {
  const imageUrl = getStrapiMediaUrl(section.image?.url) || STRAPI_IMAGE_PLACEHOLDER;
  const rawPill = section.pill || 'Who we are';
  const pillText = cleanPill(rawPill) || 'Who we are';
  const prefix = section.headingPrefix?.trim() || 'A trusted partner for';
  const serif = section.headingSerif || 'what’s next';

  return (
    <section className="sec who" id="who-we-are">
      <div className="wrap">
        <div
          className={imageUrl ? 'ph relative overflow-hidden' : 'ph'}
          role={imageUrl ? undefined : 'img'}
          aria-label={imageUrl ? undefined : pillText}
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={section.image?.alternativeText || pillText}
              fill
              sizes="(max-width: 900px) 100vw, (max-width: 1920px) 696px, 696px"
              priority
              className="object-cover"
            />
          ) : null}
        </div>

        <div>
          <span className="pill who-pill">{pillText}</span>
          <h2 className="about-heading who-heading">
            <span className="about-heading-row who-heading-row who-heading-row--prefix">
              <span className="who-heading-text">{prefix}</span>
            </span>
            <span className="about-heading-row who-heading-row who-heading-row--serif">
              <span className="serif who-heading-serif">{serif}</span>
              {section.headingSuffix ? (
                <span className="who-heading-suffix">{` ${section.headingSuffix}`}</span>
              ) : null}
            </span>
          </h2>
          {section.description ? (
            <div className="about-lead-desc who-desc" style={{ marginTop: 14 }}>
              {section.description
                .split('\n')
                .map((para) => para.trim())
                .filter(Boolean)
                .map((para, idx) => (
                  <p key={idx} className="who-desc-p">
                    {para}
                  </p>
                ))}
            </div>
          ) : null}
          {section.ctaLabel ? (
            <Link className="go who-cta" href={section.ctaHref || '/service-1'}>
              <i aria-hidden="true" className="go-icon">
                <WalstarButtonArrow />
              </i>
              <span className="go-text">{section.ctaLabel.replace(/\s*[↗→]\s*$/, '')} </span>
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function JourneyStatsBlock({ section }: { section: JourneyStatsSection }) {
  const milestones = section.milestones ?? [];
  const stats = section.stats ?? [];
  const rawPill = section.pill || 'The Walstar Way';
  const pillText = cleanPill(rawPill) || 'The Walstar Way';

  const wayPrefix = section.headingPrefix?.trim() || 'From first idea to';
  const waySerif = section.headingSerif?.trim() || 'lasting';
  const rawSuffix = section.headingSuffix?.trim();
  const waySuffix =
    rawSuffix &&
    rawSuffix.toLowerCase() !== waySerif.toLowerCase() &&
    !waySerif.toLowerCase().endsWith(rawSuffix.toLowerCase())
      ? rawSuffix
      : null;

  return (
    <section className="way" id="journey-stats">
      <div className="wrap">
        <div>
          <span className="pill way-pill">{pillText}</span>
          <h2 className="about-heading way-heading">
            <span className="about-heading-row way-heading-row way-heading-row--prefix">
              <span className="way-heading-text">{wayPrefix} </span>
              <span className="serif way-heading-serif">{waySerif}</span>
            </span>
            {waySuffix ? (
              <span className="about-heading-row way-heading-row way-heading-row--suffix">
                <span className="serif way-heading-serif">{waySuffix}</span>
              </span>
            ) : null}
          </h2>
          {section.description ? (
            <p className="about-lead-desc way-desc" style={{ marginTop: 14 }}>
              {renderMultilineText(section.description)}
            </p>
          ) : null}
        </div>

        {milestones.length > 0 ? (
          <div className="tlv">
            {milestones.map((milestone, idx) => (
              <div
                key={`${milestone.era}-${milestone.id ?? idx}`}
                className={milestone.isCurrent ? 'tlv-item now' : 'tlv-item'}
              >
                <small className="tlv-era">{milestone.era}</small>
                <h4 className="tlv-title">{milestone.title}</h4>
                <p className="tlv-desc">{renderMultilineText(milestone.description)}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {stats.length > 0 ? (
        <div className="stats">
          {stats.map((stat, idx) => (
            <div key={`${stat.value}-${stat.id ?? idx}`} className="stat-item">
              <b className="stat-value">{stat.value}</b>
              <span className="stat-label">{renderMultilineText(stat.label)}</span>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}

const FALLBACK_10_SOLUTIONS = [
  {
    number: '01',
    title: 'AI & Automation Solutions',
    category: 'AI-Powered Business Automation',
    href: '/services/ai-solutions-business-automation',
  },
  {
    number: '02',
    title: 'Digital Marketing & Performance Growth',
    category: 'Search, Social & Brand Visibility',
    href: '/services/digital-marketing-performance-growth',
  },
  {
    number: '03',
    title: 'Custom Software Development',
    category: 'Digital Growth Solutions',
    href: '/services/custom-software-development',
  },
  {
    number: '04',
    title: 'Web & SaaS Product Development',
    category: 'Websites and SaaS built to scale.',
    href: '/services/web-saas-product-development',
  },
  {
    number: '05',
    title: 'Mobile App Development',
    category: 'Scalable Android and iOS apps.',
    href: '/services/mobile-app-development',
  },
  {
    number: '06',
    title: 'ECommerce & Shopify Solutions',
    category: 'Seamless online shopping solutions',
    href: '/services/ecommerce-shopify-solutions',
  },
  {
    number: '07',
    title: 'Cloud & DevOps Engineering',
    category: 'Scalable Cloud Infrastructure',
    href: '/services/cloud-devops-engineering',
  },
  {
    number: '08',
    title: 'Cybersecurity & Data Protection',
    category: 'Secure enterprise solutions',
    href: '/services/cybersecurity-data-protection',
  },
  {
    number: '09',
    title: 'UI/UX & Product Design',
    category: 'Intuitive user experiences',
    href: '/services/ui-ux-design-branding',
  },
  {
    number: '10',
    title: 'Dedicated Development Teams',
    category: 'Pre-vetted engineering squads',
    href: '/services/dedicated-teams',
  },
];

export function SolutionsGridBlock({ section }: { section: SolutionsGridSection }) {
  const incomingItems =
    Array.isArray(section.items) && section.items.length > 0
      ? section.items
      : FALLBACK_10_SOLUTIONS;
  const rawPill = section.pill || 'What we do';
  const pillText = cleanPill(rawPill) || 'What we do';

  // Direction and speed are managed directly in the Strapi CMS Admin Panel
  const direction = section.direction === 'right' ? 'right' : 'left';
  const speed =
    typeof section.speedSeconds === 'number' && section.speedSeconds > 0
      ? section.speedSeconds
      : 30;

  // Support dynamic prefix from Strapi (single-line or multi-line)
  let line1 = 'Digital solutions';
  let line2Prefix = '';

  if (section.headingPrefix) {
    if (section.headingPrefix.includes('\n')) {
      const parts = section.headingPrefix.split('\n');
      line1 = parts[0].trim();
      line2Prefix = parts.slice(1).join(' ').trim() ? `${parts.slice(1).join(' ').trim()} ` : '';
    } else if (/built\s+to/i.test(section.headingPrefix)) {
      const parts = section.headingPrefix.split(/built\s+to/i);
      line1 = parts[0].trim() || 'Digital solutions';
      line2Prefix = 'built to ';
    } else {
      line1 = section.headingPrefix.trim();
      line2Prefix = (!section.headingSerif || section.headingSerif.trim().toLowerCase() === 'scale') ? 'built to ' : '';
    }
  } else {
    line1 = 'Digital solutions';
    line2Prefix = 'built to ';
  }

  const rawSerif = section.headingSerif?.trim() || 'Scale';
  const serifWord = rawSerif.charAt(0).toUpperCase() + rawSerif.slice(1);

  // Wrap subtitle text exactly to match reference spec
  const subtitleText = section.subtitle
    ? section.subtitle.replace(/(strategists,\s+and)\s+/i, '$1\n')
    : null;

  // 3 duplicate cycles create a smooth infinite seamless marquee loop
  const marqueeItems = [...incomingItems, ...incomingItems, ...incomingItems];

  return (
    <section className={section.hasTopOverlap !== false ? 'sec sol sol-marquee-sec about-solutions-marquee-section' : 'sec sol-marquee-sec about-solutions-marquee-section'} id="solutions-grid">
      <div className="wrap">
        <div className="hd2 sol-hd2" style={{ textAlign: 'center', marginBottom: 28 }}>
          <span className="pill sol-pill">{pillText}</span>
          <h2 className="about-heading sol-heading" style={{ textAlign: 'center' }}>
            <span className="about-heading-row sol-heading-row sol-heading-row--prefix">
              <span className="sol-heading-text">{line1}</span>
            </span>
            <span className="about-heading-row sol-heading-row sol-heading-row--suffix">
              {line2Prefix ? <span className="sol-heading-text">{line2Prefix}</span> : null}
              <span className="serif sol-heading-serif">{serifWord}</span>
              {section.headingSuffix ? (
                <span className="sol-heading-suffix">{` ${section.headingSuffix}`}</span>
              ) : null}
            </span>
          </h2>
          {subtitleText ? (
            <p className="about-lead-desc sol-desc" style={{ maxWidth: 620, margin: '14px auto 0', textAlign: 'center' }}>
              {renderMultilineText(subtitleText)}
            </p>
          ) : null}
        </div>
      </div>

      {/* Full-width continuous scrolling marquee row */}
      <div className="sol-marquee-viewport">
        <div
          className={`sol-marquee-track ${direction === 'right' ? 'is-reverse' : ''}`}
          style={{ animationDuration: `${speed}s` }}
        >
          {marqueeItems.map((item, idx) => {
            const key = `sol-${item.number}-${idx}`;
            const numVal = parseInt(item.number.replace(/\D/g, ''), 10) || (idx + 1);
            const isOrange = numVal % 2 === 0;
            const cardClass = `sc solution-marquee-card ${isOrange ? 'sol-card--orange solution-marquee-card--orange' : 'sol-card--blue solution-marquee-card--blue'}`;

            const cardBody = (
              <>
                <div className="n sc-header">
                  <span className="sc-number n-num sol-card-num">{item.number}</span>
                  <i aria-hidden="true" className="sc-arrow n-arrow">
                    <WalstarButtonArrow className="sc-arrow-icon" width={18} height={18} strokeWidth={1.5} />
                  </i>
                </div>
                <h4 className="sc-heading">{item.title}</h4>
                <div className="sc-divider sol-card-divider" aria-hidden="true" />
                {item.category ? <small className="sc-desc sol-card-category">{item.category}</small> : null}
              </>
            );

            if (item.href) {
              return (
                <Link key={key} href={item.href} className={cardClass}>
                  {cardBody}
                </Link>
              );
            }

            return (
              <article key={key} className={cardClass}>
                {cardBody}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const FALLBACK_WHY_REASONS: WhyChooseReason[] = [
  {
    id: 1,
    iconImage: { url: '/images/why-choose/web-app-solutions.png', alternativeText: 'Customized Web And App Solutions' },
    title: 'Customized Web And App Solutions',
    description:
      'We don’t believe in templates. Every website and application is built from scratch based on business objectives and user behavior.',
  },
  {
    id: 2,
    iconImage: { url: '/images/why-choose/industry-experience.png', alternativeText: '8+ Years Of Industry Experience' },
    title: '8+ Years Of Industry Experience',
    description:
      'Since 2017, we have successfully delivered 500+ digital projects across multiple industries worldwide.',
  },
  {
    id: 3,
    iconImage: { url: '/images/why-choose/cost-effective.png', alternativeText: 'Cost-Effective Development' },
    title: 'Cost-Effective Development',
    description:
      'We provide high-quality web design and software development at competitive pricing without compromising performance.',
  },
  {
    id: 4,
    iconImage: { url: '/images/why-choose/conversion-focused.png', alternativeText: 'Conversion-Focused Approach' },
    title: 'Conversion-Focused Approach',
    description:
      'Our websites are not just visually appealing. They are optimized for SEO, speed, and lead generation.',
  },
  {
    id: 5,
    iconImage: { url: '/images/why-choose/global-clientele.png', alternativeText: 'Global Clientele' },
    title: 'Global Clientele',
    description:
      'We proudly serve clients across India, the United States, Australia, and the United Kingdom.',
  },
];

const DEFAULT_WHY_ICONS = [
  '/images/why-choose/web-app-solutions.png',
  '/images/why-choose/industry-experience.png',
  '/images/why-choose/cost-effective.png',
  '/images/why-choose/conversion-focused.png',
  '/images/why-choose/global-clientele.png',
];

function resolveWhyIcon(reason: { iconImage?: { url: string } | null; title: string }, idx: number): string {
  const directUrl = getStrapiMediaUrl(reason.iconImage?.url);
  if (directUrl) return directUrl;
  const titleLower = reason.title.toLowerCase();
  if (titleLower.includes('custom') || titleLower.includes('web')) return '/images/why-choose/web-app-solutions.png';
  if (titleLower.includes('year') || titleLower.includes('experience')) return '/images/why-choose/industry-experience.png';
  if (titleLower.includes('cost') || titleLower.includes('effective')) return '/images/why-choose/cost-effective.png';
  if (titleLower.includes('conversion') || titleLower.includes('approach')) return '/images/why-choose/conversion-focused.png';
  if (titleLower.includes('global') || titleLower.includes('client')) return '/images/why-choose/global-clientele.png';
  return DEFAULT_WHY_ICONS[idx % DEFAULT_WHY_ICONS.length];
}

const DEFAULT_WHY_TICKER: TickerLabelItem[] = [
  {
    id: 1,
    label: 'Improve User Experience',
    iconImage: { url: '/images/why-choose/ticker-badge.png', alternativeText: 'Improve User Experience Badge' },
  },
  {
    id: 2,
    label: 'Increase Online Visibility',
    iconImage: { url: '/images/why-choose/ticker-badge.png', alternativeText: 'Increase Online Visibility Badge' },
  },
  {
    id: 3,
    label: 'Generate Qualified Leads',
    iconImage: { url: '/images/why-choose/ticker-badge.png', alternativeText: 'Generate Qualified Leads Badge' },
  },
  {
    id: 4,
    label: 'Boost Revenue Growth',
    iconImage: { url: '/images/why-choose/ticker-badge.png', alternativeText: 'Boost Revenue Growth Badge' },
  },
];

function resolveTickerIcon(item: TickerLabelItem): string {
  const directUrl = getStrapiMediaUrl(item.iconImage?.url);
  if (directUrl) return directUrl;
  return '/images/why-choose/ticker-badge.png';
}

export function WhyChooseBlock({ section }: { section: WhyChooseSection }) {
  const reasons =
    section.reasons && section.reasons.length > 0 ? section.reasons : FALLBACK_WHY_REASONS;
  const tickerItems =
    section.tickerItems && section.tickerItems.length > 0
      ? section.tickerItems
      : DEFAULT_WHY_TICKER;
  const rawPill = section.pill || 'Why choose Walstar';
  const pillText = cleanPill(rawPill) || 'Why choose Walstar';

  const whyPrefix = section.headingPrefix?.trim() || 'Built different.';
  const whySerif = section.headingSerif?.trim() || 'Built\nfor impact.';
  const serifLines = whySerif.split('\n');
  const firstSerifLine = serifLines[0];
  const remainingSerifLines = serifLines.slice(1).join(' ');

  return (
    <div className="whyw" id="why-choose">
      <section className="why">
        <div className="hd2 why-hd2" style={{ textAlign: 'center', marginBottom: 0 }}>
          <span className="pill why-pill">{pillText}</span>
          <h2 className="about-heading why-heading" style={{ textAlign: 'center' }}>
            <span className="about-heading-row why-heading-row why-heading-row--prefix">
              <span className="why-heading-text">{whyPrefix} </span>
              {firstSerifLine ? <span className="serif why-heading-serif">{firstSerifLine}</span> : null}
            </span>
            {remainingSerifLines || section.headingSuffix ? (
              <span className="about-heading-row why-heading-row why-heading-row--suffix">
                {remainingSerifLines ? <span className="serif why-heading-serif">{remainingSerifLines}</span> : null}
                {section.headingSuffix ? <span className="why-heading-text">{` ${section.headingSuffix}`}</span> : null}
              </span>
            ) : null}
          </h2>
        </div>

        {reasons.length > 0 ? (
          <div className="rows">
            {reasons.map((reason, idx) => {
              const iconUrl = resolveWhyIcon(reason, idx);
              return (
                <div key={`${reason.title}-${reason.id ?? idx}`} className="row">
                  <div className="why-icon-wrap" aria-hidden="true">
                    <Image
                      src={iconUrl}
                      alt={reason.title}
                      width={46}
                      height={46}
                      className="why-icon-img"
                    />
                  </div>
                  <h4 className="why-row-title">{reason.title}</h4>
                  <p className="why-row-desc">{renderMultilineText(reason.description)}</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </section>

      {tickerItems.length > 0 ? (
        <div className="tick" aria-label="Outcomes we drive">
          <div>
            {tickerItems.map((item, idx) => {
              const iconUrl = resolveTickerIcon(item);
              return (
                <span key={`tick-a-${item.id ?? idx}`} className="tick-item">
                  <Image
                    src={iconUrl}
                    alt=""
                    width={20}
                    height={20}
                    className="tick-icon"
                  />
                  <span className="tick-label">{item.label}</span>
                </span>
              );
            })}
            {tickerItems.map((item, idx) => {
              const iconUrl = resolveTickerIcon(item);
              return (
                <span key={`tick-b-${item.id ?? idx}`} className="tick-item" aria-hidden="true">
                  <Image
                    src={iconUrl}
                    alt=""
                    width={20}
                    height={20}
                    className="tick-icon"
                  />
                  <span className="tick-label">{item.label}</span>
                </span>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function VisionMissionBlock({ section }: { section: VisionMissionSection }) {
  const [hoveredCard, setHoveredCard] = useState<'v' | 'm' | null>(null);
  const rawPill = section.pill?.trim() || 'Our Purpose';
  const pillText = cleanPill(rawPill) || 'Our Purpose';

  const vmPrefix = section.headingPrefix?.trim() || 'Shaping the';
  const vmSerif = section.headingSerif?.trim() || 'future';
  const vmSuffix = (section.headingSuffix || '\ntogether').trim();

  return (
    <section className="sec vm-sec" id="vision-mission">
      <div className="wrap">
        <div className="hd2 vm-hd2 vision-mission-header-block" style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="pill vm-pill">{pillText}</span>
          <h2 className="about-heading vm-heading" style={{ textAlign: 'center' }}>
            <span className="about-heading-row vm-heading-row vm-heading-row--prefix">
              <span className="vm-heading-text">{vmPrefix} </span>
              {vmSerif ? <span className="serif vm-heading-serif">{vmSerif}</span> : null}
            </span>
            {vmSuffix ? (
              <span className="about-heading-row vm-heading-row vm-heading-row--suffix">
                <span className="vm-heading-text">{vmSuffix}</span>
              </span>
            ) : null}
          </h2>
        </div>

        <div className={`vm vision-mission-grid ${hoveredCard ? `has-hovered-${hoveredCard}` : ''}`}>
          <div
            className={`v vision-card ${hoveredCard === 'v' ? 'is-active is-expanded' : hoveredCard === 'm' ? 'is-shrunk' : ''}`}
            onMouseEnter={() => setHoveredCard('v')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="vm-corner-art" aria-hidden="true">
              <Image
                src="/images/about/hover-blur-corner-art.png"
                alt=""
                width={280}
                height={270}
                className="vm-corner-art-img"
              />
            </div>

            <div className="ico vision-mission-icon-box" aria-hidden="true">
              <Image
                src="/images/about/vision-icon-orange.png"
                alt="Our Vision"
                width={32}
                height={32}
                className="ico-img ico-img--orange"
                priority
              />
              <Image
                src="/images/about/vision-icon-blue.png"
                alt="Our Vision"
                width={32}
                height={32}
                className="ico-img ico-img--blue"
                priority
              />
            </div>
            <h3 className="vm-card-title">{section.visionTitle || 'Our Vision'}</h3>
            {section.visionDescription ? (
              <p className="about-lead-desc">{renderMultilineText(section.visionDescription)}</p>
            ) : null}
            {section.visionCtaLabel ? (
              <Link className="btn" href={section.visionCtaHref || '/contact'}>
                <span>{section.visionCtaLabel.replace(/\s*[↗→?]\s*$/, '').trim()}</span>
                <svg
                  className="vm-btn-arrow"
                  width="20.62"
                  height="15"
                  viewBox="0 0 21 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M1 7.5H19M19 7.5L12.5 1M19 7.5L12.5 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ) : null}
          </div>

          <div
            className={`m mission-card ${hoveredCard === 'm' ? 'is-active is-expanded' : hoveredCard === 'v' ? 'is-shrunk' : ''}`}
            onMouseEnter={() => setHoveredCard('m')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="vm-corner-art" aria-hidden="true">
              <Image
                src="/images/about/hover-blur-corner-art.png"
                alt=""
                width={280}
                height={270}
                className="vm-corner-art-img"
              />
            </div>

            <div className="ico vision-mission-icon-box" aria-hidden="true">
              <Image
                src="/images/about/mission-icon-orange.png"
                alt="Our Mission"
                width={32}
                height={32}
                className="ico-img ico-img--orange"
                priority
              />
              <Image
                src="/images/about/mission-icon-blue.png"
                alt="Our Mission"
                width={32}
                height={32}
                className="ico-img ico-img--blue"
                priority
              />
            </div>
            <h3 className="vm-card-title">{section.missionTitle || 'Our Mission'}</h3>
            {section.missionDescription ? (
              <p className="about-lead-desc">{renderMultilineText(section.missionDescription)}</p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TeamShowcaseBlock({ section }: { section: TeamShowcaseSection }) {
  const executives = section.executives ?? [];
  const advisoryMembers = section.advisoryMembers ?? [];
  const salesMembers = section.salesMembers ?? [];
  const rawPill = section.pill?.trim() || 'Our Leadership';
  const pillText = cleanPill(rawPill) || 'Our Leadership';

  const teamPrefix = section.headingPrefix?.trim() || 'We do things that';
  const teamSerif = section.headingSerif?.trim() || 'matter';
  const teamSuffix = section.headingSuffix?.trim();

  return (
    <section className="team" id="leadership">
      <div className="wrap">
        <div className="hd2 team-hd2" style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="pill team-pill">{pillText}</span>
          <h2 className="about-heading team-heading" style={{ textAlign: 'center' }}>
            <span className="about-heading-row team-heading-row team-heading-row--prefix">
              <span className="team-heading-text">{teamPrefix}</span>
            </span>
            <span className="about-heading-row team-heading-row team-heading-row--suffix">
              <span className="serif team-heading-serif">{teamSerif}</span>
              {teamSuffix ? <span className="team-heading-text">{` ${teamSuffix}`}</span> : null}
            </span>
          </h2>
        </div>

        <div className="ex executive-team-grid">
          <div className="q executive-quote-card">
            <h5 className="team-quote-label">{section.executiveLabel || 'Executive Team'}</h5>
            <b className="team-quote-mark" aria-hidden="true">
              <svg viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path
                  d="M0 15.2C0 7.4 4.7 2.2 12.6 0L14.8 4.4C10.5 5.9 8.4 8.6 8 12.6H14.5V28H0V15.2ZM20.5 15.2C20.5 7.4 25.2 2.2 33.1 0L35.3 4.4C31 5.9 28.9 8.6 28.5 12.6H35V28H20.5V15.2Z"
                  fill="currentColor"
                />
              </svg>
            </b>
            {section.executiveQuote ? (
              <em className="team-quote-text">{renderMultilineText(section.executiveQuote)}</em>
            ) : null}
            {section.executiveQuoteAuthor ? (
              <small className="team-quote-author">{section.executiveQuoteAuthor}</small>
            ) : null}
          </div>

          {executives.map((member, idx) => (
            <TeamMemberCard
              key={`exec-${member.id ?? idx}`}
              member={member}
              variant="executive"
            />
          ))}
        </div>

        {advisoryMembers.length > 0 ? (
          <>
            {section.advisoryTitle ? <h3 className="sub">{section.advisoryTitle}</h3> : null}
            <div className="g3 advisory-team-grid">
              {advisoryMembers.map((member, idx) => (
                <TeamMemberCard
                  key={`adv-${member.id ?? idx}`}
                  member={member}
                  variant="avatar"
                />
              ))}
            </div>
          </>
        ) : null}

        {salesMembers.length > 0 ? (
          <>
            {section.salesTitle ? <h3 className="sub">{section.salesTitle}</h3> : null}
            <div className="g4b sales-team-grid">
              {salesMembers.map((member, idx) => (
                <TeamMemberCard
                  key={`sales-${member.id ?? idx}`}
                  member={member}
                  variant="avatar"
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}

const DEFAULT_MAP_PINS: WorldMapPinItem[] = [
  { label: 'Dallas,TX USA', leftPercent: 12, topPx: 0, flagVariant: 'us' },
  { label: 'Kolhapur | Pune, India', leftPercent: 46, topPx: 14, flagVariant: 'in' },
  { label: 'Brisbane, QLD Australia', leftPercent: 64, topPx: 118, flagVariant: 'au' },
];

export function GlobalOfficesBlock({ section }: { section: GlobalOfficesSection }) {
  const rawPill = section.pill?.trim() || 'Global Reach';
  const pillText = cleanPill(rawPill) || 'Global Reach';

  const officesPrefix = section.headingPrefix?.trim() || 'Our global';
  const officesSerif = section.headingSerif?.trim() || 'offices';
  const officesSuffix = section.headingSuffix?.trim();

  return (
    <section className="sec offices" id="offices">
      <div className="wrap">
        <div className="hd2 offices-hd2" style={{ textAlign: 'center', marginBottom: 0 }}>
          <span className="pill offices-pill">{pillText}</span>
          <h2 className="about-heading offices-heading" style={{ textAlign: 'center' }}>
            <span className="about-heading-row offices-heading-row">
              <span className="offices-heading-text">{officesPrefix} </span>
              <span className="serif offices-heading-serif">{officesSerif}</span>
              {officesSuffix ? <span className="offices-heading-text">{` ${officesSuffix}`}</span> : null}
            </span>
          </h2>
        </div>

        {section.showWorldMap !== false ? (
          <GlobalOfficesWorldMap section={section} />
        ) : null}
      </div>
    </section>
  );
}
