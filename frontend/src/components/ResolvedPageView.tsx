import { notFound } from 'next/navigation';
import { DetailShell } from '@/components/DetailShell';
import { PageSectionsRenderer } from '@/components/PageSectionsRenderer';
import { getResolvedPageBySlug } from '@/lib/strapi';

export async function ResolvedPageView({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const { data, source, error } = await getResolvedPageBySlug(decodedSlug);

  if (error) {
    return (
      <DetailShell>
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-900">
          <p className="font-semibold">Unable to reach Strapi CMS</p>
          <p className="mt-1">{error}</p>
        </div>
      </DetailShell>
    );
  }

  if (!data) {
    notFound();
  }

  return <PageSectionsRenderer data={data} source={source} />;
}
