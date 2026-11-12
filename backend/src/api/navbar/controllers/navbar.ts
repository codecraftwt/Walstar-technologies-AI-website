import { factories } from '@strapi/strapi';
import { NAVBAR_POPULATE } from '../../../utils/page-populate';

interface ActiveNavbarContext {
  query?: {
    slug?: string;
  };
  status: number;
  body: unknown;
}

export default factories.createCoreController(
  'api::navbar.navbar',
  ({ strapi }) => ({
    async active(ctx: ActiveNavbarContext) {
      const slug = ctx.query?.slug?.trim();
      const navbarDoc = strapi.documents('api::navbar.navbar');

      let navbar = slug
        ? await navbarDoc.findFirst({
            filters: { slug },
            status: 'published',
            populate: NAVBAR_POPULATE as never,
          })
        : null;

      if (!navbar) {
        navbar = await navbarDoc.findFirst({
          filters: { isDefault: true },
          status: 'published',
          populate: NAVBAR_POPULATE as never,
        });
      }

      if (!navbar) {
        navbar = await navbarDoc.findFirst({
          status: 'published',
          populate: NAVBAR_POPULATE as never,
        });
      }

      ctx.status = 200;
      ctx.body = { data: navbar };
    },
  })
);
