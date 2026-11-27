'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import {
  cleanPill,
  renderMultilineText,
} from '@/components/common/SectionPrimitives';
import { WalstarButtonArrow } from '@/components/common/WalstarButton';
import type { SolutionsGridSection } from '@/types/strapi';

const FALLBACK_10_SOLUTIONS = [
  {
    number: '01',
    title: 'AI & Automation Solutions',
    category: 'AI-Powered Business Automation',
    href: '/services/ai-solutions-business-automation',
  },
  {
    number: '02',
    title: 'Digital Marketing & Performance Growth',
    category: 'Search, Social & Brand Visibility',
    href: '/services/digital-marketing-performance-growth',
  },
  {
    number: '03',
    title: 'Custom Software Development',
    category: 'Digital Growth Solutions',
    href: '/services/custom-software-development',
  },
  {
    number: '04',
    title: 'Web & SaaS Product Development',
    category: 'Websites and SaaS built to scale.',
    href: '/services/web-saas-product-development',
  },
  {
    number: '05',
    title: 'Mobile App Development',
    category: 'Scalable Android and iOS apps.',
    href: '/services/mobile-app-development',
  },
  {
    number: '06',
    title: 'ECommerce & Shopify Solutions',
    category: 'Seamless online shopping solutions',
    href: '/services/ecommerce-shopify-solutions',
  },
  {
    number: '07',
    title: 'Cloud & DevOps Engineering',
    category: 'Scalable Cloud Infrastructure',
    href: '/services/cloud-devops-engineering',
  },
  {
    number: '08',
    title: 'Cybersecurity & Data Protection',
    category: 'Secure enterprise solutions',
    href: '/services/cybersecurity-data-protection',
  },
  {
    number: '09',
    title: 'UI/UX & Product Design',
    category: 'Intuitive user experiences',
    href: '/services/ui-ux-design-branding',
  },
  {
    number: '10',
    title: 'Dedicated Development Teams',
    category: 'Pre-vetted engineering squads',
    href: '/services/dedicated-teams',
  },
];

function InteractiveSolutionsMarquee({
  items,
  speed,
  direction,
}: {
  items: Array<{ number: string; title: string; category?: string | null; href?: string | null }>;
  speed: number;
  direction: 'left' | 'right';
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const posRef = useRef(0);
  const isDraggingRef = useRef(false);
  const isUserScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const startXRef = useRef(0);
  const startPosRef = useRef(0);
  const movedRef = useRef(false);
  const lastTimeRef = useRef<number>(performance.now());
  const rafRef = useRef<number | null>(null);
  const [isGrabbing, setIsGrabbing] = useState(false);

  // 3 duplicate cycles create a smooth infinite seamless marquee loop
  const marqueeItems = useMemo(() => [...items, ...items, ...items], [items]);

  useEffect(() => {
    lastTimeRef.current = performance.now();

    const loop = (now: number) => {
      const dt = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      const track = trackRef.current;
      if (track) {
        const cycleWidth = track.scrollWidth / 3;

        // Auto-scroll continuously unless actively dragging or wheel-scrolling
        if (!isDraggingRef.current && !isUserScrollingRef.current && cycleWidth > 0) {
          const pixelsPerSecond = cycleWidth / Math.max(8, speed);
          const safeDt = Math.min(dt, 0.05);
          const delta = pixelsPerSecond * safeDt * (direction === 'right' ? -1 : 1);

          posRef.current += delta;

          // Wrap around seamlessly
          if (posRef.current >= cycleWidth) {
            posRef.current -= cycleWidth;
          } else if (posRef.current < 0) {
            posRef.current += cycleWidth;
          }

          track.style.transform = `translate3d(-${posRef.current}px, 0, 0)`;
        }
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [speed, direction, marqueeItems]);

  // Global window release ensures drag never gets stuck even if released outside window
  useEffect(() => {
    const handleGlobalRelease = () => {
      if (isDraggingRef.current || isUserScrollingRef.current) {
        isDraggingRef.current = false;
        isUserScrollingRef.current = false;
        setIsGrabbing(false);
        lastTimeRef.current = performance.now();
      }
    };

    window.addEventListener('pointerup', handleGlobalRelease);
    window.addEventListener('pointercancel', handleGlobalRelease);
    return () => {
      window.removeEventListener('pointerup', handleGlobalRelease);
      window.removeEventListener('pointercancel', handleGlobalRelease);
    };
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    startPosRef.current = posRef.current;
    movedRef.current = false;
    setIsGrabbing(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - startXRef.current;
    if (Math.abs(dx) > 4) {
      movedRef.current = true;
    }
    const track = trackRef.current;
    if (!track) return;
    const cycleWidth = track.scrollWidth / 3;

    posRef.current = startPosRef.current - dx;

    // Wrap seamlessly while dragging
    if (cycleWidth > 0) {
      posRef.current = ((posRef.current % cycleWidth) + cycleWidth) % cycleWidth;
    }

    track.style.transform = `translate3d(-${posRef.current}px, 0, 0)`;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false;
    isUserScrollingRef.current = false;
    setIsGrabbing(false);
    lastTimeRef.current = performance.now();
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  // When mouse leaves the marquee div, instantly autostart scrolling smoothly
  const handleLeave = () => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = null;
    }
    isUserScrollingRef.current = false;
    isDraggingRef.current = false;
    setIsGrabbing(false);
    lastTimeRef.current = performance.now();
  };

  // Wheel scrubbing forward and backward
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    const cycleWidth = track.scrollWidth / 3;

    // Use deltaX if available, or deltaY for standard vertical mouse wheel
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) > 0) {
      isUserScrollingRef.current = true;
      posRef.current += delta;

      if (cycleWidth > 0) {
        posRef.current = ((posRef.current % cycleWidth) + cycleWidth) % cycleWidth;
      }

      track.style.transform = `translate3d(-${posRef.current}px, 0, 0)`;

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isUserScrollingRef.current = false;
        lastTimeRef.current = performance.now();
      }, 70);
    }
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (movedRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div
      className={`w-full overflow-hidden select-none ${isGrabbing ? 'cursor-grabbing' : 'cursor-grab'}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onPointerLeave={handleLeave}
      onMouseLeave={handleLeave}
      onWheel={handleWheel}
      style={{ touchAction: 'pan-y' }}
    >
      <div
        ref={trackRef}
        className="flex w-max items-stretch gap-5 will-change-transform"
      >
        {marqueeItems.map((item, idx) => {
          const key = `sol-${item.number}-${idx}`;
          const numVal = parseInt(item.number.replace(/\D/g, ''), 10) || (idx + 1);
          const isOrange = numVal % 2 === 0;
          const cardClass = `group flex w-[270px] shrink-0 flex-col justify-between rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md md:w-[300px] ${
            isOrange
              ? 'border-[#fed7aa] bg-[#fff7ed]/60 hover:border-[#fb923c]'
              : 'border-[#dbe4ff] bg-[#f4f7ff]/70 hover:border-[#364e9c]'
          }`;

          const cardBody = (
            <>
              <div className="flex items-center justify-between">
                <span
                  className={`text-sm font-bold tracking-wider ${
                    isOrange ? 'text-[#ea580c]' : 'text-[#364e9c]'
                  }`}
                >
                  {item.number}
                </span>
                <i
                  aria-hidden="true"
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-200 group-hover:translate-x-0.5 ${
                    isOrange ? 'text-[#ea580c]' : 'text-[#364e9c]'
                  }`}
                >
                  <WalstarButtonArrow width={18} height={18} strokeWidth={1.5} />
                </i>
              </div>
              <h4 className="mt-5 text-lg font-bold leading-snug text-[#20232a]">
                {item.title}
              </h4>
              <div
                className={`my-4 h-px w-full ${
                  isOrange ? 'bg-[#fed7aa]' : 'bg-[#dbe4ff]'
                }`}
                aria-hidden="true"
              />
              {item.category ? (
                <small className="text-xs font-medium leading-relaxed text-[#5c6473]">
                  {item.category}
                </small>
              ) : null}
            </>
          );

          if (item.href) {
            return (
              <Link
                key={key}
                href={item.href}
                className={cardClass}
                onClick={handleCardClick}
                draggable={false}
              >
                {cardBody}
              </Link>
            );
          }

          return (
            <article key={key} className={cardClass}>
              {cardBody}
            </article>
          );
        })}
      </div>
    </div>
  );
}

export function SolutionsGridBlock({ section }: { section: SolutionsGridSection }) {
  const incomingItems =
    Array.isArray(section.items) && section.items.length > 0
      ? section.items
      : FALLBACK_10_SOLUTIONS;
  const rawPill = section.pill || 'What we do';
  const pillText = cleanPill(rawPill) || 'What we do';

  // Direction and speed are managed directly in the Strapi CMS Admin Panel
  const direction = section.direction === 'right' ? 'right' : 'left';
  const speed =
    typeof section.speedSeconds === 'number' && section.speedSeconds > 0
      ? section.speedSeconds
      : 30;

  // Support dynamic prefix from Strapi (single-line or multi-line)
  let line1 = 'Digital solutions';
  let line2Prefix = '';

  if (section.headingPrefix) {
    if (section.headingPrefix.includes('\n')) {
      const parts = section.headingPrefix.split('\n');
      line1 = parts[0].trim();
      line2Prefix = parts.slice(1).join(' ').trim() ? `${parts.slice(1).join(' ').trim()} ` : '';
    } else if (/built\s+to/i.test(section.headingPrefix)) {
      const parts = section.headingPrefix.split(/built\s+to/i);
      line1 = parts[0].trim() || 'Digital solutions';
      line2Prefix = 'built to ';
    } else {
      line1 = section.headingPrefix.trim();
      line2Prefix = (!section.headingSerif || section.headingSerif.trim().toLowerCase() === 'scale') ? 'built to ' : '';
    }
  } else {
    line1 = 'Digital solutions';
    line2Prefix = 'built to ';
  }

  const rawSerif = section.headingSerif?.trim() || 'Scale';
  const serifWord = rawSerif.charAt(0).toUpperCase() + rawSerif.slice(1);

  // Wrap subtitle text exactly to match reference spec
  const subtitleText = section.subtitle
    ? section.subtitle.replace(/(strategists,\s+and)\s+/i, '$1\n')
    : null;

  return (
    <section
      className={`w-full bg-white py-12 md:py-16 ${
        section.hasTopOverlap !== false ? '-mt-4 pt-14 md:pt-20' : ''
      }`}
      id="solutions-grid"
    >
      <div className="section-container-80">
        <div className="mb-8 flex flex-col items-center text-center">
          <span className="section-pill">{pillText}</span>
          <h2 className="section-heading mt-2 text-center">
            <span className="block">{line1}</span>
            <span className="block">
              {line2Prefix ? <span>{line2Prefix}</span> : null}
              <span className="section-heading-serif">{serifWord}</span>
              {section.headingSuffix ? (
                <span>{` ${section.headingSuffix}`}</span>
              ) : null}
            </span>
          </h2>
          {subtitleText ? (
            <p className="section-description mx-auto mt-3 max-w-[620px] text-center">
              {renderMultilineText(subtitleText)}
            </p>
          ) : null}
        </div>
      </div>

      {/* Interactive Drag & Auto-Scrolling Solutions Marquee */}
      <InteractiveSolutionsMarquee items={incomingItems} speed={speed} direction={direction} />
    </section>
  );
}
