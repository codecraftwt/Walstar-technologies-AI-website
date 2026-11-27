import { Suspense } from 'react';
import { PageLoadingSkeleton } from '@/components/common/PageLoadingSkeleton';
import { HomeScreen } from '@/screens/homepage/HomeScreen';
import { getLandingData } from '@/lib/strapi';

async function LandingContent() {
  const { data, source } = await getLandingData();
  return <HomeScreen data={data} source={source} />;
}

export default function HomePage() {
  return (
    <Suspense fallback={<PageLoadingSkeleton />}>
      <LandingContent />
    </Suspense>
  );
}
