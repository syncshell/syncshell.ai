---
title: Web UI
description:
  A clearer view of Syncthing folders, devices, notifications, and conflicts.
summary:
  Manage folders and devices in a redesigned interface served by Syncthing
  itself.
order: 2
availability: Included
statusNote:
  Included with the plugin's current 0.1.8 source. A standalone release archive
  is planned. Screenshots show the 0.1.8 development preview.
sourceUrl: https://github.com/omarchy-QOL/syncshell/tree/main/webui
screenshots:
  - src: /media/web/overview-v0.1.8-preview.png
    alt:
      Syncshell Web UI with folder activity, local device information, and
      remote devices in the Nord theme
    caption: Folder and device overview. Nord theme, v0.1.8 development preview.
    width: 1908
    height: 1162
  - src: /media/web/notifications-v0.1.8-preview.png
    alt: Syncshell Web UI notifications view
    caption: Notifications. v0.1.8 development preview.
    width: 1908
    height: 1162
  - src: /media/web/conflicts-v0.1.8-preview.png
    alt:
      Syncshell Web UI conflict review with current and conflicting file entries
    caption: Conflict review remains beta. v0.1.8 development preview.
    width: 1908
    height: 1019
---

## Use it today

Install the [Omarchy plugin](/docs/plugin/), then select **Web UI**. Its Modern
and Omarchy profiles use the same interface; the Omarchy profile follows your
desktop palette. Syncthing continues to serve the page and authenticate access.

The current source includes the redesigned Preact interface. The latest 0.1.7
tag predates this port. A standalone Web archive will have its own release and
installation instructions when published.

## What it shows

- **Overview:** folders and devices, with current activity separated from
  configuration and identification details.
- **Notifications:** messages and pending actions in one place.
- **Conflict review (beta):** discover conflict files in Syncthing's index and
  recheck folders. File actions need the optional desktop connection.

## Install custom GUI assets

Syncthing supports a complete replacement GUI through its **GUI override
directory**. Find that directory using `syncthing --paths`, with the same
configuration options and user as the instance you want to customize. The
`STGUIASSETS` environment variable can select another asset root.

For a source build, follow the
[Web UI source instructions](https://github.com/omarchy-QOL/syncshell/blob/main/webui/UPSTREAM.md).
The current build commands, run from that checkout's `webui/` directory, are:

```bash
npm ci
npm run build
```

Copy the contents of `dist/` into a named directory such as `syncshell-modern/`
beneath your instance's GUI override directory. The result must have
`syncshell-modern/index.html`, alongside its assets and license files. Avoid
overwriting another installer's existing profile.

Restart your Syncthing instance after first installation so the theme selector
lists the new profile. Select **syncshell-modern** in Syncthing's GUI theme
setting. Open your usual Syncthing address; no separate web server is needed.
See [Syncthing's GUI documentation](https://docs.syncthing.net/dev/web.html) and
[custom GUI support](https://docs.syncthing.net/users/faq.html#i-don-t-like-the-gui-or-the-theme-can-it-be-changed).

## Update or remove

For a plugin-managed profile, update or remove it through the plugin. For a
manually installed profile, replace its assets with your next verified build. To
remove it, select Syncthing's default theme first, then remove only the profile
directory you installed. Your synchronization configuration and files are
independent of the GUI assets.

## Local file actions

Open the page through the plugin to enable local file actions. Syncthing must
run on the same desktop, as the same user. Containers, tunnels, relative paths,
and symlinked paths are unsupported for these actions.

File links open the containing directory. Autoresolve only restores a conflict
file's original name when that name is absent; it does not merge contents or
replace an existing file. Reopen through the plugin if its core restarts.
Discovery and rechecks remain available without desktop access.

The current interface is tested against Syncthing v2.1.3. It retains Syncthing
attribution and licenses. For engine behavior, see the
[Syncthing documentation](https://docs.syncthing.net/).
