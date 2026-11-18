import {
  DEFAULT_FOOTER,
  DEFAULT_LANDING_DATA,
  DEFAULT_NAVBAR,
  getDefaultPageBySlug,
} from '@/lib/default-landing';
import type {
  CaseStudyItem,
  FooterData,
  LandingPayload,
  NavbarData,
  PageItem,
  ProductItem,
  ServiceItem,
  SiteSetting,
  StrapiHealthStatus,
  StrapiResponse,
} from '@/types/strapi';

const DEFAULT_PUBLIC_URL = 'http://localhost:1337';
const DEFAULT_SERVER_URL = 'http://127.0.0.1:1337';

export function getStrapiPublicUrl(): string {
  return (process.env.NEXT_PUBLIC_STRAPI_URL || DEFAULT_PUBLIC_URL).replace(/\/+$/, '');
}

export function getStrapiBaseUrl(): string {
  if (typeof window === 'undefined') {
    return (
      process.env.STRAPI_URL ||
      process.env.NEXT_PUBLIC_STRAPI_URL ||
      DEFAULT_SERVER_URL
    ).replace(/\/+$/, '');
  }

  return getStrapiPublicUrl();
}

export function getStrapiMediaUrl(url?: string | null): string | null {
  if (!url) return null;
  if (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('data:') ||
    url.startsWith('blob:')
  ) {
    return url;
  }
  if (
    url.startsWith('/images/') ||
    url.startsWith('/icons/') ||
    url.startsWith('/logos/') ||
    url.startsWith('/favicon')
  ) {
    return url;
  }
  // Local frontend public assets (e.g. /walstar-star.gif, /about.gif) not under Strapi /uploads/
  if (url.startsWith('/') && !url.startsWith('/uploads/')) {
    return url;
  }
  return `${getStrapiPublicUrl()}${url.startsWith('/') ? '' : '/'}${url}`;
}

export function getStrapiTimeoutMs(): number {
  const configured = Number(process.env.STRAPI_TIMEOUT_MS);
  if (Number.isFinite(configured) && configured > 0) {
    return configured;
  }

  // Local Strapi often still talks to a remote DB, so keep a generous timeout.
  const baseUrl = getStrapiBaseUrl();
  const isLocal =
    baseUrl.includes('localhost') || baseUrl.includes('127.0.0.1');
  return isLocal ? 30000 : 25000;
}

export class StrapiHttpError extends Error {
  status: number;
  statusText: string;

  constructor(status: number, statusText: string, message: string) {
    super(message);
    this.name = 'StrapiHttpError';
    this.status = status;
    this.statusText = statusText;
  }
}

const STRAPI_REVALIDATE_SECONDS = 30;

type StrapiFetchInit = RequestInit & {
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
};

export async function fetchStrapi<T>(
  path: string,
  init: StrapiFetchInit = {}
): Promise<T> {
  const baseUrl = getStrapiBaseUrl();
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const headers = new Headers(init.headers);

  if (!headers.has('Accept')) {
    headers.set('Accept', 'application/json');
  }

  if (
    typeof window === 'undefined' &&
    process.env.STRAPI_API_TOKEN &&
    !headers.has('Authorization')
  ) {
    headers.set('Authorization', `Bearer ${process.env.STRAPI_API_TOKEN}`);
  }

  const response = await fetch(`${baseUrl}${normalizedPath}`, {
    ...init,
    headers,
  });

  if (!response.ok) {
    const bodyText = await response.text().catch(() => '');
    throw new StrapiHttpError(
      response.status,
      response.statusText,
      `Strapi API error (${response.status} ${response.statusText}): ${bodyText || normalizedPath}`
    );
  }

  return (await response.json()) as T;
}

function mergeSiteSetting(partial?: Partial<SiteSetting> | null): SiteSetting {
  return {
    ...DEFAULT_LANDING_DATA.siteSetting,
    ...(partial ?? {}),
    navLinks: partial?.navLinks?.length
      ? partial.navLinks
      : DEFAULT_LANDING_DATA.siteSetting.navLinks,
    socialLinks: partial?.socialLinks?.length
      ? partial.socialLinks
      : DEFAULT_LANDING_DATA.siteSetting.socialLinks,
    footerPrimaryLinks: partial?.footerPrimaryLinks?.length
      ? partial.footerPrimaryLinks
      : DEFAULT_LANDING_DATA.siteSetting.footerPrimaryLinks,
    footerSecondaryLinks: partial?.footerSecondaryLinks?.length
      ? partial.footerSecondaryLinks
      : DEFAULT_LANDING_DATA.siteSetting.footerSecondaryLinks,
  };
}

function resolvePageSections(
  page: PageItem,
  fallbackPage: PageItem
): PageItem['sections'] {
  const incoming = Array.isArray(page.sections) ? page.sections : null;
  const fallbackSections = fallbackPage.sections ?? [];

  if (!incoming || incoming.length === 0) {
    return fallbackSections;
  }

  const isLegacyContact =
    (page.pageType === 'contact' || page.slug === 'contact') &&
    !incoming.some(
      (section) => section.__component === 'sections.contact-interest'
    ) &&
    fallbackSections.some(
      (section) => section.__component === 'sections.contact-interest'
    );

  const isLegacyService =
    (page.pageType === 'service' ||
      page.slug === 'service-1' ||
      page.slug === 'service-2' ||
      page.slug === 'service-3' ||
      page.slug === 'digital-marketing-performance-growth') &&
    !incoming.some(
      (section) => section.__component === 'sections.svc-intro'
    ) &&
    fallbackSections.some(
      (section) => section.__component === 'sections.svc-intro'
    );

  const isLegacyAbout =
    (page.pageType === 'about' || page.slug === 'about-us') &&
    !incoming.some(
      (section) => section.__component === 'sections.hero'
    ) &&
    fallbackSections.some(
      (section) => section.__component === 'sections.hero'
    );

  return isLegacyContact || isLegacyService || isLegacyAbout ? fallbackSections : incoming;
}

function normalizeLandingPayload(
  payload: Partial<LandingPayload>,
  fallbackPage: PageItem
): LandingPayload {
  const page = payload.page
    ? {
        ...payload.page,
        sections: resolvePageSections(payload.page, fallbackPage),
      }
    : fallbackPage;

  return {
    navbar: payload.navbar ?? payload.page?.navbar ?? DEFAULT_NAVBAR,
    footer: payload.footer ?? payload.page?.footer ?? DEFAULT_FOOTER,
    siteSetting: mergeSiteSetting(payload.siteSetting),
    page,
    services: payload.services?.length
      ? payload.services
      : DEFAULT_LANDING_DATA.services,
    products: payload.products?.length
      ? payload.products
      : DEFAULT_LANDING_DATA.products,
    caseStudies: payload.caseStudies?.length
      ? payload.caseStudies
      : DEFAULT_LANDING_DATA.caseStudies,
    testimonials: payload.testimonials?.length
      ? payload.testimonials
      : DEFAULT_LANDING_DATA.testimonials,
    pages: payload.pages?.length ? payload.pages : DEFAULT_LANDING_DATA.pages,
  };
}

export async function getLandingData(): Promise<{
  data: LandingPayload;
  source: 'strapi' | 'fallback';
}> {
  try {
    const res = await fetchStrapi<StrapiResponse<Partial<LandingPayload>>>(
      '/api/landing',
      {
        next: { revalidate: STRAPI_REVALIDATE_SECONDS },
        signal: AbortSignal.timeout(getStrapiTimeoutMs()),
      }
    );

    if (!res.data) {
      return { data: DEFAULT_LANDING_DATA, source: 'fallback' };
    }

    return {
      source: 'strapi',
      data: normalizeLandingPayload(res.data, DEFAULT_LANDING_DATA.page),
    };
  } catch {
    return { data: DEFAULT_LANDING_DATA, source: 'fallback' };
  }
}

export async function getActiveNavbar(slug?: string): Promise<NavbarData> {
  try {
    const query = slug ? `?slug=${encodeURIComponent(slug)}` : '';
    const res = await fetchStrapi<StrapiResponse<NavbarData | null>>(
      `/api/navbars/active${query}`,
      {
        next: { revalidate: STRAPI_REVALIDATE_SECONDS },
        signal: AbortSignal.timeout(getStrapiTimeoutMs()),
      }
    );
    if (res.data && Array.isArray(res.data.items)) {
      return res.data;
    }
  } catch {
    // Fall back to default seeded navbar when Strapi is offline
  }
  return DEFAULT_NAVBAR;
}

export async function getActiveFooterResult(slug?: string): Promise<{
  data: FooterData;
  source: 'strapi' | 'fallback';
}> {
  try {
    const query = slug ? `?slug=${encodeURIComponent(slug)}` : '';
    const res = await fetchStrapi<StrapiResponse<FooterData | null>>(
      `/api/footers/active${query}`,
      {
        next: { revalidate: STRAPI_REVALIDATE_SECONDS },
        signal: AbortSignal.timeout(getStrapiTimeoutMs()),
      }
    );
    if (res.data) {
      return { data: res.data, source: 'strapi' };
    }
  } catch {
    // Fall back to default seeded footer when Strapi is offline
  }
  return { data: DEFAULT_FOOTER, source: 'fallback' };
}

export async function getActiveFooter(slug?: string): Promise<FooterData> {
  const result = await getActiveFooterResult(slug);
  return result.data;
}

export async function getResolvedPageBySlug(slug: string): Promise<{
  data: LandingPayload | null;
  source: 'strapi' | 'fallback';
  error?: string;
}> {
  const normalizedSlug = slug.trim();
  const fallbackPage = getDefaultPageBySlug(normalizedSlug);

  try {
    const res = await fetchStrapi<StrapiResponse<Partial<LandingPayload>>>(
      `/api/pages/resolve/${encodeURIComponent(normalizedSlug)}`,
      {
        next: { revalidate: STRAPI_REVALIDATE_SECONDS },
        signal: AbortSignal.timeout(getStrapiTimeoutMs()),
      }
    );

    if (!res.data?.page) {
      return { data: null, source: 'strapi' };
    }

    return {
      source: 'strapi',
      data: normalizeLandingPayload(
        res.data,
        fallbackPage ?? res.data.page
      ),
    };
  } catch (err) {
    if (err instanceof StrapiHttpError && err.status === 404) {
      return { data: null, source: 'strapi' };
    }

    if (fallbackPage) {
      return {
        source: 'fallback',
        data: {
          ...DEFAULT_LANDING_DATA,
          page: fallbackPage,
        },
      };
    }

    return {
      data: null,
      source: 'fallback',
      error: err instanceof Error ? err.message : 'Unable to reach Strapi CMS',
    };
  }
}

export async function getStrapiHealth(): Promise<StrapiHealthStatus> {
  const baseUrl = getStrapiBaseUrl();

  try {
    const response = await fetch(`${baseUrl}/api/health`, {
      cache: 'no-store',
      signal: AbortSignal.timeout(getStrapiTimeoutMs()),
      headers: { Accept: 'application/json' },
    });

    const data = (await response.json().catch(() => null)) as StrapiHealthStatus | null;
    if (data && typeof data.status === 'string') {
      return data;
    }

    return {
      ok: response.ok,
      status: response.ok ? 'healthy' : 'unhealthy',
      service: 'walstar-cms',
      database: {
        client: 'postgres',
        connected: response.ok,
        error: response.ok ? undefined : `HTTP ${response.status}`,
      },
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      ok: false,
      status: 'unreachable',
      service: 'walstar-cms',
      database: {
        client: 'postgres',
        connected: false,
        error: error instanceof Error ? error.message : 'Unable to reach Strapi server',
      },
      timestamp: new Date().toISOString(),
    };
  }
}

export async function getSiteSetting(): Promise<{
  data: SiteSetting | null;
  error?: string;
}> {
  try {
    const res = await fetchStrapi<StrapiResponse<SiteSetting | null>>('/api/site-setting', {
      next: { revalidate: STRAPI_REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(getStrapiTimeoutMs()),
    });
    return { data: res.data ?? null };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Failed to load site settings',
    };
  }
}

export async function getPages(): Promise<{
  data: PageItem[];
  error?: string;
}> {
  try {
    const res = await fetchStrapi<StrapiResponse<PageItem[]>>(
      '/api/pages?sort=order:asc,createdAt:asc',
      {
        next: { revalidate: STRAPI_REVALIDATE_SECONDS },
        signal: AbortSignal.timeout(getStrapiTimeoutMs()),
      }
    );
    return { data: Array.isArray(res.data) ? res.data : [] };
  } catch (error) {
    return {
      data: [],
      error: error instanceof Error ? error.message : 'Failed to load pages',
    };
  }
}

export async function getPageBySlug(slug: string): Promise<{
  data: PageItem | null;
  error?: string;
}> {
  try {
    const params = new URLSearchParams({
      'filters[slug][$eq]': slug,
    });
    const res = await fetchStrapi<StrapiResponse<PageItem[]>>(
      `/api/pages?${params.toString()}`,
      {
        next: { revalidate: STRAPI_REVALIDATE_SECONDS },
        signal: AbortSignal.timeout(getStrapiTimeoutMs()),
      }
    );
    return { data: res.data?.[0] ?? null };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Failed to load page',
    };
  }
}

export async function getProductBySlug(slug: string): Promise<ProductItem | null> {
  try {
    const params = new URLSearchParams({
      'filters[slug][$eq]': slug,
      populate: 'image',
    });
    const res = await fetchStrapi<StrapiResponse<ProductItem[]>>(
      `/api/products?${params.toString()}`,
      {
        next: { revalidate: STRAPI_REVALIDATE_SECONDS },
        signal: AbortSignal.timeout(getStrapiTimeoutMs()),
      }
    );
    if (res.data?.[0]) return res.data[0];
  } catch {
    // Fall back to default seeded product data when Strapi is offline
  }
  return DEFAULT_LANDING_DATA.products.find((p) => p.slug === slug) ?? null;
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudyItem | null> {
  try {
    const params = new URLSearchParams({
      'filters[slug][$eq]': slug,
      populate: 'coverImage',
    });
    const res = await fetchStrapi<StrapiResponse<CaseStudyItem[]>>(
      `/api/case-studies?${params.toString()}`,
      {
        next: { revalidate: STRAPI_REVALIDATE_SECONDS },
        signal: AbortSignal.timeout(getStrapiTimeoutMs()),
      }
    );
    if (res.data?.[0]) return res.data[0];
  } catch {
    // Fall back to default seeded case study data when Strapi is offline
  }
  return DEFAULT_LANDING_DATA.caseStudies.find((c) => c.slug === slug) ?? null;
}

export async function getServiceBySlug(slug: string): Promise<ServiceItem | null> {
  try {
    const params = new URLSearchParams({
      'filters[slug][$eq]': slug,
      'populate[0]': 'image',
      'populate[1]': 'iconImage',
    });
    const res = await fetchStrapi<StrapiResponse<ServiceItem[]>>(
      `/api/services?${params.toString()}`,
      {
        next: { revalidate: STRAPI_REVALIDATE_SECONDS },
        signal: AbortSignal.timeout(getStrapiTimeoutMs()),
      }
    );
    if (res.data?.[0]) return res.data[0];
  } catch {
    // Fall back to default seeded service data when Strapi is offline
  }
  return DEFAULT_LANDING_DATA.services.find((s) => s.slug === slug) ?? null;
}
