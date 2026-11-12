import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WalstarButton } from './WalstarButton';
import {
  GlobalOfficesBlock,
  JourneyStatsBlock,
  SolutionsGridBlock,
  TeamShowcaseBlock,
  VisionMissionBlock,
  WhoWeAreBlock,
  WhyChooseBlock,
} from '@/components/AboutSections';
import { ConsultationForm } from '@/components/ConsultationForm';
import { HeroBackgroundVideo } from '@/components/HeroBackgroundVideo';
import { renderHeadingParts } from '@/components/SectionPrimitives';
import { TestimonialsCarousel } from '@/components/TestimonialsCarousel';
import {
  WalstarCompactHeader,
  WalstarHeaderNav,
  WalstarTopbar,
} from '@/components/WalstarBranding';
import { WalstarCtaBand, WalstarFooter } from '@/components/WalstarFooter';
import { getStrapiMediaUrl } from '@/lib/strapi';
import type {
  AboutSection,
  BeforeAfterSection,
  CapabilitiesSection,
  CaseStudiesSection,
  ContactSectionBlock,
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

function PartnerLogoContent({
  logo,
  imgClassName,
  textClassName,
}: {
  logo: PartnerLogo;
  imgClassName: string;
  textClassName?: string;
}) {
  const imgUrl = getStrapiMediaUrl(logo.image?.url);
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

function HeroBlock({
  section,
  navbar,
  siteSetting,
  includeNavbar,
  currentPath,
}: {
  section: HeroSection;
  navbar?: NavbarData | null;
  siteSetting: SiteSetting;
  includeNavbar: boolean;
  currentPath?: string;
}) {
  const bgImageIsVideo = isVideoAsset(section.backgroundImage?.url, section.backgroundImage?.mime);
  const bgImageUrl = bgImageIsVideo ? null : getStrapiMediaUrl(section.backgroundImage?.url);
  const videoUrl =
    resolveHeroVideoUrl(section.backgroundVideo?.url) ||
    resolveHeroVideoUrl(section.backgroundVideoUrl) ||
    (bgImageIsVideo ? resolveHeroVideoUrl(section.backgroundImage?.url) : null);
  const isCompact = section.variant === 'compact';
  const HeroWrapper = includeNavbar ? 'header' : 'section';
  const wrapperClass = includeNavbar
    ? isCompact
      ? 'hero-box hero-box--compact'
      : 'hero-box'
    : 'subpage-header';

  return (
    <HeroWrapper className={wrapperClass}>
      {videoUrl ? (
        <div className="hero-bg-media">
          <HeroBackgroundVideo src={videoUrl} poster={bgImageUrl} />
          <div className="hero-bg-scrim" aria-hidden="true" />
        </div>
      ) : bgImageUrl ? (
        <div className="hero-bg-media">
          <Image
            src={bgImageUrl}
            alt={section.backgroundImage?.alternativeText || section.headlinePrefix}
            fill
            sizes="100vw"
            loading={includeNavbar ? 'eager' : undefined}
            className="object-cover opacity-30"
          />
        </div>
      ) : null}
      {includeNavbar ? (
        <WalstarHeaderNav
          navbar={navbar}
          siteSetting={siteSetting}
          currentPath={currentPath}
        />
      ) : null}
      <div className={isCompact ? 'hero hero--compact' : 'hero'}>
        {section.chip ? <span className="chip">{section.chip}</span> : null}
        <h1>
          {renderHeadingParts(
            section.headlinePrefix,
            section.headlineSerif,
            section.headlineSuffix
          )}
        </h1>
        {section.description ? <p>{section.description}</p> : null}
        {section.primaryCtaLabel || section.secondaryCtaLabel ? (
          <div className="cta">
            {section.primaryCtaLabel ? (
              <WalstarButton
                variant="blue"
                href={section.primaryCtaHref || '#cap'}
              >
                {section.primaryCtaLabel}
              </WalstarButton>
            ) : null}
            {section.secondaryCtaLabel ? (
              <WalstarButton
                variant="ghost"
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

function PartnerStripBlock({ section }: { section: PartnerStripSection }) {
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
  );
}

function AboutBlock({ section }: { section: AboutSection }) {
  const primaryImgUrl = getStrapiMediaUrl(section.primaryImage?.url);
  const secondaryImgUrl = getStrapiMediaUrl(section.secondaryImage?.url);
  const highlightIconUrl = getStrapiMediaUrl(section.highlightIcon?.url);

  return (
    <section className="about" id="about">
      <div className="wrap grid">
        <div className="photos" aria-hidden={!primaryImgUrl && !secondaryImgUrl}>
          <div className={primaryImgUrl ? 'p1 overflow-hidden' : 'p1 p1--empty overflow-hidden'}>
            {primaryImgUrl ? (
              <Image
                src={primaryImgUrl}
                alt={section.primaryImage?.alternativeText || 'About Walstar'}
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                className="object-cover"
              />
            ) : null}
          </div>
          <div className={secondaryImgUrl ? 'p2 overflow-hidden' : 'p2 p2--empty overflow-hidden'}>
            {secondaryImgUrl ? (
              <Image
                src={secondaryImgUrl}
                alt={section.secondaryImage?.alternativeText || 'Walstar team'}
                fill
                sizes="(max-width: 900px) 60vw, 25vw"
                className="object-cover"
              />
            ) : null}
          </div>
        </div>
        <div>
          {section.tag ? <span className="pill">{section.tag}</span> : null}
          <h2>
            {section.headingPrefix}{' '}
            {section.headingSerif ? (
              <span className="serif">{section.headingSerif}</span>
            ) : null}{' '}
            {section.headingSuffix}
          </h2>
          {section.description ? (
            <p className="lead" style={{ marginTop: 14 }}>
              {section.description}
            </p>
          ) : null}
          {section.highlightTitle ? (
            <div className="mini">
              <i>
                {highlightIconUrl ? (
                  <Image
                    src={highlightIconUrl}
                    alt={section.highlightIcon?.alternativeText || section.highlightTitle}
                    width={26}
                    height={26}
                  />
                ) : (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect
                      x="6"
                      y="6"
                      width="12"
                      height="12"
                      rx="3"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M12 9V15M9 12H15M9 3V6M15 3V6M9 18V21M15 18V21M3 9H6M3 15H6M18 9H21M18 15H21"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </i>
              <div>
                <h4>{section.highlightTitle}</h4>
                <p>{section.highlightDescription}</p>
              </div>
            </div>
          ) : null}
          {section.ctaLabel ? (
            <WalstarButton variant="orange" href={section.ctaHref || '/about-us'}>
              {section.ctaLabel}
            </WalstarButton>
          ) : null}
        </div>
      </div>
    </section>
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

  return <span>{service.icon}</span>;
}

function CapabilitiesBlock({
  section,
  fallbackServices,
}: {
  section: CapabilitiesSection;
  fallbackServices: LandingPayload['services'];
}) {
  const services =
    section.showAllServices === false && section.services?.length
      ? section.services
      : fallbackServices.length
        ? fallbackServices
        : section.services ?? [];

  const repeatPerHalf =
    services.length > 0 && services.length <= 4 ? Math.max(2, Math.ceil(6 / services.length)) : 1;
  const halfServices: ServiceItem[] = Array.from({ length: repeatPerHalf }, () => services).flat();

  const rawSeconds = section.animationDurationSeconds;
  const baseSeconds =
    typeof rawSeconds === 'number' && rawSeconds > 0
      ? Math.min(240, Math.max(6, rawSeconds))
      : 36;
  const durationSeconds = Math.min(480, baseSeconds * repeatPerHalf);
  const isRightDirection = section.scrollDirection === 'right';
  const trackStyle = {
    '--cap-marquee-duration': `${durationSeconds}s`,
  } as CSSProperties;

  const sortedSteps = [...(section.processSteps ?? [])].sort(
    (a, b) => a.stepNumber - b.stepNumber
  );
  const [stepOne, stepTwo, stepThree, stepFour] = sortedSteps;

  return (
    <section className="cap" id="cap">
      <div className="head">
        {section.pill ? <span className="pill">{section.pill}</span> : null}
        <h2>
          {section.headingPrefix}{' '}
          {section.headingSerif ? (
            <span className="serif">{section.headingSerif}</span>
          ) : null}
        </h2>
        {section.subtitle ? <p>{section.subtitle}</p> : null}
      </div>

      {services.length > 0 ? (
        <div className="track" style={trackStyle}>
          <div className={isRightDirection ? 'cap-marquee-track is-right' : 'cap-marquee-track'}>
            {[0, 1].map((groupIndex) => (
              <div
                key={`cap-group-${groupIndex}`}
                className="cap-marquee-group"
                aria-hidden={groupIndex === 1}
              >
                {halfServices.map((service, idx) => {
                  const mediaUrl = getStrapiMediaUrl(service.image?.url);
                  const iconImgUrl = getStrapiMediaUrl(service.iconImage?.url);
                  const shotClass =
                    service.themeVariant && service.themeVariant !== 'a'
                      ? `shot ${service.themeVariant} relative overflow-hidden`
                      : 'shot relative overflow-hidden';

                  return (
                    <Link
                      key={`${groupIndex}-${service.documentId || service.slug}-${idx}`}
                      href={`/services/${encodeURIComponent(service.slug)}`}
                      className="card"
                      tabIndex={groupIndex === 1 ? -1 : undefined}
                    >
                      <span className="nt" aria-hidden="true" />
                      <span className="ic" aria-hidden="true">
                        {iconImgUrl ? (
                          <Image
                            src={iconImgUrl}
                            alt=""
                            width={28}
                            height={28}
                            className="cap-ic-img"
                          />
                        ) : (
                          renderServiceFallbackIcon(service)
                        )}
                      </span>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <div className={shotClass}>
                        {mediaUrl ? (
                          <Image
                            src={mediaUrl}
                            alt={service.image?.alternativeText || service.title}
                            fill
                            sizes="(max-width: 900px) 80vw, 350px"
                            className="object-cover"
                          />
                        ) : null}
                      </div>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {section.ctaLabel ? (
        <div className="more">
          <WalstarButton variant="orange" href={section.ctaHref || '/service-1'}>
            {section.ctaLabel}
          </WalstarButton>
        </div>
      ) : null}

      {section.showProcess !== false && sortedSteps.length > 0 ? (
        <div className="proc">
          <div className="hd">
            {section.processPill ? (
              <span className="pill">{section.processPill}</span>
            ) : null}
            <h2>
              {section.processHeadingPrefix}{' '}
              {section.processHeadingSerif ? (
                <span className="serif">{section.processHeadingSerif}</span>
              ) : null}
              <br />
              {section.processHeadingSuffix}
            </h2>
          </div>

          {stepThree ? (
            <div className={stepThree.isHighlighted ? 'pc up3' : 'pc'}>
              <h4>{renderMultilineTitle(stepThree.title)}</h4>
              <p>{stepThree.description}</p>
            </div>
          ) : null}

          {stepFour ? (
            <div className="pc">
              <h4>{renderMultilineTitle(stepFour.title)}</h4>
              <p>{stepFour.description}</p>
            </div>
          ) : null}

          <div className="tl" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </div>

          {stepOne ? (
            <div className="pc">
              <h4>{renderMultilineTitle(stepOne.title)}</h4>
              <p>{stepOne.description}</p>
            </div>
          ) : null}

          {stepTwo ? (
            <div className="pc">
              <h4>{renderMultilineTitle(stepTwo.title)}</h4>
              <p>{stepTwo.description}</p>
            </div>
          ) : null}

          <div className="pnote">
            {section.processNote ? <p>{section.processNote}</p> : null}
            {section.processVideoLabel ? (
              <Link className="vid" href={section.processVideoUrl || '#cta'}>
                <i>↗</i>
                {section.processVideoLabel}
              </Link>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  );
}

function ProductsShowcaseBlock({
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
    <section className="prod" id="prod">
      <div className="wrap">
        <div className="head center">
          {section.tag ? <span className="tag">{section.tag}</span> : null}
          <h2>
            {section.headingPrefix}{' '}
            {section.headingSerif ? (
              <span className="serif">{section.headingSerif}</span>
            ) : null}
          </h2>
          {section.subtitle ? <p>{section.subtitle}</p> : null}
        </div>

        <div className="pgrid">
          {featuredProduct ? (
            <article className="feat">
              <div
                className="img relative"
                style={
                  featuredProduct.accentGradient
                    ? { background: featuredProduct.accentGradient }
                    : undefined
                }
              >
                {getStrapiMediaUrl(featuredProduct.image?.url) ? (
                  <Image
                    src={getStrapiMediaUrl(featuredProduct.image?.url)!}
                    alt={
                      featuredProduct.image?.alternativeText || featuredProduct.name
                    }
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className="object-cover"
                  />
                ) : null}
              </div>
              <div className="txt">
                <h4>{featuredProduct.name}</h4>
                {featuredProduct.tagline ? (
                  <small>{featuredProduct.tagline}</small>
                ) : null}
                <p>{featuredProduct.description}</p>
                <WalstarButton
                  variant="compact-blue"
                  href={`/products/${encodeURIComponent(featuredProduct.slug)}`}
                >
                  {featuredProduct.ctaLabel || 'Read More'}
                </WalstarButton>
              </div>
            </article>
          ) : null}

          <div className="plist">
            {secondaryProducts.map((product) => {
              const mediaUrl = getStrapiMediaUrl(product.image?.url);
              return (
                <article
                  key={product.documentId || product.slug}
                  className="pi"
                >
                  <div
                    className="im relative"
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
                        sizes="(max-width: 560px) 100vw, 240px"
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                  <div className="pi-body">
                    <h4>{product.name}</h4>
                    {product.tagline ? <small>{product.tagline}</small> : null}
                    <p>{product.description}</p>
                    <WalstarButton
                      variant="compact-blue"
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
  direction,
}: {
  logos: PartnerLogo[];
  direction: 'left' | 'right';
}) {
  const groupLogos = expandTrustRowLogos(logos);
  if (groupLogos.length === 0) return null;

  const durationSeconds = Math.max(24, Math.round(groupLogos.length * 4.8));
  const directionClass = direction === 'right' ? 'is-right' : 'is-left';

  return (
    <div className="trust-marquee-row">
      <div
        className={`trust-marquee-track ${directionClass}`}
        style={
          {
            '--trust-marquee-duration': `${durationSeconds}s`,
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

function TrustBannerBlock({ section }: { section: TrustBannerSection }) {
  const logos = section.logos ?? [];
  const midpoint = Math.ceil(logos.length / 2);
  const topRowLogos = logos.slice(0, midpoint);
  const bottomRowLogos = logos.slice(midpoint);

  return (
    <section className="trust">
      {section.tag ? <span className="pill">{section.tag}</span> : null}
      <h2>
        {renderHeadingParts(
          section.headingPrefix,
          section.headingSerif,
          section.headingSuffix
        )}
      </h2>
      {logos.length > 0 ? (
        <div className="trust-logos" aria-label={section.tag || 'Trusted businesses'}>
          <TrustMarqueeRow logos={topRowLogos} direction="left" />
          {bottomRowLogos.length > 0 ? (
            <TrustMarqueeRow logos={bottomRowLogos} direction="right" />
          ) : null}
        </div>
      ) : null}
    </section>
  );
}

function CaseStudiesBlock({
  section,
  fallbackCaseStudies,
}: {
  section: CaseStudiesSection;
  fallbackCaseStudies: LandingPayload['caseStudies'];
}) {
  const caseStudies =
    section.showAllCaseStudies === false && section.caseStudies?.length
      ? section.caseStudies
      : section.caseStudies?.length
        ? section.caseStudies
        : fallbackCaseStudies;

  return (
    <section className="case" id="case">
      <div className="wrap center head">
        {section.tag ? <span className="tag">{section.tag}</span> : null}
        <h2>
          {section.headingPrefix}{' '}
          {section.headingSerif ? (
            <span className="serif">{section.headingSerif}</span>
          ) : null}
        </h2>
        {section.subtitle ? (
          <p
            style={{
              color: 'var(--mute)',
              fontSize: '13px',
              marginTop: 8,
            }}
          >
            {section.subtitle}
          </p>
        ) : null}
      </div>

      <div className="cgrid">
        {caseStudies.map((cs) => {
          const coverUrl = getStrapiMediaUrl(cs.coverImage?.url);
          return (
            <Link
              key={cs.documentId || cs.slug}
              href={`/case-studies/${encodeURIComponent(cs.slug)}`}
              className={`cs ${cs.themeVariant || 'a'}`}
            >
              {coverUrl ? (
                <Image
                  src={coverUrl}
                  alt={cs.coverImage?.alternativeText || cs.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className="z-0 object-cover brightness-55 pointer-events-none"
                />
              ) : null}
              <span className="t relative z-10">{cs.category}</span>
              <h3 className="relative z-10">{cs.title}</h3>
              <div className="meta relative z-10">
                <span>
                  {cs.metaOneLabel}
                  <b>{cs.metaOneValue}</b>
                </span>
                <span>
                  {cs.metaTwoLabel}
                  <b>{cs.metaTwoValue}</b>
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {section.ctaLabel ? (
        <div className="more">
          <WalstarButton variant="orange" href={section.ctaHref || '#cta'}>
            {section.ctaLabel}
          </WalstarButton>
        </div>
      ) : null}
    </section>
  );
}

function TestimonialsBlock({
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

function BeforeAfterBlock({ section }: { section: BeforeAfterSection }) {
  const beforeUrl = getStrapiMediaUrl(section.beforeImage?.url);
  const afterUrl = getStrapiMediaUrl(section.afterImage?.url);

  return (
    <section className="ba" aria-label="Before and after">
      <div className="bf relative overflow-hidden">
        {beforeUrl ? (
          <Image
            src={beforeUrl}
            alt={section.beforeImage?.alternativeText || section.beforeTitle || 'Before'}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="z-0 object-cover brightness-55 pointer-events-none"
          />
        ) : null}
        <span className="relative z-10">
          <small>{section.beforeEyebrow}</small>
          <b>{section.beforeTitle}</b>
          <small>{section.beforeCaption}</small>
        </span>
      </div>
      <div className="af relative overflow-hidden">
        {afterUrl ? (
          <Image
            src={afterUrl}
            alt={section.afterImage?.alternativeText || section.afterTitle || 'After'}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="z-0 object-cover brightness-55 pointer-events-none"
          />
        ) : null}
        <span className="relative z-10">
          <small>{section.afterEyebrow}</small>
          <b>{section.afterTitle}</b>
          <small>{section.afterCaption}</small>
        </span>
      </div>
    </section>
  );
}

function RichContentBlock({ section }: { section: RichContentSection }) {
  return (
    <section className="rich-sec">
      <div className="wrap">
        <div className="rich-box">
          {section.tag ? <span className="tag">{section.tag}</span> : null}
          {section.headingPrefix || section.headingSerif ? (
            <h2>
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

function ContactSectionView({
  section,
  siteSetting,
}: {
  section: ContactSectionBlock;
  siteSetting: SiteSetting;
}) {
  return (
    <section className="contact-sec" id="contact-form">
      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-info-box">
            {section.tag ? <span className="tag">{section.tag}</span> : null}
            <h2>
              {section.headingPrefix}{' '}
              {section.headingSerif ? (
                <span className="serif">{section.headingSerif}</span>
              ) : null}
            </h2>
            {section.subtitle ? <p className="lead">{section.subtitle}</p> : null}

            {section.showOfficeDetails !== false ? (
              <div className="contact-meta-list">
                <div className="contact-meta-item">
                  <b>⌖</b>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#5d6280]">
                      Headquarters
                    </div>
                    <p className="mt-0.5">{siteSetting.officeAddress}</p>
                  </div>
                </div>
                <div className="contact-meta-item">
                  <b>✆</b>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#5d6280]">
                      Phone
                    </div>
                    <p className="mt-0.5 whitespace-pre-line">{siteSetting.officePhones}</p>
                  </div>
                </div>
                <div className="contact-meta-item">
                  <b>✉</b>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#5d6280]">
                      Direct Email
                    </div>
                    <a
                      href={`mailto:${siteSetting.contactEmail}`}
                      className="mt-0.5 inline-block text-[#2f80ff] hover:underline"
                    >
                      {siteSetting.contactEmail}
                    </a>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <ConsultationForm
            title="Start a Conversation"
            subtitle="Tell us about your project and we'll respond within 1 business day."
            buttonLabel="Send Project Inquiry ↗"
            variant="card"
            source={section.formSource || 'contact-page'}
            anchorId="contact-page-consultation"
          />
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
      return <TrustBannerBlock key={key} section={section} />;
    case 'sections.case-studies':
      return (
        <CaseStudiesBlock
          key={key}
          section={section}
          fallbackCaseStudies={data.caseStudies}
        />
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
    default:
      return null;
  }
}

export function PageSectionsRenderer({
  data,
  source,
}: {
  data: LandingPayload;
  source: 'strapi' | 'fallback';
}) {
  const currentPath =
    data.page.isHomepage || data.page.slug === 'home'
      ? '/'
      : `/${encodeURIComponent(data.page.slug)}`;
  const sections = data.page.sections ?? [];
  const hasHeroFirst = sections[0]?.__component === 'sections.hero';
  const lastSection = sections[sections.length - 1];
  const trailingCta =
    lastSection?.__component === 'sections.cta-band' ? lastSection : null;
  const middleSections = trailingCta ? sections.slice(0, -1) : sections;

  return (
    <div className="walstar-page">
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

      {middleSections.map((section, idx) =>
        renderDynamicSection(
          section,
          idx,
          idx === 0 && hasHeroFirst,
          data,
          currentPath
        )
      )}

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
        siteSetting={data.siteSetting}
        source={source}
        trailingCta={trailingCta}
      />
    </div>
  );
}
