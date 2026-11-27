'use client';

import { useEffect, useRef, useState } from 'react';

function parseStatValue(raw: string): {
  target: number;
  minDigits: number;
  prefix: string;
  suffix: string;
} | null {
  const match = raw.trim().match(/^([^\d]*)(\d+)(.*)$/);
  if (!match) return null;
  const [, prefix, digits, suffix] = match;
  return {
    target: Number.parseInt(digits, 10),
    minDigits: digits.length,
    prefix,
    suffix,
  };
}

export function AnimatedStatNumber({ value }: { value: string }) {
  const parsed = parseStatValue(value);
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!parsed || hasAnimatedRef.current) return;
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting) || hasAnimatedRef.current) {
          return;
        }
        hasAnimatedRef.current = true;
        observer.disconnect();

        const duration = 1200;
        let rafId = 0;
        const timeoutId = setTimeout(() => {
          const start = performance.now();

          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(parsed.target * eased);
            const formatted = String(current).padStart(parsed.minDigits, '0');
            setDisplay(`${parsed.prefix}${formatted}${parsed.suffix}`);
            if (progress < 1) {
              rafId = requestAnimationFrame(step);
            } else {
              setDisplay(value);
            }
          };

          rafId = requestAnimationFrame(step);
        }, 200);
        void rafId;
        void timeoutId;
      },
      { threshold: 0.85, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [parsed, value]);

  return (
    <span
      ref={ref}
      className="text-xl font-bold tracking-tight text-[#20232a] md:text-2xl"
    >
      {display}
    </span>
  );
}
