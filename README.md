# NEXTFORM

Cinematic portfolio website built with Vite and native JavaScript components. The frontend and future Express/Node backend are kept separate. The current site runs entirely in the browser.

## Structure

```text
NEXTFORM/
├── frontend/
├── backend/
├── .gitignore
└── README.md
```

- `frontend/src/`: Components, page composition, styles, and hero artwork.
- `frontend/assets/`: The three approved cinematic project preview images, imported directly by Vite.
- `frontend/public/`: Public files such as the favicon.
- `frontend/package-lock.json`: Committed dependency lockfile for reproducible installs.
- `backend/src/`: Routes, controllers, and services scaffold; no backend runtime yet.
- `tmp/`: Ignored local QA captures and helper scripts; not required for development or deployment.

## Requirements

Use Node.js **22.x**, at least **22.12**, and npm. `frontend/package.json` declares Node 22.x for consistent local and Vercel builds.

## Local frontend development

From the repository root:

```sh
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite. On Windows PowerShell with script execution disabled, use `npm.cmd` instead of `npm`.

No root-level or backend dependency installation is needed.

## Production build

From `frontend/`:

```sh
npm ci
npm run build
```

Vite writes the static site to `frontend/dist/`. Do not commit that directory or `node_modules/`.

Preview the production build locally:

```sh
npm run preview
```

Open the preview URL printed by Vite. The preview server is for local verification, not production hosting.

## GitHub version control

The repository is initialized locally on `main`. No commit, remote, or push is created automatically. After reviewing the files, create an empty repository on GitHub, then run from this project's root:

```sh
git status --short
git add .
git commit -m "Prepare NEXTFORM portfolio for deployment"
git remote add origin <YOUR_GITHUB_REPOSITORY_URL>
git push -u origin main
```

Replace the repository URL placeholder with your own GitHub remote. Both `frontend/` and `backend/` belong in the same repository. Required images and the npm lockfile are included; dependencies, builds, environment files, Vercel local state, credentials, and local QA artifacts are excluded by the root `.gitignore`.

## Vercel deployment

Import the GitHub repository as a new Vercel project and set:

| Setting | Value |
| --- | --- |
| Root Directory | **`frontend`** |
| Framework Preset | **Vite** (automatically detected) |
| Install Command | Default npm detection, or `npm ci` |
| Build Command | **`npm run build`** |
| Output Directory | **`dist`** |
| Node.js Version | **22.x** |
| Environment Variables | **None required** |

Build and output paths are relative to `frontend/`. The Root Directory is a Vercel project setting; no root-level build script or backend deployment is required. All imported images are inside `frontend/`, so access to source files outside the Root Directory is unnecessary.

After deployment, verify the homepage, loaded images, `#work` link, project previews, and contact email links on the assigned URL.

### Routing

This is a single static homepage with fragment links (`#work`, `#projects`, `#main`) and native dialogs. It does **not** use a client-side pathname router. Reloading a fragment URL still requests `/`, so no catch-all rewrite or `vercel.json` is needed. Arbitrary paths such as `/about` are not currently application routes. If a pathname router is added later, configure the appropriate fallback then.

### Deployment exclusions

`frontend/.vercelignore` keeps local dependencies, generated output, environment files, and credentials out of CLI uploads. The production output contains only the built page, bundled scripts/styles, imported images, and public assets. Old images retained in source are not bundled unless imported; no approved assets have been deleted.

## Environment and backend

Neither the frontend nor backend currently requires environment variables, API keys, or an API server. No `.env.example` is needed until configuration exists. Future example files should contain variable names with empty values, never real credentials. Browser-exposed `VITE_*` values must not contain secrets.

The contact section and footer use native email links from the shared configuration in `frontend/src/config/site.js`. The LET'S TALK action opens the visitor's email application; visitors review and send their message there. The website does not send emails automatically or store submissions. The previous project-brief form has been removed. Unconfigured social destinations remain hidden. See `backend/README.md` before adding backend functionality.

## Assets and external resources

The approved project images are imported from `frontend/assets/`; the hero image is imported from `frontend/src/assets/images/`. Vite creates production asset URLs, including correct handling of filenames containing spaces. See `frontend/ASSETS.md` for the image mapping.

DM Sans loads from Google Fonts, with Arial as its fallback. The editorial serif uses Georgia. Font loading requires internet access; all portfolio preview images are served from the deployed site.

## Verification

Run `npm run build` from `frontend/` after changes. Verify the production preview, not just the development server, when checking deployed asset paths and runtime behavior. Generated QA files remain local in `tmp/` and are excluded from version control.

Official references: [Vercel monorepos](https://vercel.com/docs/monorepos), [Vite static deployment](https://vite.dev/guide/static-deploy.html), and [Vercel rewrites](https://vercel.com/docs/routing/rewrites).
