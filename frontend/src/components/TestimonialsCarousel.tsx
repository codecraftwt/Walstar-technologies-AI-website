'use client';

import Image from 'next/image';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TransitionEvent,
} from 'react';
import { getStrapiMediaUrl } from '@/lib/strapi';
import type { TestimonialItem } from '@/types/strapi';

interface TestimonialsCarouselProps {
  tag: string;
  headingPrefix: string;
  headingSerif: string;
  testimonials: TestimonialItem[];
}

const SLIDE_OFFSETS = [-2, -1, 0, 1, 2] as const;
const HOLD_DURATION_MS = 2200;
const TRANSITION_FALLBACK_MS = 780;

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || '')
    .join('');
}

function wrapIndex(index: number, total: number): number {
  if (total <= 0) return 0;
  return ((index % total) + total) % total;
}

function QuoteMarkSvg() {
  return (
    <svg
      className="t-quote-mark"
      width="44"
      height="34"
      viewBox="0 0 44 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M18.4 3.5C11.9 6.7 8.4 11.4 8 17.5C9.2 16.9 10.6 16.6 12.1 16.6C16.2 16.6 19.3 19.7 19.3 24C19.3 28.4 15.8 32 11.2 32C5.6 32 1.8 27.6 1.8 20.8C1.8 11.7 6.8 4.9 16.1 0.8L18.4 3.5ZM41.2 3.5C34.7 6.7 31.2 11.4 30.8 17.5C32 16.9 33.4 16.6 34.9 16.6C39 16.6 42.1 19.7 42.1 24C42.1 28.4 38.6 32 34 32C28.4 32 24.6 27.6 24.6 20.8C24.6 11.7 29.6 4.9 38.9 0.8L41.2 3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  const count = Math.max(1, Math.min(5, rating || 5));

  return (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, idx) => (
        <svg
          key={idx}
          className="t-star"
          width="23"
          height="23"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M10 1.6L12.48 6.62L18.02 7.43L14.01 11.34L14.96 16.87L10 14.26L5.04 16.87L5.99 11.34L1.98 7.43L7.52 6.62L10 1.6Z" />
        </svg>
      ))}
    </div>
  );
}

function getTestimonialFallbackAvatar(authorName?: string): string | null {
  if (!authorName) return null;
  const s = authorName.toLowerCase();
  if (s.includes('nathan')) return '/images/testimonials/nathan-fowler.png';
  if (s.includes('fred')) return '/images/testimonials/fred-fuller.png';
  if (s.includes('derek')) return '/images/testimonials/derek-campbell.png';
  return null;
}

function TestimonialCard({
  item,
  isCenter,
}: {
  item: TestimonialItem;
  isCenter: boolean;
}) {
  const avatarUrl = getStrapiMediaUrl(item.avatar?.url) || getTestimonialFallbackAvatar(item.authorName);

  return (
    <article className={isCenter ? 't mid' : 't'}>
      <span className="av">
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt={item.authorName}
            fill
            sizes="98px"
            className="object-cover"
          />
        ) : (
          getInitials(item.authorName)
        )}
      </span>

      <QuoteMarkSvg />

      <div className="t-body">
        <p>{item.quote}</p>
      </div>

      <div className="t-meta">
        <span className="t-divider" aria-hidden="true" />
        <h5>{item.authorName}</h5>
        {item.companyName ? <div className="co">{item.companyName}</div> : null}
        <StarRating rating={item.rating || 5} />
      </div>
    </article>
  );
}

export function TestimonialsCarousel({
  tag,
  headingPrefix,
  headingSerif,
  testimonials,
}: TestimonialsCarouselProps) {
  const count = testimonials.length;
  const highlightedIdx = testimonials.findIndex((item) => item.isHighlighted);
  const initialIndex =
    highlightedIdx >= 0 ? highlightedIdx : count >= 3 ? 1 : 0;

  const [cursor, setCursor] = useState(initialIndex);
  const [stepDir, setStepDir] = useState<0 | 1 | -1>(0);
  const [dragOffset, setDragOffset] = useState<number | null>(null);
  const [isSnapping, setIsSnapping] = useState(false);
  const [userInteractedAt, setUserInteractedAt] = useState(0);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const fallbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const isHorizontalSwipeRef = useRef<boolean | null>(null);
  const currentDragRef = useRef<number>(0);

  const isMouseDownRef = useRef(false);
  const mouseStartRef = useRef<{ x: number; y: number } | null>(null);

  const commitStep = useCallback((direction: 1 | -1) => {
    if (fallbackTimerRef.current) {
      clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }
    setCursor((prev) => prev + direction);
    setStepDir(0);
  }, []);

  const triggerStep = useCallback(
    (direction: 1 | -1) => {
      if (count <= 1 || stepDir !== 0) return;

      if (
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        setCursor((prev) => prev + direction);
        return;
      }

      setStepDir(direction);
      if (fallbackTimerRef.current) {
        clearTimeout(fallbackTimerRef.current);
      }
      fallbackTimerRef.current = setTimeout(() => {
        commitStep(direction);
      }, TRANSITION_FALLBACK_MS);
    },
    [commitStep, count, stepDir]
  );

  useEffect(() => {
    return () => {
      if (fallbackTimerRef.current) {
        clearTimeout(fallbackTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (count <= 1 || stepDir !== 0 || dragOffset !== null) return;
    const isRecentlyInteracted = Date.now() - userInteractedAt < 4500;
    const delay = isRecentlyInteracted ? 4500 : HOLD_DURATION_MS;
    const holdTimer = setTimeout(() => {
      triggerStep(1);
    }, delay);
    return () => clearTimeout(holdTimer);
  }, [count, cursor, dragOffset, stepDir, triggerStep, userInteractedAt]);

  const handleTrackTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
    if (
      e.target === trackRef.current &&
      e.propertyName === 'transform' &&
      stepDir !== 0
    ) {
      commitStep(stepDir);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (stepDir !== 0 || count <= 1) return;
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY, time: Date.now() };
    isHorizontalSwipeRef.current = null;
    currentDragRef.current = 0;
    setIsSnapping(false);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStartRef.current || stepDir !== 0 || count <= 1) return;
    const touch = e.touches[0];
    const dx = touch.clientX - touchStartRef.current.x;
    const dy = touch.clientY - touchStartRef.current.y;

    if (isHorizontalSwipeRef.current === null) {
      if (Math.abs(dx) > 6 || Math.abs(dy) > 6) {
        isHorizontalSwipeRef.current = Math.abs(dx) >= Math.abs(dy);
      }
    }

    if (isHorizontalSwipeRef.current === true) {
      currentDragRef.current = dx;
      setDragOffset(dx);
    }
  };

  const handleTouchEnd = () => {
    if (touchStartRef.current && isHorizontalSwipeRef.current === true) {
      const dx = currentDragRef.current;
      const threshold = 40;
      setUserInteractedAt(Date.now());

      if (dx < -threshold) {
        setDragOffset(null);
        triggerStep(1);
      } else if (dx > threshold) {
        setDragOffset(null);
        triggerStep(-1);
      } else {
        setIsSnapping(true);
        setDragOffset(null);
        setTimeout(() => setIsSnapping(false), 280);
      }
    }
    touchStartRef.current = null;
    isHorizontalSwipeRef.current = null;
    currentDragRef.current = 0;
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0 || stepDir !== 0 || count <= 1) return;
    isMouseDownRef.current = true;
    mouseStartRef.current = { x: e.clientX, y: e.clientY };
    currentDragRef.current = 0;
    setIsSnapping(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDownRef.current || !mouseStartRef.current || stepDir !== 0 || count <= 1) return;
    const dx = e.clientX - mouseStartRef.current.x;
    if (Math.abs(dx) > 4) {
      currentDragRef.current = dx;
      setDragOffset(dx);
    }
  };

  const handleMouseUp = () => {
    if (isMouseDownRef.current) {
      isMouseDownRef.current = false;
      const dx = currentDragRef.current;
      const threshold = 40;
      setUserInteractedAt(Date.now());

      if (dx < -threshold) {
        setDragOffset(null);
        triggerStep(1);
      } else if (dx > threshold) {
        setDragOffset(null);
        triggerStep(-1);
      } else if (dx !== 0) {
        setIsSnapping(true);
        setDragOffset(null);
        setTimeout(() => setIsSnapping(false), 280);
      }
      currentDragRef.current = 0;
      mouseStartRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (isMouseDownRef.current) {
      handleMouseUp();
    }
  };

  const activeDotIndex = wrapIndex(cursor + stepDir, count);

  const handleDotClick = (targetIdx: number) => {
    if (count <= 1 || stepDir !== 0) return;
    setUserInteractedAt(Date.now());
    const currentMod = wrapIndex(cursor, count);
    if (targetIdx === currentMod) return;

    const forwardDelta = wrapIndex(targetIdx - currentMod, count);
    const backwardDelta = wrapIndex(currentMod - targetIdx, count);

    if (forwardDelta === 1) {
      triggerStep(1);
    } else if (backwardDelta === 1) {
      triggerStep(-1);
    } else {
      setCursor((prev) => prev + forwardDelta);
    }
  };

  if (count === 0) {
    return null;
  }

  if (count === 1) {
    return (
      <section className="tm">
        <div className="head">
          {tag ? <span className="pill">{tag}</span> : null}
          <h2>
            {headingPrefix} <span className="serif">{headingSerif}</span>
          </h2>
        </div>
        <div className="t-single">
          <TestimonialCard item={testimonials[0]} isCenter />
        </div>
      </section>
    );
  }

  const activeVirtualIndex = cursor + stepDir;

  return (
    <section className="tm">
      <div className="head">
        {tag ? <span className="pill">{tag}</span> : null}
        <h2>
          {headingPrefix} <span className="serif">{headingSerif}</span>
        </h2>
      </div>

      <div
        className={`tviewport${dragOffset !== null ? ' is-dragging' : ''}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={trackRef}
          className={`ttrack${stepDir === 1 ? ' is-next' : stepDir === -1 ? ' is-prev' : ''}${isSnapping ? ' is-snapping' : ''}`}
          style={
            dragOffset !== null && stepDir === 0
              ? {
                  transform: `translate3d(calc(var(--t-rest) + ${dragOffset}px), 0, 0)`,
                  transition: 'none',
                }
              : undefined
          }
          onTransitionEnd={handleTrackTransitionEnd}
        >
          {SLIDE_OFFSETS.map((offset) => {
            const virtualIndex = cursor + offset;
            const item = testimonials[wrapIndex(virtualIndex, count)];
            const isCenter = virtualIndex === activeVirtualIndex;

            return (
              <div className="tslot" key={virtualIndex}>
                <TestimonialCard item={item} isCenter={isCenter} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="dots" role="tablist" aria-label="Testimonials">
        {testimonials.map((item, idx) => (
          <button
            key={item.documentId || `${item.authorName}-${idx}`}
            type="button"
            role="tab"
            aria-label={`Highlight testimonial from ${item.authorName}`}
            aria-selected={idx === activeDotIndex}
            className={idx === activeDotIndex ? 'active' : undefined}
            onClick={() => handleDotClick(idx)}
          />
        ))}
      </div>
    </section>
  );
}
