const { createStrapi } = require('@strapi/strapi');

async function run() {
  console.log('Initializing Strapi programmatic instance...');
  const strapi = await createStrapi({ distDir: 'dist' }).load();
  console.log('Strapi loaded successfully.');

  try {
    const pageDoc = strapi.documents('api::page.page');

    const { INITIAL_PAGES } = require('../dist/src/seed/walstar-data');
    const service2 = INITIAL_PAGES.find((p) => p.slug === 'service-2');

    if (!service2) {
      console.error('service-2 not found in INITIAL_PAGES!');
      return;
    }

    const existing = await pageDoc.findFirst({
      filters: { slug: 'service-2' },
      populate: ['sections'],
    });

    if (existing) {
      console.log('Existing service-2 found (ID:', existing.id, 'DocumentId:', existing.documentId, '). Updating with latest sections...');
      await pageDoc.update({
        documentId: existing.documentId,
        data: {
          title: service2.title,
          isHomepage: service2.isHomepage,
          pageType: service2.pageType,
          order: service2.order,
          seo: service2.seo,
          sections: service2.sections,
        },
        status: 'published',
      });
      console.log('Successfully updated service-2 in database!');
    } else {
      console.log('service-2 does not exist yet. Creating and publishing...');
      await pageDoc.create({
        data: service2,
        status: 'published',
      });
      console.log('Successfully created service-2 in database!');
    }

    // Verify it can be resolved with full populate
    const { PAGE_POPULATE } = require('../dist/src/utils/page-populate');
    const verified = await pageDoc.findFirst({
      filters: { slug: 'service-2' },
      status: 'published',
      populate: PAGE_POPULATE,
    });

    console.log('Verified service-2 sections count:', verified?.sections?.length || 0);
  } catch (err) {
    console.error('Error seeding service-2:', err);
  } finally {
    await strapi.destroy();
    console.log('Strapi instance closed.');
    process.exit(0);
  }
}

run();
