import type { Core } from '@strapi/strapi';
import { fetchSiteContext, PAGE_POPULATE } from '../../../utils/page-populate';
import { getOrComputeCached } from '../../../utils/response-cache';

interface LandingContext {
  status: number;
  body: unknown;
  set?: (field: string, value: string) => void;
}

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async index(ctx: LandingContext) {
    const data = await getOrComputeCached('landing:home', async () => {
      const pageDoc = strapi.documents('api::page.page');

      const [primaryHomepagePage, siteContext] = await Promise.all([
        pageDoc.findFirst({
          filters: { isHomepage: true },
          status: 'published',
          populate: PAGE_POPULATE as never,
        }),
        fetchSiteContext(strapi),
      ]);

      const page =
        primaryHomepagePage ??
        (await pageDoc.findFirst({
          filters: { slug: 'home' },
          status: 'published',
          populate: PAGE_POPULATE as never,
        })) ??
        (await pageDoc.findFirst({
          status: 'published',
          sort: { order: 'asc' },
          populate: PAGE_POPULATE as never,
        }));

      return {
        page,
        ...siteContext,
        navbar: (page as { navbar?: unknown } | null)?.navbar ?? siteContext.navbar,
        footer: (page as { footer?: unknown } | null)?.footer ?? siteContext.footer,
      };
    });

    ctx.set?.('Cache-Control', 'public, max-age=30, stale-while-revalidate=120');
    ctx.status = 200;
    ctx.body = { data };
  },
});
