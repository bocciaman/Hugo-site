---
title: "I Built a Hyprland-Style Tiling Window Manager for the Mac: Meet Hypertile"
author: "A.B. Anwar"
description: "Hypertile is a tiling window manager for macOS inspired by Hyprland. Windows arrange themselves as you open them, with four layouts, nine workspaces and a plain-text config."
date: 2026-11-19
url: /hypertile-tiling-window-manager-for-mac/
image: /img/hypertile-launch.webp
categories:
  - Apps
  - macOS
tags:
  - Hypertile
  - Window Management
  - Tiling
  - Hyprland
  - Indie Apps
draft: false
---

If you've ever used Hyprland on Linux, you know the feeling. You open a window and it just takes its place. You open another one and the screen splits to make room. Nothing overlaps and you never reach for the mouse.

Every time I came back to my Mac, I lost that. I was dragging windows around again, resizing them by hand and digging for the one hiding behind everything else. So I built the tool I wanted. It's called **Hypertile**, and it's available now.

<!--more-->

## Video

<video controls playsinline preload="metadata" poster="/img/hypertile-promo-poster.jpg" style="width:100%;height:auto;border-radius:8px;">
  <source src="/video/hypertile-promo.mp4" type="video/mp4">
</video>

<small>Music: Horizon by Next Route &amp; MEZCLA. License: <a href="https://license.declandp.info/NR">license.declandp.info/NR</a>. Free download / stream: <a href="https://links.al/kqi">links.al/kqi</a>. Music promoted by <a href="https://links.al/youtube">Audio Library</a>.</small>

## The problem with windows on a Mac

macOS lets every new window open wherever it wants, and that's usually right on top of the one you were working in. Snapping tools like Rectangle help, but you still decide where each window goes, one at a time. On a big monitor with five or six apps open, that adds up to a lot of small, annoying moves every day.

A tiling window manager flips that around. Instead of you arranging the windows, the computer does it, and it keeps them arranged as you open and close things.

## How Hypertile works

Hypertile divides your screen between the windows you have open. Open an app and it splits the space of the window it joins. Close one and the others grow to fill the gap. There's nothing to set up beyond one permission, which I cover below.

The default layout is **dwindle**, the same idea Hyprland uses. Each new window splits the one it lands next to, so the screen subdivides naturally as you work. A focus border shows which window is active, so you always know where your typing is going.

## Four layouts, one shortcut

Different work calls for different arrangements, so Hypertile has four layouts. Press **⌥M** to cycle the current workspace through them:

- **Dwindle:** each new window splits the one it joins. This is the default.
- **Master:** one large window beside a stack of the rest. Press **⌥⇧Return** to promote the focused window into the big slot.
- **Columns:** equal columns side by side. This one shines on a wide monitor.
- **Grid:** an even grid, so four windows become four quarters.

You can also give big displays their own layout. My config uses dwindle on a laptop screen and columns on a desktop monitor, and Hypertile switches automatically.

## Nine workspaces

Hypertile has nine workspaces, each with its own windows and its own layout. They're separate from macOS Spaces, and switching between them is instant.

- **⌥1 to ⌥9** jumps to a workspace, and **⌥Tab** goes back to the last one.
- **⌥⇧1 to ⌥⇧9** sends the focused window to a workspace and follows it there.
- **⌥E** shows a map of every workspace and where each window is, so you never lose track of anything.

That map is drawn from what Hypertile already knows about your windows. It doesn't capture your screen, which is why Hypertile never asks for Screen Recording permission.

## Keyboard first, mouse when you want it

Every shortcut starts with **⌥** (Option), and the pattern is easy to remember. **⌥** moves focus, **⌥⇧** moves the window and **⌃⌥** resizes it. All three use the vim keys H, J, K and L. I deliberately left the arrow keys alone, because macOS uses ⌥ with the arrows to jump and select by word, and I didn't want to take that away from every other app.

If you prefer the mouse, that works too. Drag one window onto another to swap them, or drag the edge between two windows to move the split.

## Windows that shouldn't tile

Some windows just don't belong in a tile. **⌥V** floats a window above the layout, and **⌥⇧V** floats it at the size that app normally opens at. For apps that should always float, like System Settings or Calculator, you add a window rule once and forget about it.

If a workspace physically can't fit another window, Hypertile floats the newest one on top instead of squeezing everything until it's unusable.

## A config file you can read

Hypertile keeps its settings in a plain-text file at `~/.config/hypertile/hypertile.conf`, written in Hyprland-style syntax. If you've used Hyprland, it will look familiar:

```
general {
    gaps_in = 5
    gaps_out = 10
    border_size = 2
    col.active_border = rgba(33ccffee)
    layout = dwindle
}

windowrule = float, class:^(System Settings|Calculator)$
```

Edit it and press **⌥⇧R** to reload. If you'd rather not touch a text file, the Settings window covers gaps, borders, layouts and shortcuts, and it writes to the same file, so both stay in sync.

## Private by design

Hypertile needs one permission: **Accessibility**, which macOS requires for any app that moves another app's windows. It never records your screen and never sends anything anywhere. There's no account and no analytics. The [privacy policy](/hypertile/privacy/) has the details.

It runs on macOS 14 Sonoma or later, on both Apple Silicon and Intel Macs. One tip: quit any other window manager first, like Rectangle, Amethyst or Magnet. Two of them running at once will fight over the same windows.

## Price

Hypertile is **$4.99, once**. There's no subscription, and updates are included. You can try every feature free for **14 days** before you decide.

[Get Hypertile](https://get.abanwar.com/l/hypertile)

You can read more on the [Hypertile page](/hypertile/). Hypertile is a one-person project, so if something doesn't work the way you expect, or there's a layout or shortcut you'd like to see, please [get in touch](/contact/). I read every message.
