import type { Core } from '@strapi/strapi';
import {
  INITIAL_CASE_STUDIES,
  INITIAL_FOOTER,
  INITIAL_NAVBAR,
  INITIAL_PAGES,
  INITIAL_PRODUCTS,
  INITIAL_SERVICES,
  INITIAL_SITE_SETTING,
  INITIAL_TESTIMONIALS,
} from './seed/walstar-data';

const PUBLIC_PERMISSIONS = [
  'api::site-setting.site-setting.find',
  'api::navbar.navbar.find',
  'api::navbar.navbar.findOne',
  'api::navbar.navbar.active',
  'api::footer.footer.find',
  'api::footer.footer.findOne',
  'api::footer.footer.active',
  'api::service.service.find',
  'api::service.service.findOne',
  'api::product.product.find',
  'api::product.product.findOne',
  'api::case-study.case-study.find',
  'api::case-study.case-study.findOne',
  'api::testimonial.testimonial.find',
  'api::testimonial.testimonial.findOne',
  'api::page.page.find',
  'api::page.page.findOne',
  'api::page.page.resolve',
  'api::consultation-lead.consultation-lead.create',
];

async function ensurePublicPermissions(strapi: Core.Strapi): Promise<void> {
  const publicRole = await strapi.db
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'public' } });

  if (!publicRole) {
    return;
  }

  const permissionQuery = strapi.db.query('plugin::users-permissions.permission');

  for (const action of PUBLIC_PERMISSIONS) {
    const existing = await permissionQuery.findOne({
      where: { action, role: publicRole.id },
    });

    if (!existing) {
      await permissionQuery.create({
        data: { action, role: publicRole.id },
      });
    }
  }
}

async function seedSingleTypes(strapi: Core.Strapi): Promise<void> {
  const siteSettingService = strapi.documents('api::site-setting.site-setting');
  const existingSiteSetting = await siteSettingService.findFirst({});
  if (!existingSiteSetting) {
    await siteSettingService.create({
      data: INITIAL_SITE_SETTING,
      status: 'published',
    });
  }
}

async function seedPages(strapi: Core.Strapi): Promise<void> {
  const pageDoc = strapi.documents('api::page.page');

  for (const item of INITIAL_PAGES) {
    const existing = await pageDoc.findFirst({
      filters: { slug: item.slug },
      populate: ['sections'],
    });

    // Never modify or overwrite pages that already exist in Strapi.
    if (!existing) {
      await pageDoc.create({
        data: item as never,
        status: 'published',
      });
      continue;
    }

    const existingSections = Array.isArray(existing.sections)
      ? (existing.sections as Array<Record<string, unknown>>)
      : [];

    const isUntouchedLegacyAboutSeed =
      item.slug === 'about-us' &&
      existingSections.length === 5 &&
      existingSections[0]?.__component === 'sections.hero' &&
      existingSections[0]?.headlinePrefix === 'Engineering an' &&
      existingSections[2]?.__component === 'sections.rich-content' &&
      existingSections[2]?.tag === 'Why Walstar';

    const isLegacyContactSeed =
      item.slug === 'contact' &&
      !existingSections.some(
        (section) => section.__component === 'sections.contact-interest'
      );

    if (
      existingSections.length === 0 ||
      isUntouchedLegacyAboutSeed ||
      isLegacyContactSeed
    ) {
      await pageDoc.update({
        documentId: existing.documentId,
        data: {
          isHomepage: item.isHomepage,
          pageType: item.pageType,
          order: item.order,
          seo: item.seo,
          sections: item.sections,
        } as never,
        status: 'published',
      });
    }
  }
}

async function seedCollections(strapi: Core.Strapi): Promise<void> {
  const serviceDoc = strapi.documents('api::service.service');
  if ((await serviceDoc.count({})) === 0) {
    for (const item of INITIAL_SERVICES) {
      await serviceDoc.create({ data: item, status: 'published' });
    }
  }

  const productDoc = strapi.documents('api::product.product');
  if ((await productDoc.count({})) === 0) {
    for (const item of INITIAL_PRODUCTS) {
      await productDoc.create({ data: item, status: 'published' });
    }
  }

  const caseStudyDoc = strapi.documents('api::case-study.case-study');
  if ((await caseStudyDoc.count({})) === 0) {
    for (const item of INITIAL_CASE_STUDIES) {
      await caseStudyDoc.create({ data: item, status: 'published' });
    }
  }

  const testimonialDoc = strapi.documents('api::testimonial.testimonial');
  if ((await testimonialDoc.count({})) === 0) {
    for (const item of INITIAL_TESTIMONIALS) {
      await testimonialDoc.create({ data: item, status: 'published' });
    }
  }

  await seedPages(strapi);

  const navbarDoc = strapi.documents('api::navbar.navbar');
  const existingNavbar = await navbarDoc.findFirst({
    filters: { slug: INITIAL_NAVBAR.slug },
  });
  if (!existingNavbar && (await navbarDoc.count({})) === 0) {
    await navbarDoc.create({
      data: INITIAL_NAVBAR as never,
      status: 'published',
    });
  }

  const footerDoc = strapi.documents('api::footer.footer');
  const existingFooter = await footerDoc.findFirst({
    filters: { slug: INITIAL_FOOTER.slug },
  });
  if (!existingFooter && (await footerDoc.count({})) === 0) {
    await footerDoc.create({
      data: INITIAL_FOOTER as never,
      status: 'published',
    });
  }
}

export default {
  register({ strapi }: { strapi: Core.Strapi }) {
    strapi.customFields.register({
      name: 'speed-slider',
      type: 'integer',
      inputSize: {
        default: 12,
        isResizable: true,
      },
    });
  },

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    try {
      await ensurePublicPermissions(strapi);
      await seedSingleTypes(strapi);
      await seedCollections(strapi);
    } catch (error) {
      strapi.log.warn(
        'Initial starter bootstrap skipped or encountered an error:',
        error
      );
    }
  },
};
