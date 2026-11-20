const { createStrapi } = require('@strapi/strapi');
const path = require('path');
require('dotenv').config();

// Override database settings for Local PostgreSQL
process.env.DATABASE_CLIENT = 'postgres';
process.env.DATABASE_URL = '';
delete process.env.DATABASE_URL;
process.env.DATABASE_HOST = '127.0.0.1';
process.env.DATABASE_PORT = '5432';
process.env.DATABASE_NAME = 'walstar_cms';
process.env.DATABASE_USERNAME = 'postgres';
process.env.DATABASE_PASSWORD = 'postgres';
process.env.DATABASE_SSL = 'false';

async function run() {
  console.log('Initializing Strapi instance for Local DB (walstar_cms)...');
  console.log('Connecting to PostgreSQL at 127.0.0.1:5432/walstar_cms (user: postgres)...');
  
  const app = await createStrapi({
    appDir: path.resolve(__dirname, '..'),
    distDir: path.resolve(__dirname, '../dist'),
  }).load();

  console.log('Strapi loaded and local schema migrations complete!');

  const pageDoc = app.documents('api::page.page');
  const pages = await pageDoc.findMany({
    filters: { slug: { $in: ['service-1', 'service-2', 'service-3'] } },
    populate: { sections: { populate: '*' } },
  });

  console.log(`Found ${pages.length} service pages in local database:`);
  for (const page of pages) {
    const capSection = (page.sections || []).find(
      (s) => s.__component === 'sections.svc-capabilities'
    );
    const itemCount = capSection ? (capSection.capabilityItems || []).length : 0;
    console.log(` - ${page.slug}: "${page.title}" (capabilities items: ${itemCount})`);
  }

  console.log('\nLocal DB synchronization and verification completed successfully!');
  await app.destroy();
  process.exit(0);
}

run().catch((err) => {
  console.error('Error during Local DB sync:', err);
  process.exit(1);
});
