import type { APIRoute } from 'astro';
import { LOCALES, SITE } from '../../config';

// Index of the offline-content exports, so a build script can discover them.
export const GET: APIRoute = () => {
  const payload = {
    schema: 1,
    generatedAt: new Date().toISOString(),
    locales: LOCALES,
    documents: LOCALES.flatMap((locale) =>
      (['faq', 'privacy'] as const).map((kind) => ({
        kind,
        locale,
        url: `${SITE.url}/content/${locale}/${kind}.json`,
        page: `${SITE.url}/${locale}/${kind}/`,
      }))
    ),
  };
  return new Response(JSON.stringify(payload, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
