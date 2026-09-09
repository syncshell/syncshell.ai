---
title: Overview
description: One Syncthing. Focused interfaces for the places you work.
---

Syncshell is a small family of interfaces around
[Syncthing](https://syncthing.net/). Start with the Omarchy plugin for quick
controls in your desktop shell, or use its Web UI for a fuller view of folders
and devices. Terminal and desktop applications are planned.

## The idea

Syncthing keeps your files in sync. Syncshell makes its activity easier to
understand and its everyday controls easier to reach.

- **One engine.** Each interface works with your existing Syncthing instance.
- **Independent interfaces.** Each product is intended to be installable on its
  own. The standalone Web release is the next step toward that goal.
- **Consistent actions.** Status and controls should mean the same thing in the
  shell, browser, terminal, and desktop application.

## Find your interface

| Interface                       | For                            | Status    |
| ------------------------------- | ------------------------------ | --------- |
| [Omarchy plugin](/docs/plugin/) | Activity and quick controls    | Available |
| [Web UI](/docs/web/)            | Folder and device management   | Included  |
| [Terminal](/docs/tui/)          | Keyboard workflows and SSH     | Planned   |
| [Desktop](/docs/desktop/)       | A dedicated desktop experience | Planned   |

The Web UI is currently included with the plugin's source installation. A
separately downloadable package is being prepared. The latest tagged plugin
release is
[v0.1.7](https://github.com/omarchy-QOL/syncshell/releases/tag/v0.1.7); current
source development is for 0.1.8. Check the
[repository](https://github.com/omarchy-QOL/syncshell) for release status.

## What comes next

The immediate focus is the 0.1.8 plugin release and independently installable
Web UI assets. The terminal interface follows, with a desktop application
planned after that. There are no release dates for the planned interfaces.

## Built around Syncthing

The plugin is an independent project, and the browser interface builds on
Syncthing's GUI. Syncthing remains responsible for synchronization, device
connections, and your files. Use the
[Syncthing documentation](https://docs.syncthing.net/) for synchronization
concepts and troubleshooting the engine itself.

For Syncshell questions, bug reports, and contributions, visit
[GitHub](https://github.com/omarchy-QOL/syncshell).
