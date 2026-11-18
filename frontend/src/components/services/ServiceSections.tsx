import Image from 'next/image';
import { WalstarButton } from '@/components/common/WalstarButton';
import {
  cleanPill,
  renderHeadingParts,
  renderMultilineText,
} from '@/components/common/SectionPrimitives';
import { getStrapiMediaUrl } from '@/lib/strapi';
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

export function renderNamedSvgIcon(name?: string | null, index = 0): React.ReactNode {
  const key = name?.toLowerCase().trim() || '';
  if (key === 'search' || key.includes('seo') || key.includes('search engine')) return <SvgSearchIcon />;
  if (key === 'robot' || key.includes('ai-search') || key.includes('ai search')) return <SvgRobotIcon />;
  if (key === 'location-pin' || key.includes('location') || key.includes('local seo')) return <SvgLocationPinIcon />;
  if (key === 'document-list' || key.includes('content marketing')) return <SvgDocumentListIcon />;
  if (key === 'megaphone' || key.includes('paid advertising') || key.includes('ppc')) return <SvgMegaphoneIcon />;
  if (key === 'share' || key.includes('social media')) return <SvgShareIcon />;
  if (key === 'email' || key.includes('email marketing')) return <SvgEmailIcon />;
  if (key === 'funnel' || key.includes('lead generation') || key.includes('conversion')) return <SvgFunnelIcon />;
  if (key === 'shopping-cart' || key.includes('ecommerce')) return <SvgShoppingCartIcon />;
  if (key === 'analytics-bars' || key.includes('analytics') || key.includes('performance tracking')) return <SvgAnalyticsBarsIcon />;
  if (key === 'users-group' || key.includes('relevant customers') || key.includes('reach more')) return <SvgUsersGroupIcon />;
  if (key === 'target-aim' || key === 'target-arrow') return <SvgTargetArrowIcon />;
  if (key === 'target') return <SvgTargetAimIcon />;
  if (key === 'growth-chart' || key.includes('efficiency') || key.includes('visibility') || key.includes('reporting')) return <SvgGrowthChartIcon />;
  if (key === 'cursor-click' || key.includes('turn more') || key.includes('inquiries')) return <SvgCursorClickIcon />;
  if (key === 'document-text' || key.includes('useful content')) return <SvgDocumentTextIcon />;
  if (key === 'gear' || key.includes('technical foundations') || key.includes('sound technical')) return <SvgGearIcon />;
  if (key === 'trending-up' || key.includes('continuous improvement')) return <SvgTrendingUpIcon />;

  if (key === 'layers' || key.includes('erp') || (index === 0 && !name)) return <SvgLayersIcon />;
  if (key === 'users' || key.includes('crm') || index === 1) return <SvgUsersIcon />;
  if (key === 'box' || key.includes('inventory') || index === 2) return <SvgBoxIcon />;
  if (key === 'flow' || key.includes('workflow') || index === 3) return <SvgFlowIcon />;
  if (key === 'grid' || key.includes('application') || index === 4) return <SvgGridIcon />;
  if (key === 'plug' || key.includes('integration') || index === 5) return <SvgPlugIcon />;
  if (key === 'bars') return <SvgBarsIcon />;
  if (key === 'sliders' || key.includes('operation')) return <SvgSlidersIcon />;
  if (key === 'bolt' || key.includes('productiv')) return <SvgBoltIcon />;
  if (key === 'db' || key.includes('database') || key.includes('centralize')) return <SvgDbIcon />;
  if (key === 'net' || key.includes('network') || key.includes('connect') || key.includes('architecture')) return <SvgNetIcon />;
  if (key === 'shield' || key.includes('security') || key.includes('access')) return <SvgShieldIcon />;
  if (key === 'monitor' || key.includes('interface') || key.includes('ui')) return <SvgMonitorIcon />;
  if (key === 'head' || key.includes('support') || key.includes('maintenance')) return <SvgHeadsetIcon />;
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

  if (isDigitalMarketing) {
    const dmImage = strapiUrl || '/images/services/digital-marketing.png';
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
              SEO, AI Search Visibility &amp;<br className="desktop-line-break" />
              <span className="accent-text serif">Performance Marketing</span>
            </h2>
            <p className="introduction-section__text lead svc-lead-desc">
              From business management systems to workflow automation, we<br className="desktop-line-break" /> develop scalable software solutions designed to simplify operations and<br className="desktop-line-break" /> improve productivity.
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

  const defaultImage = isCustomSoftware
    ? '/images/placeholder.png'
    : '/images/service-team-ai.png';

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
              Build <span className="serif">Custom Software</span> That<br className="d" /> Works the Way Your Business<br className="d" /> Works
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

  // Check if standard copy matches reference image to guarantee exact multi-row wrapping
  const isService1ReferenceCopy =
    prefix === 'AI Agents and Automation that cut' &&
    serif === 'Manual Work';

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

          {isService1ReferenceCopy ? (
            <h2 className="svc-heading">
              <span className="svc-heading-row">AI Agents and Automation that cut</span>
              <span className="svc-heading-row">
                <span className="serif">Manual Work</span> and bring in
              </span>
              <span className="svc-heading-row">more Leads</span>
            </h2>
          ) : (
            <h2 className="svc-heading">
              {renderHeadingParts(prefix, serif, suffix)}
            </h2>
          )}

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

  const isReferenceCopy =
    prefix.includes('Turn everyday Business challenges') &&
    serif.includes('Intelligent Solutions');

  return (
    <section className="sec svc-chal service-challenges-section">
      <div className="wrap svc-chal-grid service-challenges-grid">
        <div className="svc-chal-copy service-challenges-copy">
          <span className="pill">{pillText}</span>
          {isReferenceCopy ? (
            <h2 className="svc-heading">
              <span className="svc-heading-row">Turn everyday Business challenges</span>
              <span className="svc-heading-row">
                into <span className="serif">Intelligent Solutions</span>
              </span>
            </h2>
          ) : (
            <h2 className="svc-heading">
              {renderHeadingParts(prefix, serif, suffix)}
            </h2>
          )}
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
  const rawPill = section.pill || 'Services';
  const pillText = cleanPill(rawPill) || 'Services';
  const prefix = section.headingPrefix?.trim() || 'Custom Software Solutions for';
  const serif = section.headingSerif?.trim() || 'Business Management';

  const isDigitalMarketing =
    serif.includes('Drive Business Growth') ||
    prefix.includes('Digital Strategies') ||
    incomingItems.length === 11 ||
    incomingItems.some((it) => it.title.includes('Search Engine'));

  if (isDigitalMarketing) {
    return (
      <section className="digital-strategies-section svc-cap-strategies" aria-labelledby="digital-strategies-title">
        <div className="section-heading hd2">
          <span className="section-badge pill">{pillText || 'What we do'}</span>
          <h2 className="section-heading__title svc-heading" id="digital-strategies-title">
            Digital Strategies Designed to<br className="desktop-line-break" />
            <span className="accent-text serif">Drive Business Growth</span>
          </h2>
        </div>
        <ul className="strategy-card-grid">
          {incomingItems.map((item, idx) => {
            if (item.isDark) {
              return (
                <li key={`${item.title}-${item.id ?? idx}`} className="strategy-card strategy-card--call-to-action">
                  <h3 className="strategy-card__title">{renderTextWithBreaks(item.title)}</h3>
                  {item.description ? (
                    <p className="strategy-card__description">{renderTextWithBreaks(item.description)}</p>
                  ) : null}
                  <WalstarButton variant="orange" href={item.ctaHref || '#contact'} className="button button--primary">
                    {item.ctaLabel || 'Get Started ↗'}
                  </WalstarButton>
                </li>
              );
            }

            return (
              <li key={`${item.title}-${item.id ?? idx}`} className="strategy-card">
                <span className="strategy-card__icon">
                  {renderNamedSvgIcon(item.icon, idx)}
                </span>
                <h3 className="strategy-card__title">{renderTextWithBreaks(item.title)}</h3>
                {item.description ? (
                  <p className="strategy-card__description">{renderTextWithBreaks(item.description)}</p>
                ) : null}
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  const isCustomSoftware =
    serif.includes('Business Management') ||
    incomingItems.some((it) => it.isDark || it.icon === 'layers') ||
    Boolean(section.description);

  if (isCustomSoftware) {
    return (
      <section className="sol2">
        <div className="hd2">
          <span className="pill">{pillText}</span>
          <h2>
            Custom Software Solutions for<br className="d" /> Better <span className="serif">Business Management</span>
          </h2>
          <p>
            {section.description ? (
              renderTextWithBreaks(section.description)
            ) : (
              <>
                Every business has its own processes, challenges, and operational requirements. Off-the-<br className="d" />shelf software may not always provide the flexibility or functionality you need.<br className="d" /> Our custom software development services help businesses build applications that fit their<br className="d" /> workflows, connect their systems, and support their long-term goals.
              </>
            )}
          </p>
        </div>

        <div className="g8">
          {incomingItems.map((item, idx) => {
            if (item.isDark) {
              return (
                <article key={`${item.title}-${item.id ?? idx}`} className="sc2 dk">
                  <h4>
                    {renderTextWithBreaks(item.title) || (
                      <>
                        Ready to Build<br className="d" /> Software Around Your<br className="d" /> Business?
                      </>
                    )}
                  </h4>
                  <WalstarButton variant="orange" href={item.ctaHref || '#cta'}>
                    {item.ctaLabel || 'Discuss Your Project ↗'}
                  </WalstarButton>
                </article>
              );
            }

            return (
              <article key={`${item.title}-${item.id ?? idx}`} className="sc2">
                <i>{renderNamedSvgIcon(item.icon, idx)}</i>
                <h4>{renderTextWithBreaks(item.title)}</h4>
                {item.description ? <p>{renderTextWithBreaks(item.description)}</p> : null}
              </article>
            );
          })}
        </div>
      </section>
    );
  }

  // Fallback to Service 1 Capabilities layout
  return (
    <section className="svc-cap service-capabilities-section">
      <div className="wrap">
        <div className="hd2 service-heading-block" style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="pill">{pillText}</span>
          <h2 className="svc-heading" style={{ textAlign: 'center' }}>
            <span className="svc-heading-row">
              What we <span className="serif">Build</span>
            </span>
          </h2>
        </div>

        <div className="svc-c4 service-capabilities-grid-4">
          {incomingItems.map((item, idx) => (
            <article key={`${item.title}-${item.id ?? idx}`} className="svc-cc service-capability-card">
              <i className="svc-cc-icon" aria-hidden="true">{renderNamedSvgIcon(item.icon, idx)}</i>
              <h4 className="svc-cc-title">{item.title}</h4>
              {item.description ? (
                <p className="svc-cc-desc">{renderMultilineText(item.description)}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Service Benefits ───────────────────────────────────────────────── */
export function SvcBenefitsBlock({ section }: { section: SvcBenefitsSection }) {
  const items = section.benefitItems ?? [];
  const rawPill = section.pill || 'Benefits';
  const pillText = cleanPill(rawPill) || 'Benefits';
  const prefix = section.headingPrefix?.trim() || 'How Custom Software';
  const serif = section.headingSerif?.trim() || 'Helps Your Business';

  const isDigitalMarketing =
    serif.includes('Grow') ||
    prefix.includes('How Digital Marketing Helps') ||
    items.some((it) => it.title.includes('Turn More Visitors') || it.title.includes('Relevant Customers'));

  if (isDigitalMarketing) {
    return (
      <section className="benefits-section sec svc-benefits" aria-labelledby="benefits-title">
        <div className="page-container wrap">
          <div className="section-heading hd2">
            <span className="section-badge pill">{pillText || 'Benefits'}</span>
            <h2 className="section-heading__title svc-heading" id="benefits-title">
              How Digital Marketing Helps<br className="desktop-line-break" /> Your Business <span className="accent-text serif">Grow</span>
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
              How Custom Software<br /><span className="serif">Helps Your Business</span>
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
            <span className="svc-heading-row">What an AI Automation do</span>
            <span className="svc-heading-row">
              <span className="serif">for Your Business?</span>
            </span>
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

  if (isDigitalMarketing) {
    return (
      <section className="process-section" aria-labelledby="process-title">
        <div className="page-container">
          <div className="section-heading hd2">
            <span className="section-badge pill">{pillText || 'How we work'}</span>
            <h2 className="section-heading__title svc-heading" id="process-title">
              Our Digital Marketing<br className="desktop-line-break" />
              <span className="accent-text serif">Process</span>
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
            Our Custom Software<br /><span className="serif">Development Process</span>
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
            <span className="svc-heading-row">Our AI Development &</span>
            <span className="svc-heading-row">
              <span className="serif">Automation Process</span>
            </span>
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

  if (isDigitalMarketing) {
    return (
      <section className="growth-strategy-section sec ap" aria-labelledby="growth-strategy-title">
        <div className="page-container growth-strategy-section__layout wrap ap-container">
          <div className="growth-strategy-section__content">
            <span className="section-badge pill">{pillText || 'Your goals first'}</span>
            <h2 className="split-heading__title svc-heading" id="growth-strategy-title">
              Digital Growth Strategies<br className="desktop-line-break" /> Tailored to <span className="accent-text serif">Your Business</span>
            </h2>
            <p className="growth-strategy-section__paragraph">
              Every business has different audiences, competition, budgets, and growth<br className="desktop-line-break" /> objectives. We develop digital marketing strategies around your specific<br className="desktop-line-break" /> needs rather than applying the same approach to every business.
            </p>
            <p className="growth-strategy-section__paragraph">
              Whether you want to improve organic search rankings, increase qualified<br className="desktop-line-break" /> inquiries, strengthen AI-search visibility, or get more value from paid<br className="desktop-line-break" /> campaigns, we help identify practical opportunities and build a strategy<br className="desktop-line-break" /> aligned with your goals.
            </p>
            <p className="growth-strategy-section__paragraph">
              Our approach emphasizes useful content, sound technical foundations,<br className="desktop-line-break" /> relevant audience targeting, transparent reporting, and continuous<br className="desktop-line-break" /> improvement.
            </p>
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
                Software Designed Around<br /><span className="serif">Your Business Requirements</span>
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
            <span className="svc-heading-row">AI Solutions Built Around</span>
            <span className="svc-heading-row">
              <span className="serif">Your Business</span>
            </span>
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

  if (isDigitalMarketing) {
    return (
      <section className="final-call-to-action-section svc-rd rd" aria-labelledby="final-call-to-action-title" id="contact">
        <span className="section-badge pill" style={{ background: 'rgba(255, 255, 255, 0.7)', color: 'var(--color-navy, #001a33)' }}>
          {pillText || 'Let’s talk'}
        </span>
        <h2 className="final-call-to-action-section__title svc-heading" id="final-call-to-action-title">
          Ready to Turn Your Digital<br className="desktop-line-break" /> Presence Into <span className="accent-text serif">Business Growth?</span>
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
          Ready to Build Software<br /><span className="serif">Around Your Business?</span>
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

