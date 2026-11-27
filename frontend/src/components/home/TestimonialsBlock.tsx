import { TestimonialsCarousel } from '@/components/home/TestimonialsCarousel';
import type { LandingPayload, TestimonialsSection } from '@/types/strapi';

export function TestimonialsBlock({
  section,
  fallbackTestimonials,
}: {
  section: TestimonialsSection;
  fallbackTestimonials: LandingPayload['testimonials'];
}) {
  const testimonials =
    section.showAllTestimonials === false && section.testimonials?.length
      ? section.testimonials
      : section.testimonials?.length
        ? section.testimonials
        : fallbackTestimonials;

  return (
    <TestimonialsCarousel
      tag={section.tag || 'Honest clients'}
      headingPrefix={section.headingPrefix || 'Trusted by'}
      headingSerif={section.headingSerif || 'thousands'}
      description={
        section.description ||
        'Real feedback from businesses across the USA, UK, Australia and India that trust us with their software, AI and digital growth.'
      }
      testimonials={testimonials}
    />
  );
}
