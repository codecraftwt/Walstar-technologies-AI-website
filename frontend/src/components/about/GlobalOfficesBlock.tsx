import { cleanPill } from '@/components/common/SectionPrimitives';
import { GlobalOfficesWorldMap } from '@/components/contact/GlobalOfficesWorldMap';
import type { GlobalOfficesSection } from '@/types/strapi';

export function GlobalOfficesBlock({ section }: { section: GlobalOfficesSection }) {
  const rawPill = section.pill?.trim() || 'Global Reach';
  const pillText = cleanPill(rawPill) || 'Global Reach';

  const officesPrefix = section.headingPrefix?.trim() || 'Our global';
  const officesSerif = section.headingSerif?.trim() || 'offices';
  const officesSuffix = section.headingSuffix?.trim();

  return (
    <section className="w-full bg-white py-12 md:py-16" id="offices">
      <div className="section-container-80">
        <div className="mb-8 flex flex-col items-center text-center">
          <span className="section-pill">{pillText}</span>
          <h2 className="section-heading mt-2 text-center">
            <span className="block">
              <span>{officesPrefix} </span>
              <span className="section-heading-serif">{officesSerif}</span>
              {officesSuffix ? <span>{` ${officesSuffix}`}</span> : null}
            </span>
          </h2>
        </div>

        {section.showWorldMap !== false ? (
          <GlobalOfficesWorldMap section={section} />
        ) : null}
      </div>
    </section>
  );
}
