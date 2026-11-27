import type { Metadata } from 'next';
import { Suspense } from 'react';
import { PageLoadingSkeleton } from '@/components/common/PageLoadingSkeleton';
import { ServicesScreen } from '@/screens/services/ServicesScreen';
import { getResolvedPageBySlug } from '@/lib/strapi';

export const metadata: Metadata = {
  title: 'Our Services | Walstar Technologies',
  description:
    'AI, digital marketing, software, web, mobile, ecommerce, cloud, security and design services from Walstar Technologies.',
};

async function ServicesOverviewContent() {
  const { data, source } = await getResolvedPageBySlug('services');

  if (!data) {
    return null;
  }

  return (
    <ServicesScreen
      data={data}
      source={source}
      currentPath="/services"
    />
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<PageLoadingSkeleton />}>
      <ServicesOverviewContent />
    </Suspense>
  );
}
