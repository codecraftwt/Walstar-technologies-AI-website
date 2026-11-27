import Image from 'next/image';
import { AnimatedStatNumber } from '@/components/about/AnimatedStatNumber';
import {
  cleanPill,
  renderMultilineText,
} from '@/components/common/SectionPrimitives';
import { getStrapiMediaUrl } from '@/lib/strapi';
import type { AboutSection } from '@/types/strapi';

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

const DEFAULT_RATING_PLATFORMS = [
  { name: 'Clutch', logoUrl: '/images/partners/clutch.png' },
  { name: 'Google', logoUrl: '/images/partners/google.png' },
  { name: 'GoodFirms', logoUrl: '/images/partners/goodfirms.png' },
];

export function AboutBlock({ section }: { section: AboutSection }) {
  const primaryImgUrl = getStrapiMediaUrl(section.primaryImage?.url) || '/images/office-building.jpg';
  const secondaryImgUrl = getStrapiMediaUrl(section.secondaryImage?.url) || '/images/office-team.jpg';
  const ratingPlatforms =
    section.ratingPlatforms && section.ratingPlatforms.length > 0
      ? section.ratingPlatforms.map((p) => ({
          name: p.name,
          logoUrl: getStrapiMediaUrl(p.logo?.url) || `/images/partners/${p.name.toLowerCase()}.png`,
        }))
      : DEFAULT_RATING_PLATFORMS;
  const stats =
    section.stats && section.stats.length > 0 ? section.stats : DEFAULT_ABOUT_STATS;

  return (
    <section className="w-full bg-[#f5f6f8] py-14 md:py-20" id="about">
      <div className="section-container-80 grid grid-cols-1 items-center gap-10 lg:grid-cols-[9fr_11fr] lg:gap-14">
        {/* Left - Image Composition */}
        <div
          className="relative flex min-h-[350px] items-start md:min-h-[435px]"
          aria-hidden={!primaryImgUrl && !secondaryImgUrl}
        >
          {/* Building Image */}
          <div className="relative h-[300px] w-[260px] overflow-hidden rounded-xl md:h-[380px] md:w-[335px]">
            <Image
              src={primaryImgUrl}
              alt={section.primaryImage?.alternativeText || 'Company office building'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 260px, 335px"
            />
          </div>

          {/* Team Image */}
          <div className="absolute bottom-0 right-0 z-10 h-[180px] w-[180px] overflow-hidden rounded-xl border-[5px] border-[#f5f6f8] md:h-[225px] md:w-[225px]">
            <Image
              src={secondaryImgUrl}
              alt={section.secondaryImage?.alternativeText || 'Team working in office'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 180px, 225px"
            />
          </div>
        </div>

        {/* Right - Company Content */}
        <div className="flex flex-col items-start gap-4">
          {/* Label */}
          {section.tag ? <span className="section-pill">{cleanPill(section.tag)}</span> : null}

          {/* Heading */}
          <h2 className="section-heading text-left">
            <span className="block whitespace-pre-line">
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
          <div className="flex w-full flex-wrap items-center justify-between gap-2 rounded-lg bg-[#eaf2ff] px-3.5 py-2.5 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-base tracking-wide text-amber-400">
                {'★'.repeat(section.ratingStars || 5)}
              </span>
              <span className="text-[14px] font-medium text-[#20232a]">
                {section.ratingLabel || 'Rated 4.7/5 on'}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {ratingPlatforms.map((platform, idx) => (
                <div key={platform.name} className="flex items-center gap-3">
                  {idx !== 0 ? <span className="text-gray-300">|</span> : null}
                  <Image
                    src={platform.logoUrl}
                    alt={platform.name}
                    width={64}
                    height={20}
                    className="h-5 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="grid w-full grid-cols-4 gap-2 rounded-lg bg-white p-3 shadow-sm md:p-4">
            {stats.map((stat, index) => (
              <div
                key={stat.value}
                className={`flex flex-col items-center text-center ${
                  index !== 0 ? 'border-l border-gray-100' : ''
                }`}
              >
                <AnimatedStatNumber value={stat.value} />

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
