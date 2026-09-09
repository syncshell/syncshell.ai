---
title: Omarchy plugin
description:
  Syncthing activity and everyday folder controls in your desktop shell.
summary:
  Follow file activity, manage folders, and open the Web UI from the Omarchy
  bar.
order: 1
availability: Available
statusNote:
  "Latest tag: v0.1.7. The current source installation contains 0.1.8
  development work. Videos below were recorded with v0.1.7."
sourceUrl: https://github.com/omarchy-QOL/syncshell
releaseUrl: https://github.com/omarchy-QOL/syncshell/releases
videos:
  - src: /media/plugin/activity-v0.1.7.mp4
    poster: /media/plugin/activity-v0.1.7.webp
    title: File activity
    description:
      Copy and remove files while the panel follows synchronization. Recorded
      with v0.1.7; silent demonstration.
    width: 1920
    height: 1200
  - src: /media/plugin/folders-v0.1.7.mp4
    poster: /media/plugin/folders-v0.1.7.webp
    title: Folder controls
    description:
      Unlink, relink, and forget a folder while keeping its local files.
      Recorded with v0.1.7; silent demonstration.
    width: 1920
    height: 1200
---

## Install

The current 0.1.8 source targets **Omarchy on Linux x86_64**. Other shell
adapters and architectures are future work. This command installs from the
repository; it does not pin a tagged release.

```bash
omarchy plugin add https://github.com/omarchy-QOL/syncshell.git --enable
```

Open the widget and expand **More**. Existing Syncthing installations are
detected. If Syncthing is missing, **Install Syncthing** installs the package
and starts the user service. Review the
[README](https://github.com/omarchy-QOL/syncshell#readme) for current support.

## Everyday controls

- Select a folder card to open its directory.
- Use **+** to configure an existing directory, and choose devices to share it
  with. Accept an incoming folder offer to preserve its Folder ID.
- Select **Rescan** to ask Syncthing to scan for local changes.
- **Unlink** pauses a folder; **Link** resumes it. **Forget** removes the
  folder's Syncthing configuration while keeping its local files.
- Open **Web UI** for device setup and advanced folder options.

The service toggle controls a verified user-service instance. An externally
managed Syncthing instance may work through its API without exposing service
controls. Pause/resume and rescan operate on the selected instance.

## Appearance

Open settings with the gear or `s`. The plugin supports branded or themed icons,
Syncthing's default GUI, the Modern Web UI, and the same Web UI with Omarchy
colors. The Omarchy profile follows theme changes.

Settings live in `~/.config/omarchy/ilyazar.syncthing/settings.toml`. The 0.1.8
source validates edits and offers migration for older settings.

## Update

```bash
omarchy plugin update io.github.ilyazar.syncthing
omarchy-restart-shell
```

Restart the shell after updating so its panel and bundled core load together.

## Remove

In plugin settings, select **Cleanly remove Syncthing plugin**. Choose whether
to keep the plugin settings. Removal restores Syncthing's default Web UI and
leaves Syncthing itself, its configuration, and synchronized files in place.

## Limits

The panel covers routine local folder operations. Use the Web UI for encrypted
sharing, untrusted devices, and advanced settings. The plugin runs under your
desktop user and uses that user's permissions. Local browser file actions have
the additional restrictions described in the [Web UI guide](/docs/web/).
