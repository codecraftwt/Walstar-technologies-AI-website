'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  cleanPill,
  renderMultilineText,
} from '@/components/common/SectionPrimitives';
import { getStrapiMediaUrl, STRAPI_IMAGE_PLACEHOLDER } from '@/lib/strapi';
import type { ContactInterestSection } from '@/types/strapi';

const INTEREST_STORAGE_KEY = 'walstar-contact-interests';
const INTEREST_EVENT = 'walstar-contact-interests';

const DEFAULT_INTEREST_OPTIONS = [
  'ERP & CRM Development',
  'Web Development',
  'AI & Automation Solutions',
  'Cyber security',
  'Digital Marketing',
  'Maintenance & Support',
  'UX Design',
  'Mobile App Development',
  'Amazon Service',
];

function splitLines(value?: string | null): string[] {
  return (value || '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
}

export function readStoredInterests(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.sessionStorage.getItem(INTEREST_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed)
      ? parsed.filter((item): item is string => typeof item === 'string')
      : [];
  } catch {
    return [];
  }
}

function persistInterests(values: string[]) {
  window.sessionStorage.setItem(INTEREST_STORAGE_KEY, JSON.stringify(values));
  window.dispatchEvent(
    new CustomEvent(INTEREST_EVENT, { detail: values })
  );
}

export function ContactInterestBlock({
  section,
}: {
  section: ContactInterestSection;
}) {
  const imageUrl =
    getStrapiMediaUrl(section.image?.url) || STRAPI_IMAGE_PLACEHOLDER;
  const rawPill = section.tag || 'Areas of Interest';
  const pillText = cleanPill(rawPill);
  const prefix = section.headingPrefix?.trim();
  const serif = section.headingSerif?.trim();
  const suffix = section.headingSuffix?.trim();

  const options =
    section.options?.map((item) => item.label).filter(Boolean) ??
    DEFAULT_INTEREST_OPTIONS;

  const optionRows: string[][] = [];
  for (let i = 0; i < options.length; i += 3) {
    optionRows.push(options.slice(i, i + 3));
  }

  const [selected, setSelected] = useState<string[]>(() => readStoredInterests());

  function toggleOption(label: string) {
    setSelected((prev) => {
      const next = prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label];
      persistInterests(next);
      return next;
    });
  }

  return (
    <section className="w-full bg-white py-12 md:py-16" id="contact-interest">
      <div className="section-container-80 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div
          className="relative min-h-[260px] w-full overflow-hidden rounded-2xl bg-[#f1f3f6] md:min-h-[380px]"
          role={imageUrl ? undefined : 'img'}
          aria-label={imageUrl ? undefined : pillText || 'Contact interest'}
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={
                section.image?.alternativeText ||
                pillText ||
                'Hands typing on a laptop keyboard'
              }
              fill
              sizes="(max-width: 900px) 100vw, (max-width: 1920px) 655px, 655px"
              priority
              className="object-cover"
            />
          ) : null}
        </div>

        <div className="flex flex-col items-start gap-4">
          {pillText ? <span className="section-pill">{pillText}</span> : null}
          <h2 className="section-heading">
            {prefix ? (
              <span className="block">{renderMultilineText(prefix)}</span>
            ) : null}
            {serif || suffix ? (
              <span className="block">
                {serif ? <span className="section-heading-serif">{serif}</span> : null}
                {suffix ? <span>{` ${suffix}`}</span> : null}
              </span>
            ) : null}
          </h2>
          {section.subtitle ? (
            <div className="section-description mt-1 flex flex-col gap-3">
              {splitLines(section.subtitle).map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          ) : null}

          {optionRows.length > 0 ? (
            <div className="mt-2 flex w-full flex-col gap-2.5" role="group" aria-label="Areas of interest">
              {optionRows.map((row, rowIdx) => (
                <div key={rowIdx} className="flex flex-wrap gap-2.5">
                  {row.map((label) => {
                    const isActive = selected.includes(label);
                    return (
                      <button
                        key={label}
                        type="button"
                        className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-200 md:text-sm ${
                          isActive
                            ? 'border-[#364e9c] bg-[#364e9c] text-white shadow-sm'
                            : 'border-gray-200 bg-[#f8f9fb] text-[#20232a] hover:border-[#364e9c]/50 hover:bg-[#f4f7ff]'
                        }`}
                        aria-pressed={isActive}
                        onClick={() => toggleOption(label)}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
