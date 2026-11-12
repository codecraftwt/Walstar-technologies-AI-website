import Image from 'next/image';
import Link from 'next/link';
import { ConsultationForm } from '@/components/ConsultationForm';
import { WalstarButton } from '@/components/WalstarButton';
import {
  BrandWordmark,
  SocialIconContent,
} from '@/components/WalstarBranding';
import { resolveCmsRoute } from '@/lib/cms-routes';
import { DEFAULT_FOOTER, DEFAULT_SITE_SETTING } from '@/lib/default-landing';
import { getStrapiMediaUrl } from '@/lib/strapi';
import type {
  CtaBandSection,
  FooterColumn,
  FooterData,
  SiteSetting,
} from '@/types/strapi';

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
      <div className="cta-band-copy">
        {section.pill ? <span className="pill">{section.pill}</span> : null}
        <h3>{section.heading}</h3>
        {section.subheading ? <p>{section.subheading}</p> : null}
      </div>
      {section.buttonLabel ? (
        <div className="cta-band-action">
          <WalstarButton
            variant="orange"
            href={section.buttonHref || '#footer-consultation'}
          >
            {section.buttonLabel}
          </WalstarButton>
        </div>
      ) : null}
    </section>
  );
}

function buildFallbackLinkColumns(siteSetting?: SiteSetting): FooterColumn[] {
  const source = siteSetting ?? DEFAULT_SITE_SETTING;
  return [
    {
      links: source.footerPrimaryLinks.map((link) => ({
        label: link.label,
        route: link.href,
      })),
    },
    {
      links: source.footerSecondaryLinks.map((link) => ({
        label: link.label,
        route: link.href,
      })),
    },
  ];
}

export function WalstarFooter({
  footer,
  siteSetting,
  source = 'fallback',
  trailingCta,
}: {
  footer?: FooterData | null;
  siteSetting?: SiteSetting;
  source?: 'strapi' | 'fallback';
  trailingCta?: CtaBandSection | null;
}) {
  const fallbackSetting = siteSetting ?? DEFAULT_SITE_SETTING;
  const resolved = {
    logoImage: footer?.logoImage ?? null,
    logoAccentText:
      footer?.logoAccentText || fallbackSetting.footerLogoAccentText,
    aboutText: footer?.aboutText || fallbackSetting.footerAbout,
    consultationShow: footer?.consultationShow ?? true,
    consultationTitle:
      footer?.consultationTitle || fallbackSetting.footerNewsletterTitle,
    consultationSubtitle:
      footer?.consultationSubtitle || fallbackSetting.footerNewsletterSubtitle,
    consultationButtonLabel:
      footer?.consultationButtonLabel ||
      fallbackSetting.footerNewsletterButtonLabel,
    headlinePrefix:
      footer?.headlinePrefix || fallbackSetting.footerBigPrefix,
    headlineSerif: footer?.headlineSerif || fallbackSetting.footerBigSerif,
    headlineSuffix:
      footer?.headlineSuffix || fallbackSetting.footerBigSuffix,
    ctaLabel: footer?.ctaLabel || fallbackSetting.footerCtaLabel,
    ctaRoute: footer?.ctaRoute || fallbackSetting.footerCtaHref,
    ctaOpenInNewTab: footer?.ctaOpenInNewTab ?? false,
    linkColumns: footer?.linkColumns?.length
      ? footer.linkColumns
      : siteSetting
        ? buildFallbackLinkColumns(siteSetting)
        : DEFAULT_FOOTER.linkColumns ?? [],
    officeAddress: footer?.officeAddress || fallbackSetting.officeAddress,
    officePhones: footer?.officePhones || fallbackSetting.officePhones,
    contactEmail: footer?.contactEmail || fallbackSetting.contactEmail,
    socialLinks: footer?.socialLinks?.length
      ? footer.socialLinks
      : fallbackSetting.socialLinks,
    copyrightText: footer?.copyrightText || fallbackSetting.copyrightText,
  };

  const logoUrl = getStrapiMediaUrl(resolved.logoImage?.url);

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
          <div className="f1-brand">
            {logoUrl ? (
              <Link href="/" className="walstar-brand-link">
                <Image
                  src={logoUrl}
                  alt={
                    resolved.logoImage?.alternativeText || 'Walstar Technologies'
                  }
                  width={220}
                  height={52}
                  className="walstar-footer-logo-img"
                />
              </Link>
            ) : (
              <BrandWordmark subtext={resolved.logoAccentText} />
            )}
            <div className="fabout">
              <span className="fabout-badge" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L14.9 9.1L22 12L14.9 14.9L12 22L9.1 14.9L2 12L9.1 9.1L12 2Z"
                    fill="#f4691f"
                  />
                </svg>
              </span>
              <span>{resolved.aboutText}</span>
            </div>
          </div>

          {resolved.consultationShow ? (
            <ConsultationForm
              title={resolved.consultationTitle}
              subtitle={resolved.consultationSubtitle}
              buttonLabel={resolved.consultationButtonLabel}
            />
          ) : null}
        </div>

        <div className="f2">
          <div className="f2-lead">
            <div className="fbig">
              {resolved.headlinePrefix}{' '}
              <span className="serif" style={{ color: '#5a9bff' }}>
                {resolved.headlineSerif}
              </span>{' '}
              {resolved.headlineSuffix}
            </div>
            <WalstarButton
              variant="orange"
              href={resolved.ctaRoute}
              target={resolved.ctaOpenInNewTab ? '_blank' : undefined}
              rel={resolved.ctaOpenInNewTab ? 'noopener noreferrer' : undefined}
            >
              {resolved.ctaLabel}
            </WalstarButton>
          </div>

          {resolved.linkColumns.map((column, colIdx) => (
            <ul
              className="fl"
              key={`${column.title || 'column'}-${column.id ?? colIdx}`}
            >
              {(column.links ?? []).map((link, linkIdx) => {
                const href = resolveCmsRoute(link.route, link.page);
                return (
                  <li key={`${link.label}-${href}-${link.id ?? linkIdx}`}>
                    <Link
                      href={href}
                      target={link.openInNewTab ? '_blank' : undefined}
                      rel={
                        link.openInNewTab ? 'noopener noreferrer' : undefined
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          ))}

          <div className="fc">
            <div>
              <span className="fc-icon" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-5.7-7-11a7 7 0 1 1 14 0c0 5.3-7 11-7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <span>{resolved.officeAddress}</span>
            </div>
            <div>
              <span className="fc-icon" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
              </span>
              <span className="whitespace-pre-line">
                {resolved.officePhones}
              </span>
            </div>
            <div>
              <span className="fc-icon" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <a href={`mailto:${resolved.contactEmail}`}>
                {resolved.contactEmail}
              </a>
            </div>
          </div>
        </div>

        <div className="copy">
          <span>{resolved.copyrightText}</span>
          <div className="copy-right">
            <Link
              href="/status"
              className="copy-status"
              title={`Content source: ${source}`}
            >
              CMS Status ({source === 'strapi' ? 'Strapi Live' : 'Seed Fallback'})
            </Link>
            <span className="soc2" aria-label="Social links">
              {resolved.socialLinks.slice(0, 4).map((social) => {
                const openNewTab =
                  social.openInNewTab && social.href.startsWith('http');
                return (
                  <a
                    key={`footer-${social.platform}`}
                    href={social.href}
                    aria-label={social.platform}
                    title={social.platform}
                    className={social.icon?.url ? 'has-custom-icon' : undefined}
                    target={openNewTab ? '_blank' : undefined}
                    rel={openNewTab ? 'noopener noreferrer' : undefined}
                  >
                    <SocialIconContent social={social} />
                  </a>
                );
              })}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
