import { Fragment, type CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WalstarButton, WalstarButtonArrow } from '@/components/common/WalstarButton';
import DigitalSolutions from '@/components/DigitalSolutions';
import {
  AboutBlock,
  GlobalOfficesBlock,
  JourneyStatsBlock,
  SolutionsGridBlock,
  TeamShowcaseBlock,
  VisionMissionBlock,
  WhoWeAreBlock,
  WhyChooseBlock,
} from '@/components/about';
import { BeforeAfterSlider } from '@/components/common/BeforeAfterSlider';
import {
  ContactInterestBlock,
  ContactSectionView,
} from '@/components/contact';
import {
  SvcIntroBlock,
  SvcChallengesBlock,
  SvcCapabilitiesBlock,
  SvcBenefitsBlock,
  SvcProcessBlock,
  SvcApproachBlock,
  SvcCtaBlock,
} from '@/components/services/ServiceSections';
import { ServiceGrid } from '@/components/services/ServiceGrid';
import { CapabilitiesBlock } from '@/components/home/CapabilitiesSection';
import { FaqSection } from '@/components/home/FaqSection';

import { HeroBackgroundVideo } from '@/components/home/HeroBackgroundVideo';
import { cleanPill, renderHeadingParts, renderMultilineText } from '@/components/common/SectionPrimitives';
import { TestimonialsCarousel } from '@/components/home/TestimonialsCarousel';
import {
  WalstarCompactHeader,
  WalstarHeaderNav,
  WalstarTopbar,
} from '@/components/common/WalstarBranding';
import { WalstarCtaBand, WalstarFooter } from '@/components/layout/WalstarFooter';
import { getStrapiMediaUrl, STRAPI_IMAGE_PLACEHOLDER } from '@/lib/strapi';
import type {
  BeforeAfterSection,
  CapabilitiesSection,
  CaseStudiesSection,
  HeroSection,
  LandingPayload,
  NavbarData,
  PageSection,
  PartnerLogo,
  PartnerStripSection,
  ProductsShowcaseSection,
  RichContentSection,
  ServiceItem,
  SiteSetting,
  TestimonialsSection,
  TrustBannerSection,
} from '@/types/strapi';

const DEFAULT_MARQUEE_SECONDS = 24;
const MIN_MARQUEE_SECONDS = 4;
const MAX_MARQUEE_SECONDS = 120;

export function getPartnerLogoFallback(name?: string | null): string | null {
  if (!name) return null;
  const s = name.toLowerCase();
  if (s.includes('bigcommerce')) return '/images/partners/bigcommerce.png';
  if (s.includes('shopify')) return '/images/partners/shopify.png';
  if (s.includes('blacksmith')) return '/images/partners/blacksmith.png';
  if (s.includes('razorpay')) return '/images/partners/razorpay.png';
  if (s.includes('certified')) return '/images/partners/certified.png';
  if (s.includes('clutch')) return '/images/partners/clutch.png';
  return null;
}

export function getProductFallbackImage(_slugOrName?: string | null): string {
  return STRAPI_IMAGE_PLACEHOLDER;
}

export function getCaseStudyFallbackImage(_slugOrTitle?: string | null): string {
  return STRAPI_IMAGE_PLACEHOLDER;
}

function PartnerLogoContent({
  logo,
  imgClassName,
  textClassName,
}: {
  logo: PartnerLogo;
  imgClassName: string;
  textClassName?: string;
}) {
  const imgUrl = getStrapiMediaUrl(logo.image?.url) || getPartnerLogoFallback(logo.name);
  if (imgUrl) {
    return (
      <Image
        src={imgUrl}
        alt={logo.image?.alternativeText || logo.name}
        fill
        sizes="160px"
        className={imgClassName}
      />
    );
  }

  return <span className={textClassName}>{logo.name}</span>;
}

function renderMultilineTitle(text: string) {
  const words = text.split(' ');
  if (words.length <= 2) return text;
  const splitPoint = Math.ceil(words.length / 2);
  return (
    <>
      {words.slice(0, splitPoint).join(' ')}
      <br />
      {words.slice(splitPoint).join(' ')}
    </>
  );
}

function isVideoAsset(url?: string | null, mime?: string | null) {
  if (mime?.toLowerCase().startsWith('video/')) return true;
  return Boolean(url && /\.(mp4|webm|ogg|m4v|mov)(?:[?#].*)?$/i.test(url));
}

function resolveHeroVideoUrl(rawUrl?: string | null): string | null {
  const trimmed = rawUrl?.trim();
  if (!trimmed) return null;
  if (trimmed.startsWith('/') && !trimmed.startsWith('/uploads/')) {
    return trimmed;
  }
  return getStrapiMediaUrl(trimmed);
}

function formatHeroHeadingPrefix(prefix?: string | null): string | null | undefined {
  if (!prefix) return prefix;
  const trimmed = prefix.trim();
  if (trimmed === 'Transform Your Business With') {
    return 'Transform Your Business\nWith';
  }
  if (trimmed === 'Custom Software Built') {
    return 'Custom Software Built\n';
  }
  return prefix;
}

function formatHeroDescription(desc?: string | null): string | null | undefined {
  if (!desc) return desc;
  if (!desc.includes('\n') && desc.includes('work smarter') && desc.includes('scale with confidence')) {
    return desc
      .replace(/(modern software)\s+(engineering)/i, '$1\n$2')
      .replace(/(faster, and)\s+(scale)/i, '$1\n$2');
  }
  return desc;
}

export function HeroBlock({
  section,
  navbar,
  siteSetting,
  includeNavbar,
  currentPath,
  pageType,
}: {
  section: HeroSection;
  navbar?: NavbarData | null;
  siteSetting: SiteSetting;
  includeNavbar: boolean;
  currentPath?: string;
  pageType?: string;
}) {
  const bgImageIsVideo = isVideoAsset(section.backgroundImage?.url, section.backgroundImage?.mime);
  const bgImageUrl = bgImageIsVideo ? null : getStrapiMediaUrl(section.backgroundImage?.url);
  const videoUrl =
    resolveHeroVideoUrl(section.backgroundVideo?.url) ||
    resolveHeroVideoUrl(section.backgroundVideoUrl) ||
    (bgImageIsVideo ? resolveHeroVideoUrl(section.backgroundImage?.url) : null);
  const isCompact = section.variant === 'compact';
  const isContactPage = pageType === 'contact';
  const isAboutPage = pageType === 'about';
  const isServicePage =
    pageType === 'service' ||
    Boolean(currentPath?.startsWith('/service')) ||
    currentPath === '/custom-software-development';
  // Contact, about, and service pages share the same compact-hero banner treatment
  const isContactLikePage = isContactPage || isAboutPage || isServicePage;
  const HeroWrapper = includeNavbar ? 'header' : 'section';
  const wrapperClass = includeNavbar
    ? [
        'hero-box',
        isCompact ? 'hero-box--compact section-container-90' : '',
        isContactLikePage && isCompact ? 'hero-box--contact' : '',
      ]
        .filter(Boolean)
        .join(' ')
    : 'subpage-header';

  const rawHeroChip =
    section.chip?.trim() ||
    (isServicePage ? 'Services' : isAboutPage ? 'About Walstar Technologies' : isContactPage ? 'Contact Walstar' : null);
  const heroChip = rawHeroChip ? cleanPill(rawHeroChip) : null;

  const heroHeadlinePrefix = section.headlinePrefix
    ? formatHeroHeadingPrefix(section.headlinePrefix)
    : null;
  const heroHeadlineSerif = section.headlineSerif ?? null;
  const heroHeadlineSuffix = section.headlineSuffix
    ? isContactLikePage && isCompact && section.headlineSuffix && !section.headlineSuffix.includes('\n')
      ? `\n${section.headlineSuffix}`
      : section.headlineSuffix
    : null;

  return (
    <HeroWrapper className={wrapperClass}>
      {videoUrl ? (
        <div className="hero-bg-media">
          <HeroBackgroundVideo src={videoUrl} poster={bgImageUrl} />
          <div className="hero-bg-scrim hero-bg-scrim--contact" aria-hidden="true" />
        </div>
      ) : (
        <div className="hero-bg-media" aria-hidden="true">
          {/* Plain img so Figma multiply/offset styles are not overridden by next/image fill */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={
              bgImageUrl ||
              (currentPath === '/services'
                ? '/images/contact-hero-building.jpg'
                : STRAPI_IMAGE_PLACEHOLDER)
            }
            alt=""
            className="hero-bg-photo"
          />
          <div className="hero-bg-scrim hero-bg-scrim--contact" />
        </div>
      )}
      {includeNavbar ? (
        <WalstarHeaderNav
          navbar={navbar}
          siteSetting={siteSetting}
          currentPath={currentPath}
        />
      ) : null}
      <div
        className={
          isCompact
            ? isContactLikePage
              ? 'hero hero--compact hero--contact'
              : 'hero hero--compact'
            : 'hero'
        }
      >
        {heroChip ? <span className="chip">{heroChip}</span> : null}
        <h1 className="hero-heading">
          {renderHeadingParts(
            heroHeadlinePrefix,
            heroHeadlineSerif,
            heroHeadlineSuffix
          )}
        </h1>
        {section.description ? (
          <p className="hero-description">{renderMultilineText(formatHeroDescription(section.description))}</p>
        ) : null}
        {!isCompact && !isContactLikePage && (section.primaryCtaLabel || section.secondaryCtaLabel) ? (
          <div className="cta">
            {section.primaryCtaLabel ? (
              <WalstarButton
                variant="blue"
                className="hero-btn-primary"
                href={section.primaryCtaHref || '#cap'}
              >
                {section.primaryCtaLabel}
              </WalstarButton>
            ) : null}
            {section.secondaryCtaLabel ? (
              <WalstarButton
                variant="ghost"
                className="hero-btn-secondary"
                href={section.secondaryCtaHref || '#case'}
              >
                {section.secondaryCtaLabel}
              </WalstarButton>
            ) : null}
          </div>
        ) : null}
      </div>
    </HeroWrapper>
  );
}

export function PartnerStripBlock({ section }: { section: PartnerStripSection }) {
  const logos = section.logos ?? [];
  if (logos.length === 0) return null;

  const rawSeconds = section.animationDurationSeconds;
  const durationSeconds =
    typeof rawSeconds === 'number' && Number.isFinite(rawSeconds)
      ? Math.min(MAX_MARQUEE_SECONDS, Math.max(MIN_MARQUEE_SECONDS, rawSeconds))
      : DEFAULT_MARQUEE_SECONDS;
  const directionClass =
    section.scrollDirection === 'right' ? 'is-right' : 'is-left';

  // Repeat short logo lists inside each half-track so the full-width marquee stays seamless at any viewport width.
  const repeatCount = logos.length < 14 ? Math.ceil(14 / logos.length) : 1;
  const groupLogos = Array.from({ length: repeatCount }, () => logos).flat();

  return (
    <div className="partner-strip-wrapper">
      <div className="logos" aria-label={section.ariaLabel || 'Partners'}>
        <div
          className={`partner-marquee-track ${directionClass}`}
          style={
            {
              '--partner-marquee-duration': `${durationSeconds}s`,
            } as CSSProperties
          }
        >
          {[0, 1].map((copyIdx) => (
            <div
              key={copyIdx}
              className="partner-marquee-group"
              aria-hidden={copyIdx === 1 ? true : undefined}
            >
              {groupLogos.map((logo, idx) => (
                <div
                  key={`${copyIdx}-${logo.id ?? logo.name}-${idx}`}
                  className="partner-logo-item"
                >
                  <PartnerLogoContent
                    logo={logo}
                    imgClassName="partner-logo-img"
                    textClassName="partner-logo-text"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div
        className="homepage-hero-divider partner-strip-divider"
        aria-hidden="true"
        role="separator"
      />
    </div>
  );
}


function renderServiceFallbackIcon(service: ServiceItem) {
  const key = `${service.slug} ${service.title}`.toLowerCase();

  if (key.includes('web') || key.includes('saas')) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2.5C8.5 2.5 5.8 5.2 5.8 8.7C5.8 11 7 13 8.8 14.1V16.2C8.8 17 9.4 17.6 10.2 17.6H13.8C14.6 17.6 15.2 17 15.2 16.2V14.1C17 13 18.2 11 18.2 8.7C18.2 5.2 15.5 2.5 12 2.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 20.5H14M12 6.8L12.7 8.4L14.3 9.1L12.7 9.8L12 11.4L11.3 9.8L9.7 9.1L11.3 8.4L12 6.8Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (key.includes('ai') || key.includes('automation')) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="6" y="6" width="12" height="12" rx="2.6" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M9 2.5V6M15 2.5V6M9 18V21.5M15 18V21.5M2.5 9H6M2.5 15H6M18 9H21.5M18 15H21.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M10.2 13.8L11.6 10.2L13 13.8M10.7 12.7H12.5M14.5 10.2V13.8"
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (key.includes('marketing') || key.includes('growth')) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4.5 10.2V13.4C4.5 14.3 5.2 15 6.1 15H8.2L15.6 18.4C16.3 18.7 17.1 18.2 17.1 17.4V6.2C17.1 5.4 16.3 4.9 15.6 5.2L8.2 8.6H6.1C5.2 8.6 4.5 9.3 4.5 10.2Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 15L9.7 19.2C9.9 19.8 10.5 20.2 11.1 20H12.1M19.5 9.6C20.2 10.6 20.2 13 19.5 14"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (key.includes('software') || key.includes('erp') || key.includes('crm')) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="4.5" width="17" height="15" rx="3" stroke="currentColor" strokeWidth="1.7" />
        <path d="M3.5 9.2H20.5" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M9.5 12.6L7.5 14.4L9.5 16.2M14.5 12.6L16.5 14.4L14.5 16.2M12.6 12.1L11.4 16.7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return <span className="cap-icon-text">{service.icon}</span>;
}


export function ProductsShowcaseBlock({
  section,
  fallbackProducts,
}: {
  section: ProductsShowcaseSection;
  fallbackProducts: LandingPayload['products'];
}) {
  const products =
    section.showAllProducts === false && section.products?.length
      ? section.products
      : section.products?.length
        ? section.products
        : fallbackProducts;

  const featuredProduct = products.find((p) => p.isFeatured) ?? products[0];
  const secondaryProducts = products.filter(
    (p) => p.slug !== featuredProduct?.slug
  );

  return (
    <section className="prod products-showcase-section" id="prod">
      <div className="wrap section-container-90">
        <div className="head center products-showcase-head">
          {section.tag ? <span className="pill tag">{cleanPill(section.tag)}</span> : null}
          <h2 className="prod-heading">
            {section.headingPrefix}{' '}
            {section.headingSerif ? (
              <span className="serif">{section.headingSerif}</span>
            ) : null}
          </h2>
          {section.subtitle ? <p className="prod-subtitle">{section.subtitle}</p> : null}
        </div>

        <div className="pgrid products-showcase-grid">
          {featuredProduct ? (
            (() => {
              const featuredImgUrl =
                getStrapiMediaUrl(featuredProduct.image?.url) ||
                getProductFallbackImage(featuredProduct.slug || featuredProduct.name);
              return (
                <article className="feat product-featured-card">
                  <div
                    className="img relative product-featured-image-wrapper"
                    style={
                      featuredProduct.accentGradient
                        ? { background: featuredProduct.accentGradient }
                        : undefined
                    }
                  >
                    {featuredImgUrl ? (
                      <Image
                        src={featuredImgUrl}
                        alt={
                          featuredProduct.image?.alternativeText || featuredProduct.name
                        }
                        fill
                        sizes="(max-width: 900px) 100vw, 50vw"
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                  <div className="txt product-featured-content">
                    <h4 className="feat-title">{featuredProduct.name}</h4>
                    {featuredProduct.tagline ? (
                      <small className="feat-tagline">{featuredProduct.tagline}</small>
                    ) : null}
                    <p className="feat-desc">{featuredProduct.description}</p>
                    <WalstarButton
                      variant="compact-blue"
                      className="bt product-featured-cta-btn"
                      arrowWidth={14}
                      arrowHeight={12}
                      arrowViewBox="1.5 2.5 13 11"
                      href={`/products/${encodeURIComponent(featuredProduct.slug)}`}
                    >
                      {featuredProduct.ctaLabel || 'Read More'}
                    </WalstarButton>
                  </div>
                </article>
              );
            })()
          ) : null}

          <div className="plist products-secondary-list">
            {secondaryProducts.map((product) => {
              const mediaUrl =
                getStrapiMediaUrl(product.image?.url) ||
                getProductFallbackImage(product.slug || product.name);
              return (
                <article
                  key={product.documentId || product.slug}
                  className="pi product-item-card"
                >
                  <div
                    className="im relative product-item-image-wrapper"
                    style={
                      product.accentGradient
                        ? { background: product.accentGradient }
                        : undefined
                    }
                  >
                    {mediaUrl ? (
                      <Image
                        src={mediaUrl}
                        alt={product.image?.alternativeText || product.name}
                        fill
                        sizes="(max-width: 560px) 100vw, (max-width: 900px) 40vw, (max-width: 1440px) 25vw, 360px"
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                  <div className="pi-body product-item-body">
                    <h4 className="pi-heading">{product.name}</h4>
                    {product.tagline ? (
                      <small className="pi-subheading">{product.tagline}</small>
                    ) : null}
                    <p className="pi-description">{product.description}</p>
                    <WalstarButton
                      variant="compact-blue"
                      className="bt product-item-cta-btn"
                      arrowWidth={14}
                      arrowHeight={12}
                      arrowViewBox="1.5 2.5 13 11"
                      href={`/products/${encodeURIComponent(product.slug)}`}
                    >
                      {product.ctaLabel || 'Read More'}
                    </WalstarButton>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function expandTrustRowLogos(rowLogos: PartnerLogo[]): PartnerLogo[] {
  if (rowLogos.length === 0) return [];
  const minItemsPerGroup = 10;
  const repeatCount =
    rowLogos.length < minItemsPerGroup
      ? Math.ceil(minItemsPerGroup / rowLogos.length)
      : 1;
  return Array.from({ length: repeatCount }, () => rowLogos).flat();
}

function TrustMarqueeRow({
  logos,
  direction = 'left',
  durationSeconds,
  rowClassName,
}: {
  logos: PartnerLogo[];
  direction?: 'left' | 'right';
  durationSeconds?: number | null;
  rowClassName?: string;
}) {
  const groupLogos = expandTrustRowLogos(logos);
  if (groupLogos.length === 0) return null;

  const resolvedDuration =
    typeof durationSeconds === 'number' && durationSeconds > 0
      ? durationSeconds
      : Math.max(20, Math.round(groupLogos.length * 3.2));
  const directionClass = direction === 'right' ? 'is-right' : 'is-left';

  return (
    <div className={`trust-marquee-row${rowClassName ? ` ${rowClassName}` : ''}`}>
      <div
        className={`trust-marquee-track ${directionClass}`}
        style={
          {
            '--trust-marquee-duration': `${resolvedDuration}s`,
          } as CSSProperties
        }
      >
        {[0, 1].map((copyIdx) => (
          <div
            key={copyIdx}
            className="trust-marquee-group"
            aria-hidden={copyIdx === 1 ? true : undefined}
          >
            {groupLogos.map((logo, idx) => (
              <div
                key={`${copyIdx}-${logo.id ?? logo.name}-${idx}`}
                className="trust-logo-item"
              >
                <PartnerLogoContent
                  logo={logo}
                  imgClassName="trust-logo-img"
                  textClassName="trust-logo-text"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TrustBannerBlock({ section }: { section: TrustBannerSection }) {
  const hasDedicatedRows =
    (Boolean(section.topRowLogos && section.topRowLogos.length > 0)) ||
    (Boolean(section.bottomRowLogos && section.bottomRowLogos.length > 0));

  let topRowLogos: PartnerLogo[] = [];
  let bottomRowLogos: PartnerLogo[] = [];

  if (hasDedicatedRows) {
    topRowLogos = section.topRowLogos ?? [];
    bottomRowLogos = section.bottomRowLogos ?? [];
  } else {
    const logos = section.logos ?? [];
    const midpoint = Math.ceil(logos.length / 2);
    topRowLogos = logos.slice(0, midpoint);
    bottomRowLogos = logos.slice(midpoint);
  }

  const hasAnyLogos = topRowLogos.length > 0 || bottomRowLogos.length > 0;

  const topDuration =
    section.topRowDurationSeconds || section.animationDurationSeconds || 70;
  const topDirection =
    section.topRowDirection || (section.scrollDirection === 'right' ? 'right' : 'left');

  const bottomDuration =
    section.bottomRowDurationSeconds ||
    (typeof section.topRowDurationSeconds === 'number'
      ? Math.min(180, Math.round(section.topRowDurationSeconds * 1.555))
      : typeof section.animationDurationSeconds === 'number'
        ? Math.min(180, Math.round(section.animationDurationSeconds * 1.555))
        : 140);
  const bottomDirection =
    section.bottomRowDirection || 'right';

  return (
    <section className="trust trust-banner-section">
      {section.tag ? <span className="pill tag">{cleanPill(section.tag)}</span> : null}
      <h2 className="trust-heading">
        {renderHeadingParts(
          section.headingPrefix,
          section.headingSerif,
          section.headingSuffix
        )}
      </h2>
      {hasAnyLogos ? (
        <div className="trust-logos" aria-label={section.tag || 'Trusted businesses'}>
          {topRowLogos.length > 0 ? (
            <TrustMarqueeRow
              logos={topRowLogos}
              direction={topDirection}
              durationSeconds={topDuration}
              rowClassName="trust-row-1"
            />
          ) : null}
          {bottomRowLogos.length > 0 ? (
            <TrustMarqueeRow
              logos={bottomRowLogos}
              direction={bottomDirection}
              durationSeconds={bottomDuration}
              rowClassName="trust-row-2"
            />
          ) : null}
        </div>
      ) : null}
    </section>
  );
}

export function CaseStudiesBlock({
  section,
  fallbackCaseStudies,
}: {
  section: CaseStudiesSection;
  fallbackCaseStudies: LandingPayload['caseStudies'];
}) {
  const rawCaseStudies =
    section.showAllCaseStudies === false && section.caseStudies?.length
      ? section.caseStudies
      : section.caseStudies?.length
        ? section.caseStudies
        : fallbackCaseStudies;

  const caseStudies = [...rawCaseStudies].sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  );

  return (
    <div className="relative z-10 my-10">
      <section
        className="section-container-90 rounded-[28px] bg-[#e6f2ff] pt-14 pb-20 md:pt-20 md:pb-24"
        id="case"
      >
      <div className="w-full px-6 md:px-10 flex flex-col items-center text-center">
        {section.tag ? (
          <span className="pill tag">{cleanPill(section.tag)}</span>
        ) : null}
        <h2 className="mt-4 text-3xl font-semibold leading-[1.12] tracking-tight text-[#17191d] md:text-4xl lg:text-[42px]">
          {section.headingPrefix || 'Real Projects. Measurable'}
          <br />
          <span className="font-serif font-normal italic text-[#2699ed]">
            {section.headingSerif || 'Business Results.'}
          </span>
        </h2>
        {section.subtitle ? (
          <p className="mt-3 max-w-xl text-xs leading-relaxed text-gray-500 md:text-sm">
            {section.subtitle}
          </p>
        ) : null}
      </div>

      <div className="w-full px-6 md:px-10 mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[1.55fr_1fr]">
        {caseStudies.map((cs, idx) => {
          const coverUrl =
            getStrapiMediaUrl(cs.coverImage?.url) ||
            getCaseStudyFallbackImage(cs.slug || cs.title);
          const isWideCard = idx % 2 === 0;

          const clientLabel = cs.metaOneLabel || 'CLIENT';
          const clientValue = cs.metaOneValue || 'LCG ( Leon Capital Group)';
          const regionLabel = cs.metaThreeLabel ? (cs.metaTwoLabel || 'REGION') : 'REGION';
          const regionValue = cs.metaThreeLabel ? (cs.metaTwoValue || 'United States') : 'United States';
          const projectTypeLabel = cs.metaThreeLabel || cs.metaTwoLabel || 'PROJECT TYPE';
          const projectTypeValue = cs.metaThreeValue || cs.metaTwoValue || 'B2B Saas, Financial services';

          const formattedTitle =
            cs.title === 'Jockey Australia Website Revamp'
              ? 'Jockey Australia.Website Revamp'
              : cs.title;

          return (
            <Link
              key={cs.documentId || cs.slug || idx}
              href={`/case-studies/${encodeURIComponent(cs.slug)}`}
              className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-2xl p-6 text-white md:min-h-[360px] md:p-8"
            >
              {coverUrl ? (
                <Image
                  src={coverUrl}
                  alt={cs.coverImage?.alternativeText || cs.title}
                  fill
                  sizes={isWideCard ? '(max-width: 900px) 100vw, 60vw' : '(max-width: 900px) 100vw, 40vw'}
                  className="pointer-events-none z-0 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : null}
              <div
                className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-col gap-3">
                {cs.category ? (
                  <span className="w-fit rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                    • {cs.category}
                  </span>
                ) : null}
                <h3 className="text-lg font-semibold leading-snug text-white md:text-xl">
                  {formattedTitle}
                </h3>

                {isWideCard ? (
                  <div className="mt-2 grid grid-cols-1 gap-3 border-t border-white/15 pt-3 text-[11px] sm:grid-cols-3">
                    <div className="flex items-start gap-2">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-white/80"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="7" r="4" />
                        <path d="M5 21v-2a7 7 0 0 1 14 0v2" strokeLinecap="round" />
                      </svg>
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase tracking-wider text-white/70">
                          {clientLabel}
                        </span>
                        <b className="font-medium text-white">{clientValue}</b>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-white/80"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 21c-4.2-4.4-7-7.7-7-11.2A7 7 0 0 1 19 9.8c0 3.5-2.8 6.8-7 11.2z"
                          strokeLinejoin="round"
                        />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase tracking-wider text-white/70">
                          {regionLabel}
                        </span>
                        <b className="font-medium text-white">{regionValue}</b>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-white/80"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path
                          d="M12 3a15 15 0 0 0 0 18M12 3a15 15 0 0 1 0 18M3 12h18"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase tracking-wider text-white/70">
                          {projectTypeLabel}
                        </span>
                        <b className="font-medium text-white">{projectTypeValue}</b>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </Link>
          );
        })}
      </div>

      {section.ctaLabel ? (
        <div className="mt-8 flex justify-center">
          <WalstarButton variant="orange" href={section.ctaHref || '#cta'}>
            {section.ctaLabel}
          </WalstarButton>
        </div>
      ) : null}
    </section>

    <div className="section-container-80 relative z-10 -mt-10 rounded-2xl bg-[#0077ed] text-white shadow-lg md:-mt-12">
      <div className="flex flex-col items-start justify-between gap-6 px-6 py-7 md:flex-row md:items-center md:px-10 md:py-8">
        <div className="max-w-2xl">
          <h3 className="text-xl font-semibold leading-snug text-white md:text-2xl">
            Let&apos;s Turn Your Idea Into Something Exceptional.
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-white/85 md:text-sm">
            Whether you need an AI-powered solution, custom software, a modern website, or a digital
            growth strategy, Walstar Technologies can help you plan, build, and scale with confidence.
          </p>
        </div>
        <div className="shrink-0">
          <WalstarButton variant="orange" href="/contact">
            Discuss Your Project
          </WalstarButton>
        </div>
      </div>
    </div>
    </div>
  );
}

export function TestimonialsBlock({
  section,
  fallbackTestimonials,
}: {
  section: TestimonialsSection;
  fallbackTestimonials: LandingPayload['testimonials'];
}) {
  const testimonials =
    section.showAllTestimonials === false && section.testimonials?.length
      ? section.testimonials
      : section.testimonials?.length
        ? section.testimonials
        : fallbackTestimonials;

  return (
    <TestimonialsCarousel
      tag={section.tag || 'Honest clients'}
      headingPrefix={section.headingPrefix || 'Trusted by'}
      headingSerif={section.headingSerif || 'thousands'}
      testimonials={testimonials}
    />
  );
}

export function BeforeAfterBlock({ section }: { section: BeforeAfterSection }) {
  return <BeforeAfterSlider section={section} />;
}

function RichContentBlock({ section }: { section: RichContentSection }) {
  return (
    <section className="rich-sec">
      <div className="wrap section-container-90">
        <div className="rich-box">
          {section.tag ? <span className="pill tag">{cleanPill(section.tag)}</span> : null}
          {section.headingPrefix || section.headingSerif ? (
            <h2 className="rich-heading">
              {section.headingPrefix}{' '}
              {section.headingSerif ? (
                <span className="serif">{section.headingSerif}</span>
              ) : null}
            </h2>
          ) : null}
          {section.body ? <div className="rich-body">{section.body}</div> : null}
          {section.ctaLabel ? (
            <div style={{ marginTop: 24 }}>
              <WalstarButton variant="orange" href={section.ctaHref || '/contact'}>
                {section.ctaLabel}
              </WalstarButton>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function renderDynamicSection(
  section: PageSection,
  idx: number,
  includeHeroNavbar: boolean,
  data: LandingPayload,
  currentPath: string
) {
  const key = `${section.__component}-${section.id ?? idx}`;

  switch (section.__component) {
    case 'sections.hero':
      return (
        <HeroBlock
          key={key}
          section={section}
          navbar={data.navbar ?? data.page.navbar}
          siteSetting={data.siteSetting}
          pageType={data.page.pageType}
          includeNavbar={includeHeroNavbar}
          currentPath={currentPath}
        />
      );
    case 'sections.partner-strip':
      return <PartnerStripBlock key={key} section={section} />;
    case 'sections.about':
      return <AboutBlock key={key} section={section} />;
    case 'sections.capabilities':
      return (
        <CapabilitiesBlock
          key={key}
          section={section}
          fallbackServices={data.services}
        />
      );
    case 'sections.products-showcase':
      return (
        <ProductsShowcaseBlock
          key={key}
          section={section}
          fallbackProducts={data.products}
        />
      );
    case 'sections.trust-banner':
      // return <TrustBannerBlock key={key} section={section} />;
      return null;
    case 'sections.case-studies':
      return (
        <Fragment key={key}>
          <CaseStudiesBlock
            section={section}
            fallbackCaseStudies={data.caseStudies}
          />
          <DigitalSolutions />
        </Fragment>
      );
    case 'sections.testimonials':
      return (
        <TestimonialsBlock
          key={key}
          section={section}
          fallbackTestimonials={data.testimonials}
        />
      );
    case 'sections.before-after':
      return <BeforeAfterBlock key={key} section={section} />;
    case 'sections.cta-band':
      return <WalstarCtaBand key={key} section={section} inline />;
    case 'sections.rich-content':
      return <RichContentBlock key={key} section={section} />;
    case 'sections.contact-section':
      return (
        <ContactSectionView
          key={key}
          section={section}
          siteSetting={data.siteSetting}
        />
      );
    case 'sections.contact-interest':
      return <ContactInterestBlock key={key} section={section} />;
    case 'sections.who-we-are':
      return <WhoWeAreBlock key={key} section={section} />;
    case 'sections.journey-stats':
      return <JourneyStatsBlock key={key} section={section} />;
    case 'sections.solutions-grid':
      return <SolutionsGridBlock key={key} section={section} />;
    case 'sections.why-choose':
      return <WhyChooseBlock key={key} section={section} />;
    case 'sections.vision-mission':
      return <VisionMissionBlock key={key} section={section} />;
    case 'sections.team-showcase':
      return <TeamShowcaseBlock key={key} section={section} />;
    case 'sections.global-offices':
      return <GlobalOfficesBlock key={key} section={section} />;
    case 'sections.svc-intro':
      return <SvcIntroBlock key={key} section={section} />;
    case 'sections.svc-challenges':
      return <SvcChallengesBlock key={key} section={section} />;
    case 'sections.svc-capabilities':
      return <SvcCapabilitiesBlock key={key} section={section} />;
    case 'sections.svc-benefits':
      return <SvcBenefitsBlock key={key} section={section} />;
    case 'sections.svc-process':
      return <SvcProcessBlock key={key} section={section} />;
    case 'sections.svc-approach':
      return <SvcApproachBlock key={key} section={section} />;
    case 'sections.svc-cta':
      return <SvcCtaBlock key={key} section={section} />;
    case 'sections.service-grid':
      return (
        <ServiceGrid
          key={key}
          section={section}
          fallbackServices={data.services}
        />
      );
    case 'sections.faq-section':
      return <FaqSection key={key} section={section} />;
    default:
      return null;
  }
}

export function PageSectionsRenderer({
  data,
  source,
  currentPath: currentPathProp,
}: {
  data: LandingPayload;
  source: 'strapi' | 'fallback';
  currentPath?: string;
}) {
  const currentPath =
    currentPathProp ||
    (data.page.isHomepage || data.page.slug === 'home'
      ? '/'
      : data.page.pageType === 'service' && data.page.slug !== 'services'
        ? `/services/${encodeURIComponent(data.page.slug)}`
        : `/${encodeURIComponent(data.page.slug)}`);
  const sections = data.page.sections ?? [];
  const hasHeroFirst = sections[0]?.__component === 'sections.hero';
  const lastSection = sections[sections.length - 1];
  const trailingCta =
    lastSection?.__component === 'sections.cta-band' ? lastSection : null;
  const middleSections = trailingCta ? sections.slice(0, -1) : sections;

  const isContactPage = data.page.pageType === 'contact' || data.page.slug === 'contact';
  const isHomepage = Boolean(data.page.isHomepage || data.page.slug === 'home');
  const hasFaqSection = sections.some((section) => section.__component === 'sections.faq-section');

  return (
    <div className={isContactPage ? 'walstar-page walstar-page--contact' : 'walstar-page'}>
      <WalstarTopbar siteSetting={data.siteSetting} />

      {!hasHeroFirst ? (
        <WalstarCompactHeader
          navbar={data.navbar ?? data.page.navbar}
          siteSetting={data.siteSetting}
          title={data.page.title}
          summary={data.page.summary}
          currentPath={currentPath}
        />
      ) : null}

      {middleSections.map((section, idx) => {
        const rendered = renderDynamicSection(
          section,
          idx,
          idx === 0 && hasHeroFirst,
          data,
          currentPath
        );

        if (isHomepage && !hasFaqSection && section.__component === 'sections.testimonials') {
          return (
            <Fragment key={`testimonials-with-faq-${idx}`}>
              {rendered}
              <FaqSection key={`faq-fallback-${idx}`} />
            </Fragment>
          );
        }

        return rendered;
      })}

      {sections.length === 0 ? (
        <RichContentBlock
          section={{
            __component: 'sections.rich-content',
            headingPrefix: data.page.title,
            body:
              data.page.content ||
              data.page.summary ||
              'Configure sections for this page inside Strapi Admin -> Page.',
          }}
        />
      ) : null}

      <WalstarFooter
        footer={data.footer ?? data.page.footer}
        siteSetting={data.siteSetting}
        source={source}
        trailingCta={trailingCta}
      />
    </div>
  );
}
