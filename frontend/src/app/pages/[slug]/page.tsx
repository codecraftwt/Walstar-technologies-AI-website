import { Suspense } from 'react';
import { PageLoadingSkeleton } from '@/components/PageLoadingSkeleton';
import { ResolvedPageView } from '@/components/ResolvedPageView';

export default function CmsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<PageLoadingSkeleton />}>
      <ResolvedPageView params={params} />
    </Suspense>
  );
}
