import Link from 'next/link';
import { Suspense, type ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import { WalstarFooter } from '@/components/WalstarFooter';
import { DEFAULT_FOOTER, DEFAULT_NAVBAR } from '@/lib/default-landing';
import { getActiveFooterResult, getActiveNavbar } from '@/lib/strapi';

interface DetailShellProps {
  children: ReactNode;
  backHref?: string;
  backLabel?: string;
}

async function DynamicDetailNavbar() {
  const navbar = await getActiveNavbar();
  return <Navbar data={navbar} />;
}

async function DynamicDetailFooter() {
  const { data, source } = await getActiveFooterResult();
  return <WalstarFooter footer={data} source={source} />;
}

export function DetailShell({
  children,
  backHref = '/',
  backLabel = '← Back to Walstar Home',
}: DetailShellProps) {
  return (
    <div className="min-h-screen bg-[#f3f5f9] text-[#12123a]">
      <header className="relative z-20 bg-[#0e0f3a] text-white">
        <div className="mx-auto max-w-[1180px]">
          <Suspense fallback={<Navbar data={DEFAULT_NAVBAR} />}>
            <DynamicDetailNavbar />
          </Suspense>
        </div>
      </header>

      <main className="mx-auto max-w-4xl space-y-6 px-6 py-12">
        <Link
          href={backHref}
          className="inline-flex items-center text-sm font-medium text-[#2f80ff] hover:underline"
        >
          {backLabel}
        </Link>
        {children}
      </main>

      <Suspense
        fallback={<WalstarFooter footer={DEFAULT_FOOTER} source="fallback" />}
      >
        <DynamicDetailFooter />
      </Suspense>
    </div>
  );
}
