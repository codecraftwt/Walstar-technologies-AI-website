import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ConsultationForm } from '@/components/contact/ConsultationForm';
import { WalstarButton } from '@/components/common/WalstarButton';
import {
  BrandWordmark,
  SocialIconContent,
} from '@/components/common/WalstarBranding';
import { cleanPill } from '@/components/common/SectionPrimitives';
import { resolveCmsRoute } from '@/lib/cms-routes';
import { DEFAULT_FOOTER, DEFAULT_SITE_SETTING } from '@/lib/default-landing';
import { getStrapiMediaUrl } from '@/lib/strapi';
import type {
  CtaBandSection,
  FooterColumn,
  FooterData,
  SiteSetting,
  StrapiMedia,
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
      aria-label={cleanPill(section.pill) || 'Call to action'}
    >
      <div className="cta-band-copy">
        {section.pill ? <span className="pill">{cleanPill(section.pill)}</span> : null}
        <h3 className="cta-band-heading">{section.heading}</h3>
        {section.subheading ? <p className="cta-band-subheading">{section.subheading}</p> : null}
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

function WalstarOrigamiBadgeStar() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="fabout-origami-star"
    >
      <polygon points="10,4 20,16 10,26" fill="#F4691F" />
      <polygon points="20,16 30,12 21,21" fill="#FF8A48" />
      <polygon points="21,21 28,30 19,26" fill="#F4691F" />
    </svg>
  );
}

function formatAboutText(text?: string | null) {
  if (!text) return null;
  if (text.includes('\n')) {
    const lines = text.split('\n');
    return lines.map((line, idx) => (
      <Fragment key={idx}>
        {line}
        {idx < lines.length - 1 ? <br className="fabout-br" /> : null}
      </Fragment>
    ));
  }
  if (text.includes('secure, scalable')) {
    const [part1, part2] = text.split('secure, scalable');
    return (
      <Fragment>
        {part1}secure,
        <br className="fabout-br" />
        scalable{part2}
      </Fragment>
    );
  }
  return text;
}

function buildFallbackLinkColumns(siteSetting?: SiteSetting): FooterColumn[] {
  const source = siteSetting ?? DEFAULT_SITE_SETTING;
  return [
    {
      title: null,
      links: source.footerPrimaryLinks.map((link) => ({
        label: link.label,
        route: link.href,
      })),
    },
    {
      title: null,
      links: source.footerSecondaryLinks.map((link) => ({
        label: link.label,
        route: link.href,
      })),
    },
  ];
}

export type AboutLogoProp =
  | StrapiMedia
  | { url?: string | null; src?: string; alternativeText?: string | null }
  | { src: string; width?: number; height?: number }
  | string
  | null;

const DEFAULT_ABOUT_LOGO_URL = '/images/about/walstar-origami.gif';

function resolveAboutLogoUrl(
  input: AboutLogoProp | undefined | null
): string | null {
  if (!input) return null;
  if (typeof input === 'string') {
    return getStrapiMediaUrl(input);
  }
  if (typeof input === 'object') {
    if ('src' in input && typeof input.src === 'string') {
      return input.src;
    }
    if ('url' in input && typeof input.url === 'string') {
      return getStrapiMediaUrl(input.url);
    }
  }
  return null;
}

export function WalstarFooter({
  footer,
  siteSetting,
  trailingCta,
  aboutLogo,
}: {
  footer?: FooterData | null;
  siteSetting?: SiteSetting;
  source?: 'strapi' | 'fallback';
  trailingCta?: CtaBandSection | null;
  aboutLogo?: AboutLogoProp;
}) {
  const fallbackSetting = siteSetting ?? DEFAULT_SITE_SETTING;
  const resolved = {
    logoImage: footer?.logoImage ?? null,
    logoAccentText:
      footer?.logoAccentText || fallbackSetting.footerLogoAccentText,
    aboutText: footer?.aboutText || fallbackSetting.footerAbout,
    aboutLogo:
      aboutLogo ??
      footer?.aboutLogo ??
      fallbackSetting.footerAboutLogo ??
      DEFAULT_ABOUT_LOGO_URL,
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
  const aboutLogoUrl = resolveAboutLogoUrl(resolved.aboutLogo);

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
          <div className="f1-top">
            {logoUrl ? (
              <Link href="/" className="walstar-brand-link">
                <Image
                  src={logoUrl}
                  alt={
                    resolved.logoImage?.alternativeText || 'Walstar Technologies'
                  }
                  width={207}
                  height={71}
                  className="walstar-footer-logo-img"
                />
              </Link>
            ) : (
              <BrandWordmark subtext={resolved.logoAccentText} />
            )}
          </div>

          <div className="f1-row">
            <div className="fabout">
              <span
                className={
                  aboutLogoUrl
                    ? 'fabout-badge fabout-badge--img'
                    : 'fabout-badge'
                }
                aria-hidden={!aboutLogoUrl}
              >
                {aboutLogoUrl ? (
                  <img
                    src={aboutLogoUrl}
                    alt={
                      typeof resolved.aboutLogo === 'object' &&
                      resolved.aboutLogo &&
                      'alternativeText' in resolved.aboutLogo &&
                      resolved.aboutLogo.alternativeText
                        ? resolved.aboutLogo.alternativeText
                        : 'About Walstar'
                    }
                    width={32}
                    height={32}
                    className="fabout-badge-img"
                    style={{
                      display: 'block',
                      width: 32,
                      height: 32,
                      objectFit: 'contain',
                    }}
                  />
                ) : (
                  <WalstarOrigamiBadgeStar />
                )}
              </span>
              <span className="fabout-text">
                {formatAboutText(resolved.aboutText)}
              </span>
            </div>

            {resolved.consultationShow ? (
              <ConsultationForm
                title={resolved.consultationTitle}
                subtitle={resolved.consultationSubtitle}
                buttonLabel={resolved.consultationButtonLabel}
              />
            ) : null}
          </div>
        </div>

        <div className="f2">
          <div className="f2-lead">
            <div className="fbig">
              {(() => {
                const prefix = resolved.headlinePrefix?.trim() || 'Build';
                const serif = resolved.headlineSerif?.trim() || 'AI Products';
                const rawSuffix = (resolved.headlineSuffix || 'that actually Ships.').trim();

                // Format: line 1 "Build AI Products that", line 2 "actually Ships."
                const match = rawSuffix.match(/^(that\s+)?(actually\s+ships\.?)$/i);
                if (match) {
                  const thatPart = match[1] ? match[1].trim() : '';
                  const shipsPart = match[2];
                  return (
                    <>
                      <span className="fbig-line1">
                        {prefix ? `${prefix} ` : ''}
                        <span className="serif">{serif}</span>
                        {thatPart ? ` ${thatPart}` : ''}
                      </span>
                      <span className="fbig-line2">{shipsPart}</span>
                    </>
                  );
                }

                if (rawSuffix.includes('\n')) {
                  const [l1, ...rest] = rawSuffix.split('\n');
                  return (
                    <>
                      <span className="fbig-line1">
                        {prefix ? `${prefix} ` : ''}
                        <span className="serif">{serif}</span>
                        {l1 ? ` ${l1.trim()}` : ''}
                      </span>
                      <span className="fbig-line2">{rest.join(' ').trim()}</span>
                    </>
                  );
                }

                // If suffix starts with "that" followed by more words
                const thatMatch = rawSuffix.match(/^that\s+(.+)$/i);
                if (thatMatch) {
                  return (
                    <>
                      <span className="fbig-line1">
                        {prefix ? `${prefix} ` : ''}
                        <span className="serif">{serif}</span>
                        {' that'}
                      </span>
                      <span className="fbig-line2">{thatMatch[1]}</span>
                    </>
                  );
                }

                return (
                  <>
                    <span className="fbig-line1">
                      {prefix ? `${prefix} ` : ''}
                      <span className="serif">{serif}</span>
                    </span>
                    <span className="fbig-line2">{rawSuffix}</span>
                  </>
                );
              })()}
            </div>
            <WalstarButton
              variant="orange"
              href={resolved.ctaRoute}
              target={resolved.ctaOpenInNewTab ? '_blank' : undefined}
              rel={resolved.ctaOpenInNewTab ? 'noopener noreferrer' : undefined}
              className="footer-contact-btn"
            >
              {resolved.ctaLabel}
            </WalstarButton>
          </div>

          <div className="f2-links">
            {resolved.linkColumns.map((column, colIdx) => {
              const rawTitle = column.title?.trim();
              const isFilteredTitle =
                !rawTitle ||
                rawTitle.toLowerCase() === 'company' ||
                rawTitle.toLowerCase() === 'explore';
              const columnTitle = isFilteredTitle ? null : rawTitle;

              return (
                <div
                  className="fl-col"
                  key={`${column.id ?? colIdx}`}
                >
                  {columnTitle ? (
                    <h4 className="fl-title">{columnTitle}</h4>
                  ) : null}
                  <ul className="fl">
                    {(column.links ?? []).map((link, linkIdx) => {
                      const href = resolveCmsRoute(link.route, link.page);
                      return (
                        <li key={`${link.label}-${href}-${link.id ?? linkIdx}`} className="fl-item">
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
                </div>
              );
            })}
          </div>

          <div className="fc">
            <div>
              <span className="fc-icon" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-5.7-7-11a7 7 0 1 1 14 0c0 5.3-7 11-7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <span className="fc-address">{resolved.officeAddress}</span>
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
          <span className="copy-text">{resolved.copyrightText}</span>
          <div className="copy-right">
            <span className="soc2" aria-label="Social links">
              {(() => {
                const getSocialPriority = (platform: string): number => {
                  const p = platform.trim().toLowerCase();
                  if (p === 'twitter' || p === 'x' || p.includes('twitter')) return 1;
                  if (p === 'insta' || p.includes('instagram') || p === 'ig') return 2;
                  if (p === 'facebook' || p.includes('facebook') || p === 'fb') return 3;
                  return 99;
                };

                const matched = (resolved.socialLinks || [])
                  .filter((s) => getSocialPriority(s.platform) <= 3)
                  .sort(
                    (a, b) => getSocialPriority(a.platform) - getSocialPriority(b.platform)
                  );

                const displaySocials =
                  matched.length > 0
                    ? matched
                    : [
                        { platform: 'Twitter', href: '#cta' },
                        { platform: 'Instagram', href: '#cta' },
                        { platform: 'Facebook', href: '#cta' },
                      ];

                return displaySocials.map((social) => {
                  const openNewTab =
                    Boolean(social.openInNewTab && social.href?.startsWith('http'));
                  return (
                    <a
                      key={`footer-${social.platform}`}
                      href={social.href || '#cta'}
                      aria-label={social.platform}
                      title={social.platform}
                      className={social.icon?.url ? 'has-custom-icon' : undefined}
                      target={openNewTab ? '_blank' : undefined}
                      rel={openNewTab ? 'noopener noreferrer' : undefined}
                    >
                      <SocialIconContent social={social} />
                    </a>
                  );
                });
              })()}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
