import Link from 'next/link';
import type { MouseEventHandler, ReactNode } from 'react';

export type WalstarButtonVariant =
  | 'orange'
  | 'blue'
  | 'ghost'
  | 'compact-blue'
  | 'outline-blue';

interface WalstarButtonProps {
  children: ReactNode;
  variant?: WalstarButtonVariant;
  href?: string | null;
  target?: string;
  rel?: string;
  className?: string;
  showArrow?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

const VARIANT_CLASS_MAP: Record<WalstarButtonVariant, string> = {
  orange: 'btn btn-or',
  blue: 'btn btn-bl',
  ghost: 'btn btn-gh',
  'compact-blue': 'rm',
  'outline-blue': 'vb',
};

function stripTrailingArrow(label: ReactNode): ReactNode {
  if (typeof label === 'string') {
    return label.replace(/\s*[↗→]\s*$/, '').trimEnd();
  }
  return label;
}

export function WalstarButtonArrow({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className ? `walstar-btn-arrow ${className}` : 'walstar-btn-arrow'}
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2.5 8H13.2M13.2 8L8.8 3.6M13.2 8L8.8 12.4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WalstarButton({
  children,
  variant = 'orange',
  href,
  target,
  rel,
  className = '',
  showArrow = true,
  type = 'button',
  disabled = false,
  ariaLabel,
  onClick,
}: WalstarButtonProps) {
  const variantClass = VARIANT_CLASS_MAP[variant];
  const combinedClass = ['walstar-btn', variantClass, className]
    .filter(Boolean)
    .join(' ');
  const content = (
    <>
      <span>{stripTrailingArrow(children)}</span>
      {showArrow ? <WalstarButtonArrow /> : null}
    </>
  );

  if (href) {
    const isExternal =
      target === '_blank' ||
      href.startsWith('http://') ||
      href.startsWith('https://');

    if (isExternal) {
      return (
        <a
          className={combinedClass}
          href={href}
          target={target}
          rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
          aria-label={ariaLabel}
          onClick={onClick as MouseEventHandler<HTMLAnchorElement> | undefined}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        className={combinedClass}
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement> | undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClass}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick as MouseEventHandler<HTMLButtonElement> | undefined}
    >
      {content}
    </button>
  );
}
