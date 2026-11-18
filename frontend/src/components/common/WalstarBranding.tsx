import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { DEFAULT_NAVBAR } from '@/lib/default-landing';
import { getStrapiMediaUrl } from '@/lib/strapi';
import type {
  NavbarData,
  SiteSetting,
  SocialLink,
  StrapiMedia,
} from '@/types/strapi';

export function BrandWordmark({ subtext }: { subtext: string }) {
  return (
    <Link className="logo" href="/">
      WALST<b className="logo-star">★</b>R<small className="logo-subtext">{subtext}</small>
    </Link>
  );
}

function ContactGlyph({
  kind,
  media,
}: {
  kind: 'email' | 'phone';
  media?: StrapiMedia | null;
}) {
  const customUrl = getStrapiMediaUrl(media?.url);
  if (customUrl) {
    return (
      <Image
        src={customUrl}
        alt={media?.alternativeText || kind}
        width={17}
        height={17}
        className="topbar-icon-img"
      />
    );
  }

  if (kind === 'email') {
    return (
      <svg
        width="17"
        height="17"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="topbar-icon"
      >
        <rect
          x="2.2"
          y="4.2"
          width="15.6"
          height="11.6"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.45"
        />
        <path
          d="M3 5.4L10 10.7L17 5.4"
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="topbar-icon"
    >
      <path
        d="M5.4 3.2H7.9C8.35 3.2 8.74 3.51 8.84 3.95L9.45 6.45C9.54 6.83 9.39 7.22 9.07 7.45L7.68 8.43C8.55 10.22 9.98 11.65 11.77 12.52L12.75 11.13C12.98 10.81 13.37 10.66 13.75 10.75L16.25 11.36C16.69 11.46 17 11.85 17 12.3V14.8C17 15.8 16.17 16.6 15.17 16.54C8.92 16.15 3.85 11.08 3.46 4.83C3.4 3.83 4.2 3.2 5.4 3.2Z"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SocialIconContent({ social }: { social: SocialLink }) {
  const customIconUrl = getStrapiMediaUrl(social.icon?.url);
  if (customIconUrl) {
    return (
      <Image
        src={customIconUrl}
        alt={social.icon?.alternativeText || social.platform}
        width={26}
        height={26}
        className="soc-custom-img"
        unoptimized
      />
    );
  }

  const key = social.platform.trim().toLowerCase();

  if (key.includes('linkedin') || key === 'in') {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3.5C4.14 3.5 3.25 4.39 3.25 5.5C3.25 6.6 4.14 7.5 5.25 7.5C6.35 7.5 7.25 6.6 7.25 5.5C7.25 4.39 6.35 3.5 5.25 3.5ZM20.44 13.02C20.44 9.88 18.76 8.22 16.16 8.22C14.37 8.22 13.48 9.21 13.02 9.94V8.5H9.65C9.7 9.48 9.65 19.5 9.65 19.5H13.02V13.36C13.02 13.02 13.05 12.69 13.15 12.45C13.42 11.78 14.03 11.09 15.07 11.09C16.41 11.09 17.06 12.11 17.06 13.6V19.5H20.44V13.02Z" />
      </svg>
    );
  }

  if (key === 'x' || key.includes('twitter')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.5 6.6C20.8 6.9 20.1 7.1 19.3 7.2C20.1 6.7 20.7 6 21 5.1C20.3 5.5 19.4 5.9 18.6 6C17.9 5.3 16.9 4.8 15.8 4.8C13.7 4.8 12 6.5 12 8.6C12 8.9 12 9.2 12.1 9.5C8.9 9.3 6.1 7.8 4.2 5.5C3.9 6.1 3.7 6.7 3.7 7.4C3.7 8.7 4.4 9.9 5.4 10.6C4.8 10.6 4.2 10.4 3.7 10.1V10.2C3.7 12 5 13.6 6.7 13.9C6.4 14 6 14 5.7 14C5.5 14 5.2 14 5 13.9C5.5 15.4 6.9 16.5 8.6 16.6C7.3 17.6 5.6 18.2 3.8 18.2C3.5 18.2 3.2 18.2 2.9 18.1C4.6 19.2 6.6 19.9 8.8 19.9C15.8 19.9 19.7 14.1 19.7 9C19.7 8.8 19.7 8.7 19.7 8.5C20.4 8 21 7.4 21.5 6.6Z" />
      </svg>
    );
  }

  if (key.includes('instagram') || key === 'ig') {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="3.8" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (key.includes('facebook') || key === 'fb') {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14.2 20.5V12.8H16.8L17.2 9.8H14.2V7.9C14.2 7.03 14.44 6.44 15.69 6.44H17.3V3.75C17.02 3.71 16.06 3.63 14.95 3.63C12.63 3.63 11.04 5.05 11.04 7.65V9.8H8.4V12.8H11.04V20.5H14.2Z" />
      </svg>
    );
  }

  if (key.includes('youtube') || key === 'yt') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.6 7.2C21.3 6.1 20.5 5.3 19.4 5C17.5 4.5 12 4.5 12 4.5C12 4.5 6.5 4.5 4.6 5C3.5 5.3 2.7 6.1 2.4 7.2C2 9.1 2 12 2 12C2 12 2 14.9 2.4 16.8C2.7 17.9 3.5 18.7 4.6 19C6.5 19.5 12 19.5 12 19.5C12 19.5 17.5 19.5 19.4 19C20.5 18.7 21.3 17.9 21.6 16.8C22 14.9 22 12 22 12C22 12 22 9.1 21.6 7.2ZM10 15.2V8.8L15.6 12L10 15.2Z" />
      </svg>
    );
  }

  return <span className="soc-fallback-letter">{social.platform[0]}</span>;
}

export function WalstarTopbar({ siteSetting }: { siteSetting: SiteSetting }) {
  const email = siteSetting.topbarEmail?.trim();
  const phone = siteSetting.topbarPhone?.trim();

  return (
    <div className="topbar">
      <div className="wrap">
        <div className="topbar-contacts">
          {email ? (
            <a href={`mailto:${email}`} className="topbar-item">
              <ContactGlyph kind="email" media={siteSetting.topbarEmailIcon} />
              <span className="topbar-contact-label">{email}</span>
            </a>
          ) : null}
          {phone ? (
            <a href={`tel:${phone.replace(/\s+/g, '')}`} className="topbar-item">
              <ContactGlyph kind="phone" media={siteSetting.topbarPhoneIcon} />
              <span className="topbar-contact-label">{phone}</span>
            </a>
          ) : null}
        </div>
        <span className="soc" aria-label="Social media">
          {siteSetting.socialLinks.map((social) => {
            const hasCustomIcon = Boolean(social.icon?.url);
            const openNewTab = social.openInNewTab && social.href.startsWith('http');
            return (
              <a
                key={`${social.platform}-${social.href}`}
                href={social.href}
                aria-label={social.platform}
                title={social.platform}
                className={hasCustomIcon ? 'has-custom-icon' : undefined}
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
  );
}

function buildFallbackNavbarFromSiteSetting(
  siteSetting: SiteSetting
): NavbarData {
  return {
    ...DEFAULT_NAVBAR,
    logoImage: siteSetting.siteLogo ?? null,
    ctaLabel:
      siteSetting.headerCtaLabel?.replace(/\s*↗$/, '') || DEFAULT_NAVBAR.ctaLabel,
    ctaRoute: siteSetting.headerCtaHref || DEFAULT_NAVBAR.ctaRoute,
    items: siteSetting.navLinks?.length
      ? siteSetting.navLinks.map((link) => ({
          label: link.label,
          route: link.href,
          hasDropdown: link.hasDropdown,
          subItems: [],
        }))
      : DEFAULT_NAVBAR.items,
  };
}

export function WalstarHeaderNav({
  navbar,
  siteSetting,
  currentPath,
}: {
  navbar?: NavbarData | null;
  siteSetting: SiteSetting;
  currentPath?: string;
}) {
  const baseNavbar =
    navbar && Array.isArray(navbar.items)
      ? navbar
      : buildFallbackNavbarFromSiteSetting(siteSetting);
  const resolvedNavbar: NavbarData = {
    ...baseNavbar,
    logoImage: baseNavbar.logoImage ?? siteSetting.siteLogo ?? null,
  };

  return <Navbar data={resolvedNavbar} initialPath={currentPath} />;
}

export function WalstarCompactHeader({
  navbar,
  siteSetting,
  title,
  summary,
  currentPath,
}: {
  navbar?: NavbarData | null;
  siteSetting: SiteSetting;
  title?: string;
  summary?: string | null;
  currentPath?: string;
}) {
  return (
    <header className="subpage-header">
      <WalstarHeaderNav
        navbar={navbar}
        siteSetting={siteSetting}
        currentPath={currentPath}
      />
      {title ? (
        <div className="subpage-hero">
          <h1 className="subpage-hero-title">{title}</h1>
          {summary ? <p className="subpage-hero-summary">{summary}</p> : null}
        </div>
      ) : null}
    </header>
  );
}
