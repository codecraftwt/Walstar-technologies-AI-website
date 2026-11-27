'use client';

import { useState } from 'react';
import { cleanPill, renderMultilineText } from '@/components/common/SectionPrimitives';
import type { FaqItemData, FaqSectionData } from '@/types/strapi';

export const DEFAULT_FAQS: FaqItemData[] = [
  {
    question: 'What services does Walstar Technologies offer?',
    answer:
      'We offer AI development and automation, cloud and DevOps, cybersecurity and IT management, IT and digital transformation, mobile app development, custom ERP and CRM software, eCommerce, web and SaaS development, UI/UX design, and white-label or dedicated development teams.',
    defaultOpen: true,
  },
  {
    question: 'Who do you work with?',
    answer:
      'We work with startups, small and medium-sized businesses, enterprises, and agencies looking for reliable technology and digital solutions.',
    defaultOpen: false,
  },
  {
    question: 'Can you add AI to our existing website or software?',
    answer:
      'Yes. We can integrate AI-powered features, intelligent automation, chatbots, and custom AI solutions into your existing website, applications, and business software.',
    defaultOpen: false,
  },
  {
    question: 'Can you work as a white-label partner for our agency?',
    answer:
      'Yes. We provide white-label development services, allowing agencies to deliver technology solutions to their clients under their own brand.',
    defaultOpen: false,
  },
  {
    question: 'Do you work across time zones?',
    answer:
      'Yes. We collaborate with clients across different countries and time zones, with flexible communication and project coordination.',
    defaultOpen: false,
  },
];

export function FaqSection({ section }: { section?: FaqSectionData }) {
  const faqs = section?.items && section.items.length > 0 ? section.items : DEFAULT_FAQS;
  const defaultIdx = faqs.findIndex((item) => Boolean(item.defaultOpen));
  const [activeIndex, setActiveIndex] = useState<number | null>(
    defaultIdx >= 0 ? defaultIdx : 0
  );

  const badgeText = cleanPill(section?.badgeText) || 'FAQ';
  const heading = section?.heading?.trim() || 'Common Questions About\nWorking';
  const headingAccent = section?.headingAccent?.trim() || 'With Walstar';

  return (
    <section
      className="section-container-90 py-10 md:py-14"
      id="faq"
      aria-labelledby="faq-title"
    >
      <div className="grid w-full grid-cols-1 gap-8 rounded-[22px] bg-[#DDEFFF] p-6 md:p-10 lg:h-[520px] lg:grid-cols-2 lg:gap-12 lg:px-16 lg:py-14">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <span className="mb-4 flex w-fit items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-wide text-gray-600">
            <span className="h-1.5 w-1.5 rounded-full bg-[#399cff]" aria-hidden="true" />
            {badgeText}
          </span>

          <h2
            id="faq-title"
            className="section-heading max-w-[480px]"
          >
            {renderMultilineText(heading)}{' '}
            {headingAccent ? (
              <span className="section-heading-serif">
                {headingAccent}
              </span>
            ) : null}
          </h2>
        </div>

        {/* Right - FAQ Accordion */}
        <div className="flex flex-col lg:h-full lg:overflow-y-auto lg:pr-1">
          <div className="my-auto flex flex-col gap-3">
            {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={`${faq.id ?? index}-${faq.question}`}
                className="overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-300 hover:shadow"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-[#20252c] md:text-[15px]">
                    {faq.question}
                  </span>

                  <svg
                    className={`h-3.5 w-3.5 shrink-0 text-gray-600 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-4 text-[10px] leading-[1.6] text-gray-500 md:text-[11px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
export { FaqSection as FAQSection };
