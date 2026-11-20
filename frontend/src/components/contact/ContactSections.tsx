'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ConsultationForm } from '@/components/contact/ConsultationForm';
import {
  cleanPill,
  renderHeadingParts,
  renderMultilineText,
} from '@/components/common/SectionPrimitives';
import { getStrapiMediaUrl, STRAPI_IMAGE_PLACEHOLDER } from '@/lib/strapi';
import type {
  ContactInterestSection,
  ContactSectionBlock,
  SiteSetting,
} from '@/types/strapi';

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
    <section className="sec who contact-interest" id="contact-interest">
      <div className="wrap contact-interest-grid">
        <div
          className={imageUrl ? 'ph relative overflow-hidden contact-interest-media' : 'ph contact-interest-media'}
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

        <div className="contact-interest-copy">
          {pillText ? <span className="pill who-pill contact-interest-pill">{pillText}</span> : null}
          <h2 className="about-heading who-heading contact-interest-heading">
            {prefix ? (
              <span className="about-heading-row who-heading-row who-heading-row--prefix">
                <span className="who-heading-text">{renderMultilineText(prefix)}</span>
              </span>
            ) : null}
            {serif || suffix ? (
              <span className="about-heading-row who-heading-row who-heading-row--serif">
                {serif ? <span className="serif who-heading-serif">{serif}</span> : null}
                {suffix ? (
                  <span className="who-heading-suffix">{` ${suffix}`}</span>
                ) : null}
              </span>
            ) : null}
          </h2>
          {section.subtitle ? (
            <div className="about-lead-desc who-desc contact-interest-desc" style={{ marginTop: 14 }}>
              {splitLines(section.subtitle).map((para, idx) => (
                <p key={idx} className="who-desc-p">
                  {para}
                </p>
              ))}
            </div>
          ) : null}

          {optionRows.length > 0 ? (
            <div className="contact-chip-grid" role="group" aria-label="Areas of interest">
              {optionRows.map((row, rowIdx) => (
                <div key={rowIdx} className="contact-chip-row">
                  {row.map((label) => {
                    const isActive = selected.includes(label);
                    return (
                      <button
                        key={label}
                        type="button"
                        className={
                          isActive ? 'contact-chip is-active' : 'contact-chip'
                        }
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
    <section className="sec contact-sec" id="contact-form">
      <div className="contact-panel">
        <div className="contact-info-col">
            {pillText ? <span className="pill who-pill contact-info-pill">{pillText}</span> : null}
            <h2 className="about-heading who-heading contact-panel-heading">
              {prefix ? (
                <span className="about-heading-row who-heading-row who-heading-row--prefix">
                  <span className="who-heading-text">{renderMultilineText(prefix)}</span>
                </span>
              ) : null}
              {serif ? (
                <span className="about-heading-row who-heading-row who-heading-row--serif">
                  <span className="serif who-heading-serif">{serif}</span>
                </span>
              ) : null}
            </h2>
            {section.subtitle ? (
              <div className="about-lead-desc who-desc contact-panel-lead" style={{ marginTop: 14 }}>
                {splitLines(section.subtitle).map((para, idx) => (
                  <p key={idx} className="who-desc-p">
                    {para}
                  </p>
                ))}
              </div>
            ) : null}

            {section.showOfficeDetails !== false ? (
              <div className="contact-detail-cards">
                {phones.length > 0 ? (
                  <article className="contact-detail-card">
                    <div className="contact-detail-head">
                      <div className="contact-detail-icon" aria-hidden="true">
                        <PhoneIcon />
                      </div>
                      <h3 className="contact-detail-title">{section.callLabel || 'Call Us :'}</h3>
                    </div>
                    <ul className="contact-detail-list">
                      {phones.map((phone) => (
                        <li key={phone} className="contact-detail-item">
                          <a href={`tel:${phone.replace(/\s+/g, '')}`}>
                            {phone}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </article>
                ) : null}

                {emails.length > 0 ? (
                  <article className="contact-detail-card">
                    <div className="contact-detail-head">
                      <div className="contact-detail-icon" aria-hidden="true">
                        <EmailIcon />
                      </div>
                      <h3 className="contact-detail-title">{section.emailLabel || 'Email Us :'}</h3>
                    </div>
                    <ul className="contact-detail-list">
                      {emails.map((email) => (
                        <li key={email} className="contact-detail-item">
                          <a href={`mailto:${email}`}>{email}</a>
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
