'use client';

import { ConsultationForm } from '@/components/contact/ConsultationForm';
import {
  cleanPill,
  renderMultilineText,
} from '@/components/common/SectionPrimitives';
import type { ContactSectionBlock, SiteSetting } from '@/types/strapi';

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

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.02l-2.2 2.19Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
    </svg>
  );
}

export function ContactSectionView({
  section,
  siteSetting,
}: {
  section: ContactSectionBlock;
  siteSetting: SiteSetting;
}) {
  const rawPill = section.tag || 'Contact Walstar';
  const pillText = cleanPill(rawPill);
  const prefix = section.headingPrefix?.trim();
  const serif = section.headingSerif?.trim();

  const phones = splitLines(
    section.callPhones || siteSetting.officePhones
  );
  const emails = splitLines(
    section.emailAddresses ||
      [siteSetting.contactEmail, siteSetting.topbarEmail]
        .filter(Boolean)
        .join('\n')
  );

  const budgetOptions =
    section.budgetOptions?.map((item) => item.label).filter(Boolean) ?? [
      'Under $5,000',
      '$5,000 – $15,000',
      '$15,000 – $50,000',
      '$50,000+',
      'Not sure yet',
    ];

  const serviceOptions =
    section.serviceOptions?.map((item) => item.label).filter(Boolean) ??
    DEFAULT_INTEREST_OPTIONS;

  return (
    <section className="w-full bg-[#f5f6f8] py-12 md:py-16" id="contact-form">
      <div className="section-container-80 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
        <div className="flex flex-col items-start gap-4">
          {pillText ? <span className="section-pill">{pillText}</span> : null}
          <h2 className="section-heading">
            {prefix ? (
              <span className="block">{renderMultilineText(prefix)}</span>
            ) : null}
            {serif ? (
              <span className="block">
                <span className="section-heading-serif">{serif}</span>
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

          {section.showOfficeDetails !== false ? (
            <div className="mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
              {phones.length > 0 ? (
                <article className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4f7ff] text-[#364e9c]"
                      aria-hidden="true"
                    >
                      <PhoneIcon />
                    </div>
                    <h3 className="text-sm font-bold text-[#20232a]">
                      {section.callLabel || 'Call Us :'}
                    </h3>
                  </div>
                  <ul className="flex list-none flex-col gap-1.5 p-0 text-sm text-[#5c6473]">
                    {phones.map((phone) => (
                      <li key={phone}>
                        <a
                          href={`tel:${phone.replace(/\s+/g, '')}`}
                          className="transition-colors hover:text-[#364e9c]"
                        >
                          {phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </article>
              ) : null}

              {emails.length > 0 ? (
                <article className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4f7ff] text-[#364e9c]"
                      aria-hidden="true"
                    >
                      <EmailIcon />
                    </div>
                    <h3 className="text-sm font-bold text-[#20232a]">
                      {section.emailLabel || 'Email Us :'}
                    </h3>
                  </div>
                  <ul className="flex list-none flex-col gap-1.5 p-0 text-sm text-[#5c6473]">
                    {emails.map((email) => (
                      <li key={email}>
                        <a
                          href={`mailto:${email}`}
                          className="break-all transition-colors hover:text-[#364e9c]"
                        >
                          {email}
                        </a>
                      </li>
                    ))}
                  </ul>
                </article>
              ) : null}
            </div>
          ) : null}
        </div>

        <ConsultationForm
          title={section.formTitle || "Let's Get Started"}
          subtitle={
            section.formSubtitle ||
            'Receive a free consultation for your project to discuss ideas, solutions, and next steps.'
          }
          buttonLabel={section.formButtonLabel || 'Send Message ↗'}
          variant="contact"
          source={section.formSource || 'contact-page'}
          anchorId="contact-page-consultation"
          budgetOptions={budgetOptions}
          serviceOptions={serviceOptions}
        />
      </div>
    </section>
  );
}
