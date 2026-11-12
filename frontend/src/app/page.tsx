import { Suspense } from 'react';
import { WalstarLanding } from '@/components/WalstarLanding';
import { DEFAULT_LANDING_DATA } from '@/lib/default-landing';
import { getLandingData } from '@/lib/strapi';

async function LandingContent() {
  const { data, source } = await getLandingData();
  return <WalstarLanding data={data} source={source} />;
}

export default function HomePage() {
  return (
    <Suspense fallback={<WalstarLanding data={DEFAULT_LANDING_DATA} source="fallback" />}>
      <LandingContent />
    </Suspense>
  );
}
