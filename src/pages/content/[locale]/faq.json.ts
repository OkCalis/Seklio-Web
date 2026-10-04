import type { APIRoute, GetStaticPaths } from 'astro';
import { LOCALES, SITE, type Locale } from '../../../config';
import { t } from '../../../i18n';

// Machine-readable FAQ for the apps' offline copy. Generated from the same
// dictionary that renders /<locale>/faq/, so the two can't drift.
export const getStaticPaths = (() =>
  LOCALES.map((locale) => ({ params: { locale } }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ params }) => {
  const locale = params.locale as Locale;
  const d = t(locale);
  const payload = {
    schema: 1,
    kind: 'faq',
    locale,
    source: `${SITE.url}/${locale}/faq/`,
    generatedAt: new Date().toISOString(),
    title: d.faq.title,
    subtitle: d.faq.subtitle,
    items: d.faq.items.map(({ q, a }) => ({ question: q, answer: a })),
  };
  return new Response(JSON.stringify(payload, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
