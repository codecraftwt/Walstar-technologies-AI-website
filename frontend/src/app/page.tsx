import { Suspense } from 'react';
import { PageLoadingSkeleton } from '@/components/common/PageLoadingSkeleton';
import { WalstarLanding } from '@/components/home/WalstarLanding';
import { getLandingData } from '@/lib/strapi';

async function LandingContent() {
  const { data, source } = await getLandingData();
  return <WalstarLanding data={data} source={source} />;
}

export default function HomePage() {
  return (
    <Suspense fallback={<PageLoadingSkeleton />}>
      <LandingContent />
    </Suspense>
  );
}
