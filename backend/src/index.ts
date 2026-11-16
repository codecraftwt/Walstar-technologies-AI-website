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

    const needsAboutSync =
      item.slug === 'about-us' &&
      (!existingSections.some((s) => s.__component === 'sections.solutions-grid') ||
        existingSections.some(
          (s) =>
            s.__component === 'sections.solutions-grid' &&
            Array.isArray((s as Record<string, unknown>).items) &&
            ((s as Record<string, unknown>).items as unknown[]).length < 10
        ));

    if (
      existingSections.length === 0 ||
      isUntouchedLegacyAboutSeed ||
      isLegacyContactSeed ||
      needsAboutSync
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
  for (const item of INITIAL_SERVICES) {
    const existing = await serviceDoc.findFirst({
      filters: { slug: item.slug },
    });
    if (!existing) {
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

async function ensureTickerAndWhyChooseIcons(strapi: Core.Strapi): Promise<void> {
  try {
    const knex = strapi.db.connection;
    const hasTickerTable = await knex.schema.hasTable('components_about_ticker_items');
    const hasFilesTable = await knex.schema.hasTable('files');
    const hasMphTable = await knex.schema.hasTable('files_related_mph');
    if (!hasTickerTable || !hasFilesTable || !hasMphTable) {
      return;
    }

    // 1. Ensure ticker badge file exists
    let badgeFile = await knex('files')
      .where('name', 'like', '%ticker-badge%')
      .orWhere('url', 'like', '%ticker-badge%')
      .first();

    if (!badgeFile) {
      const crypto = await import('crypto');
      const docId = crypto.randomBytes(12).toString('hex');
      const [inserted] = await knex('files')
        .insert({
          document_id: docId,
          name: 'ticker-badge.png',
          alternative_text: 'Ticker Badge',
          caption: null,
          width: 120,
          height: 126,
          formats: null,
          hash: 'ticker_badge_png',
          ext: '.png',
          mime: 'image/png',
          size: 3.43,
          url: 'https://res.cloudinary.com/dwwykeft2/image/upload/v1794832113/why-choose/ticker-badge.png',
          preview_url: null,
          provider: 'cloudinary',
          folder_path: '/',
          created_at: new Date(),
          updated_at: new Date(),
          published_at: new Date(),
        })
        .returning('*');
      badgeFile = inserted || (await knex('files').where('name', 'like', '%ticker-badge%').first());
    }

    if (badgeFile?.id) {
      const tickerItems = await knex('components_about_ticker_items').select('id');
      for (const item of tickerItems) {
        const existingLink = await knex('files_related_mph')
          .where({
            related_type: 'about.ticker-item',
            field: 'iconImage',
            related_id: item.id,
          })
          .first();

        if (!existingLink) {
          await knex('files_related_mph').insert({
            file_id: badgeFile.id,
            related_id: item.id,
            order: 1,
            related_type: 'about.ticker-item',
            field: 'iconImage',
          });
        }
      }
    }

    // 2. Ensure why-reason icons exist and are linked
    const hasWhyTable = await knex.schema.hasTable('components_about_why_reasons');
    if (hasWhyTable) {
      const whyReasonImages = [
        { name: 'web-app-solutions.png', match: 'Customized Web And App Solutions', url: 'https://res.cloudinary.com/dwwykeft2/image/upload/v1794832119/why-choose/web-app-solutions.png' },
        { name: 'industry-experience.png', match: '8+ Years Of Industry Experience', url: 'https://res.cloudinary.com/dwwykeft2/image/upload/v1794832121/why-choose/industry-experience.png' },
        { name: 'cost-effective.png', match: 'Cost-Effective Development', url: 'https://res.cloudinary.com/dwwykeft2/image/upload/v1794832124/why-choose/cost-effective.png' },
        { name: 'conversion-focused.png', match: 'Conversion-Focused Approach', url: 'https://res.cloudinary.com/dwwykeft2/image/upload/v1794832126/why-choose/conversion-focused.png' },
        { name: 'global-clientele.png', match: 'Global Clientele', url: 'https://res.cloudinary.com/dwwykeft2/image/upload/v1794832128/why-choose/global-clientele.png' },
      ];

      for (const img of whyReasonImages) {
        let file = await knex('files')
          .where('name', 'like', `%${img.name}%`)
          .orWhere('url', 'like', `%${img.name}%`)
          .first();

        if (!file) {
          const crypto = await import('crypto');
          const docId = crypto.randomBytes(12).toString('hex');
          const [inserted] = await knex('files')
            .insert({
              document_id: docId,
              name: img.name,
              alternative_text: img.match,
              caption: null,
              width: 92,
              height: 92,
              formats: null,
              hash: img.name.replace('.png', ''),
              ext: '.png',
              mime: 'image/png',
              size: 10,
              url: img.url,
              preview_url: null,
              provider: 'cloudinary',
              folder_path: '/',
              created_at: new Date(),
              updated_at: new Date(),
              published_at: new Date(),
            })
            .returning('*');
          file = inserted || (await knex('files').where('name', 'like', `%${img.name}%`).first());
        }

        if (file?.id) {
          const matchingReasons = await knex('components_about_why_reasons')
            .where('title', 'like', `%${img.match.split(' ')[0]}%`)
            .select('id');

          for (const reason of matchingReasons) {
            const existingLink = await knex('files_related_mph')
              .where({
                related_type: 'about.why-reason',
                field: 'iconImage',
                related_id: reason.id,
              })
              .first();

            if (!existingLink) {
              await knex('files_related_mph').insert({
                file_id: file.id,
                related_id: reason.id,
                order: 1,
                related_type: 'about.why-reason',
                field: 'iconImage',
              });
            }
          }
        }
      }
    }
  } catch (error) {
    strapi.log.warn('Could not auto-link ticker or why-choose icons during bootstrap:', error);
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
    const contactInterest = strapi.components['sections.contact-interest'];
    if (!contactInterest) {
      strapi.log.error(
        'Missing component sections.contact-interest — Contact page media uploads will fail until this component is deployed.'
      );
    } else {
      strapi.log.info(
        'Component sections.contact-interest loaded (image field available for Contact Interest section).'
      );
    }

    try {
      await ensurePublicPermissions(strapi);
      await seedSingleTypes(strapi);
      await seedCollections(strapi);
      await ensureTickerAndWhyChooseIcons(strapi);
    } catch (error) {
      strapi.log.error(
        'Initial starter bootstrap skipped or encountered an error:',
        error
      );
    }
  },
};
