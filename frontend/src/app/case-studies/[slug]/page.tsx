import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { DetailShell } from '@/components/common/DetailShell';
import { WalstarButton } from '@/components/common/WalstarButton';
import { getCaseStudyBySlug, getStrapiMediaUrl } from '@/lib/strapi';

async function CaseStudyContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(decodeURIComponent(slug));

  if (!caseStudy) {
    notFound();
  }

  const fallbackCover = '/images/placeholder.png';
  const coverUrl = getStrapiMediaUrl(caseStudy.coverImage?.url) || fallbackCover;

  return (
    <article className="overflow-hidden rounded-2xl border border-[#e3e8f2] bg-white shadow-sm">
      <div
        className="relative flex h-60 items-end p-8 text-white"
        style={{
          background:
            caseStudy.themeVariant === 'b'
              ? 'linear-gradient(180deg,transparent 30%,rgba(10,10,30,.85)),linear-gradient(120deg,#324a8f,#9fb6e8 55%,#e0cfc4)'
              : 'linear-gradient(180deg,transparent 30%,rgba(10,10,30,.85)),linear-gradient(120deg,#c98a5a,#e9c7a4 50%,#7a5a45)',
        }}
      >
        {coverUrl ? (
          <Image
            src={coverUrl}
            alt={caseStudy.coverImage?.alternativeText || caseStudy.title}
            fill
            sizes="100vw"
            className="-z-10 object-cover brightness-75"
          />
        ) : null}
        <div>
          <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs">
            {caseStudy.category}
          </span>
          <h1 className="mt-2 text-3xl font-semibold">{caseStudy.title}</h1>
        </div>
      </div>
      <div className="space-y-6 p-8">
        <div className="grid gap-4 rounded-xl bg-[#f3f5f9] p-4 sm:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-[#5d6280]">
              {caseStudy.metaOneLabel}
            </p>
            <p className="font-semibold text-[#12123a]">{caseStudy.metaOneValue}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-[#5d6280]">
              {caseStudy.metaTwoLabel}
            </p>
            <p className="font-semibold text-[#12123a]">{caseStudy.metaTwoValue}</p>
          </div>
        </div>
        {caseStudy.summary ? (
          <p className="text-base font-medium text-[#12123a]">{caseStudy.summary}</p>
        ) : null}
        {caseStudy.content ? (
          <div className="whitespace-pre-wrap leading-relaxed text-[#5d6280]">
            {caseStudy.content}
          </div>
        ) : null}
        <WalstarButton variant="blue" href="/#footer-consultation">
          Discuss a Similar Project
        </WalstarButton>
      </div>
    </article>
  );
}

export default function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <DetailShell backHref="/#case" backLabel="← Back to Case Studies">
      <Suspense fallback={<div className="h-72 animate-pulse rounded-2xl bg-zinc-200" />}>
        <CaseStudyContent params={params} />
      </Suspense>
    </DetailShell>
  );
}
