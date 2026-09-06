/**
 * Site-wide constants. External links and contact details all live here —
 * update this one file when the real URLs are available.
 */
export const SITE = {
  url: 'https://sekl.io',
  name: 'Seklio',

  testflightUrl: 'https://testflight.apple.com/join/qMUpceYp',

  // Fallback target for the Android buttons; the landing page resolves the
  // newest .apk asset from this repo via the GitHub API at click time.
  androidReleaseRepo: 'OkCalis/Seklio-Android-Release',
  androidApkUrl: 'https://github.com/OkCalis/Seklio-Android-Release/releases',

  // Android alpha: the Play closed-test listing only unlocks for members of
  // the "Seklio Alpha Channel" Google Group, so the site links the group.
  alphaGroupUrl: 'https://groups.google.com/g/seklio',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=io.sekl.seklio.app',

  contactEmail: 'support@sekl.io',
} as const;

export const LOCALES = ['en', 'tr'] as const;
export type Locale = (typeof LOCALES)[number];
