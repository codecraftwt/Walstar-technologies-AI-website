import type { NavPageRef } from '@/types/strapi';

export const SERVICE_CANONICAL_SLUGS: Record<string, string> = {
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
  'ecommerce-shopify': 'ecommerce-shopify-solutions',
  'cloud-devops-engineering': 'cloud-devops-platform-engineering',
  'cybersecurity-data-protection': 'cybersecurity-managed-it',
  'ui-ux-design-branding': 'ui-ux-product-design',
  'dedicated-teams': 'white-label-development-dedicated-teams',
};

export const CANONICAL_SERVICE_PAGE_SLUGS = new Set(Object.values(SERVICE_CANONICAL_SLUGS));

export function resolveCanonicalServiceSlug(slug: string): string | null {
  return SERVICE_CANONICAL_SLUGS[slug] ?? null;
}

/** Resolves a Strapi link target, preferring an explicit route string over a linked Page slug. */
export function resolveCmsRoute(
  route?: string | null,
  page?: NavPageRef | null
): string {
  const cleanRoute = route?.trim();
  if (cleanRoute) return cleanRoute;
  if (page?.isHomepage || page?.slug === 'home') return '/';
  if (page?.slug) return `/${encodeURIComponent(page.slug)}`;
  return '#';
}
