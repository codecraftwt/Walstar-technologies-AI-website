'use client';

import Image from 'next/image';
import {
  cleanPill,
  renderMultilineText,
} from '@/components/common/SectionPrimitives';
import { getStrapiMediaUrl, STRAPI_IMAGE_PLACEHOLDER } from '@/lib/strapi';
import type { TeamMemberItem, TeamShowcaseSection } from '@/types/strapi';

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
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true" focusable="false">
      <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3.5C4.14 3.5 3.25 4.39 3.25 5.5C3.25 6.6 4.14 7.5 5.25 7.5C6.35 7.5 7.25 6.6 7.25 5.5C7.25 4.39 6.35 3.5 5.25 3.5ZM20.44 13.02C20.44 9.88 18.76 8.22 16.22 8.22C14.43 8.22 13.45 9.2 12.97 9.95V8.5H9.61C9.65 9.48 9.61 19.5 9.61 19.5H12.97V13.36C12.97 13.03 13 12.7 13.1 12.46C13.36 11.8 13.95 11.12 14.95 11.12C16.25 11.12 17.06 12.06 17.06 13.48V19.5H20.44V13.02Z" />
    </svg>
  );

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-[#f1f3f6] ${
        isExec ? 'aspect-[3/4]' : 'aspect-[4/5]'
      }`}
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
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : null}

      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 rounded-xl bg-white/95 px-3.5 py-2.5 shadow-sm backdrop-blur-sm">
        <div className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-bold text-[#20232a]">{displayName}</span>
          {displayRole ? (
            <span className="text-xs leading-snug text-[#5c6473]">
              {renderMultilineText(displayRole)}
            </span>
          ) : null}
        </div>
        {linkedinHref ? (
          <a
            href={linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#364e9c]/10 text-[#364e9c] transition-colors hover:bg-[#364e9c] hover:text-white"
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
    <section className="w-full bg-[#f5f6f8] py-12 md:py-16" id="leadership">
      <div className="section-container-80">
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="section-pill">{pillText}</span>
          <h2 className="section-heading mt-2 text-center">
            <span className="block">{teamPrefix}</span>
            <span className="block">
              <span className="section-heading-serif">{teamSerif}</span>
              {teamSuffix ? <span>{` ${teamSuffix}`}</span> : null}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col justify-between rounded-2xl bg-[#364e9c] p-6 text-white shadow-sm">
            <div>
              <h5 className="text-xs font-semibold uppercase tracking-wider text-white/80">
                {section.executiveLabel || 'Executive Team'}
              </h5>
              <b className="mt-4 block text-[#fb923c]" aria-hidden="true">
                <svg className="h-7 w-9" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path
                    d="M0 15.2C0 7.4 4.7 2.2 12.6 0L14.8 4.4C10.5 5.9 8.4 8.6 8 12.6H14.5V28H0V15.2ZM20.5 15.2C20.5 7.4 25.2 2.2 33.1 0L35.3 4.4C31 5.9 28.9 8.6 28.5 12.6H35V28H20.5V15.2Z"
                    fill="currentColor"
                  />
                </svg>
              </b>
              {section.executiveQuote ? (
                <em className="mt-4 block font-serif text-xl font-normal not-italic leading-snug text-white md:text-2xl">
                  {renderMultilineText(formatExecutiveQuote(section.executiveQuote))}
                </em>
              ) : null}
            </div>
            {section.executiveQuoteAuthor ? (
              <small className="mt-6 block text-xs font-medium text-white/80">
                {section.executiveQuoteAuthor}
              </small>
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
          <div className="mt-12">
            {section.advisoryTitle ? (
              <h3 className="mb-5 text-center text-xl font-bold text-[#20232a] md:text-2xl">
                {section.advisoryTitle}
              </h3>
            ) : null}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {advisoryMembers.map((member, idx) => (
                <TeamMemberCard
                  key={`adv-${member.id ?? idx}`}
                  member={member}
                  variant="advisory"
                  index={idx}
                />
              ))}
            </div>
          </div>
        ) : null}

        {salesMembers.length > 0 ? (
          <div className="mt-12">
            {section.salesTitle ? (
              <h3 className="mb-5 text-center text-xl font-bold text-[#20232a] md:text-2xl">
                {section.salesTitle}
              </h3>
            ) : null}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {salesMembers.map((member, idx) => (
                <TeamMemberCard
                  key={`sales-${member.id ?? idx}`}
                  member={member}
                  variant="sales"
                  index={idx}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
