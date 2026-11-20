const { createStrapi } = require('@strapi/strapi');
const path = require('path');
require('dotenv').config();

async function run() {
  console.log('Verifying Render PostgreSQL Database via Strapi Document Service...');
  const app = await createStrapi({
    appDir: path.resolve(__dirname, '..'),
    distDir: path.resolve(__dirname, '../dist'),
  }).load();

  const pageDoc = app.documents('api::page.page');
  const pages = await pageDoc.findMany({
    filters: { slug: { $in: ['service-1', 'service-2', 'service-3'] } },
    populate: { sections: { populate: '*' } },
  });

  console.log(`\nVerified ${pages.length} service pages in Render DB:`);
  for (const page of pages) {
    const capSection = (page.sections || []).find(
      (s) => s.__component === 'sections.svc-capabilities'
    );
    const items = capSection ? (capSection.capabilityItems || []) : [];
    console.log(`\n=== [${page.slug}] "${page.title}" ===`);
    console.log(` Heading: "${capSection?.headingPrefix}" / "${capSection?.headingSerif}" / "${capSection?.headingSuffix}"`);
    console.log(` Total Capability Items: ${items.length}`);
    items.forEach((item, i) => {
      console.log(`   ${i + 1}. [${item.icon || 'default'}] ${item.title}${item.isDark ? ' (DARK/CTA)' : ''}`);
    });
  }

  await app.destroy();
  process.exit(0);
}

run().catch((err) => {
  console.error('Verification error:', err);
  process.exit(1);
});
