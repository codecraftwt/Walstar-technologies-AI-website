import { Fragment } from 'react';
import { AboutBlock } from '@/components/about/AboutBlock';
import { WalstarTopbar } from '@/components/common/WalstarBranding';
import { CapabilitiesBlock } from '@/components/home/CapabilitiesSection';
import { FaqSection } from '@/components/home/FaqSection';
import { WalstarFooter } from '@/components/layout/WalstarFooter';
import { HeroBlock } from '@/components/common/HeroBlock';
import { BeforeAfterBlock } from '@/components/home/BeforeAfterBlock';
import { CaseStudiesBlock } from '@/components/home/CaseStudiesBlock';
import DigitalSolutions from '@/components/DigitalSolutions';
import { PartnerStripBlock } from '@/components/home/PartnerStripBlock';
import { ProductsShowcaseBlock } from '@/components/home/ProductsShowcaseBlock';
import { TestimonialsBlock } from '@/components/home/TestimonialsBlock';
import type { LandingPayload, PageSection } from '@/types/strapi';

function renderHomeSection(
  section: PageSection,
  idx: number,
  isFirstHero: boolean,
  data: LandingPayload
) {
  switch (section.__component) {
    case 'sections.hero':
      return (
        <HeroBlock
          key={`hero-${idx}`}
          section={section}
          navbar={data.navbar ?? data.page.navbar}
          siteSetting={data.siteSetting}
          currentPath="/"
          includeNavbar={isFirstHero}
        />
      );
    case 'sections.partner-strip':
      return <PartnerStripBlock key={`partner-strip-${idx}`} section={section} />;
    case 'sections.about':
      return <AboutBlock key={`about-${idx}`} section={section} />;
    case 'sections.capabilities':
      return (
        <CapabilitiesBlock
          key={`capabilities-${idx}`}
          section={section}
          fallbackServices={data.services}
        />
      );
    case 'sections.products-showcase':
      return (
        <ProductsShowcaseBlock
          key={`products-${idx}`}
          section={section}
          fallbackProducts={data.products}
        />
      );
    case 'sections.trust-banner':
      return null;
    case 'sections.case-studies':
      return (
        <CaseStudiesBlock
          key={`case-studies-${idx}`}
          section={section}
          fallbackCaseStudies={data.caseStudies}
        />
      );
    case 'sections.digital-solutions':
      return <DigitalSolutions key={`digital-solutions-${idx}`} section={section} />;
    case 'sections.testimonials':
      return (
        <TestimonialsBlock
          key={`testimonials-${idx}`}
          section={section}
          fallbackTestimonials={data.testimonials}
        />
      );
    case 'sections.faq-section':
      return <FaqSection key={`faq-section-${idx}`} section={section} />;
    case 'sections.before-after':
      return <BeforeAfterBlock key={`before-after-${idx}`} section={section} />;
    default:
      return null;
  }
}

export function HomeScreen({
  data,
  source,
}: {
  data: LandingPayload;
  source: 'strapi' | 'fallback';
}) {
  const sections = data.page.sections ?? [];
  const hasHeroFirst = sections[0]?.__component === 'sections.hero';
  const lastSection = sections[sections.length - 1];
  const trailingCta =
    lastSection?.__component === 'sections.cta-band' ? lastSection : null;
  const middleSections = trailingCta ? sections.slice(0, -1) : sections;
  const hasFaqSection = sections.some(
    (section) => section.__component === 'sections.faq-section'
  );
  const hasDigitalSolutionsSection = sections.some(
    (section) => section.__component === 'sections.digital-solutions'
  );

  return (
    <div className="walstar-page">
      <WalstarTopbar siteSetting={data.siteSetting} />

      {middleSections.map((section, idx) => {
        const rendered = renderHomeSection(
          section,
          idx,
          idx === 0 && hasHeroFirst,
          data
        );

        if (!hasDigitalSolutionsSection && section.__component === 'sections.case-studies') {
          return (
            <Fragment key={`case-studies-with-digital-${idx}`}>
              {rendered}
              <DigitalSolutions key={`digital-solutions-fallback-${idx}`} />
            </Fragment>
          );
        }

        if (!hasFaqSection && section.__component === 'sections.testimonials') {
          return (
            <Fragment key={`testimonials-with-faq-${idx}`}>
              {rendered}
              <FaqSection key={`faq-fallback-${idx}`} />
            </Fragment>
          );
        }

        return rendered;
      })}

      <WalstarFooter
        footer={data.footer ?? data.page.footer}
        siteSetting={data.siteSetting}
        source={source}
        trailingCta={trailingCta}
      />
    </div>
  );
}
