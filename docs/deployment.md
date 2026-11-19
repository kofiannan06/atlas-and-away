# Atlas & Away — Vercel hosting

Live website: https://atlas-and-away.vercel.app

Source repository: https://github.com/kofiannan06/atlas-and-away

## Current setup

- Vercel project: `atlas-and-away`.
- Vercel team: `ebenezer-kofi-annans-projects`.
- Framework preset: Other (static HTML, CSS and JavaScript).
- Root directory: the project folder containing `index.html`.
- No installation or build command is required for the website.
- Production is deployed from local files using the official Vercel CLI.

The Vercel GitHub connection currently belongs to the creator's other GitHub account, so this project is not connected for automatic Git deployments. Pushing to `kofiannan06/atlas-and-away` updates the source repository. A separate CLI deployment updates the live website.

## Publish an update

From the project folder, review your changes and push them to GitHub. Then run:

```powershell
npx --yes vercel@66.2.0 deploy --prod --yes --scope ebenezer-kofi-annans-projects --project atlas-and-away
```

Wait for the deployment to become Ready, then check the live website. Vercel CLI 66.2.0 was used for the initial deployment on 19 November 2026.

On a computer that is not linked yet, sign in to the Vercel account that owns the team and link the existing project first:

```powershell
npx --yes vercel@66.2.0 login
npx --yes vercel@66.2.0 link --yes --scope ebenezer-kofi-annans-projects --project atlas-and-away
```

The CLI stores local project settings in `.vercel/` and may create `.env.local` for its deployment credentials. Both are excluded from Git and from website uploads. Do not add them to commits.

## What the live site does

The country content and images are static files. Saved destinations and checklists remain specific to the visitor's browser and website origin. Currency reference data loads from the external exchange-rate provider on request. The enquiry form remains a demonstration, and hotel reservations happen on the linked official property websites.
