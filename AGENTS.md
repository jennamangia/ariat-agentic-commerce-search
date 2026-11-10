## Architecture
- Account-specific content (screenshots, queries, products, challenges, calculator defaults) lives in src/config/accounts/<id>.ts and is selected via ACTIVE_ACCOUNT; sections read only from `account` so new prospects need no component changes.
- Revenue calculations and slider bounds live in the browser-safe revenue-model module, with concrete model tests; a single calculator separates historical outcomes from prospective revenue.
- ACS differentiators, technology and merchandising sections live in the Understanding module; the opening search-evidence and ACS results sections stay in Sections so their shared query tabs and cards remain in one place.
- Account product selections and official source links live in the account's companion catalog module; original images are stored under src/assets, imported through Vite, and audited in docs/asset-manifest.json.

## Development and deployment
- Use Node 24 and npm 11. Install with `npm ci`; package-lock.json is the only dependency lockfile.
- Vite/TanStack Start and Nitro build Vercel Build Output API artifacts under `.vercel/output`.
- Preserve the original asset bytes; no Lovable proxy, build wrapper, or telemetry is needed.
