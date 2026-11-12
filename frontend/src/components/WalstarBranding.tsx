import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { DEFAULT_NAVBAR } from '@/lib/default-landing';
import type { NavbarData, SiteSetting } from '@/types/strapi';

export function BrandWordmark({ subtext }: { subtext: string }) {
  return (
    <Link className="logo" href="/">
      WALST<b>★</b>R<small>{subtext}</small>
    </Link>
  );
}

export function WalstarTopbar({ siteSetting }: { siteSetting: SiteSetting }) {
  return (
    <div className="topbar">
      <div className="wrap">
        <span>
          ✉ {siteSetting.topbarEmail} &nbsp;&nbsp; ☎ {siteSetting.topbarPhone}
        </span>
        <span className="soc" aria-label="Social media">
          {siteSetting.socialLinks.map((social) => (
            <a
              key={social.platform}
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
  );
}

function buildFallbackNavbarFromSiteSetting(
  siteSetting: SiteSetting
): NavbarData {
  return {
    ...DEFAULT_NAVBAR,
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
  const resolvedNavbar =
    navbar && Array.isArray(navbar.items)
      ? navbar
      : buildFallbackNavbarFromSiteSetting(siteSetting);

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
          <h1>{title}</h1>
          {summary ? <p>{summary}</p> : null}
        </div>
      ) : null}
    </header>
  );
}
