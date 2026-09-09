# Syncshell website

The project website and documentation at [syncshell.ai](https://syncshell.ai).
Built with Astro and Starlight. The operational Syncthing Web UI is maintained
[in the plugin repository](https://github.com/omarchy-QOL/syncshell/tree/main/webui).

```bash
npm ci
npm run dev
```

Preview at `http://localhost:4321`. Build static files with `npm run build`. Run
`npm run verify` before publication.

## Content

The landing page lives in `src/pages/index.astro`. Documentation lives in
`src/content/docs/docs/`. Interface frontmatter supplies card order, status,
source links, and media. Keep release claims and links current when a product
ships. Planned interfaces intentionally have no install commands.

Use versioned filenames in `public/media/`. The landing page selects its media
from the plugin and Web entries. Keep video downloads user-initiated and provide
descriptive captions. Screenshots and silent recordings retain their original
version labels.

## Deployment

`npm run deploy` uploads `dist/` as Cloudflare Workers static assets and binds
`syncshell.ai`. The site requires no server-rendered application or database.
Authenticate Wrangler locally, or supply `CLOUDFLARE_API_TOKEN` and
`CLOUDFLARE_ACCOUNT_ID` through the deployment environment.

GitHub Actions verifies pull requests. Pushes to `main` deploy the exact
verified build when the deployment secrets are configured. No credentials belong
in source or static output.

## Provenance

The presentation is adapted from the owner's Omarchy QOL website at revision
`854964d7a77f12568ed1dbaae92446059943e62e`. Syncshell supplies its own identity
and content. The connected-panel mark is original to this website.

Product media comes from the public Syncshell plugin repository and website.
Syncthing-derived product icons shown in media retain their attribution to the
Syncthing contributors. See `public/media/ATTRIBUTION.md` and upstream license
notices. Dependency licenses remain with their respective packages.
