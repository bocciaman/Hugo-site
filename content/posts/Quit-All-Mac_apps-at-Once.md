---
title: "Quit All Mac Apps at Once"
description: "Two ways to quit all open Mac apps at once: a Keyboard Maestro macro for power users and an Apple Shortcuts approach for everyone else, with a safe exclusion list."
date: 2023-12-16
url: /Quit-All-Mac_apps-at-Once/
image: /img/AllQuit.webp
categories:
  - Mac Apps
tags:
  - tutorials
  - Mac Automation
  - Keyboard Maestro
  - Shortcuts
  - Mac
  - Apple
draft: False
youtube_id: "xcxpCUd-LBA"
---

## Video

{{< youtube xcxpCUd-LBA >}}

## Introduction

In today's tutorial, I'll guide you through two different ways to close all your open apps in a flash. Whether you're a productivity enthusiast or just want a clean slate at the end of the day, this is one of those automations you'll use more than you'd expect. I'll cover a Keyboard Maestro approach for the power users and an Apple Shortcuts approach for anyone who'd rather not touch a line of code — so whichever camp you're in, you're covered.

## Why Quit All Your Apps at Once?

Think about how a workday ends: a dozen apps open, each holding a little RAM and a little of your attention. Quitting them one by one with Command + Q is tedious, and it's easy to leave a few running. Closing everything in a single action is great for a few reasons — it frees up memory and gives your Mac a fresh start, it clears mental clutter when you switch from work mode to personal time, and it's the perfect prelude to a restart or a focus session. The catch is that you almost never want to quit *literally* everything (you'd take Finder and your automation tools down with it), so the real trick is quitting everything *except* a chosen few. Both methods below handle exactly that.

## Method 1: Keyboard Maestro

This is my preferred method. In Keyboard Maestro, you create a macro with an **"Execute an AppleScript"** action and drop in the script below. Give the macro whatever trigger you like — a hotkey is ideal. The script does the heavy lifting; the only fiddly part is getting the AppleScript syntax right, so I've provided the whole thing for you here:

```applescript
-- get list of open apps
tell application "System Events"
	set allApps to displayed name of (every process whose background only is false) as list
end tell

-- leave some apps open 
set exclusions to {"AppleScript Editor", "Screenflow", "Finder", "Keyboard Maestro", "Keyboard Maestro Engine", "Google Chrome", "AppleScript"}

-- quit each app
repeat with thisApp in allApps
	set thisApp to thisApp as text
	if thisApp is not in exclusions then
		tell application thisApp to quit
	end if
end repeat
```
Let me explain what this script is doing so you can adjust it confidently. First, it asks System Events for a list of every app that's currently visible (the `background only is false` part keeps it from touching invisible background processes). Then it defines an `exclusions` list — the apps you want left alone. In my version that's things like Finder, Keyboard Maestro and its engine (you don't want to quit the tool that's running the macro), my screen-recording app, and my main browser. Finally, it loops through every open app and quits it *unless* it's on the exclusions list.

The exclusions list is the part you'll want to make your own. Add the apps you always want to keep running — maybe your music player, your chat app, or your notes — and remove the ones I've listed that you don't use. This is my preferred method because it's fast, fully customizable, and runs from a single hotkey, but you should tailor that list to your workflow.

## Method 2: Apple Shortcuts

If AppleScript isn't your thing, Apple's Shortcuts app can do the same job with zero code. Create a new shortcut and add the **"Quit App"** action — but instead of picking individual apps, set it to quit **All Apps**, and then use the option to **select the apps you want to exclude**. It's the same logic as the AppleScript version (quit everything except a chosen few), just handled through Shortcuts' visual interface. You point and click to choose your exceptions, and you're done.

![Shortcuts editor](/img/shortcutsint.webp)

This is the route I'd recommend if you're not comfortable editing scripts — you just have to know which buttons to click. Once it's built, you can run it from the Shortcuts widget, assign it to the menu bar, trigger it with Siri, or even tie it to your Mac's Action Button or a hotkey, so it's just as quick to fire as the Keyboard Maestro version.

## Which Should You Choose?

Both methods get you to the same place: every app closed except the handful you care about. Reach for **Keyboard Maestro** if you want maximum control, a dedicated hotkey, and you're comfortable tweaking a script. Reach for **Shortcuts** if you'd rather keep things visual and code-free. Honestly, neither is wrong — it comes down to which tool already fits the way you work.

## Conclusion

Closing all your apps at once is a small automation that delivers a satisfying clean slate, frees up memory, and helps you mentally shift gears. Whether you go the Keyboard Maestro route with the AppleScript above or keep it simple with a Shortcut, the key is customizing your exclusions so the tools you actually need stay open. Give one of them a try and make it your end-of-day ritual. And let me know in the comments below which option you went with — I'm always curious how people set theirs up.