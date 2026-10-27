<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- Account-specific content (screenshots, queries, products, challenges, calculator defaults) lives in src/config/accounts/<id>.ts and is selected via ACTIVE_ACCOUNT; sections read only from `account` so new prospects need no component changes.
- Revenue calculations and slider bounds live in the browser-safe revenue-model module, with concrete model tests; a single calculator separates historical outcomes from prospective revenue.
- ACS differentiators, technology and merchandising sections live in the Understanding module; the opening search-evidence and ACS results sections stay in Sections so their shared query tabs and cards remain in one place.
- Account product selections and official source links live in the account's companion catalog module; imported CDN pointers retain authentic photographs without storing downloaded media in the repository.
