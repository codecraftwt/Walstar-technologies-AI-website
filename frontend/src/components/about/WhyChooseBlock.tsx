'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  cleanPill,
  renderMultilineText,
} from '@/components/common/SectionPrimitives';
import { getStrapiMediaUrl } from '@/lib/strapi';
import type {
  WhyChooseSection,
  WhyChooseReason,
  TickerLabelItem,
} from '@/types/strapi';

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
    <div className="w-full bg-[#f5f6f8]" id="why-choose">
      <section className="section-container-80 py-12 md:py-16">
        <div className="flex flex-col items-center text-center">
          <span className="section-pill">{pillText}</span>
          <h2 className="section-heading mt-2 text-center">
            <span className="block">
              <span>{whyPrefix} </span>
              {firstSerifLine ? <span className="section-heading-serif">{firstSerifLine}</span> : null}
            </span>
            {remainingSerifLines || section.headingSuffix ? (
              <span className="block">
                {remainingSerifLines ? <span className="section-heading-serif">{remainingSerifLines}</span> : null}
                {section.headingSuffix ? <span>{` ${section.headingSuffix}`}</span> : null}
              </span>
            ) : null}
          </h2>
        </div>

        {reasons.length > 0 ? (
          <div className="mt-8 flex flex-col divide-y divide-gray-200 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {reasons.map((reason, idx) => {
              const iconUrl = resolveWhyIcon(reason, idx);
              const isRowActive = activeRowIdx === idx;
              return (
                <div
                  key={`${reason.title}-${reason.id ?? idx}`}
                  className={`grid cursor-pointer grid-cols-1 items-center gap-4 px-6 py-5 transition-colors duration-200 md:grid-cols-[auto_1.2fr_1.8fr] md:gap-8 md:px-8 ${
                    isRowActive ? 'bg-[#f4f7ff]' : 'bg-white hover:bg-[#f9fafc]'
                  }`}
                  onMouseEnter={() => setActiveRowIdx(idx)}
                  onMouseLeave={() => setActiveRowIdx(null)}
                  onClick={() => setActiveRowIdx((prev) => (prev === idx ? null : idx))}
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f5f6f8] p-2"
                    aria-hidden="true"
                  >
                    <Image
                      src={iconUrl}
                      alt={reason.title}
                      width={46}
                      height={46}
                      className="h-9 w-9 object-contain"
                    />
                  </div>
                  <h4 className="text-base font-bold text-[#20232a] md:text-lg">
                    {reason.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-[#5c6473]">
                    {renderMultilineText(reason.description)}
                  </p>
                </div>
              );
            })}
          </div>
        ) : null}
      </section>

      {tickerItems.length > 0 ? (
        <div
          className="w-full overflow-hidden border-y border-gray-200 bg-white py-3.5"
          aria-label="Outcomes we drive"
        >
          <div className="flex w-max items-center gap-10 px-4">
            {tickerItems.map((item, idx) => {
              const iconUrl = resolveTickerIcon(item);
              return (
                <span
                  key={`tick-a-${item.id ?? idx}`}
                  className="inline-flex shrink-0 items-center gap-2.5 text-sm font-semibold text-[#20232a]"
                >
                  <Image
                    src={iconUrl}
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />
                  <span>{item.label}</span>
                </span>
              );
            })}
            {tickerItems.map((item, idx) => {
              const iconUrl = resolveTickerIcon(item);
              return (
                <span
                  key={`tick-b-${item.id ?? idx}`}
                  className="inline-flex shrink-0 items-center gap-2.5 text-sm font-semibold text-[#20232a]"
                  aria-hidden="true"
                >
                  <Image
                    src={iconUrl}
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />
                  <span>{item.label}</span>
                </span>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
