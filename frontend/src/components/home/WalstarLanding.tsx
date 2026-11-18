import { PageSectionsRenderer } from '@/components/page-renderer/PageSectionsRenderer';
import type { LandingPayload } from '@/types/strapi';

export function WalstarLanding({
  data,
  source,
}: {
  data: LandingPayload;
  source: 'strapi' | 'fallback';
}) {
  return <PageSectionsRenderer data={data} source={source} />;
}
