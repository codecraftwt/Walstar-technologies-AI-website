'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense, useEffect, useRef, useState } from 'react';
import { WalstarButton } from '@/components/WalstarButton';
import { resolveCmsRoute } from '@/lib/cms-routes';
import { getStrapiMediaUrl } from '@/lib/strapi';
import type { NavItem, NavbarData } from '@/types/strapi';

const resolveRoute = resolveCmsRoute;

function isRouteActive(pathname: string, href: string): boolean {
  if (!href || href === '#') return false;
  if (href === '/') return pathname === '/' || pathname === '/home';
  if (href.startsWith('/#') || href.startsWith('#') || href.startsWith('http')) {
    return false;
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isNavItemActive(pathname: string, item: NavItem): boolean {
  if (item.isHighlighted) return true;
  const href = resolveRoute(item.route, item.page);
  if (isRouteActive(pathname, href)) return true;
  return (item.subItems ?? []).some((sub) =>
    isRouteActive(pathname, resolveRoute(sub.route, sub.page))
  );
}

function DefaultWalstarLogoSvg() {
  return (
    <span className="walstar-logo-wrap">
      <svg
        width="156"
        height="32"
        viewBox="0 0 184 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="walstar-logo-svg"
      >
        {/* Blue geometric WAL */}
        <path
          d="M3 7H10.5L13.5 22L17.5 8H23.5L27.5 22L30.5 7H38L32.2 30H24.6L20.5 16.5L16.4 30H8.8L3 7Z"
          fill="#0A76E8"
        />
        <path
          d="M41.5 30L50 7H58.2L66.8 30H59L57.2 24.8H51L49.2 30H41.5ZM52.4 19.6H55.8L54.1 14L52.4 19.6Z"
          fill="#0A76E8"
        />
        <path d="M70 7H77.4V23.5H87V30H70V7Z" fill="#0A76E8" />

        {/* Origami Orange Star */}
        <polygon points="94,2 103,14 94,24" fill="#F4691F" />
        <polygon points="103,14 118,10 104,20" fill="#FF7B33" />
        <polygon points="106,21 116,35 104,29" fill="#F4691F" />

        {/* White R accent completing WALST★R look cleanly on dark hero */}
        <text
          x="122"
          y="29"
          fill="#FFFFFF"
          fontFamily="Poppins, system-ui, sans-serif"
          fontWeight="700"
          fontSize="26"
          letterSpacing="0.04em"
        >
          R
        </text>
      </svg>
      <small className="walstar-logo-sub">TECHNOLOGIES</small>
    </span>
  );
}

function ChevronDownIcon({ rotated }: { rotated: boolean }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{
        transform: rotated ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.18s ease',
      }}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PathnameTracker({ onChange }: { onChange: (value: string) => void }) {
  const pathname = usePathname();
  useEffect(() => {
    onChange(pathname);
  }, [pathname, onChange]);
  return null;
}

export function Navbar({
  data,
  initialPath = '',
}: {
  data: NavbarData;
  initialPath?: string;
}) {
  const [pathname, setPathname] = useState(initialPath);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdownKey, setOpenDropdownKey] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const logoImgUrl = getStrapiMediaUrl(data.logoImage?.url);
  const logoHref = data.logoHref?.trim() || '/';
  const ctaHref = data.ctaRoute?.trim() || '/contact';
  const showCta = data.ctaShow !== false && Boolean(data.ctaLabel?.trim());

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdownKey(null);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenDropdownKey(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <nav ref={navRef} className="hero-nav" aria-label={data.name || 'Primary navigation'}>
      <Suspense fallback={null}>
        <PathnameTracker onChange={setPathname} />
      </Suspense>
      <Link
        className="walstar-brand-link"
        href={logoHref}
        aria-label={data.logoImage?.alternativeText || 'Walstar Technologies'}
      >
        {logoImgUrl ? (
          <Image
            src={logoImgUrl}
            alt={data.logoImage?.alternativeText || 'Walstar Technologies'}
            width={data.logoImage?.width || 210}
            height={data.logoImage?.height || 71}
            loading="eager"
            className="walstar-logo-img"
          />
        ) : (
          <DefaultWalstarLogoSvg />
        )}
      </Link>

      <ul className="nav-menu-list">
        {(data.items ?? []).map((item, idx) => {
          const itemKey = `${item.label}-${item.id ?? idx}`;
          const itemHref = resolveRoute(item.route, item.page);
          const subItems = item.subItems ?? [];
          const hasDropdown = Boolean(item.hasDropdown || subItems.length > 0);
          const active = isNavItemActive(pathname, item);
          const isOpen = openDropdownKey === itemKey;

          return (
            <li
              key={itemKey}
              className="nav-item-wrap"
              onMouseEnter={() => {
                if (hasDropdown) setOpenDropdownKey(itemKey);
              }}
              onMouseLeave={() => {
                if (hasDropdown && isOpen) setOpenDropdownKey(null);
              }}
            >
              <div className="nav-item-trigger">
                <Link
                  href={itemHref}
                  target={item.openInNewTab ? '_blank' : undefined}
                  rel={item.openInNewTab ? 'noopener noreferrer' : undefined}
                  className={active ? 'is-active' : undefined}
                  onClick={() => setOpenDropdownKey(null)}
                >
                  {item.label}
                </Link>
                {hasDropdown ? (
                  <button
                    type="button"
                    className={`nav-chevron-btn ${active ? 'is-active' : ''}`}
                    aria-expanded={isOpen}
                    aria-haspopup="menu"
                    aria-label={`Toggle ${item.label} submenu`}
                    onClick={() =>
                      setOpenDropdownKey((prev) => (prev === itemKey ? null : itemKey))
                    }
                  >
                    <ChevronDownIcon rotated={isOpen} />
                  </button>
                ) : null}
              </div>

              {hasDropdown && subItems.length > 0 && isOpen ? (
                <div className="nav-dropdown" role="menu" aria-label={item.label}>
                  {subItems.map((sub, subIdx) => {
                    const subHref = resolveRoute(sub.route, sub.page);
                    const subActive = isRouteActive(pathname, subHref);

                    return (
                      <Link
                        key={`${sub.label}-${sub.id ?? subIdx}`}
                        href={subHref}
                        role="menuitem"
                        target={sub.openInNewTab ? '_blank' : undefined}
                        rel={sub.openInNewTab ? 'noopener noreferrer' : undefined}
                        className={`nav-dropdown-item ${subActive ? 'is-active' : ''}`}
                        onClick={() => setOpenDropdownKey(null)}
                      >
                        <div className="nav-dropdown-head">
                          <span className="nav-dropdown-label">{sub.label}</span>
                          {sub.badge ? (
                            <span className="nav-dropdown-badge">{sub.badge}</span>
                          ) : null}
                        </div>
                        {sub.description ? (
                          <span className="nav-dropdown-desc">{sub.description}</span>
                        ) : null}
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>

      <div className="nav-actions">
        <button
          type="button"
          className="mobile-menu-btn"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>

        {showCta ? (
          <WalstarButton
            variant="orange"
            className="nav-cta-btn"
            href={ctaHref}
            target={data.ctaOpenInNewTab ? '_blank' : undefined}
            rel={data.ctaOpenInNewTab ? 'noopener noreferrer' : undefined}
          >
            {data.ctaLabel}
          </WalstarButton>
        ) : null}
      </div>

      {mobileOpen ? (
        <div className="mobile-nav-drawer">
          <div className="mobile-nav-list">
            {(data.items ?? []).map((item, idx) => {
              const itemHref = resolveRoute(item.route, item.page);
              const subItems = item.subItems ?? [];
              const active = isNavItemActive(pathname, item);

              return (
                <div key={`mobile-${item.label}-${idx}`} className="mobile-nav-group">
                  <Link
                    href={itemHref}
                    target={item.openInNewTab ? '_blank' : undefined}
                    rel={item.openInNewTab ? 'noopener noreferrer' : undefined}
                    onClick={() => setMobileOpen(false)}
                    className={`mobile-nav-link ${active ? 'is-active' : ''}`}
                  >
                    {item.label}
                  </Link>
                  {subItems.length > 0 ? (
                    <div className="mobile-sub-list">
                      {subItems.map((sub, subIdx) => (
                        <Link
                          key={`mobile-sub-${sub.label}-${subIdx}`}
                          href={resolveRoute(sub.route, sub.page)}
                          target={sub.openInNewTab ? '_blank' : undefined}
                          rel={sub.openInNewTab ? 'noopener noreferrer' : undefined}
                          onClick={() => setMobileOpen(false)}
                          className="mobile-sub-link"
                        >
                          <span>{sub.label}</span>
                          {sub.badge ? (
                            <span className="nav-dropdown-badge">{sub.badge}</span>
                          ) : null}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
