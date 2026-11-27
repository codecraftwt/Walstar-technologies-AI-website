import {
  WalstarCompactHeader,
  WalstarTopbar,
} from '@/components/common/WalstarBranding';
import { WalstarFooter } from '@/components/layout/WalstarFooter';
import { HeroBlock } from '@/components/common/HeroBlock';
import { ServiceGrid } from '@/components/services/ServiceGrid';
import { SvcApproachBlock } from '@/components/services/SvcApproachSection';
import { SvcBenefitsBlock } from '@/components/services/SvcBenefitsSection';
import { SvcCapabilitiesBlock } from '@/components/services/SvcCapabilitiesSection';
import { SvcChallengesBlock } from '@/components/services/SvcChallengesSection';
import { SvcCtaBlock } from '@/components/services/SvcCtaSection';
import { SvcIntroBlock } from '@/components/services/SvcIntroSection';
import { SvcProcessBlock } from '@/components/services/SvcProcessSection';
import type { LandingPayload, PageSection } from '@/types/strapi';

function renderServiceSection(
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
    case 'sections.svc-intro':
      return <SvcIntroBlock key={`svc-intro-${idx}`} section={section} />;
    case 'sections.svc-challenges':
      return <SvcChallengesBlock key={`svc-challenges-${idx}`} section={section} />;
    case 'sections.svc-capabilities':
      return <SvcCapabilitiesBlock key={`svc-capabilities-${idx}`} section={section} />;
    case 'sections.svc-benefits':
      return <SvcBenefitsBlock key={`svc-benefits-${idx}`} section={section} />;
    case 'sections.svc-process':
      return <SvcProcessBlock key={`svc-process-${idx}`} section={section} />;
    case 'sections.svc-approach':
      return <SvcApproachBlock key={`svc-approach-${idx}`} section={section} />;
    case 'sections.svc-cta':
      return <SvcCtaBlock key={`svc-cta-${idx}`} section={section} />;
    case 'sections.service-grid':
      return (
        <ServiceGrid
          key={`service-grid-${idx}`}
          section={section}
          fallbackServices={data.services}
        />
      );
    default:
      return null;
  }
}

export function ServicesScreen({
  data,
  source,
  currentPath = '/services',
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
        renderServiceSection(
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
