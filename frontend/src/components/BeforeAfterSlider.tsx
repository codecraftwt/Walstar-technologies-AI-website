'use client';

import Image from 'next/image';
import {
  useCallback,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import { getStrapiMediaUrl } from '@/lib/strapi';
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
  variant: 'before' | 'after'
) {
  const hasCaption = Boolean(caption?.trim());
  const subtitle = hasCaption ? title : null;
  const primaryLine = hasCaption ? caption : title;

  return (
    <div className={`ba-copy ba-copy--${variant}`}>
      {eyebrow ? (
        <span className={`ba-pill ba-pill--${variant}`}>{eyebrow}</span>
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

  const [isDragging, setIsDragging] = useState(false);
  const [ariaValue, setAriaValue] = useState(INITIAL_PERCENT);

  const beforeUrl = getStrapiMediaUrl(section.beforeImage?.url) || '/images/before-after/before.webp';
  const afterUrl = getStrapiMediaUrl(section.afterImage?.url) || '/images/before-after/after.webp';

  const applyPosition = useCallback((nextPercent: number, syncAria = false) => {
    const clamped = clampPercent(nextPercent);
    posRef.current = clamped;
    stageRef.current?.style.setProperty('--ba-pos', `${clamped.toFixed(3)}%`);
    if (syncAria) {
      setAriaValue(Math.round(clamped));
    }
  }, []);

  const handlePointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    const stageEl = stageRef.current;
    if (!stageEl) return;

    isDraggingRef.current = true;
    setIsDragging(true);

    stageEl.setPointerCapture(e.pointerId);
    const nextPos = getClientPercent(
      e.clientX,
      stageEl.getBoundingClientRect()
    );
    applyPosition(nextPos, true);
  };

  const handlePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !stageRef.current) return;
    const nextPos = getClientPercent(
      e.clientX,
      stageRef.current.getBoundingClientRect()
    );
    applyPosition(nextPos, false);
  };

  const finishDrag = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    setAriaValue(Math.round(posRef.current));

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
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

  return (
    <section className="ba" aria-label="Before and after comparison">
      <div
        ref={stageRef}
        className={isDragging ? 'ba-stage is-dragging' : 'ba-stage'}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
      >
        <div className="ba-pane ba-pane--after">
          {afterUrl ? (
            <Image
              src={afterUrl}
              alt={
                section.afterImage?.alternativeText ||
                section.afterTitle ||
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
                section.beforeTitle ||
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
            section.beforeEyebrow,
            section.beforeTitle,
            section.beforeCaption,
            'before'
          )}
          {renderSideCopy(
            section.afterEyebrow,
            section.afterTitle,
            section.afterCaption,
            'after'
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
