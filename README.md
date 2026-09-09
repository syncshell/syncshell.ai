# Syncshell

Focused interfaces for Syncthing, starting with your desktop shell and browser.

**[Visit syncshell.ai](https://syncshell.ai)** ·
[Documentation](https://syncshell.ai/docs/) ·
[Application source](https://github.com/omarchy-QOL/syncshell)

- [Omarchy plugin](https://syncshell.ai/docs/plugin/): activity and quick
  controls in the bar. Available.
- [Web UI](https://syncshell.ai/docs/web/): folder and device management.
  Included with the plugin.
- [Terminal](https://syncshell.ai/docs/tui/): keyboard workflows and SSH.
  Planned.
- [Desktop](https://syncshell.ai/docs/desktop/): a dedicated desktop
  application. Planned.

Syncthing remains responsible for synchronizing your files. See the
[interface guides](https://syncshell.ai/docs/) for installation, current
availability, and limitations.

This repository contains the **website and documentation**. Report application
bugs in the
[Syncshell application repository](https://github.com/omarchy-QOL/syncshell/issues).
Website corrections and contributions are welcome here.

## Working on the website

The site uses Astro and Starlight. Documentation is Markdown in
`src/content/docs/docs/`; the landing page is `src/pages/index.astro`. Reusable
components live in `src/components/`, and the shared theme lives in
`src/styles/`.

```bash
npm ci
npm run dev
```

Open `http://localhost:4321`. Run `npm run verify` before submitting changes.
Updates to `main` are checked and automatically deployed.

## Branding

The site vendors the generated web and social exports from the local Syncshell
brand release `v0.1.0`. Its canonical sources live in `../assets/`; the website
keeps copies so independent clones and CI builds do not depend on a sibling
checkout.

The mixed-case `Syncshell` header remains live HTML text. `Sync` uses the main
foreground, while `shell` and the second file use the exact brand green
`#9ece6a` on every background.

Presentation adapted from Omarchy QOL. See the
[product media attribution](public/media/ATTRIBUTION.md) for source credits.
