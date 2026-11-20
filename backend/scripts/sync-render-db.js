const { createStrapi } = require('@strapi/strapi');
const path = require('path');
require('dotenv').config();

async function run() {
  console.log('Initializing Strapi instance for Render DB sync...');
  const app = await createStrapi({
    appDir: path.resolve(__dirname, '..'),
    distDir: path.resolve(__dirname, '../dist'),
  }).load();

  console.log('Strapi loaded successfully.');
  const pageDoc = app.documents('api::page.page');

  // Load INITIAL_PAGES from dist
  const { INITIAL_PAGES } = require('../dist/src/seed/walstar-data');

  for (const slug of ['service-1', 'service-2', 'service-3']) {
    console.log(`\n--- Syncing ${slug} ---`);
    const seed = INITIAL_PAGES.find((p) => p.slug === slug);
    if (!seed) {
      console.error(`No seed found for ${slug}`);
      continue;
    }

    const existing = await pageDoc.findFirst({
      filters: { slug },
      populate: { sections: { populate: '*' } },
    });

    if (!existing) {
      console.log(`Page ${slug} does not exist. Creating...`);
      await pageDoc.create({
        data: seed,
        status: 'published',
      });
      console.log(`Created and published ${slug}`);
      continue;
    }

    console.log(`Found existing ${slug} (documentId: ${existing.documentId}). Updating sections...`);
    await pageDoc.update({
      documentId: existing.documentId,
      data: {
        title: seed.title,
        isHomepage: seed.isHomepage,
        pageType: seed.pageType,
        order: seed.order,
        seo: seed.seo,
        sections: seed.sections,
      },
      status: 'published',
    });
    console.log(`Successfully updated and published ${slug}!`);
  }

  // Clear cache if needed
  try {
    const { clearResponseCache } = require('../dist/src/utils/response-cache');
    clearResponseCache();
    console.log('Response cache cleared.');
  } catch (e) {
    console.log('No response cache to clear or skipped:', e.message);
  }

  console.log('\nAll 3 service pages successfully updated in Render DB!');
  await app.destroy();
  process.exit(0);
}

run().catch((err) => {
  console.error('Error during Render DB sync:', err);
  process.exit(1);
});
