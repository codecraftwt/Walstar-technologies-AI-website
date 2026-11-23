import type { CSSProperties, ReactNode } from 'react';

export function cleanPill(text?: string | null): string {
  if (!text) return '';
  return text.replace(/^[●•·・\s\u25CF\u2022\u00B7\u30FB\?]+/, '').trim();
}

export function renderMultilineText(text?: string | null): ReactNode {
  if (!text) return null;
  const normalized = text.replace(/\r\n/g, '\n').replace(/\\n/g, '\n');
  const lines = normalized.split('\n');
  if (lines.length === 1) return text;

  return lines.map((line, index) => (
    <span key={index} className="multiline-text-line">
      {index > 0 ? <br /> : null}
      {line}
    </span>
  ));
}

export function renderHeadingParts(
  prefix?: string | null,
  serif?: string | null,
  suffix?: string | null
): ReactNode {
  const needsSpaceBeforeSerif = Boolean(
    prefix && serif && !prefix.endsWith('\n') && !prefix.endsWith(' ')
  );
  const needsSpaceBeforeSuffix = Boolean(
    suffix && !suffix.startsWith('\n') && !suffix.startsWith(' ') && (prefix || serif)
  );

  return (
    <>
      {renderMultilineText(prefix)}
      {serif ? (
        <>
          {needsSpaceBeforeSerif ? ' ' : null}
          <span className="serif">{renderMultilineText(serif)}</span>
        </>
      ) : null}
      {suffix ? (
        <>
          {needsSpaceBeforeSuffix ? ' ' : null}
          {renderMultilineText(suffix)}
        </>
      ) : null}
    </>
  );
}

export function WalstarSectionHeader({
  pill,
  headingPrefix,
  headingSerif,
  headingSuffix,
  subtitle,
  className = 'hd2',
  style,
}: {
  pill?: string | null;
  headingPrefix?: string | null;
  headingSerif?: string | null;
  headingSuffix?: string | null;
  subtitle?: string | null;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={className} style={style}>
      {pill ? <span className="pill">{cleanPill(pill)}</span> : null}
      <h2 className="section-header-heading">{renderHeadingParts(headingPrefix, headingSerif, headingSuffix)}</h2>
      {subtitle ? <p className="section-header-subtitle">{renderMultilineText(subtitle)}</p> : null}
    </div>
  );
}
