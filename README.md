# Skechers × Agentic Commerce Search

An executive concept showing how Salesforce Agentic Commerce Search could transform product discovery for Skechers.

## Development

Use Node.js 24 and npm 11 (`.nvmrc`, `engines`, and `packageManager` record the toolchain).

```sh
npm ci
npm run dev
```

```sh
npm run test
npm run typecheck
npm run build
npm run test:deployment
```

`npm run lint` also runs the existing ESLint/Prettier checks. Existing formatting violations are separate from deployment validation.

## Vercel deployment

Import this GitHub repository in Vercel with the repository root as the Root Directory and Node.js **24.x**. `vercel.json` selects **Other** as the framework, runs `npm ci` and `npm run build`, and lets Nitro's **vercel** preset produce the Build Output API directory `.vercel/output` (static files plus the SSR function).

Remove any old project-level Bun install command, Cloudflare preset environment variables, or `dist`/`.output/public` Output Directory override. Leave Output Directory unset; `.vercel/output` is consumed as Build Output API output, not as a static-site directory. The repository configuration defines the install and build commands. No Lovable or Cloudflare credentials are required.

`package-lock.json` is the sole dependency lockfile and uses HTTPS `registry.npmjs.org` tarballs with integrity hashes. Do not restore `bun.lock`: its old Lovable mirror URLs caused dependency downloads to fail outside Lovable. If Vercel retained the old installation, redeploy once with the build cache disabled.

Local development uses `npm run dev`; `npm run preview` previews the production function/static output after building. Vercel's preview deployment is the final hosted integration check.

## Original images

All 63 original image files, including earlier unused uploads, are committed under `src/assets`. Active imports use Vite's local asset URLs. No image proxy or migration-time download is needed at build or runtime.

[Asset provenance](docs/asset-manifest.json) records each original source URL, asset ID, byte count, and recovered SHA-256 hash. The migration preserved all 8,206,965 bytes without image conversion, resizing, or substitutions. One original named `einstein.png` contains WebP bytes; those original bytes are deliberately preserved. Source URLs are audit metadata only. The image integrity tests detect missing or altered files.

Layout, copy, account configuration, calculator behavior, and the existing Google Fonts stylesheet are unchanged. The Lovable build wrapper, runtime telemetry hooks, and asset pointers have been removed.
