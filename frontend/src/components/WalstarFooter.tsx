import Link from 'next/link';
import { ConsultationForm } from '@/components/ConsultationForm';
import { WalstarButton } from '@/components/WalstarButton';
import { BrandWordmark } from '@/components/WalstarBranding';
import type { CtaBandSection, SiteSetting } from '@/types/strapi';

export function WalstarCtaBand({
  section,
  inline = false,
}: {
  section: CtaBandSection;
  inline?: boolean;
}) {
  return (
    <section
      className={inline ? 'cta-band cta-band--inline' : 'cta-band'}
      aria-label={section.pill || 'Call to action'}
    >
      <div>
        {section.pill ? <span className="pill">{section.pill}</span> : null}
        <h3>{section.heading}</h3>
        {section.subheading ? <p>{section.subheading}</p> : null}
      </div>
      {section.buttonLabel ? (
        <WalstarButton
          variant="orange"
          href={section.buttonHref || '#footer-consultation'}
        >
          {section.buttonLabel}
        </WalstarButton>
      ) : null}
    </section>
  );
}

export function WalstarFooter({
  siteSetting,
  source,
  trailingCta,
}: {
  siteSetting: SiteSetting;
  source: 'strapi' | 'fallback';
  trailingCta?: CtaBandSection | null;
}) {
  return (
    <div className="end" id="cta">
      {trailingCta ? <WalstarCtaBand section={trailingCta} /> : null}

      <footer
        className={
          trailingCta
            ? 'walstar-footer'
            : 'walstar-footer walstar-footer--standalone'
        }
      >
        <div className="f1">
          <div>
            <BrandWordmark subtext={siteSetting.footerLogoAccentText} />
            <div className="fabout">
              <i aria-hidden="true" />
              <span>{siteSetting.footerAbout}</span>
            </div>
          </div>

          <ConsultationForm
            title={siteSetting.footerNewsletterTitle}
            subtitle={siteSetting.footerNewsletterSubtitle}
            buttonLabel={siteSetting.footerNewsletterButtonLabel}
          />
        </div>

        <div className="f2">
          <div>
            <div className="fbig">
              {siteSetting.footerBigPrefix}{' '}
              <span className="serif" style={{ color: '#5a9bff' }}>
                {siteSetting.footerBigSerif}
              </span>{' '}
              {siteSetting.footerBigSuffix}
            </div>
            <WalstarButton variant="orange" href={siteSetting.footerCtaHref}>
              {siteSetting.footerCtaLabel}
            </WalstarButton>
          </div>

          <ul className="fl">
            {siteSetting.footerPrimaryLinks.map((link) => (
              <li key={`${link.label}-${link.href}`}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <ul className="fl">
            {siteSetting.footerSecondaryLinks.map((link) => (
              <li key={`${link.label}-${link.href}`}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <div className="fc">
            <div>
              <b>⌖</b>
              <span>{siteSetting.officeAddress}</span>
            </div>
            <div>
              <b>✆</b>
              <span className="whitespace-pre-line">{siteSetting.officePhones}</span>
            </div>
            <div>
              <b>✉</b>
              <a href={`mailto:${siteSetting.contactEmail}`}>
                {siteSetting.contactEmail}
              </a>
            </div>
          </div>
        </div>

        <div className="copy">
          <span>{siteSetting.copyrightText}</span>
          <div className="flex items-center gap-4">
            <Link
              href="/status"
              className="opacity-70 transition hover:opacity-100 hover:text-[#f4691f]"
              title={`Content source: ${source}`}
            >
              CMS Status ({source === 'strapi' ? 'Strapi Live' : 'Seed Fallback'})
            </Link>
            <span className="soc2" aria-label="Social links">
              {siteSetting.socialLinks.slice(0, 3).map((social) => (
                <a
                  key={`footer-${social.platform}`}
                  href={social.href}
                  aria-label={social.platform}
                  title={social.platform}
                >
                  {social.platform[0]}
                </a>
              ))}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
