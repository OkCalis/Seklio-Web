# Seklio Web

Marketing site for [Seklio](https://sekl.io) — the serverless mesh messenger. Built with [Astro](https://astro.build), deployed to GitHub Pages at **https://sekl.io**.

## Structure

- Bilingual: English at `/en/`, Turkish at `/tr/`. The root `/` auto-detects the browser language and remembers a manual override (`localStorage["seklio-lang"]`).
- Pages per language: landing (`/`), `faq/`, `privacy/`, `support/`.
- All copy lives in `src/i18n/en.ts` and `src/i18n/tr.ts` — one typed dictionary per language.
- External links (TestFlight, Android APK, contact email) live in `src/config.ts`.

## Development

```sh
npm install
npm run dev      # local dev server
npm run build    # static build into dist/
npm run preview  # serve the built site
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages. One-time repo setup:

1. **Settings → Pages → Source**: select **GitHub Actions**.
2. **Settings → Pages → Custom domain**: enter `sekl.io` (the build also ships a `CNAME` file).
3. At the DNS provider for `sekl.io`: add the four GitHub Pages `A` records for the apex (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) and, optionally, a `www` CNAME to `okcalis.github.io`.
4. Once DNS resolves, enable **Enforce HTTPS** in the Pages settings.

## Before launch

Replace the placeholder links in `src/config.ts`:

- `testflightUrl` — the real TestFlight public-beta invite URL.
- `androidApkUrl` — the real GitHub releases URL for the Android APK.
