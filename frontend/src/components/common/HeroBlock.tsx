import { cleanPill, renderHeadingParts, renderMultilineText } from '@/components/common/SectionPrimitives';
import { WalstarButton } from '@/components/common/WalstarButton';
import { WalstarHeaderNav } from '@/components/common/WalstarBranding';
import { HeroBackgroundVideo } from '@/components/home/HeroBackgroundVideo';
import { getStrapiMediaUrl, STRAPI_IMAGE_PLACEHOLDER } from '@/lib/strapi';
import type { HeroSection, NavbarData, SiteSetting } from '@/types/strapi';

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
