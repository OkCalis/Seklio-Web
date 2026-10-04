// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sekl.io',
  integrations: [
    sitemap({
      // Only the real content pages: skip the root language-chooser, 404,
      // and the machine-readable /content/ JSON exports.
      filter: (page) =>
        (page.includes('/en/') || page.includes('/tr/')) && !page.includes('/content/'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', tr: 'tr' },
      },
    }),
  ],
});
