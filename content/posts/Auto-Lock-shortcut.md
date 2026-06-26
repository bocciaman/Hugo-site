---
title: "Auto Lock Shortcut"
description: "A shortcut for the auto lock page"
date: 2022-12-12
url: /Auto-Lock-shortcut/
image: /img/Autolock.png
categories:
  - Shortcut
tags:
  - AutoLock
  - Shortcut
  - iPadOS
draft: false
youtube_id: "C3IrhpAqGQ8"
---

In this video, I try to build a shortcut that jumps straight to the iPad's Auto-Lock setting. The idea came from a very specific annoyance: when I'm listening back to voice memo playbacks, the iPad's screen turns off after a while and the playback stops with it. I wanted a fast way to change the Auto-Lock interval so the screen would stay on during playback — and this is my attempt at automating that. I'll be honest with you up front: it didn't fully work the way I hoped, but there's a genuinely useful trick in here, and the story of *why* it didn't work is worth telling.

## Video

{{< youtube C3IrhpAqGQ8 >}}

## The Problem I Was Trying to Solve

Here's the scenario. On the iPad, the Auto-Lock setting controls how long the screen stays on before it dims and locks itself. That's great for saving battery, but it works against you when you're doing something that doesn't involve touching the screen — like listening to a long voice memo. The screen goes dark, the playback halts, and you have to wake the iPad and start again. What I wanted was a one-tap way to bump Auto-Lock up to a longer interval (or "Never") before a listening session, then set it back afterward.

## The Useful Part: A URL Scheme Shortcut

The core trick relies on something called a **URL scheme** — a special link that, instead of opening a website, opens a specific screen inside the Settings app. Here's the one that targets the Auto-Lock page:

```
prefs:root=DISPLAY&path=AUTOLOCK
```

You can use this inside the Shortcuts app with an **"Open URLs"** action. When the shortcut runs, iOS interprets that `prefs:` link and takes you directly to *Settings → Display & Brightness → Auto-Lock*. That part genuinely works, and it's a handy pattern to know — there are `prefs:` URLs for all sorts of Settings panels, so you can build shortcuts that jump straight to Wi-Fi, Bluetooth, Display, and more, saving yourself the tapping through nested menus.

## Where It Fell Short

Now the honest part. While the shortcut successfully *takes you to* the Auto-Lock settings page, that's as far as the automation goes. There's no supported way for a shortcut to actually *select* a different time interval for you — Apple doesn't expose that toggle to automation. So you still have to tap the option you want by hand once you land on the page. In other words, the shortcut saves you the navigation, but it can't complete the job end to end. For my voice-memo use case, that meant it didn't truly solve the "keep the screen on automatically" problem I set out to fix.

## Why I'm Sharing a Project That Didn't Fully Work

I think there's real value in showing the attempts that don't pan out, not just the polished wins. A few reasons. First, the `prefs:` URL-scheme technique itself is legitimately useful and reusable, even if this particular application of it came up short — you might find a better use for it than I did. Second, knowing the *limits* of Shortcuts saves you from chasing a solution that isn't possible; Apple simply doesn't let automation flip the Auto-Lock interval directly, and that's good to know before you spend an hour trying. And third, this is just how tinkering goes — you have an idea, you build it, you discover the boundary, and you learn something for next time.

If you do want to keep an iPad awake during playback, the more reliable route is to manually set Auto-Lock to a long interval or "Never" before you start, or to look at whether the playback app has its own keep-awake setting. Not as elegant as a one-tap shortcut, but it actually works.

## Other Handy `prefs:` Shortcuts

Since the URL-scheme trick is the real takeaway here, let me give you a few more that I've found genuinely useful so this post leaves you with something you can actually run today. The same `prefs:root=` pattern can jump you straight to all sorts of Settings panels: `prefs:root=WIFI` opens Wi-Fi, `prefs:root=Bluetooth` opens Bluetooth, `prefs:root=Battery` opens Battery, and `prefs:root=General` opens General. Drop any of these into a Shortcuts "Open URLs" action and you've got a one-tap jump to a settings screen you visit often. It's especially handy for panels buried several taps deep — instead of Settings → General → scroll → tap, you get there instantly. Apple doesn't officially document these, and they can change between iOS versions, so test any you rely on after a major update, but they're a great tool to keep in your back pocket.

## Conclusion

So this one's a "cool attempt" more than a clean victory — the shortcut gets you to the Auto-Lock page in a single tap thanks to the URL scheme, but it can't change the setting for you, which was the whole goal. Still, I walked away with a reusable technique and a clearer understanding of what Shortcuts can and can't do. Sometimes that's exactly what you get out of a little automation experiment, and it's still time well spent.