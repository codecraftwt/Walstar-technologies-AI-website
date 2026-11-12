import type { NavPageRef } from '@/types/strapi';

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
