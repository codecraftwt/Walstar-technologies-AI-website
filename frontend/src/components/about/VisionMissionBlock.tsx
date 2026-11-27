'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  cleanPill,
  renderMultilineText,
} from '@/components/common/SectionPrimitives';
import type { VisionMissionSection } from '@/types/strapi';

export function VisionMissionBlock({ section }: { section: VisionMissionSection }) {
  const [hoveredCard, setHoveredCard] = useState<'v' | 'm' | null>(null);
  const rawPill = section.pill?.trim() || 'Our Purpose';
  const pillText = cleanPill(rawPill) || 'Our Purpose';

  const vmPrefix = section.headingPrefix?.trim() || 'Shaping the';
  const vmSerif = section.headingSerif?.trim() || 'future';
  const vmSuffix = (section.headingSuffix || '\ntogether').trim();

  const isVisionActive = hoveredCard === 'v';
  const isMissionActive = hoveredCard === 'm';

  return (
    <section className="w-full bg-white py-12 md:py-16" id="vision-mission">
      <div className="section-container-80">
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="section-pill">{pillText}</span>
          <h2 className="section-heading mt-2 text-center">
            <span className="block">
              <span>{vmPrefix} </span>
              {vmSerif ? <span className="section-heading-serif">{vmSerif}</span> : null}
            </span>
            {vmSuffix ? (
              <span className="block">
                <span>{vmSuffix}</span>
              </span>
            ) : null}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Vision Card */}
          <div
            className={`relative flex flex-col items-start gap-4 overflow-hidden rounded-2xl border p-7 transition-all duration-300 md:p-9 ${
              isVisionActive
                ? 'border-[#364e9c] bg-[#f4f7ff] shadow-md'
                : isMissionActive
                ? 'border-gray-200 bg-[#f8f9fb] opacity-90'
                : 'border-gray-200 bg-[#f8f9fb] hover:border-[#364e9c]/50'
            }`}
            onMouseEnter={() => setHoveredCard('v')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`pointer-events-none absolute -right-6 -top-6 transition-opacity duration-300 ${
                isVisionActive ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden="true"
            >
              <Image
                src="/images/about/hover-blur-corner-art.png"
                alt=""
                width={280}
                height={270}
                className="h-44 w-44 object-contain"
              />
            </div>

            <div
              className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm"
              aria-hidden="true"
            >
              <Image
                src="/images/about/vision-icon-orange.png"
                alt="Our Vision"
                width={32}
                height={32}
                className={`h-7 w-7 object-contain transition-opacity duration-200 ${
                  isVisionActive ? 'opacity-0' : 'opacity-100'
                }`}
                priority
              />
              <Image
                src="/images/about/vision-icon-blue.png"
                alt="Our Vision"
                width={32}
                height={32}
                className={`absolute h-7 w-7 object-contain transition-opacity duration-200 ${
                  isVisionActive ? 'opacity-100' : 'opacity-0'
                }`}
                priority
              />
            </div>

            <h3 className="text-xl font-bold text-[#20232a] md:text-2xl">
              {section.visionTitle || 'Our Vision'}
            </h3>
            {section.visionDescription ? (
              <p className="section-description">
                {renderMultilineText(section.visionDescription)}
              </p>
            ) : null}
            {section.visionCtaLabel ? (
              <Link
                className="mt-2 inline-flex items-center gap-2.5 rounded-full bg-[#364e9c] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2a3e7d]"
                href={section.visionCtaHref || '/contact'}
              >
                <span>{section.visionCtaLabel.replace(/\s*[↗→?]\s*$/, '').trim()}</span>
                <svg
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

          {/* Mission Card */}
          <div
            className={`relative flex flex-col items-start gap-4 overflow-hidden rounded-2xl border p-7 transition-all duration-300 md:p-9 ${
              isMissionActive
                ? 'border-[#364e9c] bg-[#f4f7ff] shadow-md'
                : isVisionActive
                ? 'border-gray-200 bg-[#f8f9fb] opacity-90'
                : 'border-gray-200 bg-[#f8f9fb] hover:border-[#364e9c]/50'
            }`}
            onMouseEnter={() => setHoveredCard('m')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`pointer-events-none absolute -right-6 -top-6 transition-opacity duration-300 ${
                isMissionActive ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden="true"
            >
              <Image
                src="/images/about/hover-blur-corner-art.png"
                alt=""
                width={280}
                height={270}
                className="h-44 w-44 object-contain"
              />
            </div>

            <div
              className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm"
              aria-hidden="true"
            >
              <Image
                src="/images/about/mission-icon-orange.png"
                alt="Our Mission"
                width={32}
                height={32}
                className={`h-7 w-7 object-contain transition-opacity duration-200 ${
                  isMissionActive ? 'opacity-0' : 'opacity-100'
                }`}
                priority
              />
              <Image
                src="/images/about/mission-icon-blue.png"
                alt="Our Mission"
                width={32}
                height={32}
                className={`absolute h-7 w-7 object-contain transition-opacity duration-200 ${
                  isMissionActive ? 'opacity-100' : 'opacity-0'
                }`}
                priority
              />
            </div>

            <h3 className="text-xl font-bold text-[#20232a] md:text-2xl">
              {section.missionTitle || 'Our Mission'}
            </h3>
            {section.missionDescription ? (
              <p className="section-description">
                {renderMultilineText(section.missionDescription)}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
