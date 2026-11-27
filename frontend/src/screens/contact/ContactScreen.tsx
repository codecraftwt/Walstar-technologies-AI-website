import {
  WalstarCompactHeader,
  WalstarTopbar,
} from '@/components/common/WalstarBranding';
import { ContactInterestBlock } from '@/components/contact/ContactInterestBlock';
import { ContactSectionView } from '@/components/contact/ContactSectionView';
import { WalstarFooter } from '@/components/layout/WalstarFooter';
import { HeroBlock } from '@/components/common/HeroBlock';
import type { LandingPayload, PageSection } from '@/types/strapi';

function renderContactSection(
  section: PageSection,
  idx: number,
  isFirstHero: boolean,
  data: LandingPayload,
  currentPath: string
) {
  switch (section.__component) {
    case 'sections.hero':
      return (
        <HeroBlock
          key={`hero-${idx}`}
          section={section}
          navbar={data.navbar ?? data.page.navbar}
          siteSetting={data.siteSetting}
          currentPath={currentPath}
          includeNavbar={isFirstHero}
          pageType={data.page.pageType}
        />
      );
    case 'sections.contact-section':
      return (
        <ContactSectionView
          key={`contact-section-${idx}`}
          section={section}
          siteSetting={data.siteSetting}
        />
      );
    case 'sections.contact-interest':
      return <ContactInterestBlock key={`contact-interest-${idx}`} section={section} />;
    default:
      return null;
  }
}

export function ContactScreen({
  data,
  source,
  currentPath = '/contact',
}: {
  data: LandingPayload;
  source: 'strapi' | 'fallback';
  currentPath?: string;
}) {
  const sections = data.page.sections ?? [];
  const hasHeroFirst = sections[0]?.__component === 'sections.hero';
  const lastSection = sections[sections.length - 1];
  const trailingCta =
    lastSection?.__component === 'sections.cta-band' ? lastSection : null;
  const middleSections = trailingCta ? sections.slice(0, -1) : sections;

  return (
    <div className="walstar-page walstar-page--contact">
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
        renderContactSection(
          section,
          idx,
          idx === 0 && hasHeroFirst,
          data,
          currentPath
        )
      )}

      <WalstarFooter
        footer={data.footer ?? data.page.footer}
        siteSetting={data.siteSetting}
        source={source}
        trailingCta={trailingCta}
      />
    </div>
  );
}
