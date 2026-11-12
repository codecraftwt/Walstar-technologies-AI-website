import type { CSSProperties, ReactNode } from 'react';

export function renderMultilineText(text?: string | null): ReactNode {
  if (!text) return null;
  const lines = text.split('\n');
  if (lines.length === 1) return text;

  return lines.map((line, index) => (
    <span key={index}>
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
      {pill ? <span className="pill">{pill}</span> : null}
      <h2>{renderHeadingParts(headingPrefix, headingSerif, headingSuffix)}</h2>
      {subtitle ? <p>{renderMultilineText(subtitle)}</p> : null}
    </div>
  );
}
