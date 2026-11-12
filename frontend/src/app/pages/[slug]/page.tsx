import { Suspense } from 'react';
import { ResolvedPageView } from '@/components/ResolvedPageView';

export default function CmsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-6xl space-y-6 px-6 py-12 animate-pulse">
          <div className="h-72 rounded-3xl bg-zinc-200" />
          <div className="h-48 rounded-2xl bg-zinc-100" />
        </div>
      }
    >
      <ResolvedPageView params={params} />
    </Suspense>
  );
}
