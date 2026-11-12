'use client';

import Image from 'next/image';
import { useState } from 'react';
import { getStrapiMediaUrl } from '@/lib/strapi';
import type { TestimonialItem } from '@/types/strapi';

interface TestimonialsCarouselProps {
  tag: string;
  headingPrefix: string;
  headingSerif: string;
  testimonials: TestimonialItem[];
}

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || '')
    .join('');
}

export function TestimonialsCarousel({
  tag,
  headingPrefix,
  headingSerif,
  testimonials,
}: TestimonialsCarouselProps) {
  const defaultHighlightedIndex = Math.max(
    0,
    testimonials.findIndex((item) => item.isHighlighted)
  );
  const [activeIndex, setActiveIndex] = useState(
    testimonials.length >= 3 && defaultHighlightedIndex === -1
      ? 1
      : defaultHighlightedIndex
  );

  const visibleItems =
    testimonials.length <= 3
      ? testimonials.map((item, idx) => ({ item, originalIndex: idx }))
      : [0, 1, 2].map((offset) => {
          const idx = (activeIndex - 1 + offset + testimonials.length) % testimonials.length;
          return { item: testimonials[idx], originalIndex: idx };
        });

  return (
    <section className="tm">
      <div className="wrap center">
        <span className="tag">{tag}</span>
        <h2>
          {headingPrefix} <span className="serif">{headingSerif}</span>
        </h2>

        <div className="tgrid">
          {visibleItems.map(({ item, originalIndex }, slotIndex) => {
            const isCenter =
              testimonials.length <= 3
                ? originalIndex === activeIndex
                : slotIndex === 1;
            const avatarUrl = getStrapiMediaUrl(item.avatar?.url);
            const stars = '★'.repeat(Math.max(1, Math.min(5, item.rating || 5)));

            return (
              <article
                key={item.documentId || item.authorName}
                className={isCenter ? 't mid' : 't'}
              >
                <span className="av">
                  {avatarUrl ? (
                    <Image
                      src={avatarUrl}
                      alt={item.authorName}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  ) : (
                    getInitials(item.authorName)
                  )}
                </span>
                <h5>{item.authorName}</h5>
                <p>{item.quote}</p>
                <div className="co">{item.companyName}</div>
                <div className="stars" aria-label={`${item.rating || 5} out of 5 stars`}>
                  {stars}
                </div>
              </article>
            );
          })}
        </div>

        {testimonials.length > 1 ? (
          <div className="dots" role="tablist" aria-label="Testimonials">
            {testimonials.map((item, idx) => (
              <button
                key={item.documentId || item.authorName}
                type="button"
                role="tab"
                aria-label={`Highlight testimonial from ${item.authorName}`}
                aria-selected={idx === activeIndex}
                className={idx === activeIndex ? 'active' : undefined}
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
