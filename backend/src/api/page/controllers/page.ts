import { factories } from '@strapi/strapi';
import { fetchSiteContext, PAGE_POPULATE } from '../../../utils/page-populate';
import { getOrComputeCached } from '../../../utils/response-cache';

interface ResolvePageContext {
  params?: {
    slug?: string;
  };
  status: number;
  body: unknown;
  set?: (field: string, value: string) => void;
}

export default factories.createCoreController(
  'api::page.page',
  ({ strapi }) => ({
    async resolve(ctx: ResolvePageContext) {
      const rawSlug = ctx.params?.slug?.trim() ?? '';
      if (!rawSlug) {
        ctx.status = 400;
        ctx.body = { error: { status: 400, message: 'Page slug is required' } };
        return;
      }

      const data = await getOrComputeCached(`page:resolve:${rawSlug}`, async () => {
        const pageDoc = strapi.documents('api::page.page');
        const [initialPage, siteContext] = await Promise.all([
          pageDoc.findFirst({
            filters: { slug: rawSlug },
            status: 'published',
            populate: PAGE_POPULATE as never,
          }),
          fetchSiteContext(strapi),
        ]);

        let page = initialPage;
        if (!page && rawSlug === 'home') {
          page = await pageDoc.findFirst({
            filters: { isHomepage: true },
            status: 'published',
            populate: PAGE_POPULATE as never,
          });
        }

        if (!page) {
          return null;
        }

        return {
          page,
          ...siteContext,
          navbar: (page as { navbar?: unknown } | null)?.navbar ?? siteContext.navbar,
          footer: (page as { footer?: unknown } | null)?.footer ?? siteContext.footer,
        };
      });

      if (!data) {
        ctx.status = 404;
        ctx.body = { error: { status: 404, message: 'Page not found' } };
        return;
      }

      ctx.set?.('Cache-Control', 'public, max-age=30, stale-while-revalidate=120');
      ctx.status = 200;
      ctx.body = { data };
    },
  })
);
