import { factories } from '@strapi/strapi';
import { FOOTER_POPULATE } from '../../../utils/page-populate';

interface ActiveFooterContext {
  query?: {
    slug?: string;
  };
  status: number;
  body: unknown;
}

export default factories.createCoreController(
  'api::footer.footer',
  ({ strapi }) => ({
    async active(ctx: ActiveFooterContext) {
      const slug = ctx.query?.slug?.trim();
      const footerDoc = strapi.documents('api::footer.footer');

      let footer = slug
        ? await footerDoc.findFirst({
            filters: { slug },
            status: 'published',
            populate: FOOTER_POPULATE as never,
          })
        : null;

      if (!footer) {
        footer = await footerDoc.findFirst({
          filters: { isDefault: true },
          status: 'published',
          populate: FOOTER_POPULATE as never,
        });
      }

      if (!footer) {
        footer = await footerDoc.findFirst({
          status: 'published',
          populate: FOOTER_POPULATE as never,
        });
      }

      ctx.status = 200;
      ctx.body = { data: footer };
    },
  })
);
