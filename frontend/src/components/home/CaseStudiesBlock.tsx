import Image from 'next/image';
import Link from 'next/link';
import { OverlappingCtaBanner } from '@/components/common/OverlappingCtaBanner';
import { cleanPill } from '@/components/common/SectionPrimitives';
import { WalstarButton } from '@/components/common/WalstarButton';
import { getStrapiMediaUrl, STRAPI_IMAGE_PLACEHOLDER } from '@/lib/strapi';
import type { CaseStudiesSection, LandingPayload } from '@/types/strapi';

function getCaseStudyFallbackImage(_slugOrTitle?: string | null): string {
  return STRAPI_IMAGE_PLACEHOLDER;
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
        className="section-container-90 rounded-[28px] bg-[#DDEFFF] pt-14 pb-28 md:pt-20 md:pb-32"
        id="case"
      >
      <div className="w-full px-6 md:px-10 flex flex-col items-center text-center">
        {section.tag ? (
          <span className="section-pill">{cleanPill(section.tag)}</span>
        ) : null}
        <h2 className="section-heading mt-2">
          {section.headingPrefix || 'Real Projects. Measurable'}
          <br />
          <span className="section-heading-serif">
            {section.headingSerif || 'Business Results.'}
          </span>
        </h2>
        {section.subtitle ? (
          <p className="section-description mt-3 max-w-xl">
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
              className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-4xl p-6 text-white md:min-h-[360px] md:p-8"
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

    <OverlappingCtaBanner
      title={section.ctaBannerTitle || "Let's Turn Your Idea Into Something Exceptional."}
      description={
        section.ctaBannerDescription ||
        'Whether you need an AI-powered solution, custom software, a modern website, or a digital growth strategy, Walstar Technologies can help you plan, build, and scale with confidence.'
      }
      ctaLabel={section.ctaBannerLabel || 'Discuss Your Project'}
      ctaHref={section.ctaBannerHref || '/contact'}
    />
    </div>
  );
}
