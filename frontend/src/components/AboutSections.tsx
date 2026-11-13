import Image from 'next/image';
import Link from 'next/link';
import {
  WalstarSectionHeader,
  renderHeadingParts,
  renderMultilineText,
} from '@/components/SectionPrimitives';
import { WalstarButton, WalstarButtonArrow } from '@/components/WalstarButton';
import { getStrapiMediaUrl } from '@/lib/strapi';
import type {
  AboutSection,
  GlobalOfficesSection,
  JourneyStatsSection,
  SolutionsGridSection,
  TeamMemberItem,
  TeamShowcaseSection,
  VisionMissionSection,
  WhoWeAreSection,
  WhyChooseSection,
  WorldMapPinItem,
} from '@/types/strapi';

const FLAG_BACKGROUNDS: Record<NonNullable<WorldMapPinItem['flagVariant']>, string> = {
  us: 'linear-gradient(#b22234 50%, #3c3b6e 50%)',
  in: 'linear-gradient(#f93 33%, #fff 33% 66%, #138808 66%)',
  au: '#1a2a8a',
  uk: 'linear-gradient(135deg, #012169 45%, #c8102e 45% 55%, #012169 55%)',
};

function isExternalHref(href: string): boolean {
  return href.startsWith('http://') || href.startsWith('https://');
}

function TeamMemberCard({
  member,
  variant,
}: {
  member: TeamMemberItem;
  variant: 'executive' | 'avatar';
}) {
  const photoUrl = getStrapiMediaUrl(member.photo?.url);
  const baseClass = variant === 'executive' ? 'pp' : 'av';
  const stateClass = photoUrl ? baseClass : `${baseClass} ${baseClass}--placeholder`;
  const linkedinHref = member.linkedinUrl?.trim();

  return (
    <div
      className={stateClass}
      role={photoUrl ? undefined : 'img'}
      aria-label={photoUrl ? undefined : member.name || member.role || 'Team member'}
    >
      {photoUrl ? (
        <Image
          src={photoUrl}
          alt={member.photo?.alternativeText || member.name || member.role || 'Team member'}
          fill
          sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw"
          className="object-cover"
        />
      ) : null}

      {member.name ? (
        <div className="chip2">
          <b>{member.name}</b>
          {member.role ? renderMultilineText(member.role) : null}
          {linkedinHref ? (
            isExternalHref(linkedinHref) ? (
              <a
                href={linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} LinkedIn profile`}
              >
                in
              </a>
            ) : (
              <Link href={linkedinHref} aria-label={`${member.name} profile`}>
                in
              </Link>
            )
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function formatAboutDescription(desc?: string | null): string | null | undefined {
  if (!desc) return desc;
  if (!desc.includes('\n') && desc.includes('intelligent agents') && desc.includes('connected business workflows')) {
    return desc
      .replace(
        'connected business workflows, we design and implement',
        'connected business workflows, we design\nand implement'
      )
      .replace(
        'help businesses save time, improve decisions,',
        'help businesses save time,\nimprove decisions,'
      );
  }
  return desc;
}

export function AboutBlock({ section }: { section: AboutSection }) {
  const primaryImgUrl = getStrapiMediaUrl(section.primaryImage?.url);
  const secondaryImgUrl = getStrapiMediaUrl(section.secondaryImage?.url);
  const highlightIconUrl = getStrapiMediaUrl(section.highlightIcon?.url);

  return (
    <section className="about" id="about">
      <div className="wrap grid section">
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
          <h2 className="about-heading">
            <span className="about-heading-row">{section.headingPrefix}</span>
            <span className="about-heading-row">
              {section.headingSerif ? (
                <span className="serif">{section.headingSerif}</span>
              ) : null}{' '}
              {section.headingSuffix}
            </span>
          </h2>
          {section.description ? (
            <p className="lead about-lead-desc" style={{ marginTop: 14, color: '#666666' }}>
              {renderMultilineText(formatAboutDescription(section.description))}
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
              <div className="mini-content">
                <h4 className="mini-title">{section.highlightTitle}</h4>
                <p className="mini-desc">{section.highlightDescription}</p>
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

export function WhoWeAreBlock({ section }: { section: WhoWeAreSection }) {
  const imageUrl = getStrapiMediaUrl(section.image?.url);

  return (
    <section className="sec who">
      <div className="wrap section">
        <div
          className={imageUrl ? 'ph relative overflow-hidden' : 'ph'}
          role={imageUrl ? undefined : 'img'}
          aria-label={imageUrl ? undefined : section.pill || 'Team collaborating'}
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={section.image?.alternativeText || section.pill || 'Team collaborating'}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className="object-cover"
            />
          ) : null}
        </div>

        <div>
          {section.pill ? <span className="pill">{section.pill}</span> : null}
          <h2>
            {renderHeadingParts(
              section.headingPrefix,
              section.headingSerif,
              section.headingSuffix
            )}
          </h2>
          {section.description ? (
            <p>{renderMultilineText(section.description)}</p>
          ) : null}
          {section.ctaLabel ? (
            <Link className="go" href={section.ctaHref || '/service-1'}>
              <i aria-hidden="true">
                <WalstarButtonArrow />
              </i>
              <span>{section.ctaLabel.replace(/\s*[↗→]\s*$/, '')}</span>
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function JourneyStatsBlock({ section }: { section: JourneyStatsSection }) {
  const milestones = section.milestones ?? [];
  const stats = section.stats ?? [];

  return (
    <section className="way">
      <div className="wrap">
        <div>
          {section.pill ? <span className="pill">{section.pill}</span> : null}
          <h2>
            {renderHeadingParts(
              section.headingPrefix,
              section.headingSerif,
              section.headingSuffix
            )}
          </h2>
          {section.description ? (
            <p>{renderMultilineText(section.description)}</p>
          ) : null}
        </div>

        {milestones.length > 0 ? (
          <div className="tlv">
            {milestones.map((milestone, idx) => (
              <div
                key={`${milestone.era}-${milestone.id ?? idx}`}
                className={milestone.isCurrent ? 'now' : undefined}
              >
                <small>{milestone.era}</small>
                <h4>{milestone.title}</h4>
                <p>{renderMultilineText(milestone.description)}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {stats.length > 0 ? (
        <div className="stats">
          {stats.map((stat, idx) => (
            <div key={`${stat.value}-${stat.id ?? idx}`}>
              <b>{stat.value}</b>
              <span>{renderMultilineText(stat.label)}</span>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export function SolutionsGridBlock({ section }: { section: SolutionsGridSection }) {
  const items = section.items ?? [];

  return (
    <section className={section.hasTopOverlap !== false ? 'sec sol' : 'sec'}>
      <div className="wrap">
        <WalstarSectionHeader
          pill={section.pill}
          headingPrefix={section.headingPrefix}
          headingSerif={section.headingSerif}
          headingSuffix={section.headingSuffix}
          subtitle={section.subtitle}
        />

        <div className="g4">
          {items.map((item, idx) => {
            const key = `${item.number}-${item.id ?? idx}`;
            const cardBody = (
              <>
                <div className="n">
                  <span>{item.number}</span>
                  <i aria-hidden="true" className="n-arrow">
                    <WalstarButtonArrow width={15} height={15} />
                  </i>
                </div>
                <h4>{item.title}</h4>
                {item.category ? <small>{item.category}</small> : null}
              </>
            );

            if (item.href) {
              return (
                <Link key={key} href={item.href} className="sc">
                  {cardBody}
                </Link>
              );
            }

            return (
              <article key={key} className="sc">
                {cardBody}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseBlock({ section }: { section: WhyChooseSection }) {
  const reasons = section.reasons ?? [];
  const tickerItems = section.tickerItems ?? [];

  return (
    <div className="whyw">
      <section className="why">
        <WalstarSectionHeader
          pill={section.pill}
          headingPrefix={section.headingPrefix}
          headingSerif={section.headingSerif}
          headingSuffix={section.headingSuffix}
          style={{ marginBottom: 0 }}
        />

        {reasons.length > 0 ? (
          <div className="rows">
            {reasons.map((reason, idx) => (
              <div key={`${reason.title}-${reason.id ?? idx}`} className="row">
                <i aria-hidden="true">{reason.icon || '▭'}</i>
                <h4>{reason.title}</h4>
                <p>{renderMultilineText(reason.description)}</p>
              </div>
            ))}
          </div>
        ) : null}
      </section>

      {tickerItems.length > 0 ? (
        <div className="tick" aria-label="Outcomes we drive">
          <div>
            {tickerItems.map((item, idx) => (
              <span key={`tick-a-${item.id ?? idx}`}>{item.label}</span>
            ))}
            {tickerItems.map((item, idx) => (
              <span key={`tick-b-${item.id ?? idx}`} aria-hidden="true">
                {item.label}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function VisionMissionBlock({ section }: { section: VisionMissionSection }) {
  return (
    <section className="sec">
      <div className="wrap">
        <WalstarSectionHeader
          pill={section.pill}
          headingPrefix={section.headingPrefix}
          headingSerif={section.headingSerif}
          headingSuffix={section.headingSuffix}
        />

        <div className="vm">
          <div className="v">
            <div className="ico" aria-hidden="true">
              {section.visionIcon || '◎'}
            </div>
            <h3>{section.visionTitle || 'Our Vision'}</h3>
            {section.visionDescription ? (
              <p>{renderMultilineText(section.visionDescription)}</p>
            ) : null}
            {section.visionCtaLabel ? (
              <Link className="btn" href={section.visionCtaHref || '/contact'}>
                {section.visionCtaLabel}
              </Link>
            ) : null}
          </div>

          <div className="m">
            <div className="ico" aria-hidden="true">
              {section.missionIcon || '◎'}
            </div>
            <h3>{section.missionTitle || 'Our Mission'}</h3>
            {section.missionDescription ? (
              <p>{renderMultilineText(section.missionDescription)}</p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TeamShowcaseBlock({ section }: { section: TeamShowcaseSection }) {
  const executives = section.executives ?? [];
  const advisoryMembers = section.advisoryMembers ?? [];
  const salesMembers = section.salesMembers ?? [];

  return (
    <section className="team">
      <div className="wrap">
        <WalstarSectionHeader
          pill={section.pill}
          headingPrefix={section.headingPrefix}
          headingSerif={section.headingSerif}
          headingSuffix={section.headingSuffix}
        />

        <div className="ex">
          <div className="q">
            <h5>{section.executiveLabel || 'Executive Team'}</h5>
            <b aria-hidden="true">❝</b>
            {section.executiveQuote ? (
              <em>{renderMultilineText(section.executiveQuote)}</em>
            ) : null}
            {section.executiveQuoteAuthor ? (
              <small>{section.executiveQuoteAuthor}</small>
            ) : null}
          </div>

          {executives.map((member, idx) => (
            <TeamMemberCard
              key={`exec-${member.id ?? idx}`}
              member={member}
              variant="executive"
            />
          ))}
        </div>

        {advisoryMembers.length > 0 ? (
          <>
            {section.advisoryTitle ? <h3 className="sub">{section.advisoryTitle}</h3> : null}
            <div className="g3">
              {advisoryMembers.map((member, idx) => (
                <TeamMemberCard
                  key={`adv-${member.id ?? idx}`}
                  member={member}
                  variant="avatar"
                />
              ))}
            </div>
          </>
        ) : null}

        {salesMembers.length > 0 ? (
          <>
            {section.salesTitle ? <h3 className="sub">{section.salesTitle}</h3> : null}
            <div className="g4b">
              {salesMembers.map((member, idx) => (
                <TeamMemberCard
                  key={`sales-${member.id ?? idx}`}
                  member={member}
                  variant="avatar"
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}

const DEFAULT_MAP_PINS: WorldMapPinItem[] = [
  { label: 'Dallas,TX USA', leftPercent: 12, topPx: 0, flagVariant: 'us' },
  { label: 'Kolhapur | Pune, India', leftPercent: 46, topPx: 14, flagVariant: 'in' },
  { label: 'Brisbane, QLD Australia', leftPercent: 64, topPx: 118, flagVariant: 'au' },
];

export function GlobalOfficesBlock({ section }: { section: GlobalOfficesSection }) {
  const rawPins = section.mapPins ?? [];
  const mapPins = rawPins.length > 0 ? rawPins : DEFAULT_MAP_PINS;
  const offices = section.offices ?? [];
  const mapImageUrl = section.image?.url
    ? getStrapiMediaUrl(section.image.url)
    : null;

  return (
    <section className="sec offices">
      <div className="wrap">
        <WalstarSectionHeader
          pill={section.pill}
          headingPrefix={section.headingPrefix}
          headingSerif={section.headingSerif}
          headingSuffix={section.headingSuffix}
          style={{ marginBottom: 0 }}
        />

        {section.showWorldMap !== false ? (
          <div className="map">
            {mapImageUrl ? (
              <Image
                src={mapImageUrl}
                alt={section.image?.alternativeText || 'Areas we serve'}
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                className="object-contain"
                priority={false}
              />
            ) : (
              <svg viewBox="0 0 900 340" aria-hidden="true">
                <g fill="#d4d4d4">
                  <path d="M120 60l90-20 90 20 20 50-30 60-50 30-40 40-30-50-40-40z" />
                  <path d="M250 210l60 10 20 50-30 60-30-40z" />
                  <path d="M400 70l90-20 120 10 140 20 40 60-60 40-80 20-40 60-60-20-30-60-60 10-30-50z" />
                  <path d="M410 160l70 20 20 70-30 50-40-40z" />
                  <path d="M690 230l70-10 30 40-50 30-50-20z" />
                </g>
                <g strokeWidth="1">
                  <path d="M135 20v152" stroke="#d6003b" />
                  <path d="M470 30v168" stroke="#f0a020" />
                  <path d="M570 100v155" stroke="#1a2a8a" />
                </g>
                <circle cx="135" cy="172" r="3" fill="#d6003b" />
                <circle cx="470" cy="198" r="3" fill="#f0a020" />
                <circle cx="570" cy="255" r="3" fill="#1a2a8a" />
              </svg>
            )}

            {mapPins.map((pin, idx) => {
              const topPercent = `${(((pin.topPx ?? 14) / 340) * 100).toFixed(2)}%`;
              const leftPercent = `${pin.leftPercent ?? 50}%`;
              const flagBg = FLAG_BACKGROUNDS[pin.flagVariant ?? 'in'];

              return (
                <span
                  key={`${pin.label}-${pin.id ?? idx}`}
                  className="lb"
                  style={{ left: leftPercent, top: topPercent }}
                >
                  <i style={{ background: flagBg }} aria-hidden="true" />
                  <span>{pin.label}</span>
                </span>
              );
            })}
          </div>
        ) : null}

        {offices.length > 0 ? (
          <div className="oc">
            {offices.map((office, idx) => {
              const mapHref =
                office.mapUrl?.trim() ||
                `https://maps.google.com/?q=${encodeURIComponent(office.address)}`;

              return (
                <article
                  key={`${office.title}-${office.id ?? idx}`}
                  className={office.isHeadquarters ? 'of hq' : 'of'}
                >
                  <em>{office.regionLabel}</em>
                  <h4>{office.title}</h4>
                  {office.cityRegion ? <small>{office.cityRegion}</small> : null}
                  <p>{renderMultilineText(office.address)}</p>
                  <WalstarButton
                    variant="outline-blue"
                    href={mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View On Map
                  </WalstarButton>
                </article>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
