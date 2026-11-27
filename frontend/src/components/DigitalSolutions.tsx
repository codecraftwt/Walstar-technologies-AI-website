import React from 'react';
import type { DigitalSolutionsSection } from '@/types/strapi';

const DIGITAL_SOLUTIONS = [
  { title: 'Healthcare', color: 'bg-[#DFF1FF]' },
  { title: 'eCommerce & Retail', color: 'bg-[#DFF1FF]' },
  { title: 'Fashion & Apparel', color: 'bg-[#F8F6EF]' },
  { title: 'Education & E-Learning', color: 'bg-[#F8F6EF]' },
  { title: 'Real Estate', color: 'bg-[#F8F6EF]' },
  { title: 'Logistics & Transportation', color: 'bg-[#F8F6EF]' },
  { title: 'Hospitality & Travel', color: 'bg-[#DFF1FF]' },
  { title: 'SaaS & Technology', color: 'bg-[#F8F6EF]' },
  { title: 'Manufacturing', color: 'bg-[#F8F6EF]' },
  { title: 'Finance & Business Services', color: 'bg-[#DFF1FF]' },
  { title: 'Legal Services', color: 'bg-[#F8F6EF]' },
  { title: 'Startups & SMEs', color: 'bg-[#DFF1FF]' },
];

export default function DigitalSolutions({
  section,
}: {
  section?: DigitalSolutionsSection;
}) {
  const tag = section?.tag?.trim() || 'Digital Solutions';
  const headingPrefix =
    section?.headingPrefix?.trim() || 'Digital Solutions For Different';
  const headingSerif = section?.headingSerif?.trim() || 'Business Needs';
  const description =
    section?.description?.trim() ||
    'From healthcare and retail to logistics and SaaS, we build software, AI and digital growth solutions that fit how your industry actually works.';
  const items = section?.items?.length ? section.items : DIGITAL_SOLUTIONS;

  return (
    <section
      className="relative z-0 -mt-64 w-full bg-[#06213a] pt-72 pb-16 text-white md:-mt-125 md:pt-135 md:pb-20"
      id="digital-solutions"
    >
      <div className="section-container-80 flex flex-col items-center text-center">
        <span className="pill tag">{tag}</span>
        <h2 className="mt-4 text-3xl font-semibold leading-[1.12] tracking-tight text-white md:text-4xl lg:text-[42px]">
          {headingPrefix}
          <br />
          <span className="section-heading-serif">
            {headingSerif}
          </span>
        </h2>
        <p className="mt-3 max-w-xl text-xs leading-relaxed text-white/75 md:text-sm">
          {description}
        </p>
      </div>

      <div className="section-container-80 mt-10 grid grid-cols-2 gap-[17px] sm:grid-cols-3 lg:grid-cols-6">
        {items.map((item) => (
          <div
            key={item.title}
            className={`flex h-[105px] w-full flex-col items-center justify-start gap-3.5 rounded-[16px] px-3 pt-5 pb-3 text-center transition-transform duration-200 hover:-translate-y-1 sm:h-[115px] lg:h-[125px] lg:gap-4 lg:px-4 lg:pt-6 lg:pb-4 xl:h-[135px] ${item.color || 'bg-[#DFF1FF]'}`}
          >
            <div className="flex items-center justify-center text-[#0077ed]">
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
              </svg>
            </div>
            <span className="mt-1 text-center font-[Poppins,sans-serif] text-xs font-normal leading-tight tracking-[0] text-[#343434] sm:text-sm lg:text-[14px] xl:text-[15px]">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
