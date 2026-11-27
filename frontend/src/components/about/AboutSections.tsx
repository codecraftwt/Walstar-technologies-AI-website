'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
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

function normalizeLinkedinUrl(url?: string | null): string {
  if (!url) return '';
  const trimmed = url.trim();
  if (!trimmed || trimmed === '#' || trimmed.startsWith('#')) return '';
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

const DEFAULT_EXECUTIVES: TeamMemberItem[] = [
  {
    name: 'Pratap Patil',
    role: 'CEO',
    linkedinUrl: 'https://www.linkedin.com/company/walstar-technologies-pvt-ltd/',
  },
  {
    name: 'Pramod Gaikwad',
    role: 'CTO',
    linkedinUrl: 'https://www.linkedin.com/company/walstar-technologies-pvt-ltd/',
  },
  {
    name: 'Megha Patil',
    role: 'Director',
    linkedinUrl: 'https://www.linkedin.com/company/walstar-technologies-pvt-ltd/',
  },
];

const DEFAULT_ADVISORY: TeamMemberItem[] = [
  {
    name: 'Vasant Manwadkar',
    role: 'Advisor',
    linkedinUrl: 'https://www.linkedin.com/company/walstar-technologies-pvt-ltd/',
  },
  {
    name: 'Strategic Advisor',
    role: 'Advisor',
    linkedinUrl: 'https://www.linkedin.com/company/walstar-technologies-pvt-ltd/',
  },
  {
    name: 'Technology Advisor',
    role: 'Advisor',
    linkedinUrl: 'https://www.linkedin.com/company/walstar-technologies-pvt-ltd/',
  },
];

const DEFAULT_SALES: TeamMemberItem[] = [
  {
    name: 'James Turner',
    role: 'Regional Sales\nManager (USA)',
    linkedinUrl: 'https://www.linkedin.com/company/walstar-technologies-pvt-ltd/',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Regional Sales\nManager (UK)',
    linkedinUrl: 'https://www.linkedin.com/company/walstar-technologies-pvt-ltd/',
  },
  {
    name: 'Michael Chen',
    role: 'Regional Sales\nManager (APAC)',
    linkedinUrl: 'https://www.linkedin.com/company/walstar-technologies-pvt-ltd/',
  },
  {
    name: 'David Miller',
    role: 'Enterprise Sales\nManager (USA)',
    linkedinUrl: 'https://www.linkedin.com/company/walstar-technologies-pvt-ltd/',
  },
  {
    name: 'Emma Watson',
    role: 'Strategic Accounts\nDirector (Global)',
    linkedinUrl: 'https://www.linkedin.com/company/walstar-technologies-pvt-ltd/',
  },
  {
    name: 'Robert Taylor',
    role: 'Regional Accounts\nManager (USA)',
    linkedinUrl: 'https://www.linkedin.com/company/walstar-technologies-pvt-ltd/',
  },
  {
    name: 'Alexander White',
    role: 'Technology Sales\nConsultant (Global)',
    linkedinUrl: 'https://www.linkedin.com/company/walstar-technologies-pvt-ltd/',
  },
  {
    name: 'Sophia Clark',
    role: 'International Business\nDevelopment',
    linkedinUrl: 'https://www.linkedin.com/company/walstar-technologies-pvt-ltd/',
  },
];

function TeamMemberCard({
  member,
  variant,
  index = 0,
}: {
  member: TeamMemberItem;
  variant: 'executive' | 'advisory' | 'sales' | 'avatar';
  index?: number;
}) {
  const photoUrl = getStrapiMediaUrl(member.photo?.url) || STRAPI_IMAGE_PLACEHOLDER;
  const isExec = variant === 'executive';
  const variantClass = isExec
    ? 'pp executive-member-card team-member-card'
    : variant === 'sales'
    ? 'av sales-member-card team-member-card'
    : 'av advisory-member-card team-member-card';
  const stateClass = photoUrl
    ? variantClass
    : `${variantClass} ${isExec ? 'pp--placeholder' : 'av--placeholder'}`;

  const fallbackList = isExec
    ? DEFAULT_EXECUTIVES
    : variant === 'sales'
    ? DEFAULT_SALES
    : DEFAULT_ADVISORY;
  const fallback = fallbackList[index % fallbackList.length];

  const displayName = member.name?.trim() || fallback.name;
  const trimmedRole = member.role?.trim();
  const isGenericRole = !trimmedRole || trimmedRole.toLowerCase() === 'executive';
  const displayRole = isGenericRole ? fallback.role : trimmedRole;
  const rawLinkedinHref = member.linkedinUrl?.trim() || fallback.linkedinUrl;
  const linkedinHref = normalizeLinkedinUrl(rawLinkedinHref);

  const linkedinIcon = (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3.5C4.14 3.5 3.25 4.39 3.25 5.5C3.25 6.6 4.14 7.5 5.25 7.5C6.35 7.5 7.25 6.6 7.25 5.5C7.25 4.39 6.35 3.5 5.25 3.5ZM20.44 13.02C20.44 9.88 18.76 8.22 16.22 8.22C14.43 8.22 13.45 9.2 12.97 9.95V8.5H9.61C9.65 9.48 9.61 19.5 9.61 19.5H12.97V13.36C12.97 13.03 13 12.7 13.1 12.46C13.36 11.8 13.95 11.12 14.95 11.12C16.25 11.12 17.06 12.06 17.06 13.48V19.5H20.44V13.02Z" />
    </svg>
  );

  return (
    <div
      className={stateClass}
      role={photoUrl ? undefined : 'img'}
      aria-label={photoUrl ? undefined : displayName || displayRole || 'Team member'}
      tabIndex={0}
    >
      {photoUrl ? (
        <Image
          src={photoUrl}
          alt={member.photo?.alternativeText || displayName || displayRole || 'Team member'}
          fill
          sizes="(max-width: 560px) 92vw, (max-width: 900px) 46vw, 24vw"
          className="team-member-photo"
        />
      ) : null}

      <div className="chip2 team-member-info">
        <div className="team-member-meta">
          <span className="team-member-name">{displayName}</span>
          {displayRole ? (
            <span className="team-member-role">{renderMultilineText(displayRole)}</span>
          ) : null}
        </div>
        {linkedinHref ? (
          <a
            href={linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="team-member-linkedin"
            aria-label={`${displayName || 'Team member'} LinkedIn profile`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {linkedinIcon}
          </a>
        ) : null}
      </div>
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

const DEFAULT_ABOUT_STATS = [
  { value: '08', label: 'Products\nDeveloped' },
  { value: '10', label: 'Core Service\nCategories' },
  { value: '02', label: 'ISO Quality\nCertifications' },
  { value: '12', label: 'Industries\nServed' },
];

export function AboutBlock({ section }: { section: AboutSection }) {
  const primaryImgUrl = getStrapiMediaUrl(section.primaryImage?.url) || '/images/office-building.jpg';
  const secondaryImgUrl = getStrapiMediaUrl(section.secondaryImage?.url) || '/images/office-team.jpg';

  return (
    <section className="w-full bg-[#f5f6f8] py-10" id="about">
      <div className="section-container-80 grid grid-cols-1 items-center gap-8 lg:grid-cols-[9fr_11fr] lg:gap-12">
        {/* Left - Image Composition */}
        <div
          className="relative flex min-h-[280px] items-center md:min-h-[390px]"
          aria-hidden={!primaryImgUrl && !secondaryImgUrl}
        >
          {/* Building Image */}
          <div className="relative h-[230px] w-[65%] overflow-hidden rounded-xl md:h-[380px]">
            <Image
              src={primaryImgUrl}
              alt={section.primaryImage?.alternativeText || 'Company office building'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 65vw, 40vw"
            />
          </div>

          {/* Team Image */}
          <div className="absolute bottom-0 right-0 z-10 h-[145px] w-[48%] overflow-hidden rounded-xl border-[5px] border-[#f5f6f8] md:h-[215px] md:w-[48%]">
            <Image
              src={secondaryImgUrl}
              alt={section.secondaryImage?.alternativeText || 'Team working in office'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 48vw, 30vw"
            />
          </div>
        </div>

        {/* Right - Company Content */}
        <div className="flex flex-col gap-3">
          {/* Label */}
          {section.tag ? <span className="section-pill">{cleanPill(section.tag)}</span> : null}

          {/* Heading */}
          <h2 className="section-heading">
            <span className="block">
              {section.headingPrefix || 'Technology Expertise.\nBusiness-First Thinking.'}
            </span>
            <span className="block">
              <span className="section-heading-serif">
                {section.headingSerif || 'Reliable Delivery.'}
              </span>
              {section.headingSuffix ? (
                <span>{` ${section.headingSuffix}`}</span>
              ) : null}
            </span>
          </h2>

          {/* Description */}
          <p className="section-description mt-1">
            {section.description
              ? renderMultilineText(formatAboutDescription(section.description))
              : 'Walstar Technologies brings together business ideas and digital expertise to deliver innovative solutions. We combine technology, creativity and a result-oriented approach to help businesses grow, modernize and stay competitive in an evolving digital world.'}
          </p>

          {/* Rating Strip */}
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-white px-3 py-2 shadow-sm">
            <div className="flex items-center gap-1">
              <span className="text-xs tracking-wide text-amber-400">
                ★★★★★
              </span>
              <span className="text-[9px] font-medium text-gray-500">
                Client Satisfaction
              </span>
            </div>

            <div className="flex items-center gap-3 text-[10px] font-semibold text-gray-600">
              <span>Clutch</span>
              <span className="text-gray-300">|</span>
              <span>Google</span>
              <span className="text-gray-300">|</span>
              <span>GoodFirms</span>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-4 gap-2 rounded-lg bg-white p-3 shadow-sm md:p-4">
            {DEFAULT_ABOUT_STATS.map((stat, index) => (
              <div
                key={stat.value}
                className={`flex flex-col items-center text-center ${
                  index !== 0 ? 'border-l border-gray-100' : ''
                }`}
              >
                <span className="text-xl font-bold tracking-tight text-[#20232a] md:text-2xl">
                  {stat.value}
                </span>

                <span className="mt-1 whitespace-pre-line text-[12px] leading-tight text-gray-500 md:text-[14px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
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

function parseStatTarget(value: string): {
  prefix: string;
  suffix: string;
  targetNum: number;
  isK: boolean;
  isInfinity: boolean;
} {
  const clean = value.trim();
  if (clean === '∞' || clean.includes('∞')) {
    return { prefix: '', suffix: '', targetNum: 100, isK: false, isInfinity: true };
  }

  // Check for K: e.g. "1K+", "10K+", "1.5K+"
  const kMatch = clean.match(/^(\D*)(\d+(?:\.\d+)?)\s*k(.*)$/i);
  if (kMatch) {
    return {
      prefix: kMatch[1] || '',
      suffix: `K${kMatch[3] || ''}`,
      targetNum: parseFloat(kMatch[2]) * 1000,
      isK: true,
      isInfinity: false,
    };
  }

  // Normal number: e.g. "12+", "5+", "99.9%"
  const numMatch = clean.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  if (numMatch) {
    return {
      prefix: numMatch[1] || '',
      suffix: numMatch[3] || '',
      targetNum: parseFloat(numMatch[2]),
      isK: false,
      isInfinity: false,
    };
  }

  return { prefix: '', suffix: clean, targetNum: 0, isK: false, isInfinity: false };
}

function AnimatedStatValue({
  value,
  trigger,
  index = 0,
}: {
  value: string;
  trigger: boolean;
  index?: number;
}) {
  const [displayValue, setDisplayValue] = useState(trigger ? value : '0');
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!trigger) {
      setDisplayValue('0');
      setHasStarted(false);
      return;
    }

    const { prefix, suffix, targetNum, isK, isInfinity } = parseStatTarget(value);

    // Stagger start for each stat item
    const delayTimer = setTimeout(() => {
      setHasStarted(true);

      if (isInfinity) {
        // Numeric rolling sequence before resolving to infinity
        const frames = ['0', '8', '88', '999', '∞'];
        let frameIdx = 0;
        const interval = setInterval(() => {
          frameIdx++;
          if (frameIdx < frames.length) {
            setDisplayValue(frames[frameIdx]);
          } else {
            setDisplayValue('∞');
            clearInterval(interval);
          }
        }, 300);
        return () => clearInterval(interval);
      }

      let startTimestamp: number | null = null;
      const duration = 2200; // 2.2s smooth visible count up
      let rafId: number;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        const progress = Math.min(elapsed / duration, 1);
        // Quartic ease-out: 1 - (1 - progress)^4
        const ease = 1 - Math.pow(1 - progress, 4);

        if (isK) {
          const currentCount = Math.round(targetNum * ease);
          if (progress >= 0.98) {
            setDisplayValue(value);
          } else if (currentCount >= 1000) {
            const kVal = (currentCount / 1000).toFixed(1).replace(/\.0$/, '');
            setDisplayValue(`${prefix}${kVal}${suffix}`);
          } else {
            // Rapid rolling numbers before settling to 1K+
            const rawSuffix = suffix.replace(/^K/i, '');
            setDisplayValue(`${prefix}${currentCount}${rawSuffix}`);
          }
        } else {
          const isInt = !value.includes('.');
          const current = targetNum * ease;
          const formattedNum = isInt ? Math.round(current) : current.toFixed(1);
          setDisplayValue(`${prefix}${formattedNum}${suffix}`);
        }

        if (progress < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          setDisplayValue(value);
        }
      };

      rafId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(rafId);
    }, index * 160);

    return () => clearTimeout(delayTimer);
  }, [value, trigger, index]);

  return (
    <b
      className={`stat-value ${hasStarted ? 'stat-value--active' : ''}`}
      style={{
        fontVariantNumeric: 'tabular-nums',
        display: 'inline-block',
      }}
    >
      {displayValue}
    </b>
  );
}

export function JourneyStatsBlock({ section }: { section: JourneyStatsSection }) {
  const milestones = section.milestones ?? [];
  const stats = section.stats ?? [];
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
                <span className="tlv-node" aria-hidden="true">
                  <span className="tlv-node-ring">
                    <span className="tlv-node-dot" />
                  </span>
                </span>
                <small className="tlv-era">{milestone.era}</small>
                <h4 className="tlv-title">{milestone.title}</h4>
                <p className="tlv-desc">{renderMultilineText(milestone.description)}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {stats.length > 0 ? (
        <div className="stats" ref={statsRef}>
          {stats.map((stat, idx) => (
            <div key={`${stat.value}-${stat.id ?? idx}`} className="stat-item">
              <AnimatedStatValue value={stat.value} trigger={hasAnimated} index={idx} />
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

      {/* Interactive Drag & Auto-Scrolling Solutions Marquee */}
      <InteractiveSolutionsMarquee items={incomingItems} speed={speed} direction={direction} />
    </section>
  );
}

function InteractiveSolutionsMarquee({
  items,
  speed,
  direction,
}: {
  items: Array<{ number: string; title: string; category?: string | null; href?: string | null }>;
  speed: number;
  direction: 'left' | 'right';
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const posRef = useRef(0);
  const isDraggingRef = useRef(false);
  const isUserScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const startXRef = useRef(0);
  const startPosRef = useRef(0);
  const movedRef = useRef(false);
  const lastTimeRef = useRef<number>(performance.now());
  const rafRef = useRef<number | null>(null);
  const [isGrabbing, setIsGrabbing] = useState(false);

  // 3 duplicate cycles create a smooth infinite seamless marquee loop
  const marqueeItems = useMemo(() => [...items, ...items, ...items], [items]);

  useEffect(() => {
    lastTimeRef.current = performance.now();

    const loop = (now: number) => {
      const dt = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      const track = trackRef.current;
      if (track) {
        const cycleWidth = track.scrollWidth / 3;

        // Auto-scroll continuously unless actively dragging or wheel-scrolling
        if (!isDraggingRef.current && !isUserScrollingRef.current && cycleWidth > 0) {
          const pixelsPerSecond = cycleWidth / Math.max(8, speed);
          const safeDt = Math.min(dt, 0.05);
          const delta = pixelsPerSecond * safeDt * (direction === 'right' ? -1 : 1);

          posRef.current += delta;

          // Wrap around seamlessly
          if (posRef.current >= cycleWidth) {
            posRef.current -= cycleWidth;
          } else if (posRef.current < 0) {
            posRef.current += cycleWidth;
          }

          track.style.transform = `translate3d(-${posRef.current}px, 0, 0)`;
        }
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [speed, direction, marqueeItems]);

  // Global window release ensures drag never gets stuck even if released outside window
  useEffect(() => {
    const handleGlobalRelease = () => {
      if (isDraggingRef.current || isUserScrollingRef.current) {
        isDraggingRef.current = false;
        isUserScrollingRef.current = false;
        setIsGrabbing(false);
        lastTimeRef.current = performance.now();
      }
    };

    window.addEventListener('pointerup', handleGlobalRelease);
    window.addEventListener('pointercancel', handleGlobalRelease);
    return () => {
      window.removeEventListener('pointerup', handleGlobalRelease);
      window.removeEventListener('pointercancel', handleGlobalRelease);
    };
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    startPosRef.current = posRef.current;
    movedRef.current = false;
    setIsGrabbing(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - startXRef.current;
    if (Math.abs(dx) > 4) {
      movedRef.current = true;
    }
    const track = trackRef.current;
    if (!track) return;
    const cycleWidth = track.scrollWidth / 3;

    posRef.current = startPosRef.current - dx;

    // Wrap seamlessly while dragging
    if (cycleWidth > 0) {
      posRef.current = ((posRef.current % cycleWidth) + cycleWidth) % cycleWidth;
    }

    track.style.transform = `translate3d(-${posRef.current}px, 0, 0)`;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false;
    isUserScrollingRef.current = false;
    setIsGrabbing(false);
    lastTimeRef.current = performance.now();
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  // When mouse leaves the marquee div, instantly autostart scrolling smoothly
  const handleLeave = () => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = null;
    }
    isUserScrollingRef.current = false;
    isDraggingRef.current = false;
    setIsGrabbing(false);
    lastTimeRef.current = performance.now();
  };

  // Wheel scrubbing forward and backward
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    const cycleWidth = track.scrollWidth / 3;

    // Use deltaX if available, or deltaY for standard vertical mouse wheel
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) > 0) {
      isUserScrollingRef.current = true;
      posRef.current += delta;

      if (cycleWidth > 0) {
        posRef.current = ((posRef.current % cycleWidth) + cycleWidth) % cycleWidth;
      }

      track.style.transform = `translate3d(-${posRef.current}px, 0, 0)`;

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isUserScrollingRef.current = false;
        lastTimeRef.current = performance.now();
      }, 70);
    }
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (movedRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div
      className={`sol-marquee-viewport sol-marquee-viewport--interactive ${isGrabbing ? 'is-grabbing' : ''}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onPointerLeave={handleLeave}
      onMouseLeave={handleLeave}
      onWheel={handleWheel}
      style={{
        overflow: 'hidden',
        cursor: isGrabbing ? 'grabbing' : 'grab',
        touchAction: 'pan-y',
      }}
    >
      <div
        ref={trackRef}
        className="sol-marquee-track sol-marquee-track--static"
        style={{ willChange: 'transform' }}
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
              <Link
                key={key}
                href={item.href}
                className={cardClass}
                onClick={handleCardClick}
                draggable={false}
              >
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
  const [activeRowIdx, setActiveRowIdx] = useState<number | null>(null);
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
              const isRowActive = activeRowIdx === idx;
              return (
                <div
                  key={`${reason.title}-${reason.id ?? idx}`}
                  className={`row ${isRowActive ? 'is-highlighted' : ''}`}
                  onMouseEnter={() => setActiveRowIdx(idx)}
                  onMouseLeave={() => setActiveRowIdx(null)}
                  onClick={() => setActiveRowIdx((prev) => (prev === idx ? null : idx))}
                >
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

function formatExecutiveQuote(quote?: string | null): string | null | undefined {
  if (!quote) return quote;
  const trimmed = quote.trim();
  if (
    trimmed.toLowerCase().includes('quality is not') &&
    trimmed.toLowerCase().includes('foundation')
  ) {
    return '“Quality Is Not\nOptional. It Is Our\nFoundation.”';
  }
  return quote;
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
              <em className="team-quote-text">{renderMultilineText(formatExecutiveQuote(section.executiveQuote))}</em>
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
              index={idx}
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
                  variant="advisory"
                  index={idx}
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
                  variant="sales"
                  index={idx}
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
