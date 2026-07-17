/**
 * Site-wide constants. External links and contact details all live here —
 * update this one file when the real URLs are available.
 */
export const SITE = {
  url: 'https://sekl.io',
  name: 'Seklio',

  testflightUrl: 'https://testflight.apple.com/join/qMUpceYp',
  androidApkUrl: 'https://github.com/OkCalis/Dream/releases',

  contactEmail: 'support@sekl.io',
} as const;

export const LOCALES = ['en', 'tr'] as const;
export type Locale = (typeof LOCALES)[number];
