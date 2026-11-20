import { Suspense } from 'react';
import { PageLoadingSkeleton } from '@/components/common/PageLoadingSkeleton';
import { ResolvedPageView } from '@/components/page-renderer/ResolvedPageView';


export default function DynamicPageRoute({
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
