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

export function renderTextWithBreaks(text?: string | null): ReactNode {
  if (!text) return null;
  const regex = /(<br\s*(?:class(?:Name)?=["'](?:d|desktop-line-break)["'])?\s*\/?>|\n)/gi;
  const parts = text.split(regex);
  if (parts.length === 1) return text;

  return parts.map((part, index) => {
    if (!part) return null;
    const lower = part.toLowerCase();
    if (
      lower.includes('class="d"') ||
      lower.includes("class='d'") ||
      lower.includes('classname="d"') ||
      lower.includes("classname='d'") ||
      lower.includes('desktop-line-break') ||
      part === '\n'
    ) {
      return <br key={index} className="desktop-line-break d" />;
    }
    if (lower.startsWith('<br')) {
      return <br key={index} />;
    }
    return <span key={index}>{part}</span>;
  });
}

export function WalstarSectionBadge({
  text,
  fallback,
  className = 'pill',
  style,
}: {
  text?: string | null;
  fallback?: string;
  className?: string;
  style?: CSSProperties;
}) {
  const label = cleanPill(text) || fallback || '';
  if (!label) return null;
  return (
    <span className={className} style={style}>
      {label}
    </span>
  );
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
          <span className="section-heading-serif">{renderMultilineText(serif)}</span>
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
