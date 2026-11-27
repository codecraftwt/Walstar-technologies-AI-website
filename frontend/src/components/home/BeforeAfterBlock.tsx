import { BeforeAfterSlider } from '@/components/common/BeforeAfterSlider';
import type { BeforeAfterSection } from '@/types/strapi';

export function BeforeAfterBlock({ section }: { section: BeforeAfterSection }) {
  return <BeforeAfterSlider section={section} />;
}
