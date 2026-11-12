import type { Core } from '@strapi/strapi';
import { fetchSiteContext, PAGE_POPULATE } from '../../../utils/page-populate';

interface LandingContext {
  status: number;
  body: unknown;
}

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async index(ctx: LandingContext) {
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

    ctx.status = 200;
    ctx.body = {
      data: {
        page,
        ...siteContext,
        navbar: (page as { navbar?: unknown } | null)?.navbar ?? siteContext.navbar,
      },
    };
  },
});
