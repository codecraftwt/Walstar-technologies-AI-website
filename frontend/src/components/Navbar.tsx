'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react';
import { createPortal } from 'react-dom';
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
        transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mobile-menu-icon"
      aria-hidden="true"
    >
      {isOpen ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
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
  const [expandedMobileKeys, setExpandedMobileKeys] = useState<Record<string, boolean>>({});
  const [prevPathname, setPrevPathname] = useState(pathname);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const navRef = useRef<HTMLElement>(null);

  // Close mobile drawer and dropdowns automatically on route navigation
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setOpenDropdownKey(null);
  }

  const logoImgUrl = getStrapiMediaUrl(data.logoImage?.url);
  const logoHref = data.logoHref?.trim() || '/';
  const ctaHref = data.ctaRoute?.trim() || '/contact';
  const showCta = data.ctaShow !== false && Boolean(data.ctaLabel?.trim());

  const toggleMobileSub = useCallback((key: string) => {
    setExpandedMobileKeys((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  // Lock body/html scroll when mobile menu is open to prevent background scrolling & glitches
  useEffect(() => {
    if (!mobileOpen) return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyTouchAction = document.body.style.touchAction;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.classList.add('walstar-scroll-locked');
    document.documentElement.classList.add('walstar-scroll-locked');

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.touchAction = originalBodyTouchAction;
      document.body.style.paddingRight = '';
      document.body.classList.remove('walstar-scroll-locked');
      document.documentElement.classList.remove('walstar-scroll-locked');
    };
  }, [mobileOpen]);

  // Handle escape key, outside click, and desktop resize
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
    function handleResize() {
      if (window.innerWidth >= 1025 && mobileOpen) {
        setMobileOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileOpen]);

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
          className={`mobile-menu-btn ${mobileOpen ? 'is-active' : ''}`}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <HamburgerIcon isOpen={mobileOpen} />
          <span className="mobile-menu-label">{mobileOpen ? 'Close' : 'Menu'}</span>
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

      {mounted && mobileOpen && typeof document !== 'undefined'
        ? createPortal(
            <>
              <div
                className="mobile-nav-backdrop"
                onClick={() => setMobileOpen(false)}
                onTouchMove={(e) => e.preventDefault()}
                aria-hidden="true"
              />

              <aside
                className="mobile-nav-drawer"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile Navigation Drawer"
              >
                <div className="mobile-drawer-header">
                  <Link
                    className="walstar-brand-link"
                    href={logoHref}
                    aria-label={data.logoImage?.alternativeText || 'Walstar Technologies'}
                    onClick={() => setMobileOpen(false)}
                  >
                    {logoImgUrl ? (
                      <Image
                        src={logoImgUrl}
                        alt={data.logoImage?.alternativeText || 'Walstar Technologies'}
                        width={data.logoImage?.width || 170}
                        height={data.logoImage?.height || 58}
                        loading="eager"
                        className="walstar-logo-img"
                      />
                    ) : (
                      <DefaultWalstarLogoSvg />
                    )}
                  </Link>

                  <button
                    type="button"
                    className="mobile-drawer-close"
                    aria-label="Close navigation menu"
                    onClick={() => setMobileOpen(false)}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>

                <div className="mobile-drawer-body">
                  <nav className="mobile-nav-list" aria-label="Mobile menu navigation">
                    {(data.items ?? []).map((item, idx) => {
                      const itemKey = `${item.label}-${item.id ?? idx}`;
                      const itemHref = resolveRoute(item.route, item.page);
                      const subItems = item.subItems ?? [];
                      const hasDropdown = Boolean(item.hasDropdown || subItems.length > 0);
                      const active = isNavItemActive(pathname, item);
                      const isSubOpen = Boolean(expandedMobileKeys[itemKey]);

                      return (
                        <div
                          key={`m-item-${itemKey}`}
                          className={`mobile-nav-group ${active ? 'is-active-group' : ''}`}
                        >
                          <div className="mobile-nav-row">
                            <Link
                              href={itemHref}
                              target={item.openInNewTab ? '_blank' : undefined}
                              rel={item.openInNewTab ? 'noopener noreferrer' : undefined}
                              className={`mobile-nav-link ${active ? 'is-active' : ''}`}
                              onClick={() => setMobileOpen(false)}
                            >
                              <span>{item.label}</span>
                              {item.isHighlighted ? (
                                <span className="mobile-highlight-dot" />
                              ) : null}
                            </Link>

                            {hasDropdown ? (
                              <button
                                type="button"
                                className={`mobile-sub-toggle ${isSubOpen ? 'is-open' : ''}`}
                                aria-expanded={isSubOpen}
                                aria-label={`Toggle ${item.label} submenu`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleMobileSub(itemKey);
                                }}
                              >
                                <ChevronDownIcon rotated={isSubOpen} />
                              </button>
                            ) : null}
                          </div>

                          {hasDropdown && subItems.length > 0 && isSubOpen ? (
                            <div className="mobile-sub-list">
                              {subItems.map((sub, subIdx) => {
                                const subHref = resolveRoute(sub.route, sub.page);
                                const subActive = isRouteActive(pathname, subHref);

                                return (
                                  <Link
                                    key={`m-sub-${sub.label}-${sub.id ?? subIdx}`}
                                    href={subHref}
                                    target={sub.openInNewTab ? '_blank' : undefined}
                                    rel={sub.openInNewTab ? 'noopener noreferrer' : undefined}
                                    className={`mobile-sub-link ${subActive ? 'is-active' : ''}`}
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    <div className="mobile-sub-content">
                                      <div className="mobile-sub-head">
                                        <span className="mobile-sub-label">{sub.label}</span>
                                        {sub.badge ? (
                                          <span className="nav-dropdown-badge">{sub.badge}</span>
                                        ) : null}
                                      </div>
                                      {sub.description ? (
                                        <span className="mobile-sub-desc">{sub.description}</span>
                                      ) : null}
                                    </div>
                                    <span className="mobile-sub-arrow" aria-hidden="true">
                                      →
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                  </nav>
                </div>

                {showCta ? (
                  <div className="mobile-drawer-footer">
                    <WalstarButton
                      variant="orange"
                      className="mobile-drawer-cta"
                      href={ctaHref}
                      target={data.ctaOpenInNewTab ? '_blank' : undefined}
                      rel={data.ctaOpenInNewTab ? 'noopener noreferrer' : undefined}
                      onClick={() => setMobileOpen(false)}
                    >
                      {data.ctaLabel}
                    </WalstarButton>
                  </div>
                ) : null}
              </aside>
            </>,
            document.body
          )
        : null}
    </nav>
  );
}
