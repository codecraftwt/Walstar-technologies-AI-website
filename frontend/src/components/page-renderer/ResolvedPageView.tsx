import { notFound, redirect } from 'next/navigation';
import { DetailShell } from '@/components/common/DetailShell';
import { PageSectionsRenderer } from '@/components/page-renderer/PageSectionsRenderer';
import { AboutScreen } from '@/screens/about/AboutScreen';
import { ContactScreen } from '@/screens/contact/ContactScreen';
import { HomeScreen } from '@/screens/homepage/HomeScreen';
import { ServicesScreen } from '@/screens/services/ServicesScreen';
import { resolveCanonicalServiceSlug } from '@/lib/cms-routes';
import { getResolvedPageBySlug } from '@/lib/strapi';

export async function ResolvedPageView({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug).trim();

  // If a service page is requested at root /[slug], redirect cleanly to /services/[slug]
  const canonicalServiceSlug = resolveCanonicalServiceSlug(decodedSlug);
  if (canonicalServiceSlug) {
    redirect(`/services/${encodeURIComponent(canonicalServiceSlug)}`);
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

  // If the resolved page is a service detail page, route to /services/[slug]
  if (data.page.pageType === 'service' && data.page.slug !== 'services') {
    redirect(`/services/${encodeURIComponent(data.page.slug)}`);
  }

  const currentPath = `/${encodeURIComponent(decodedSlug)}`;

  if (data.page.isHomepage || data.page.slug === 'home') {
    return <HomeScreen data={data} source={source} />;
  }

  if (data.page.pageType === 'about' || data.page.slug === 'about' || data.page.slug === 'about-us') {
    return <AboutScreen data={data} source={source} currentPath={currentPath} />;
  }

  if (data.page.pageType === 'contact' || data.page.slug === 'contact') {
    return <ContactScreen data={data} source={source} currentPath={currentPath} />;
  }

  if (data.page.pageType === 'service' || data.page.slug === 'services') {
    return <ServicesScreen data={data} source={source} currentPath={currentPath} />;
  }

  return (
    <PageSectionsRenderer
      data={data}
      source={source}
      currentPath={currentPath}
    />
  );
}
