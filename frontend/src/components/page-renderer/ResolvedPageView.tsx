import { notFound, redirect } from 'next/navigation';
import { DetailShell } from '@/components/common/DetailShell';
import { PageSectionsRenderer } from '@/components/page-renderer/PageSectionsRenderer';
import { getResolvedPageBySlug } from '@/lib/strapi';

const SERVICE_CANONICAL_SLUGS: Record<string, string> = {
  'service-1': 'ai-solutions-business-automation',
  'ai-solutions-automation': 'ai-solutions-business-automation',
  'ai-solutions-and-automation': 'ai-solutions-business-automation',
  'ai-solutions': 'ai-solutions-business-automation',
  'ai-solutions-business-automation': 'ai-solutions-business-automation',
  'service-2': 'custom-software-development',
  'custom-software': 'custom-software-development',
  'custom-software-development': 'custom-software-development',
  'service-3': 'digital-marketing-performance-growth',
  'digital-marketing': 'digital-marketing-performance-growth',
  'digital-marketing-performance-growth': 'digital-marketing-performance-growth',
  'service-4': 'web-saas-product-development',
  'web-saas': 'web-saas-product-development',
  'web-saas-product': 'web-saas-product-development',
  'web-saas-product-development': 'web-saas-product-development',
  'service-5': 'mobile-app-development',
  'mobile-app': 'mobile-app-development',
  'mobile-app-development': 'mobile-app-development',
};

export async function ResolvedPageView({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug).trim();

  // If a service page is requested at root /[slug], redirect cleanly to /services/[slug]
  if (SERVICE_CANONICAL_SLUGS[decodedSlug]) {
    redirect(`/services/${encodeURIComponent(SERVICE_CANONICAL_SLUGS[decodedSlug])}`);
  }

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

  // If the resolved page is a service page, route to /services/[slug]
  if (data.page.pageType === 'service') {
    redirect(`/services/${encodeURIComponent(data.page.slug)}`);
  }

  return (
    <PageSectionsRenderer
      data={data}
      source={source}
      currentPath={`/${encodeURIComponent(decodedSlug)}`}
    />
  );
}
