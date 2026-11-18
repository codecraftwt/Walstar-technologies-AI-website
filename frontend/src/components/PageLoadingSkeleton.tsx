export function PageLoadingSkeleton() {
  return (
    <div
      className="walstar-page min-h-screen bg-[#F3F4F6]"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      {/* Top progress bar */}
      <div className="fixed inset-x-0 top-0 z-50 h-1 overflow-hidden bg-transparent">
        <div className="h-full w-1/2 animate-pulse bg-gradient-to-r from-[#0073DE] via-[#41A3FF] to-[#E96D01]" />
      </div>

      {/* Topbar placeholder */}
      <div className="h-10 w-full bg-[#F3F4F6]" />

      {/* Branded dark navy hero skeleton */}
      <div className="mx-4 sm:mx-6 md:mx-8 overflow-hidden rounded-[28px] bg-[#001930] px-6 py-10 sm:px-10 sm:py-16">
        <div className="mx-auto flex max-w-6xl items-center justify-between pb-12">
          <div className="h-8 w-36 animate-pulse rounded-lg bg-white/15" />
          <div className="hidden items-center gap-6 md:flex">
            <div className="h-4 w-16 animate-pulse rounded bg-white/15" />
            <div className="h-4 w-20 animate-pulse rounded bg-white/15" />
            <div className="h-4 w-16 animate-pulse rounded bg-white/15" />
            <div className="h-4 w-20 animate-pulse rounded bg-white/15" />
          </div>
          <div className="h-11 w-40 animate-pulse rounded-full bg-[#E96D01]/70" />
        </div>

        <div className="mx-auto flex max-w-3xl flex-col items-center space-y-5 py-8 text-center">
          <div className="h-9 w-48 animate-pulse rounded-full bg-[#143B5F]" />
          <div className="h-12 w-full max-w-2xl animate-pulse rounded-xl bg-white/15" />
          <div className="h-12 w-3/4 max-w-xl animate-pulse rounded-xl bg-[#41A3FF]/25" />
          <div className="h-5 w-2/3 max-w-lg animate-pulse rounded-lg bg-white/10" />
        </div>
      </div>

      {/* Content cards skeleton */}
      <div className="mx-auto max-w-[1606px] space-y-8 px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="h-56 animate-pulse rounded-2xl bg-white shadow-sm" />
          <div className="h-56 animate-pulse rounded-2xl bg-white shadow-sm" />
          <div className="h-56 animate-pulse rounded-2xl bg-white shadow-sm" />
        </div>
      </div>
    </div>
  );
}
