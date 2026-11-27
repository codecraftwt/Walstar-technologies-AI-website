import { AboutBlock } from '@/components/about/AboutBlock';
import { GlobalOfficesBlock } from '@/components/about/GlobalOfficesBlock';
import { JourneyStatsBlock } from '@/components/about/JourneyStatsBlock';
import { SolutionsGridBlock } from '@/components/about/SolutionsGridBlock';
import { TeamShowcaseBlock } from '@/components/about/TeamShowcaseBlock';
import { VisionMissionBlock } from '@/components/about/VisionMissionBlock';
import { WhoWeAreBlock } from '@/components/about/WhoWeAreBlock';
import { WhyChooseBlock } from '@/components/about/WhyChooseBlock';
import {
  WalstarCompactHeader,
  WalstarTopbar,
} from '@/components/common/WalstarBranding';
import { WalstarFooter } from '@/components/layout/WalstarFooter';
import { HeroBlock } from '@/components/common/HeroBlock';
import type { LandingPayload, PageSection } from '@/types/strapi';

function renderAboutSection(
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
    case 'sections.about':
      return <AboutBlock key={`about-${idx}`} section={section} />;
    case 'sections.who-we-are':
      return <WhoWeAreBlock key={`who-we-are-${idx}`} section={section} />;
    case 'sections.journey-stats':
      return <JourneyStatsBlock key={`journey-stats-${idx}`} section={section} />;
    case 'sections.solutions-grid':
      return <SolutionsGridBlock key={`solutions-grid-${idx}`} section={section} />;
    case 'sections.why-choose':
      return <WhyChooseBlock key={`why-choose-${idx}`} section={section} />;
    case 'sections.vision-mission':
      return <VisionMissionBlock key={`vision-mission-${idx}`} section={section} />;
    case 'sections.team-showcase':
      return <TeamShowcaseBlock key={`team-showcase-${idx}`} section={section} />;
    case 'sections.global-offices':
      return <GlobalOfficesBlock key={`global-offices-${idx}`} section={section} />;
    default:
      return null;
  }
}

export function AboutScreen({
  data,
  source,
  currentPath = '/about',
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
        renderAboutSection(
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
