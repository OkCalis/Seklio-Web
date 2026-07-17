/**
 * Site-wide constants. External links and contact details all live here —
 * update this one file when the real URLs are available.
 */
export const SITE = {
  url: 'https://sekl.io',
  name: 'Seklio',

  // TODO: replace with the real TestFlight public-beta invite link.
  testflightUrl: 'https://testflight.apple.com/join/REPLACE_ME',

  // TODO: replace with the real GitHub repo / releases page for the Android APK.
  androidApkUrl: 'https://github.com/OkCalis/REPLACE_ME/releases/latest',

  contactEmail: 'support@sekl.io',
} as const;

export const LOCALES = ['en', 'tr'] as const;
export type Locale = (typeof LOCALES)[number];
