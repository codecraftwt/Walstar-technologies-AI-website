import { Suspense } from 'react';
import { CmsStatusPanel } from '@/components/CmsStatusPanel';
import { DetailShell } from '@/components/DetailShell';

function LoadingFallback() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-48 rounded-2xl bg-zinc-200" />
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="h-24 rounded-xl bg-zinc-200" />
        <div className="h-24 rounded-xl bg-zinc-200" />
        <div className="h-24 rounded-xl bg-zinc-200" />
      </div>
    </div>
  );
}

export default function StatusPage() {
  return (
    <DetailShell>
      <Suspense fallback={<LoadingFallback />}>
        <CmsStatusPanel />
      </Suspense>
    </DetailShell>
  );
}
