'use client';

import { useState, useEffect, useRef } from 'react';
import {
  cleanPill,
  renderMultilineText,
} from '@/components/common/SectionPrimitives';
import type { JourneyStatsSection } from '@/types/strapi';

function parseStatTarget(value: string): {
  prefix: string;
  suffix: string;
  targetNum: number;
  isK: boolean;
  isInfinity: boolean;
} {
  const clean = value.trim();
  if (clean === '∞' || clean.includes('∞')) {
    return { prefix: '', suffix: '', targetNum: 100, isK: false, isInfinity: true };
  }

  // Check for K: e.g. "1K+", "10K+", "1.5K+"
  const kMatch = clean.match(/^(\D*)(\d+(?:\.\d+)?)\s*k(.*)$/i);
  if (kMatch) {
    return {
      prefix: kMatch[1] || '',
      suffix: `K${kMatch[3] || ''}`,
      targetNum: parseFloat(kMatch[2]) * 1000,
      isK: true,
      isInfinity: false,
    };
  }

  // Normal number: e.g. "12+", "5+", "99.9%"
  const numMatch = clean.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  if (numMatch) {
    return {
      prefix: numMatch[1] || '',
      suffix: numMatch[3] || '',
      targetNum: parseFloat(numMatch[2]),
      isK: false,
      isInfinity: false,
    };
  }

  return { prefix: '', suffix: clean, targetNum: 0, isK: false, isInfinity: false };
}

function AnimatedStatValue({
  value,
  trigger,
  index = 0,
}: {
  value: string;
  trigger: boolean;
  index?: number;
}) {
  const [displayValue, setDisplayValue] = useState(trigger ? value : '0');
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!trigger) {
      setDisplayValue('0');
      setHasStarted(false);
      return;
    }

    const { prefix, suffix, targetNum, isK, isInfinity } = parseStatTarget(value);

    // Stagger start for each stat item
    const delayTimer = setTimeout(() => {
      setHasStarted(true);

      if (isInfinity) {
        // Numeric rolling sequence before resolving to infinity
        const frames = ['0', '8', '88', '999', '∞'];
        let frameIdx = 0;
        const interval = setInterval(() => {
          frameIdx++;
          if (frameIdx < frames.length) {
            setDisplayValue(frames[frameIdx]);
          } else {
            setDisplayValue('∞');
            clearInterval(interval);
          }
        }, 300);
        return () => clearInterval(interval);
      }

      let startTimestamp: number | null = null;
      const duration = 2200; // 2.2s smooth visible count up
      let rafId: number;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        const progress = Math.min(elapsed / duration, 1);
        // Quartic ease-out: 1 - (1 - progress)^4
        const ease = 1 - Math.pow(1 - progress, 4);

        if (isK) {
          const currentCount = Math.round(targetNum * ease);
          if (progress >= 0.98) {
            setDisplayValue(value);
          } else if (currentCount >= 1000) {
            const kVal = (currentCount / 1000).toFixed(1).replace(/\.0$/, '');
            setDisplayValue(`${prefix}${kVal}${suffix}`);
          } else {
            // Rapid rolling numbers before settling to 1K+
            const rawSuffix = suffix.replace(/^K/i, '');
            setDisplayValue(`${prefix}${currentCount}${rawSuffix}`);
          }
        } else {
          const isInt = !value.includes('.');
          const current = targetNum * ease;
          const formattedNum = isInt ? Math.round(current) : current.toFixed(1);
          setDisplayValue(`${prefix}${formattedNum}${suffix}`);
        }

        if (progress < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          setDisplayValue(value);
        }
      };

      rafId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(rafId);
    }, index * 160);

    return () => clearTimeout(delayTimer);
  }, [value, trigger, index]);

  return (
    <b
      className={`inline-block text-3xl font-bold tracking-tight tabular-nums transition-colors duration-300 md:text-4xl ${
        hasStarted ? 'text-[#20232a]' : 'text-[#6c7587]'
      }`}
    >
      {displayValue}
    </b>
  );
}

export function JourneyStatsBlock({ section }: { section: JourneyStatsSection }) {
  const milestones = section.milestones ?? [];
  const stats = section.stats ?? [];
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const rawPill = section.pill || 'The Walstar Way';
  const pillText = cleanPill(rawPill) || 'The Walstar Way';

  const wayPrefix = section.headingPrefix?.trim() || 'From first idea to';
  const waySerif = section.headingSerif?.trim() || 'lasting';
  const rawSuffix = section.headingSuffix?.trim();
  const waySuffix =
    rawSuffix &&
    rawSuffix.toLowerCase() !== waySerif.toLowerCase() &&
    !waySerif.toLowerCase().endsWith(rawSuffix.toLowerCase())
      ? rawSuffix
      : null;

  return (
    <section className="w-full bg-[#f5f6f8] py-12 md:py-16" id="journey-stats">
      <div className="section-container-80 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:gap-14">
        <div className="flex flex-col items-start gap-3">
          <span className="section-pill">{pillText}</span>
          <h2 className="section-heading">
            <span className="block">
              <span>{wayPrefix} </span>
              <span className="section-heading-serif">{waySerif}</span>
            </span>
            {waySuffix ? (
              <span className="block">
                <span className="section-heading-serif">{waySuffix}</span>
              </span>
            ) : null}
          </h2>
          {section.description ? (
            <p className="section-description mt-1">
              {renderMultilineText(section.description)}
            </p>
          ) : null}
        </div>

        {milestones.length > 0 ? (
          <div className="relative flex flex-col gap-6 pl-7 before:absolute before:bottom-2 before:left-[9px] before:top-2 before:w-px before:bg-[#d8dde6]">
            {milestones.map((milestone, idx) => (
              <div
                key={`${milestone.era}-${milestone.id ?? idx}`}
                className="relative flex flex-col gap-1.5 rounded-xl bg-white p-5 shadow-sm"
              >
                <span
                  className="absolute -left-7 top-6 flex h-5 w-5 items-center justify-center"
                  aria-hidden="true"
                >
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                      milestone.isCurrent
                        ? 'border-[#364e9c] bg-[#364e9c]/15'
                        : 'border-[#cbd3e1] bg-white'
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        milestone.isCurrent ? 'bg-[#364e9c]' : 'bg-[#9aa3b2]'
                      }`}
                    />
                  </span>
                </span>
                <small className="text-xs font-semibold uppercase tracking-wider text-[#364e9c]">
                  {milestone.era}
                </small>
                <h4 className="text-base font-bold text-[#20232a] md:text-lg">
                  {milestone.title}
                </h4>
                <p className="text-sm leading-relaxed text-[#5c6473]">
                  {renderMultilineText(milestone.description)}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {stats.length > 0 ? (
        <div
          className="section-container-80 mt-10 grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-4 md:gap-6 md:p-8"
          ref={statsRef}
        >
          {stats.map((stat, idx) => (
            <div
              key={`${stat.value}-${stat.id ?? idx}`}
              className={`flex flex-col items-center justify-center gap-1.5 text-center ${
                idx !== 0 ? 'md:border-l md:border-gray-100' : ''
              }`}
            >
              <AnimatedStatValue value={stat.value} trigger={hasAnimated} index={idx} />
              <span className="whitespace-pre-line text-xs font-medium leading-snug text-[#5c6473] md:text-sm">
                {renderMultilineText(stat.label)}
              </span>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
