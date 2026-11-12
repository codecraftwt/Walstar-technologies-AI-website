import type { Core } from '@strapi/strapi';

interface HealthContext {
  status: number;
  body: unknown;
}

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async check(ctx: HealthContext) {
    const client = strapi.config.get('database.connection.client', 'unknown');

    try {
      await strapi.db.connection.raw('SELECT 1');
      ctx.status = 200;
      ctx.body = {
        ok: true,
        status: 'healthy',
        service: 'walstar-cms',
        database: {
          client,
          connected: true,
        },
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Database connection check failed';
      strapi.log.error('Health check failed:', error);
      ctx.status = 503;
      ctx.body = {
        ok: false,
        status: 'unhealthy',
        service: 'walstar-cms',
        database: {
          client,
          connected: false,
          error: message,
        },
        timestamp: new Date().toISOString(),
      };
    }
  },
});
