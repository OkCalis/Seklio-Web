/**
 * Site-wide constants. External links and contact details all live here —
 * update this one file when the real URLs are available.
 */
export const SITE = {
  url: 'https://sekl.io',
  name: 'Seklio',

  testflightUrl: 'https://testflight.apple.com/join/qMUpceYp',

  // The beta APK is hosted on the site itself (public/seklio.apk) for now.
  // Long-term plan: move it to GitHub Releases and point this at
  // https://github.com/OkCalis/<repo>/releases/latest/download/seklio.apk
  androidApkUrl: '/seklio.apk',

  contactEmail: 'support@sekl.io',
} as const;

export const LOCALES = ['en', 'tr'] as const;
export type Locale = (typeof LOCALES)[number];
