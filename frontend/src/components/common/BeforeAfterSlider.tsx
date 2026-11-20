'use client';

import Image from 'next/image';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import { getStrapiMediaUrl, STRAPI_IMAGE_PLACEHOLDER } from '@/lib/strapi';
import type { BeforeAfterSection } from '@/types/strapi';

const INITIAL_PERCENT = 50;

function clampPercent(value: number, min = 0, max = 100): number {
  return Math.min(max, Math.max(min, value));
}

function getClientPercent(clientX: number, rect: DOMRect): number {
  if (rect.width <= 0) return INITIAL_PERCENT;
  return clampPercent(((clientX - rect.left) / rect.width) * 100);
}

function renderSideCopy(
  eyebrow: string | null | undefined,
  title: string | null | undefined,
  caption: string | null | undefined,
  variant: 'before' | 'after',
  isActive: boolean,
  isHidden: boolean
) {
  const hasCaption = Boolean(caption?.trim());
  const subtitle = hasCaption ? title : null;
  const primaryLine = hasCaption ? caption : title;

  return (
    <div
      className={`ba-copy ba-copy--${variant}${isActive ? ' is-active' : ''}${
        isHidden ? ' is-hidden' : ''
      }`}
      aria-hidden={isHidden}
    >
      {eyebrow ? (
        <span
          className={`ba-pill ba-pill--${variant}${
            isActive ? ' is-active' : ' is-inactive'
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      {subtitle ? <span className="ba-sub">{subtitle}</span> : null}
      {primaryLine ? <strong className="ba-title">{primaryLine}</strong> : null}
    </div>
  );
}

export function BeforeAfterSlider({ section }: { section: BeforeAfterSection }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(INITIAL_PERCENT);
  const isDraggingRef = useRef(false);
  const rafIdRef = useRef<number | null>(null);

  const [position, setPosition] = useState(INITIAL_PERCENT);
  const [isDragging, setIsDragging] = useState(false);
  const [ariaValue, setAriaValue] = useState(INITIAL_PERCENT);

  // Defaults matching the design image if Strapi fields are empty
  const beforeEyebrow = section.beforeEyebrow || 'BEFORE';
  const beforeTitle = section.beforeTitle || 'Your Team Today';
  const beforeCaption = section.beforeCaption || '40 hrs / week of manual work';

  const afterEyebrow = section.afterEyebrow || 'AFTER';
  const afterTitle = section.afterTitle || 'With Walstar AI';
  const afterCaption = section.afterCaption || '85% less manual effort. 05 hrs / week';

  const beforeUrl =
    getStrapiMediaUrl(section.beforeImage?.url) || STRAPI_IMAGE_PLACEHOLDER;
  const afterUrl =
    getStrapiMediaUrl(section.afterImage?.url) || STRAPI_IMAGE_PLACEHOLDER;

  const applyPosition = useCallback((nextPercent: number, syncAria = false) => {
    const clamped = clampPercent(nextPercent);
    posRef.current = clamped;

    if (stageRef.current) {
      stageRef.current.style.setProperty('--ba-pos', `${clamped.toFixed(3)}%`);
    }

    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
    }
    rafIdRef.current = requestAnimationFrame(() => {
      setPosition(clamped);
      if (syncAria) {
        setAriaValue(Math.round(clamped));
      }
    });
  }, []);

  useEffect(() => {
    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  const handleDragMove = useCallback(
    (clientX: number) => {
      if (!isDraggingRef.current || !stageRef.current) return;
      const nextPos = getClientPercent(
        clientX,
        stageRef.current.getBoundingClientRect()
      );
      applyPosition(nextPos, false);
    },
    [applyPosition]
  );

  const handleDragStart = useCallback(
    (clientX: number) => {
      isDraggingRef.current = true;
      setIsDragging(true);
      if (!stageRef.current) return;
      const nextPos = getClientPercent(
        clientX,
        stageRef.current.getBoundingClientRect()
      );
      applyPosition(nextPos, true);
    },
    [applyPosition]
  );

  const handleDragEnd = useCallback(() => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    setAriaValue(Math.round(posRef.current));
  }, []);

  // Global window listeners for seamless dragging across mouse, touch, and pen
  useEffect(() => {
    if (!isDragging) return;

    const onPointerMove = (e: PointerEvent) => {
      handleDragMove(e.clientX);
    };

    const onPointerUp = () => {
      handleDragEnd();
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        if (e.cancelable) {
          e.preventDefault();
        }
        handleDragMove(e.touches[0].clientX);
      }
    };

    const onTouchEnd = () => {
      handleDragEnd();
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('touchcancel', onTouchEnd);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchcancel', onTouchEnd);
    };
  }, [isDragging, handleDragMove, handleDragEnd]);

  const handlePointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    handleDragStart(e.clientX);
    try {
      e.currentTarget.setPointerCapture?.(e.pointerId);
    } catch {
      // Ignore if setPointerCapture is unsupported or fails on mobile
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      handleDragStart(e.touches[0].clientX);
    }
  };

  const handleKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    let nextPos: number | null = null;
    if (e.key === 'ArrowLeft') nextPos = posRef.current - 5;
    else if (e.key === 'ArrowRight') nextPos = posRef.current + 5;
    else if (e.key === 'Home') nextPos = 0;
    else if (e.key === 'End') nextPos = 100;

    if (nextPos === null) return;
    e.preventDefault();
    applyPosition(nextPos, true);
  };

  // Determine active side based on which side has MORE width
  // If pos > 50: Before has more width (> 50%) -> Before is active
  // If pos <= 50: After has more width (>= 50%) -> After is active
  const isBeforeActive = position > 50;
  const isAfterActive = position <= 50;

  // Determine if side should be hidden when slider gets too close to edge
  // When sliding left, Before gets squeezed, wraps, and below 10% fades out
  // When sliding right, After gets squeezed, wraps, and above 90% fades out
  const isBeforeHidden = position < 10;
  const isAfterHidden = position > 90;

  return (
    <section className="ba" aria-label="Before and after comparison">
      <div
        ref={stageRef}
        className={isDragging ? 'ba-stage is-dragging' : 'ba-stage'}
        data-active-side={isBeforeActive ? 'before' : 'after'}
        style={{ '--ba-pos': `${position}%` } as React.CSSProperties}
        onPointerDown={handlePointerDown}
        onTouchStart={handleTouchStart}
      >
        <div className="ba-pane ba-pane--after">
          {afterUrl ? (
            <Image
              src={afterUrl}
              alt={
                section.afterImage?.alternativeText ||
                afterTitle ||
                'After'
              }
              fill
              sizes="(max-width: 900px) 100vw, 98vw"
              className="ba-img"
              draggable={false}
            />
          ) : null}
        </div>

        <div className="ba-pane ba-pane--before">
          {beforeUrl ? (
            <Image
              src={beforeUrl}
              alt={
                section.beforeImage?.alternativeText ||
                beforeTitle ||
                'Before'
              }
              fill
              sizes="(max-width: 900px) 100vw, 98vw"
              className="ba-img"
              draggable={false}
            />
          ) : null}
        </div>

        <div className="ba-scrim" aria-hidden="true" />

        <div className="ba-overlay">
          {renderSideCopy(
            beforeEyebrow,
            beforeTitle,
            beforeCaption,
            'before',
            isBeforeActive,
            isBeforeHidden
          )}
          {renderSideCopy(
            afterEyebrow,
            afterTitle,
            afterCaption,
            'after',
            isAfterActive,
            isAfterHidden
          )}
        </div>

        <div
          className="ba-divider"
          role="slider"
          tabIndex={0}
          aria-label="Comparison slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={ariaValue}
          onKeyDown={handleKeyDown}
        >
          <div className="ba-handle">
            <span className="ba-knob" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M10 8L6 12L10 16M14 8L18 12L14 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="ba-drag-pill">drag to compare</span>
          </div>
        </div>
      </div>
    </section>
  );
}
