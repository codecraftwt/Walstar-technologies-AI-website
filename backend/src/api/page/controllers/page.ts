import { factories } from '@strapi/strapi';
import { fetchSiteContext, PAGE_POPULATE } from '../../../utils/page-populate';

interface ResolvePageContext {
  params?: {
    slug?: string;
  };
  status: number;
  body: unknown;
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

      const pageDoc = strapi.documents('api::page.page');
      let page = await pageDoc.findFirst({
        filters: { slug: rawSlug },
        status: 'published',
        populate: PAGE_POPULATE as never,
      });

      if (!page && rawSlug === 'home') {
        page = await pageDoc.findFirst({
          filters: { isHomepage: true },
          status: 'published',
          populate: PAGE_POPULATE as never,
        });
      }

      if (!page) {
        ctx.status = 404;
        ctx.body = { error: { status: 404, message: 'Page not found' } };
        return;
      }

      const siteContext = await fetchSiteContext(strapi);
      ctx.status = 200;
      ctx.body = {
        data: {
          page,
          ...siteContext,
          navbar: (page as { navbar?: unknown } | null)?.navbar ?? siteContext.navbar,
        },
      };
    },
  })
);
