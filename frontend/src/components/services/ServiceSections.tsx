import Image from 'next/image';
import { WalstarButton } from '@/components/common/WalstarButton';
import {
  cleanPill,
  renderHeadingParts,
  renderMultilineText,
} from '@/components/common/SectionPrimitives';
import { getStrapiMediaUrl, STRAPI_IMAGE_PLACEHOLDER } from '@/lib/strapi';
import type {
  SvcIntroSection,
  SvcChallengesSection,
  SvcCapabilitiesSection,
  SvcCapabilityItem,
  SvcBenefitsSection,
  SvcProcessSection,
  SvcApproachSection,
  SvcCtaSection,
} from '@/types/strapi';

/* ─── Vector Icons Matching Exact Reference SVG Symbols ───────────────── */
export function SvgLayersIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l9 5-9 5-9-5zM3 12l9 5 9-5M3 16l9 5 9-5" />
    </svg>
  );
}

export function SvgUsersIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c0-4 3-6 6.5-6s6.5 2 6.5 6M16 5a3.5 3.5 0 010 7M18 14c2.5.6 4 2.5 4 6" />
    </svg>
  );
}

export function SvgBoxIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l8 4v10l-8 4-8-4V7zM4 7l8 4 8-4M12 11v10" />
    </svg>
  );
}

export function SvgFlowIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
    </svg>
  );
}

export function SvgGridIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
    </svg>
  );
}

export function SvgPlugIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 01-12 0zM12 17v4" />
    </svg>
  );
}

export function SvgBarsIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="12" width="4" height="8" rx="1" />
      <rect x="10" y="4" width="4" height="16" rx="1" />
      <rect x="16" y="9" width="4" height="11" rx="1" />
    </svg>
  );
}

export function SvgTargetIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  );
}

export function SvgSlidersIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 7h10M17 7h4M3 17h4M11 17h10" />
      <circle cx="15" cy="7" r="2" />
      <circle cx="9" cy="17" r="2" />
    </svg>
  );
}

export function SvgBoltIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2L5 14h6l-1 8 8-12h-6z" />
    </svg>
  );
}

export function SvgDbIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.7 3 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3 3 7 3s7-1.3 7-3" />
    </svg>
  );
}

export function SvgNetIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="2.5" />
      <circle cx="5" cy="5" r="2" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <path d="M7 7l3 3M17 7l-3 3M7 17l3-3M17 17l-3-3" />
    </svg>
  );
}

export function SvgShieldIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
      <path d="M8.5 12l2.5 2.5L16 9.5" />
    </svg>
  );
}

export function SvgMonitorIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  );
}

export function SvgHeadsetIcon() {
  return (
    <svg className="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 14v-2a8 8 0 0116 0v2" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M19 19c0 2-3 2-7 2" />
    </svg>
  );
}

/* ─── Service 1 & 2 Vector Icons ───────────────────────────────────── */
export function SvgClipboardIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M9 12h6M9 16h6" />
    </svg>
  );
}

export function SvgBrainCircuitIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.5 3a4.5 4.5 0 0 0-4.5 4.5c0 .64.14 1.25.38 1.8A4.5 4.5 0 0 0 4 13.5c0 1.63.87 3.06 2.18 3.84A4.5 4.5 0 0 0 10.5 21" />
      <path d="M10.5 3v18" />
      <circle cx="15" cy="6" r="1.5" />
      <circle cx="19" cy="10" r="1.5" />
      <circle cx="16" cy="15" r="1.5" />
      <circle cx="18" cy="19" r="1.5" />
      <path d="M10.5 6h3M10.5 10h7M10.5 15h4M10.5 19h6" />
    </svg>
  );
}

export function SvgChatDotsIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <circle cx="9" cy="12" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="15" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

export function SvgSparklesIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l1.8 4.5L18 9.5l-4.2 2L12 16l-1.8-4.5L6 9.5l4.2-2z" />
      <path d="M19 15l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z" />
      <path d="M5 16l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6z" />
    </svg>
  );
}

export function SvgWorkflowIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      <path d="M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
      <circle cx="12" cy="3.5" r="1.5" />
      <circle cx="12" cy="20.5" r="1.5" />
      <circle cx="3.5" cy="12" r="1.5" />
      <circle cx="20.5" cy="12" r="1.5" />
    </svg>
  );
}

/* ─── Service 3 SVG Icons (Matching HTML Symbols) ───────────────────── */
export function SvgSearchIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </svg>
  );
}

export function SvgRobotIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="8" width="16" height="11" rx="3" />
      <path d="M12 8V5M12 4h.01M9 13h.01M15 13h.01M9 16.5h6" />
    </svg>
  );
}

export function SvgLocationPinIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0113 0c0 5-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function SvgDocumentListIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="3.5" width="16" height="17" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  );
}

export function SvgMegaphoneIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 10v4h3l8 4V6L7 10z" />
      <path d="M18 9.5c1.2 1.2 1.2 3.8 0 5" />
    </svg>
  );
}

export function SvgShareIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="17" cy="6" r="2.5" />
      <circle cx="17" cy="18" r="2.5" />
      <path d="M8.2 10.8l6.6-3.6M8.2 13.2l6.6 3.6" />
    </svg>
  );
}

export function SvgEmailIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </svg>
  );
}

export function SvgFunnelIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 5h16l-6 8v6l-4-2v-4z" />
    </svg>
  );
}

export function SvgShoppingCartIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 4h3l2.2 11h9.6L20 8H7" />
      <circle cx="9" cy="19" r="1.4" />
      <circle cx="17" cy="19" r="1.4" />
    </svg>
  );
}

export function SvgAnalyticsBarsIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="12" width="4" height="8" rx="1" />
      <rect x="10" y="4" width="4" height="16" rx="1" />
      <rect x="16" y="9" width="4" height="11" rx="1" />
    </svg>
  );
}

export function SvgUsersGroupIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="3" />
      <circle cx="5.5" cy="10" r="2.2" />
      <circle cx="18.5" cy="10" r="2.2" />
      <path d="M6.5 19c0-3 2.4-5 5.5-5s5.5 2 5.5 5zM1.5 17c.2-2 1.5-3.2 3.5-3.5M22.5 17c-.2-2-1.5-3.2-3.5-3.5" />
    </svg>
  );
}

export function SvgTargetAimIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="13" r="8" />
      <circle cx="11" cy="13" r="4.5" />
      <path d="M11 13l8-8M16 4l.5 3.5L20 8" />
    </svg>
  );
}

export function SvgGrowthChartIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="14" width="3.5" height="6" rx=".8" />
      <rect x="10" y="10" width="3.5" height="10" rx=".8" />
      <rect x="16" y="13" width="3.5" height="7" rx=".8" />
      <path d="M4 9l5-3 4 2 7-5M16 3h4v4" />
    </svg>
  );
}

export function SvgCursorClickIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20L8 6l11 8-6 1.5z" />
      <path d="M14 4v2M18.5 6l-1.4 1.4M20 11h-2M9 3l1 2" />
    </svg>
  );
}

export function SvgDocumentTextIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4M9 12h6M9 15.5h6M9 8.5h3" />
    </svg>
  );
}

export function SvgGearIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

export function SvgTargetArrowIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 12a8 8 0 11-8-8" />
      <path d="M16 12a4 4 0 11-4-4" />
      <path d="M12 12l7-7M16 4v3h3" />
    </svg>
  );
}

export function SvgTrendingUpIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4v16h16" />
      <path d="M7 15l4-4 3 3 5-6" />
    </svg>
  );
}

/* ─── Web & SaaS Product Development Specific SVG Icons ───────────────── */
export function SvgMonitorSettingsIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M9 21h6M12 17v4" />
      <circle cx="12" cy="10.5" r="2.5" />
    </svg>
  );
}

export function SvgCloudGearIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 18a4.5 4.5 0 01-.5-9A6 6 0 0118 9.5 4 4 0 0117 18z" />
      <circle cx="12" cy="13" r="2" />
    </svg>
  );
}

export function SvgUiLayoutIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" />
    </svg>
  );
}

export function SvgBrowserWindowIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18M6.5 7h.01M9 7h.01" />
    </svg>
  );
}

export function SvgPhoneIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
      <path d="M10.5 18.8h3" />
    </svg>
  );
}

export function SvgRocketIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 4c3-1 5.5-1 6-.5.5.5.5 3-.5 6l-5 5-4-4z" />
      <path d="M9 11l-4 1 2 2M13 15l-1 4-2-2M7 17c-1 .5-2 2-2 3 1 0 2.5-1 3-2" />
      <circle cx="15.5" cy="8.5" r="1.2" />
    </svg>
  );
}

export function SvgRefreshIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 11a8 8 0 00-14-4M4 4v4h4M4 13a8 8 0 0014 4M20 20v-4h-4" />
    </svg>
  );
}

export function SvgCloudUploadIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 18a4.5 4.5 0 01-.5-9A6 6 0 0118 9.5 4 4 0 0117 18" />
      <path d="M12 17v-6M9.5 13l2.5-2.5 2.5 2.5" />
    </svg>
  );
}

export function SvgLayoutGridIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export function SvgShieldLockIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
      <rect x="9.5" y="11" width="5" height="4" rx="1" />
    </svg>
  );
}

export function SvgWrenchIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 5a4 4 0 00-4 5L4.5 16.5a2 2 0 003 3L14 13a4 4 0 005-4l-2.5 2.5-2.5-.5-.5-2.5z" />
    </svg>
  );
}

/* ─── Mobile App Development Specific SVG Icons ──────────────────────── */
export function SvgSmartphoneTabletIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="10" height="16" rx="2" />
      <rect x="14" y="8" width="6" height="12" rx="1.5" />
    </svg>
  );
}

export function SvgAppleIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 7c-1-1.5-3.5-1.5-5 0-2 2-1.5 6 .5 9 1 1.5 2 2 3 2s1.5-.5 2.5-.5S15 18 16 18s2-1.5 3-3.5c-2-1-2.5-4 0-5.5-1.5-2-4-2-5.5-.5-.5.5-1 .5-1.5.5z" />
      <path d="M12.5 5c0-1.5 1-2.5 2.5-3" />
    </svg>
  );
}

export function SvgSettingsTargetIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  );
}

export function SvgPaletteIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3a9 9 0 100 18c1.5 0 2-1 1.5-2s0-2 1.5-2h2a3 3 0 003-3c0-5-4-11-8-11z" />
      <circle cx="8" cy="11" r="1" />
      <circle cx="12" cy="7.5" r="1" />
      <circle cx="16" cy="9" r="1" />
    </svg>
  );
}

export function SvgToolsIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20l9-9M13 11l-2-2 3-4 3 1 1 3-4 3z" />
      <path d="M20 20L9 9M5 5l4 4" />
    </svg>
  );
}

export function SvgGlobeIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </svg>
  );
}

export function SvgGaugeIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 17a8 8 0 1116 0" />
      <path d="M12 17l4-6" />
    </svg>
  );
}

export function SvgClipboardCheckIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4h6v3H9zM8.5 12.5l2 2 4-4M8.5 17.5h7" />
    </svg>
  );
}

export function SvgResponsiveDevicesIcon({ className = 'icon' }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="14" height="10" rx="1.5" />
      <path d="M7 19h6M10 15v4" />
      <rect x="16" y="9" width="5" height="9" rx="1" />
    </svg>
  );
}

export function renderNamedSvgIcon(name?: string | null, index = 0, title?: string | null): React.ReactNode {
  const key = `${name || ''} ${title || ''}`.toLowerCase().trim();
  if (key.includes('smartphone-tablet') || key.includes('android app') || key.includes('android development')) return <SvgSmartphoneTabletIcon />;
  if (key.includes('apple') || key.includes('ios app') || key.includes('ios development')) return <SvgAppleIcon />;
  if (key.includes('settings-target') || key.includes('cross-platform') || key.includes('multi-platform')) return <SvgSettingsTargetIcon />;
  if (key.includes('palette') || key.includes('mobile ui/ux') || key.includes('ui/ux design for mobile')) return <SvgPaletteIcon />;
  if (key.includes('tools') || key.includes('app maintenance') || key.includes('maintenance & support')) return <SvgToolsIcon />;
  if (key.includes('globe') || key.includes('customer engagement') || key.includes('improve customer')) return <SvgGlobeIcon />;
  if (key.includes('gauge') || key.includes('performance-focused')) return <SvgGaugeIcon />;
  if (key.includes('clipboard-check') || key.includes('testing and quality')) return <SvgClipboardCheckIcon />;
  if (key.includes('responsive-devices') || key.includes('supported devices') || key.includes('responsive experiences')) return <SvgResponsiveDevicesIcon />;

  if (key.includes('monitor-settings') || key.includes('web application') || key.includes('smarter operations')) return <SvgMonitorSettingsIcon />;
  if (key.includes('cloud-gear') || key.includes('workflow ai') || key.includes('saas product')) return <SvgCloudGearIcon />;
  if (key.includes('ui-layout') || key.includes('product experience') || key.includes('ui/ux design')) return <SvgUiLayoutIcon />;
  if (key.includes('browser-window') || key.includes('app modernization') || key.includes('saas modernization')) return <SvgBrowserWindowIcon />;
  if (key.includes('phone') || key.includes('digital experiences') || key.includes('create better')) return <SvgPhoneIcon />;
  if (key.includes('rocket') || key.includes('turn ideas')) return <SvgRocketIcon />;
  if (key.includes('refresh') || key.includes('recurring revenue')) return <SvgRefreshIcon />;
  if (key.includes('cloud-upload') || key.includes('reach customers beyond')) return <SvgCloudUploadIcon />;
  if (key.includes('layout-grid') || key.includes('responsive and user-friendly')) return <SvgLayoutGridIcon />;
  if (key.includes('shield-lock') || key.includes('secure authentication')) return <SvgShieldLockIcon />;
  if (key.includes('wrench') || key.includes('ongoing technical maintenance')) return <SvgWrenchIcon />;
  if (key.includes('network-nodes') || key.includes('saas mvp') || key.includes('scale with') || key.includes('tailored ai')) return <SvgNetIcon />;
  if (key.includes('search engine') || key === 'search') return <SvgSearchIcon />;
  if (key.includes('ai-search') || key.includes('ai search') || key === 'robot' || key.includes('chatbot') || key.includes('virtual assistant')) return <SvgRobotIcon />;
  if (key.includes('location') || key.includes('local seo') || key === 'location-pin') return <SvgLocationPinIcon />;
  if (key.includes('content marketing') || key === 'document-list' || key.includes('document')) return <SvgDocumentListIcon />;
  if (key.includes('paid advertising') || key.includes('ppc') || key === 'megaphone') return <SvgMegaphoneIcon />;
  if (key.includes('social media') || key === 'share') return <SvgShareIcon />;
  if (key.includes('email marketing') || key.includes('email') || key === 'email') return <SvgEmailIcon />;
  if (key.includes('lead generation') || key.includes('conversion') || key === 'funnel') return <SvgFunnelIcon />;
  if (key.includes('ecommerce') || key.includes('shopping') || key === 'shopping-cart') return <SvgShoppingCartIcon />;
  if (key.includes('analytics and performance') || key.includes('analytics') || key === 'analytics-bars') return <SvgAnalyticsBarsIcon />;
  if (key.includes('clipboard') || key.includes('routine business') || key.includes('process automation')) return <SvgClipboardIcon />;
  if (key.includes('ai workflow') || key.includes('workflow automation') || key.includes('workflow integration') || key === 'flow') return <SvgWorkflowIcon />;
  if (key.includes('custom ai') || key.includes('brain')) return <SvgBrainCircuitIcon />;
  if (key.includes('data processing') || key.includes('intelligent analytics') || key.includes('reporting & business intelligence') || key.includes('growth-chart') || key.includes('reporting')) return <SvgGrowthChartIcon />;
  if (key.includes('whatsapp') || key.includes('chat')) return <SvgChatDotsIcon />;
  if (key.includes('generative ai') || key.includes('business assistants') || key.includes('sparkles')) return <SvgSparklesIcon />;
  if (key.includes('existing software') || key.includes('enterprise application') || key.includes('integration') || key === 'plug') return <SvgPlugIcon />;
  if (key.includes('erp') || key.includes('layers') || (index === 0 && !name)) return <SvgLayersIcon />;
  if (key.includes('crm') || key.includes('users') || index === 1) return <SvgUsersIcon />;
  if (key.includes('inventory') || key.includes('stock') || key.includes('box') || index === 2) return <SvgBoxIcon />;
  if (key.includes('grid') || key.includes('business applications') || index === 4) return <SvgGridIcon />;
  if (key.includes('users-group') || key.includes('relevant customers') || key.includes('reach more')) return <SvgUsersGroupIcon />;
  if (key.includes('target-aim') || key === 'target-arrow') return <SvgTargetArrowIcon />;
  if (key.includes('target')) return <SvgTargetAimIcon />;
  if (key.includes('cursor-click') || key.includes('turn more') || key.includes('inquiries')) return <SvgCursorClickIcon />;
  if (key.includes('document-text') || key.includes('useful content')) return <SvgDocumentTextIcon />;
  if (key.includes('gear') || key.includes('technical foundations') || key.includes('sound technical')) return <SvgGearIcon />;
  if (key.includes('trending-up') || key.includes('continuous improvement')) return <SvgTrendingUpIcon />;
  if (key === 'bars') return <SvgBarsIcon />;
  if (key.includes('sliders') || key.includes('operation')) return <SvgSlidersIcon />;
  if (key.includes('bolt') || key.includes('productiv')) return <SvgBoltIcon />;
  if (key.includes('db') || key.includes('database') || key.includes('centralize')) return <SvgDbIcon />;
  if (key.includes('net') || key.includes('network') || key.includes('connect') || key.includes('architecture')) return <SvgNetIcon />;
  if (key.includes('shield') || key.includes('security') || key.includes('access')) return <SvgShieldIcon />;
  if (key.includes('monitor') || key.includes('interface') || key.includes('ui')) return <SvgMonitorIcon />;
  if (key.includes('head') || key.includes('support') || key.includes('maintenance')) return <SvgHeadsetIcon />;
  return <SvgSearchIcon />;
}

/* ─── Challenge SVGs for Service 1 ───────────────────────────────────── */
function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14" />
    </svg>
  );
}

function WorkflowNodesIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M8.5 6h7M7.5 8.2l3 7.6M16.5 8.2l-3 7.6" />
    </svg>
  );
}

function HexNetworkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.5 19.5 6.8v8.6L12 19.8 4.5 15.4V6.8z" />
      <path d="M12 2.5v17.3M4.5 6.8 19.5 15.4M19.5 6.8 4.5 15.4" opacity="0.6" />
      <circle cx="12" cy="11.2" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function UserProcessIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="7" r="3.5" />
      <path d="M6 19c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <rect x="4" y="19" width="16" height="2" rx="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function renderChallengeIcon(icon?: string | null, index = 0) {
  if (icon === 'clock' || icon === '◷' || index === 0) return <ClockIcon />;
  if (icon === 'gear' || icon === '⚙' || index === 1) return <WorkflowNodesIcon />;
  if (icon === 'data' || icon === '✲' || index === 2) return <HexNetworkIcon />;
  if (icon === 'user' || icon === '☻' || index === 3) return <UserProcessIcon />;
  return <ClockIcon />;
}

/* ─── Text with Desktop Breaks Helper ───────────────────────────────── */
export function renderTextWithBreaks(text?: string | null): React.ReactNode {
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

/* ─── Service Intro ──────────────────────────────────────────────────── */
export function SvcIntroBlock({ section }: { section: SvcIntroSection }) {
  // If Strapi media provided, use it; otherwise fallback to default placeholder
  const strapiUrl = getStrapiMediaUrl(section.image?.url);
  const prefix = section.headingPrefix?.trim() || '';
  const serif = section.headingSerif?.trim() || '';
  const suffix = section.headingSuffix?.trim() || '';

  const isDigitalMarketing =
    serif.includes('Performance Marketing') ||
    prefix.includes('AI Search Visibility') ||
    Boolean(section.pill?.includes('Growth & Visibility'));

  const isMobileApp =
    serif.includes('Your Business With') ||
    prefix.includes('Build Powerful Mobile Apps') ||
    Boolean(section.pill?.toLowerCase().includes('mobile app'));

  if (isMobileApp) {
    const mobileImage = strapiUrl || '/images/services/mobile-app.png';
    return (
      <section className="introduction-section sec intro svc-intro" aria-labelledby="introduction-title">
        <div className="page-container introduction-section__layout wrap">
          <div
            className="introduction-section__image svc-intro-ph ph"
            role="img"
            aria-label={section.image?.alternativeText || 'Person holding a smartphone showing app analytics'}
          >
            <Image
              src={mobileImage}
              alt={section.image?.alternativeText || 'Person holding a smartphone showing app analytics'}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="introduction-section__content svc-intro-copy">
            <span className="section-badge pill">{cleanPill(section.pill) || 'Mobile App Development'}</span>
            <h2 className="introduction-section__title svc-heading" id="introduction-title">
              {renderHeadingParts(
                prefix || 'Build Powerful Mobile Apps That\n Connect ',
                serif || 'Your Business With\n',
                suffix || 'Customers'
              )}
            </h2>
            <p className="introduction-section__text lead svc-lead-desc">
              {section.description
                ? renderTextWithBreaks(section.description)
                : 'We design and develop user-friendly, high-performance mobile applications that help businesses improve customer engagement, simplify operations, and grow digitally.'}
            </p>
            <WalstarButton variant="orange" href={section.ctaHref || '#contact'} className="button button--primary">
              {section.ctaLabel || 'Discuss Your App Project ↗'}
            </WalstarButton>
          </div>
        </div>
      </section>
    );
  }

  const isWebSaas =
    serif.includes('Scalable SaaS Products') ||
    prefix.includes('Build Powerful Web Experiences') ||
    Boolean(section.pill?.includes('Web & SaaS'));

  if (isWebSaas) {
    const wsImage = strapiUrl || '/images/services/web-saas.png';
    return (
      <section className="introduction-section sec intro svc-intro" aria-labelledby="introduction-title">
        <div className="page-container introduction-section__layout wrap">
          <div
            className="introduction-section__image svc-intro-ph ph"
            role="img"
            aria-label={section.image?.alternativeText || 'Team working with web application dashboards'}
          >
            <Image
              src={wsImage}
              alt={section.image?.alternativeText || 'Team working with web application dashboards'}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="introduction-section__content svc-intro-copy">
            <span className="section-badge pill">{cleanPill(section.pill) || 'Web & SaaS'}</span>
            <h2 className="introduction-section__title svc-heading" id="introduction-title">
              {renderHeadingParts(
                prefix || 'Build Powerful Web Experiences\n and ',
                serif || 'Scalable SaaS Products',
                suffix
              )}
            </h2>
            <p className="introduction-section__text lead svc-lead-desc">
              {section.description
                ? renderTextWithBreaks(section.description)
                : 'From business management systems to workflow automation, we develop scalable software solutions designed to simplify operations and improve productivity.'}
            </p>
            <WalstarButton variant="orange" href={section.ctaHref || '#contact'} className="button button--primary">
              {section.ctaLabel || 'Discuss Your Web Project ↗'}
            </WalstarButton>
          </div>
        </div>
      </section>
    );
  }

  if (isDigitalMarketing) {
    const dmImage = strapiUrl || STRAPI_IMAGE_PLACEHOLDER;
    return (
      <section className="introduction-section sec intro svc-intro" aria-labelledby="introduction-title">
        <div className="page-container introduction-section__layout wrap">
          <div
            className="introduction-section__image svc-intro-ph ph"
            role="img"
            aria-label={section.image?.alternativeText || 'Marketing team reviewing performance dashboards'}
          >
            <Image
              src={dmImage}
              alt={section.image?.alternativeText || 'Marketing team reviewing performance dashboards'}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="introduction-section__content svc-intro-copy">
            <span className="section-badge pill">{cleanPill(section.pill) || 'Growth & Visibility'}</span>
            <h2 className="introduction-section__title svc-heading" id="introduction-title">
              {renderHeadingParts(
                prefix || 'SEO, AI Search Visibility &',
                serif || 'Performance Marketing',
                suffix
              )}
            </h2>
            <p className="introduction-section__text lead svc-lead-desc">
              {section.description
                ? renderTextWithBreaks(section.description)
                : 'From business management systems to workflow automation, we develop scalable software solutions designed to simplify operations and improve productivity.'}
            </p>
            <WalstarButton variant="orange" href={section.ctaHref || '#contact'} className="button button--primary">
              {section.ctaLabel || 'Free AI & SEO Audit ↗'}
            </WalstarButton>
          </div>
        </div>
      </section>
    );
  }

  const isCustomSoftware =
    serif.includes('Custom Software') ||
    prefix.includes('Custom Software') ||
    suffix.includes('Business Works');

  const defaultImage = STRAPI_IMAGE_PLACEHOLDER;

  const imageUrl = strapiUrl || defaultImage;

  if (isCustomSoftware) {
    return (
      <section className="sec intro svc-intro--custom">
        <div className="wrap">
          <div
            className="ph"
            role="img"
            aria-label={section.image?.alternativeText || 'Developer typing on a laptop'}
          >
            <Image
              src={imageUrl}
              alt={section.image?.alternativeText || 'Developer typing on a laptop'}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className="object-cover"
              priority
            />
          </div>

          <div>
            <span className="pill">
              {cleanPill(section.pill) || 'Designed to Scale'}
            </span>
            <h2>
              {renderHeadingParts(
                prefix || 'Build',
                serif || 'Custom Software',
                suffix || 'That Works the Way Your Business Works'
              )}
            </h2>
            <p>
              {section.description
                ? renderTextWithBreaks(section.description)
                : 'From business management systems to workflow automation, we develop scalable software solutions designed to simplify operations and improve productivity.'}
            </p>
            <WalstarButton variant="orange" href={section.ctaHref || '#cta'}>
              {section.ctaLabel || 'Discuss Your Software Project ↗'}
            </WalstarButton>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="sec intro svc-intro service-intro-section">
      <div className="wrap svc-intro-grid intro-grid service-intro-grid">
        <div
          className="svc-intro-ph ph service-intro-media"
          role="img"
          aria-label={section.image?.alternativeText || section.pill || 'Developer typing on a laptop'}
        >
          <Image
            src={imageUrl}
            alt={section.image?.alternativeText || section.headingPrefix || 'Walstar Software Engineering'}
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="svc-intro-copy service-intro-copy">
          <span className="pill">
            {cleanPill(section.pill) || 'AI Solutions & Business Automation'}
          </span>

          <h2 className="svc-heading">
            {renderHeadingParts(
              prefix || 'AI Agents and Automation that cut',
              serif || 'Manual Work',
              suffix || 'and bring in more Leads'
            )}
          </h2>

          {section.description ? (
            <p className="lead svc-lead-desc">{renderMultilineText(section.description)}</p>
          ) : null}

          {section.ctaLabel ? (
            <WalstarButton variant="orange" href={section.ctaHref || '#cta'}>
              {section.ctaLabel}
            </WalstarButton>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/* ─── Service Challenges ─────────────────────────────────────────────── */
export function SvcChallengesBlock({ section }: { section: SvcChallengesSection }) {
  const items = section.challengeItems ?? [];
  const rawPill = section.pill || 'AI Solutions & Business Automation';
  const pillText = cleanPill(rawPill) || 'AI Solutions & Business Automation';
  const prefix = section.headingPrefix?.trim() || 'Turn everyday Business challenges';
  const serif = section.headingSerif?.trim() || 'Intelligent Solutions';
  const suffix = section.headingSuffix?.trim();

  return (
    <section className="sec svc-chal service-challenges-section">
      <div className="wrap svc-chal-grid service-challenges-grid">
        <div className="svc-chal-copy service-challenges-copy">
          <span className="pill">{pillText}</span>
          <h2 className="svc-heading">
            {renderHeadingParts(prefix || 'Turn everyday Business challenges', serif || 'Intelligent Solutions', suffix)}
          </h2>
          {section.bodyOne ? (
            <p className="svc-lead-desc">{renderMultilineText(section.bodyOne)}</p>
          ) : null}
          {section.bodyTwo ? (
            <p className="svc-lead-desc" style={{ marginTop: 16 }}>
              {renderMultilineText(section.bodyTwo)}
            </p>
          ) : null}
        </div>

        {items.length > 0 ? (
          <div className="svc-chal-box service-challenges-box">
            {items.map((item, idx) => (
              <div key={`${item.title}-${item.id ?? idx}`} className="svc-chal-item service-challenge-card">
                <div className="svc-chal-icon" aria-hidden="true">
                  {renderChallengeIcon(item.icon, idx)}
                </div>
                <div className="svc-chal-text">
                  <b className="svc-chal-title">{item.title}</b>
                  {item.description ? (
                    <span className="svc-chal-desc">{renderMultilineText(item.description)}</span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

/* ─── Service Capabilities ───────────────────────────────────────────── */
export function SvcCapabilitiesBlock({ section }: { section: SvcCapabilitiesSection }) {
  const incomingItems = section.capabilityItems ?? [];
  const rawPill = section.pill || 'Capabilities';
  const pillText = cleanPill(rawPill) || 'Capabilities';
  const prefix = section.headingPrefix?.trim() || 'What we';
  const serif = section.headingSerif?.trim() || 'Build';
  const suffix = section.headingSuffix?.trim() || '';

  const isMobileApp =
    (serif.includes('Your Business') &&
      (prefix.includes('Mobile App') || prefix.includes('Mobile App Solutions'))) ||
    incomingItems.some((it) => it.tag?.includes('Android') || it.title.includes('Android App'));

  if (isMobileApp) {
    return (
      <section className="capabilities-section" aria-labelledby="capabilities-title">
        <div className="section-heading">
          <span className="section-badge pill">{pillText || 'Capabilities'}</span>
          <h2 className="section-heading__title svc-heading" id="capabilities-title">
            {renderHeadingParts(
              prefix || 'Mobile App Solutions Designed\n Around ',
              serif || 'Your Business',
              suffix
            )}
          </h2>
          {section.description ? (
            <p className="capabilities-section__description">
              {renderTextWithBreaks(section.description)}
            </p>
          ) : null}
        </div>
        <ul className="capability-card-grid capability-card-grid--three-columns">
          {incomingItems.map((item, idx) => (
            <li key={`${item.title}-${item.id ?? idx}`} className="capability-card capability-card--roomy">
              {item.tag ? <span className="capability-card__tag">{item.tag}</span> : null}
              <span className="capability-card__icon" aria-hidden="true">
                {renderNamedSvgIcon(item.icon, idx, item.title)}
              </span>
              <h3 className="capability-card__title">{renderTextWithBreaks(item.title)}</h3>
              {item.description ? (
                <p className="capability-card__description">{renderTextWithBreaks(item.description)}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  const isWebSaas =
    (serif.includes('Your Business') &&
      (prefix.includes('Web & SaaS') || prefix.includes('Web & SaaS Solutions'))) ||
    incomingItems.some((it) => it.tag || it.title.includes('Custom Website'));

  if (isWebSaas) {
    return (
      <section className="capabilities-section" aria-labelledby="capabilities-title">
        <div className="section-heading">
          <span className="section-badge pill">{pillText || 'Capabilities'}</span>
          <h2 className="section-heading__title svc-heading" id="capabilities-title">
            {renderHeadingParts(
              prefix || 'Web & SaaS Solutions\n Designed for ',
              serif || 'Your Business',
              suffix
            )}
          </h2>
          {section.description ? (
            <p className="capabilities-section__description">
              {renderTextWithBreaks(section.description)}
            </p>
          ) : null}
        </div>
        <ul className="capability-card-grid">
          {incomingItems.map((item, idx) => (
            <li key={`${item.title}-${item.id ?? idx}`} className="capability-card">
              {item.tag ? <span className="capability-card__tag">{item.tag}</span> : null}
              <span className="capability-card__icon" aria-hidden="true">
                {renderNamedSvgIcon(item.icon, idx, item.title)}
              </span>
              <h3 className="capability-card__title">{renderTextWithBreaks(item.title)}</h3>
              {item.description ? (
                <p className="capability-card__description">{renderTextWithBreaks(item.description)}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section className="wwd svc-capabilities-wwd" aria-label={pillText}>
      <div className="wwd-inner">
        <div className="head capabilities-header">
          <span className="pill">{pillText}</span>
          <h2 className="wwd-heading">
            {renderHeadingParts(prefix, serif, suffix)}
          </h2>
          {section.description ? (
            <p className="wwd-subtitle">
              {renderTextWithBreaks(section.description)}
            </p>
          ) : null}
        </div>

        <div className="wrap svc-capabilities-grid service-capabilities-grid">
          {incomingItems.map((item, idx) => {
            const hasCta = Boolean(item.ctaLabel || item.isDark);
            const isWideCta =
              hasCta &&
              (incomingItems.length === 11 ||
                item.title.toLowerCase().includes('accelerate your digital growth'));

            if (isWideCta) {
              return (
                <article
                  key={`${item.title}-${item.id ?? idx}`}
                  className="svc-cap-card svc-cap-card--cta-wide"
                >
                  <h3 className="svc-cap-card__title">{renderTextWithBreaks(item.title)}</h3>
                  {item.description ? (
                    <p className="svc-cap-card__subtitle">{renderTextWithBreaks(item.description)}</p>
                  ) : null}
                  <WalstarButton
                    variant="orange"
                    href={item.ctaHref || '#contact-form'}
                  >
                    {item.ctaLabel || 'Get Started ↗'}
                  </WalstarButton>
                </article>
              );
            }

            if (hasCta) {
              return (
                <article
                  key={`${item.title}-${item.id ?? idx}`}
                  className="svc-cap-card svc-cap-card--cta"
                >
                  <h3 className="svc-cap-card__title">{renderTextWithBreaks(item.title)}</h3>
                  {item.description ? (
                    <p className="svc-cap-card__desc" style={{ marginBottom: 20 }}>
                      {renderTextWithBreaks(item.description)}
                    </p>
                  ) : null}
                  <WalstarButton
                    variant="orange"
                    href={item.ctaHref || '#contact-form'}
                  >
                    {item.ctaLabel || 'Discuss Your Project ↗'}
                  </WalstarButton>
                </article>
              );
            }

            return (
              <article
                key={`${item.title}-${item.id ?? idx}`}
                className="svc-cap-card"
              >
                <span className="svc-cap-card__icon" aria-hidden="true">
                  {renderNamedSvgIcon(item.icon, idx, item.title)}
                </span>
                <h3 className="svc-cap-card__title">{renderTextWithBreaks(item.title)}</h3>
                {item.description ? (
                  <p className="svc-cap-card__desc">{renderTextWithBreaks(item.description)}</p>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Service Benefits ───────────────────────────────────────────────── */
export function SvcBenefitsBlock({ section }: { section: SvcBenefitsSection }) {
  const items = section.benefitItems ?? section.benefitCards ?? [];
  const rawPill = section.pill || 'Benefits';
  const pillText = cleanPill(rawPill) || 'Benefits';
  const prefix = section.headingPrefix?.trim() || 'How Custom Software';
  const serif = section.headingSerif?.trim() || 'Helps Your Business';

  const isDigitalMarketing =
    serif.includes('Grow') ||
    prefix.includes('How Digital Marketing Helps') ||
    items.some((it) => it.title.includes('Turn More Visitors') || it.title.includes('Relevant Customers'));

  const isMobileApp =
    (prefix.includes('Mobile App') && (serif.includes('Development Process') || serif.includes('Benefits') || serif.includes('Process'))) ||
    items.some((it) => it.title.includes('Improve Customer Engagement') || it.title.includes('Strengthen Your Digital Presence'));

  if (isMobileApp) {
    return (
      <section className="benefits-section sec svc-benefits" aria-labelledby="benefits-title">
        <div className="page-container wrap">
          <div className="section-heading hd2">
            <span className="section-badge pill">{pillText || 'Benefits'}</span>
            <h2 className="section-heading__title svc-heading" id="benefits-title">
              {renderHeadingParts(
                prefix || 'Our Mobile App\n',
                serif || 'Development Process',
                section.headingSuffix
              )}
            </h2>
          </div>
          <ul className="benefit-card-list">
            {items.map((item, idx) => {
              const isHighlighted = item.isDark || idx === 1; // "Strengthen Your Digital Presence"
              return (
                <li
                  key={`${item.title}-${item.id ?? idx}`}
                  className={`benefit-card benefit-card--tall${isHighlighted ? ' benefit-card--highlighted' : ''}`}
                >
                  <div className="benefit-card__icon-panel">
                    {renderNamedSvgIcon(item.icon, idx, item.title)}
                  </div>
                  <h3 className="benefit-card__title">{renderTextWithBreaks(item.title)}</h3>
                  {item.description ? (
                    <p className="benefit-card__description">{renderTextWithBreaks(item.description)}</p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }

  const isWebSaas =
    (prefix.includes('Web & SaaS') && serif.includes('Business Grow')) ||
    items.some((it) => it.title.includes('Create Better') || it.title.includes('Turn Ideas Into'));

  if (isWebSaas) {
    return (
      <section className="benefits-section sec svc-benefits" aria-labelledby="benefits-title">
        <div className="page-container wrap">
          <div className="section-heading hd2">
            <span className="section-badge pill">{pillText || 'Benefits'}</span>
            <h2 className="section-heading__title svc-heading" id="benefits-title">
              {renderHeadingParts(
                prefix || 'How Web & SaaS Development\n Helps Your ',
                serif || 'Business Grow',
                section.headingSuffix
              )}
            </h2>
          </div>
          <ul className="benefit-card-list">
            {items.map((item, idx) => {
              const isHighlighted = item.isDark || idx === 1; // "Turn Ideas Into Digital Products"
              return (
                <li
                  key={`${item.title}-${item.id ?? idx}`}
                  className={`benefit-card benefit-card--tall${isHighlighted ? ' benefit-card--highlighted' : ''}`}
                >
                  <div className="benefit-card__icon-panel">
                    {renderNamedSvgIcon(item.icon, idx, item.title)}
                  </div>
                  <h3 className="benefit-card__title">{renderTextWithBreaks(item.title)}</h3>
                  {item.description ? (
                    <p className="benefit-card__description">{renderTextWithBreaks(item.description)}</p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }

  if (isDigitalMarketing) {
    return (
      <section className="benefits-section sec svc-benefits" aria-labelledby="benefits-title">
        <div className="page-container wrap">
          <div className="section-heading hd2">
            <span className="section-badge pill">{pillText || 'Benefits'}</span>
            <h2 className="section-heading__title svc-heading" id="benefits-title">
              {renderHeadingParts(
                prefix || 'How Digital Marketing Helps Your Business',
                serif || 'Grow',
                section.headingSuffix
              )}
            </h2>
          </div>
          <ul className="benefit-card-list">
            {items.map((item, idx) => {
              const isHighlighted = item.isDark || idx === 1; // "Generate Better-Qualified Leads"
              return (
                <li
                  key={`${item.title}-${item.id ?? idx}`}
                  className={`benefit-card${isHighlighted ? ' benefit-card--highlighted' : ''}`}
                >
                  <div className="benefit-card__icon-panel">
                    {renderNamedSvgIcon(item.icon, idx)}
                  </div>
                  <h3 className="benefit-card__title">{renderTextWithBreaks(item.title)}</h3>
                  {item.description ? (
                    <p className="benefit-card__description">{renderTextWithBreaks(item.description)}</p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }

  const isCustomSoftware =
    serif.includes('Helps Your Business') ||
    prefix.includes('Custom Software') ||
    items.some((it) => it.isDark && it.title.includes('Connect Your Existing Systems'));

  if (isCustomSoftware) {
    const regularItems = items.filter((it) => !it.isDark);
    const darkItem = items.find((it) => it.isDark);

    return (
      <section className="sec ben">
        <div className="wrap">
          <div>
            <span className="pill">{pillText}</span>
            <h2>
              {renderHeadingParts(
                prefix || 'How Custom Software',
                serif || 'Helps Your Business',
                section.headingSuffix
              )}
            </h2>
          </div>

          <div className="bg">
            {regularItems.map((item, idx) => (
              <article key={`${item.title}-${item.id ?? idx}`} className="bc">
                <i>{renderNamedSvgIcon(item.icon, idx)}</i>
                <h4>{renderTextWithBreaks(item.title)}</h4>
                {item.description ? <p>{renderTextWithBreaks(item.description)}</p> : null}
              </article>
            ))}

            {darkItem ? (
              <article className="dk2">
                <i>{renderNamedSvgIcon(darkItem.icon || 'net', 99)}</i>
                <div>
                  <h4>{renderTextWithBreaks(darkItem.title)}</h4>
                  {darkItem.description ? (
                    <p>{renderTextWithBreaks(darkItem.description)}</p>
                  ) : null}
                </div>
              </article>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  // Service 1: 5-column layout
  return (
    <section className="sec svc-benefits service-benefits-section">
      <div className="wrap">
        <div className="hd2 service-heading-block" style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="pill">{pillText}</span>
          <h2 className="svc-heading" style={{ textAlign: 'center' }}>
            {renderHeadingParts(
              prefix || 'What an AI Automation do',
              serif || 'for Your Business?',
              section.headingSuffix
            )}
          </h2>
        </div>

        {items.length > 0 ? (
          <div className="svc-b5 service-benefits-grid-5">
            {items.map((item, idx) => (
              <article
                key={`${item.title}-${item.id ?? idx}`}
                className="svc-bn service-benefit-item"
              >
                <i className="svc-bn-icon" aria-hidden="true">{renderNamedSvgIcon(item.icon, idx)}</i>
                <h4 className="svc-bn-title">{item.title}</h4>
                {item.description ? (
                  <p className="svc-bn-desc">{renderMultilineText(item.description)}</p>
                ) : null}
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

/* ─── Service Process ────────────────────────────────────────────────── */
export function SvcProcessBlock({ section }: { section: SvcProcessSection }) {
  const steps = section.steps ?? [];
  const rawPill = section.pill || 'Process';
  const pillText = cleanPill(rawPill) || 'Process';
  const prefix = section.headingPrefix?.trim() || 'Our Custom Software';
  const serif = section.headingSerif?.trim() || 'Development Process';

  const isDigitalMarketing =
    (serif.includes('Process') && prefix.includes('Digital Marketing')) ||
    steps.some((s) => s.title.includes('Discovery & Goal') || s.title.includes('Measurement & Analysis'));

  const isMobileApp =
    (prefix.includes('Mobile App') && serif.includes('Development Process')) ||
    steps.some((s) => s.title.includes('Discovery &\n Requirement') || s.title.includes('Deployment & App'));

  if (isMobileApp) {
    return (
      <section className="process-section" aria-labelledby="process-title">
        <div className="page-container wrap">
          <div className="section-heading hd2">
            <span className="section-badge pill">{pillText || 'Process'}</span>
            <h2 className="section-heading__title svc-heading" id="process-title">
              {renderHeadingParts(
                prefix || 'Our Mobile App\n',
                serif || 'Development Process',
                section.headingSuffix
              )}
            </h2>
          </div>
          <ol className="process-card-grid process-card-grid--four-columns">
            {steps.map((step, idx) => (
              <li key={`${step.number}-${step.id ?? idx}`} className="process-card">
                <span className="process-card__number">{step.number}</span>
                <h3 className="process-card__title">{renderTextWithBreaks(step.title)}</h3>
                {step.description ? (
                  <p className="process-card__description">{renderTextWithBreaks(step.description)}</p>
                ) : null}
              </li>
            ))}
            <li className="process-card process-card--call-to-action">
              <h3 className="process-card__title">{renderTextWithBreaks(section.ctaCard?.title || 'Ready to Launch\n Your Mobile App?')}</h3>
              <p className="process-card__description">{renderTextWithBreaks(section.ctaCard?.description || 'Turn your idea into a powerful\n mobile app built for your\n business goals.')}</p>
              <WalstarButton variant="orange" href={section.ctaCard?.ctaHref || '#contact'} className="button button--primary">
                {section.ctaCard?.ctaLabel || 'Have an App Idea? ↗'}
              </WalstarButton>
            </li>
          </ol>
        </div>
      </section>
    );
  }

  const isWebSaas =
    (prefix.includes('Web & SaaS') && serif.includes('Development Process')) ||
    steps.some((s) => s.title.includes('Discovery & Product') || s.title.includes('Strategy & Technical'));

  if (isWebSaas) {
    return (
      <section className="process-section" aria-labelledby="process-title">
        <div className="page-container wrap">
          <div className="section-heading hd2">
            <span className="section-badge pill">{pillText || 'Process'}</span>
            <h2 className="section-heading__title svc-heading" id="process-title">
              {renderHeadingParts(
                prefix || 'Our Web & SaaS Product\n',
                serif || 'Development Process',
                section.headingSuffix
              )}
            </h2>
          </div>
          <ol className="process-card-grid">
            {steps.map((step, idx) => (
              <li key={`${step.number}-${step.id ?? idx}`} className="process-card">
                <span className="process-card__number">{step.number}</span>
                <h3 className="process-card__title">{renderTextWithBreaks(step.title)}</h3>
                {step.description ? (
                  <p className="process-card__description">{renderTextWithBreaks(step.description)}</p>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  if (isDigitalMarketing) {
    return (
      <section className="process-section" aria-labelledby="process-title">
        <div className="page-container">
          <div className="section-heading hd2">
            <span className="section-badge pill">{pillText || 'How we work'}</span>
            <h2 className="section-heading__title svc-heading" id="process-title">
              {renderHeadingParts(
                prefix || 'Our Digital Marketing',
                serif || 'Process',
                section.headingSuffix
              )}
            </h2>
          </div>
          <ol className="process-timeline">
            {steps.map((step, idx) => (
              <li key={`${step.number}-${step.id ?? idx}`} className="process-step">
                <span className="process-step__number">{step.number}</span>
                <div className="process-step__card">
                  <h3 className="process-step__title">{renderTextWithBreaks(step.title)}</h3>
                  {step.description ? (
                    <p className="process-step__description">{renderTextWithBreaks(step.description)}</p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  const isCustomSoftware =
    serif.includes('Development Process') ||
    prefix.includes('Custom Software') ||
    steps.length === 6;

  if (isCustomSoftware) {
    return (
      <section className="pr6">
        <div className="hd2" style={{ margin: 0 }}>
          <span className="pill">{pillText}</span>
          <h2>
            {renderHeadingParts(
              prefix || 'Our Custom Software',
              serif || 'Development Process',
              section.headingSuffix
            )}
          </h2>
        </div>

        <div className="g6">
          {steps.map((step, idx) => (
            <article key={`${step.number}-${step.id ?? idx}`} className="pc6">
              <b>{step.number}</b>
              <h4>{renderTextWithBreaks(step.title)}</h4>
              {step.description ? <p>{renderTextWithBreaks(step.description)}</p> : null}
            </article>
          ))}
        </div>
      </section>
    );
  }

  // Service 1: 5-step horizontal timeline stepper
  return (
    <section className="svc-pr service-process-stepper-section">
      <div className="wrap">
        <div className="hd2 service-heading-block" style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="pill">{pillText}</span>
          <h2 className="svc-heading" style={{ textAlign: 'center' }}>
            {renderHeadingParts(
              prefix || 'Our AI Development &',
              serif || 'Automation Process',
              section.headingSuffix
            )}
          </h2>
        </div>

        {steps.length > 0 ? (
          <div className="svc-p5 service-process-stepper-5">
            {steps.map((step, idx) => (
              <div key={`${step.number}-${step.id ?? idx}`} className="svc-pn service-process-step-item">
                <b className="svc-pn-number">{step.number}</b>
                <div>
                  <h4 className="svc-pn-title">{step.title}</h4>
                  {step.description ? (
                    <p className="svc-pn-desc">{renderMultilineText(step.description)}</p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

/* ─── Service Approach ───────────────────────────────────────────────── */
export function SvcApproachBlock({ section }: { section: SvcApproachSection }) {
  const getItems = section.getBoxItems ?? [];
  const rawPill = section.pill || 'Our Approach';
  const pillText = cleanPill(rawPill) || 'Our Approach';
  const prefix = section.headingPrefix?.trim() || 'Software Designed Around';
  const serif = section.headingSerif?.trim() || 'Your Business Requirements';

  const isDigitalMarketing =
    (serif.includes('Your Business') && prefix.includes('Digital Growth')) ||
    getItems.some((it) => it.label.includes('Useful Content') || it.label.includes('Continuous Improvement'));

  const isMobileApp =
    (prefix.includes('Built for Performance') && serif.includes('Usability & Scalability')) ||
    getItems.some((it) => it.label.includes('Intuitive and user-friendly') || it.label.includes('Responsive experiences across supported'));

  const isWebSaas =
    isMobileApp ||
    (prefix.includes('Built for Performance') && serif.includes('Flexibility & Growth')) ||
    getItems.some((it) => it.label.includes('Responsive and user-friendly') || it.label.includes('Scalable and maintainable'));

  if (isWebSaas) {
    const midPoint = 4;
    const col1 = getItems.slice(0, midPoint);
    const col2 = getItems.slice(midPoint);

    return (
      <section className="approach-section sec ap" aria-labelledby="approach-title">
        <div className="page-container wrap">
          <div className="approach-section__header">
            <div>
              <span className="section-badge pill">{pillText || 'Our Approach'}</span>
              <h2 className="approach-section__title svc-heading" id="approach-title">
                {renderHeadingParts(
                  prefix || 'Built for Performance,\n',
                  serif || 'Flexibility & Growth',
                  section.headingSuffix
                )}
              </h2>
            </div>
            <p className="approach-section__introduction">
              {section.bodyOne ? (
                renderTextWithBreaks(section.bodyOne)
              ) : (
                <>
                  A successful website or SaaS product needs more than attractive design. It<br className="desktop-line-break" /> requires a strong technical foundation, a smooth user experience, and the<br className="desktop-line-break" /> flexibility to adapt as business needs change.<br className="desktop-line-break" /> At Walstar Technologies, we focus on building digital products with:
                </>
              )}
            </p>
          </div>
          <div className="approach-checklist">
            <ul className="approach-checklist__column">
              {col1.map((item, idx) => (
                <li key={`${item.label}-${item.id ?? idx}`} className="approach-checklist-item">
                  <span className="approach-checklist-item__icon">
                    {renderNamedSvgIcon(item.icon, idx, item.label)}
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
            <ul className="approach-checklist__column">
              {col2.map((item, idx) => (
                <li key={`${item.label}-${item.id ?? idx}`} className="approach-checklist-item">
                  <span className="approach-checklist-item__icon">
                    {renderNamedSvgIcon(item.icon, midPoint + idx, item.label)}
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }

  if (isDigitalMarketing) {
    return (
      <section className="growth-strategy-section sec ap" aria-labelledby="growth-strategy-title">
        <div className="page-container growth-strategy-section__layout wrap ap-container">
          <div className="growth-strategy-section__content">
            <span className="section-badge pill">{pillText || 'Your goals first'}</span>
            <h2 className="split-heading__title svc-heading" id="growth-strategy-title">
              {renderHeadingParts(
                prefix || 'Digital Growth Strategies Tailored to',
                serif || 'Your Business',
                section.headingSuffix
              )}
            </h2>
            {section.bodyOne ? (
              <p className="growth-strategy-section__paragraph">
                {renderTextWithBreaks(section.bodyOne)}
              </p>
            ) : (
              <>
                <p className="growth-strategy-section__paragraph">
                  Every business has different audiences, competition, budgets, and growth<br className="desktop-line-break" /> objectives. We develop digital marketing strategies around your specific<br className="desktop-line-break" /> needs rather than applying the same approach to every business.
                </p>
                <p className="growth-strategy-section__paragraph">
                  Whether you want to improve organic search rankings, increase qualified<br className="desktop-line-break" /> inquiries, strengthen AI-search visibility, or get more value from paid<br className="desktop-line-break" /> campaigns, we help identify practical opportunities and build a strategy<br className="desktop-line-break" /> aligned with your goals.
                </p>
                <p className="growth-strategy-section__paragraph">
                  Our approach emphasizes useful content, sound technical foundations,<br className="desktop-line-break" /> relevant audience targeting, transparent reporting, and continuous<br className="desktop-line-break" /> improvement.
                </p>
              </>
            )}
            {section.bodyTwo ? (
              <p className="growth-strategy-section__paragraph" style={{ marginTop: 16 }}>
                {renderTextWithBreaks(section.bodyTwo)}
              </p>
            ) : null}
          </div>
          <ul className="growth-principle-list">
            {getItems.map((item, idx) => (
              <li key={`${item.label}-${item.id ?? idx}`} className="growth-principle">
                <span className="growth-principle__icon">
                  {renderNamedSvgIcon(item.icon, idx)}
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  const isCustomSoftware =
    serif.includes('Business Requirements') ||
    prefix.includes('Software Designed Around') ||
    getItems.length === 7 ||
    getItems.some((it) => Boolean(it.icon));

  if (isCustomSoftware) {
    // Split into 2 columns: 4 in col 1, 3 in col 2
    const midPoint = Math.ceil(getItems.length / 2);
    const col1 = getItems.slice(0, midPoint);
    const col2 = getItems.slice(midPoint);

    return (
      <section className="sec ap">
        <div className="wrap">
          <div className="top">
            <div>
              <span className="pill">{pillText}</span>
              <h2>
                {renderHeadingParts(
                  prefix || 'Software Designed Around',
                  serif || 'Your Business Requirements',
                  section.headingSuffix
                )}
              </h2>
            </div>
            <p>
              {section.bodyOne ? (
                renderTextWithBreaks(section.bodyOne)
              ) : (
                <>
                  We believe business software should solve real operational challenges rather<br className="d" /> than force your team to change the way everything works.<br className="d" /> Our approach focuses on understanding your requirements and building<br className="d" /> solutions that are practical, reliable, and adaptable.
                </>
              )}
            </p>
          </div>

          <div className="lists">
            <div className="col">
              {col1.map((item, idx) => (
                <div key={`${item.label}-${item.id ?? idx}`} className="it">
                  <i>{renderNamedSvgIcon(item.icon, idx)}</i>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="col">
              {col2.map((item, idx) => (
                <div key={`${item.label}-${item.id ?? idx}`} className="it">
                  <i>{renderNamedSvgIcon(item.icon, midPoint + idx)}</i>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Service 1 Approach
  return (
    <section className="sec svc-appr service-approach-section">
      <div className="wrap svc-appr-grid service-approach-grid">
        <div className="svc-appr-copy service-approach-copy">
          <span className="pill">{pillText}</span>
          <h2 className="svc-heading">
            {renderHeadingParts(
              prefix || 'AI Solutions Built Around',
              serif || 'Your Business',
              section.headingSuffix
            )}
          </h2>
          {section.bodyOne ? (
            <p className="svc-lead-desc">{renderMultilineText(section.bodyOne)}</p>
          ) : null}
          {section.bodyTwo ? (
            <p className="svc-lead-desc" style={{ marginTop: 16 }}>
              {renderMultilineText(section.bodyTwo)}
            </p>
          ) : null}
        </div>

        {(section.getBoxTitle || getItems.length > 0) ? (
          <div className="svc-get service-deliverables-box">
            {section.getBoxTitle ? (
              <h4 className="svc-get-title">{section.getBoxTitle}</h4>
            ) : null}
            {getItems.map((item, idx) => (
              <div key={`${item.label}-${item.id ?? idx}`} className="svc-get-item service-deliverable-item">
                <i className="svc-get-icon" aria-hidden="true">✓</i>
                <span className="svc-get-label">{item.label}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

/* ─── Service CTA ─────────────────────────────────────────────────────── */
export function SvcCtaBlock({ section }: { section: SvcCtaSection }) {
  const rawPill = section.pill || "Let's Talk";
  const pillText = cleanPill(rawPill) || "Let's Talk";
  const prefix = section.headingPrefix?.trim() || 'Ready to Build Software';
  const serif = section.headingSerif?.trim() || 'Around Your Business?';
  const suffix = section.headingSuffix?.trim() || '';

  const isDigitalMarketing =
    serif.includes('Business Growth?') ||
    prefix.includes('Turn Your Digital');

  const isMobileApp =
    (prefix.includes('Have an Idea for a') && serif.includes('Mobile App?')) ||
    Boolean(section.bodyOne?.includes('mobile experience that helps your business'));

  if (isMobileApp) {
    return (
      <section className="final-call-to-action-section svc-rd rd" aria-labelledby="final-call-to-action-title" id="contact">
        <span className="section-badge pill" style={{ background: 'rgba(255, 255, 255, 0.7)', color: 'var(--color-navy, #001a33)' }}>
          {pillText || 'Let’s talk'}
        </span>
        <h2 className="final-call-to-action-section__title svc-heading" id="final-call-to-action-title">
          {renderHeadingParts(
            prefix || 'Have an Idea for a\n',
            serif || 'Mobile App?',
            suffix
          )}
        </h2>
        <p className="final-call-to-action-section__text">
          {section.bodyOne
            ? renderTextWithBreaks(section.bodyOne)
            : "Let's turn your idea into a mobile experience that helps your business connect\n with customers, simplify operations, and create new opportunities for growth."}
        </p>
        <div className="final-call-to-action-section__actions">
          <WalstarButton variant="orange" href={section.ctaHref || '#contact'} className="button button--primary">
            {section.ctaLabel || 'Discuss Your Project ↗'}
          </WalstarButton>
          <a className="button button--outline-light" href={section.secondaryCtaHref || '#contact'}>
            {section.secondaryCtaLabel || 'Contact Our Team ↗'}
          </a>
        </div>
      </section>
    );
  }

  const isWebSaas =
    (prefix.includes('Have an Idea for Your') && serif.includes('Digital Product?')) ||
    Boolean(section.bodyOne?.includes('launching a SaaS startup'));

  if (isWebSaas) {
    return (
      <section className="final-call-to-action-section svc-rd rd" aria-labelledby="final-call-to-action-title" id="contact">
        <span className="section-badge pill" style={{ background: 'rgba(255, 255, 255, 0.7)', color: 'var(--color-navy, #001a33)' }}>
          {pillText || 'Let’s talk'}
        </span>
        <h2 className="final-call-to-action-section__title svc-heading" id="final-call-to-action-title">
          {renderHeadingParts(
            prefix || 'Have an Idea for Your\n Next ',
            serif || 'Digital Product?',
            suffix
          )}
        </h2>
        <p className="final-call-to-action-section__text">
          {section.bodyOne
            ? renderTextWithBreaks(section.bodyOne)
            : "Whether you're planning a new website, launching a SaaS startup, or improving an existing web application,\n Walstar Technologies can help turn your idea into a functional digital product.\n Let's discuss your vision, explore the possibilities, and plan the right development approach for your business."}
        </p>
        <div className="final-call-to-action-section__actions">
          <WalstarButton variant="orange" href={section.ctaHref || '#contact'} className="button button--primary">
            {section.ctaLabel || 'Discuss Your Project ↗'}
          </WalstarButton>
          <a className="button button--outline-light" href={section.secondaryCtaHref || '#contact'}>
            {section.secondaryCtaLabel || 'Contact Our Team ↗'}
          </a>
        </div>
      </section>
    );
  }

  if (isDigitalMarketing) {
    return (
      <section className="final-call-to-action-section svc-rd rd" aria-labelledby="final-call-to-action-title" id="contact">
        <span className="section-badge pill" style={{ background: 'rgba(255, 255, 255, 0.7)', color: 'var(--color-navy, #001a33)' }}>
          {pillText || 'Let’s talk'}
        </span>
        <h2 className="final-call-to-action-section__title svc-heading" id="final-call-to-action-title">
          {renderHeadingParts(
            prefix || 'Ready to Turn Your Digital Presence Into',
            serif || 'Business Growth?',
            suffix
          )}
        </h2>
        <p className="final-call-to-action-section__text">
          {section.bodyOne
            ? renderTextWithBreaks(section.bodyOne)
            : "Let's identify the right opportunities to improve your online visibility, reach your\ntarget audience, and generate more meaningful business inquiries."}
        </p>
        <WalstarButton variant="orange" href={section.ctaHref || '#contact'} className="button button--primary">
          {section.ctaLabel || 'Discuss Your Growth Strategy ↗'}
        </WalstarButton>
      </section>
    );
  }

  const isCustomSoftware =
    prefix.includes('Ready to Build Software') ||
    serif.includes('Around Your Business');

  if (isCustomSoftware) {
    return (
      <section className="rd" id="cta">
        <span className="pill">{pillText}</span>
        <h2>
          {renderHeadingParts(
            prefix || 'Ready to Build Software',
            serif || 'Around Your Business?',
            suffix
          )}
        </h2>
        <p>
          {section.bodyOne ? (
            renderTextWithBreaks(section.bodyOne)
          ) : (
            <>
              Let&apos;s discuss your business challenges, understand your requirements, and explore<br className="d" /> how custom software can simplify your operations and support your growth.
            </>
          )}
        </p>
        <WalstarButton variant="orange" href={section.ctaHref || '#cta'}>
          {section.ctaLabel || 'Discuss Your Software Project ↗'}
        </WalstarButton>
      </section>
    );
  }

  return (
    <section className="svc-rd rd service-cta-banner-section" id="cta">
      <div className="wrap svc-rd-inner service-cta-banner-inner">
        <span className="pill" style={{ background: 'rgba(255, 255, 255, 0.85)', color: '#001930' }}>
          {pillText}
        </span>
        <h2 className="svc-heading" style={{ color: '#0b1d36', textAlign: 'center' }}>
          <span className="svc-heading-row">
            {prefix}{' '}
            <span className="serif" style={{ color: '#FFFFFF' }}>
              {serif}
            </span>
            {suffix ? ` ${suffix}` : ''}
          </span>
        </h2>
        {section.bodyOne ? (
          <p className="svc-rd-desc" style={{ maxWidth: 640, margin: '14px auto 0', color: '#dbeaff', textAlign: 'center', fontSize: 'clamp(14px, 0.95vw, 16px)', lineHeight: 1.6 }}>
            {renderMultilineText(section.bodyOne)}
          </p>
        ) : null}
        {section.bodyTwo ? (
          <p className="svc-rd-desc svc-rd-desc--secondary" style={{ maxWidth: 640, margin: '10px auto 24px', color: '#dbeaff', textAlign: 'center', fontSize: 'clamp(14px, 0.95vw, 16px)', lineHeight: 1.6 }}>
            {renderMultilineText(section.bodyTwo)}
          </p>
        ) : null}
        {section.ctaLabel ? (
          <WalstarButton variant="orange" href={section.ctaHref || '#cta'}>
            {section.ctaLabel}
          </WalstarButton>
        ) : (
          <WalstarButton variant="orange" href="#cta">
            Discuss Your Software Project ↗
          </WalstarButton>
        )}
      </div>
    </section>
  );
}

export { CapabilitiesBlock, WWD_CARDS } from '@/components/home/CapabilitiesSection';

/* ─── Dedicated Service 3 Component Aliases ───────────────────────────── */
export const Svc3IntroBlock = SvcIntroBlock;
export const Svc3StrategiesBlock = SvcCapabilitiesBlock;
export const Svc3BenefitsBlock = SvcBenefitsBlock;
export const Svc3ProcessBlock = SvcProcessBlock;
export const Svc3GrowthStrategyBlock = SvcApproachBlock;
export const Svc3CtaBlock = SvcCtaBlock;

