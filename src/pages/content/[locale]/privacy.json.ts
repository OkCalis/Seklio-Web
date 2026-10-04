import type { APIRoute, GetStaticPaths } from 'astro';
import { LOCALES, SITE, type Locale } from '../../../config';
import { t } from '../../../i18n';

// Machine-readable Privacy Policy for the apps' offline copy. Generated from
// the same dictionary that renders /<locale>/privacy/, so the two can't drift.
// The {email} placeholder is resolved to the plain address.
export const getStaticPaths = (() =>
  LOCALES.map((locale) => ({ params: { locale } }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ params }) => {
  const locale = params.locale as Locale;
  const d = t(locale);
  const payload = {
    schema: 1,
    kind: 'privacy',
    locale,
    source: `${SITE.url}/${locale}/privacy/`,
    generatedAt: new Date().toISOString(),
    title: d.privacyPage.title,
    updated: d.privacyPage.updated,
    contactEmail: SITE.contactEmail,
    sections: d.privacyPage.sections.map((s) => ({
      heading: s.h,
      paragraphs: s.ps.map((p) => p.replace('{email}', SITE.contactEmail)),
    })),
  };
  return new Response(JSON.stringify(payload, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
