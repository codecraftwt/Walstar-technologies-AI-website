'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ConsultationForm } from '@/components/contact/ConsultationForm';
import {
  renderHeadingParts,
  renderMultilineText,
} from '@/components/common/SectionPrimitives';
import { getStrapiMediaUrl } from '@/lib/strapi';
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
    getStrapiMediaUrl(section.image?.url) || '/images/contact-keyboard.jpg';
  const options =
    section.options?.map((item) => item.label).filter(Boolean) ??
    DEFAULT_INTEREST_OPTIONS;

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
    <section className="sec contact-interest">
      <div className="wrap contact-interest-grid">
        <div className="contact-interest-media relative overflow-hidden">
          <Image
            src={imageUrl}
            alt={
              section.image?.alternativeText ||
              'Hands typing on a laptop keyboard'
            }
            fill
            sizes="(max-width: 900px) 100vw, 44vw"
            className="object-cover"
          />
        </div>

        <div className="contact-interest-copy">
          {section.tag ? <span className="pill">{section.tag}</span> : null}
          <h2 className="contact-interest-heading">
            {section.headingPrefix
              ? renderMultilineText(section.headingPrefix.replace(/\n+$/, ''))
              : null}
            {section.headingSerif ? (
              <>
                <br />
                <span className="serif">{section.headingSerif}</span>
              </>
            ) : null}
            {section.headingSuffix ? <> {section.headingSuffix}</> : null}
          </h2>
          {section.subtitle ? <p className="contact-interest-desc">{renderMultilineText(section.subtitle)}</p> : null}

          {options.length > 0 ? (
            <div className="contact-chip-grid" role="group" aria-label="Areas of interest">
              {options.map((label) => {
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
    <section className="contact-sec" id="contact-form">
      <div className="wrap">
        <div className="contact-panel">
          <div className="contact-info-col">
            {section.tag ? <span className="pill">{section.tag}</span> : null}
            <h2 className="contact-panel-heading">
              {renderHeadingParts(
                section.headingPrefix,
                section.headingSerif
              )}
            </h2>
            {section.subtitle ? (
              <p className="lead contact-panel-lead">{renderMultilineText(section.subtitle)}</p>
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
      </div>
    </section>
  );
}
