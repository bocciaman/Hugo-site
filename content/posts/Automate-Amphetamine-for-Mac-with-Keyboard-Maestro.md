---
title: "Automate Amphetamine for Mac With Keyboard Maestro"
description: "Use AppleScript and Keyboard Maestro to automate Amphetamine on your Mac — trigger a timed stay-awake session with a single keyboard shortcut, no menu-bar clicking required."
date: 2024-05-12
url: /Automate-Amphetamine-for-Mac-with-Keyboard-Maestro/
image: /img/amphetaminekm.webp
categories:
  - Mac
tags:
  - AppleScript
  - Keyboard Maestro
  - Amphetamine
  - Automation
  - Keyboard Shortcut
draft: false
youtube_id: "8UESvHjr_f8"
---
## Video
{{< youtube 8UESvHjr_f8 >}}

## Keeping Your Mac Awake, On Demand

In this video, I show you how to automate [Amphetamine](https://apps.apple.com/us/app/amphetamine/id937984704?mt=12) — the popular free app that keeps your Mac awake — using a little AppleScript with Keyboard Maestro as the trigger. The result is a single keyboard shortcut that flips your Mac into "stay awake" mode for a set duration, no menu-bar clicking required.

## Why Bother Automating Amphetamine?

If you don't know Amphetamine, it's a free Mac app that prevents your Mac from going to sleep, dimming its display, or starting the screensaver. It's invaluable when you're doing something that doesn't involve touching the keyboard — watching a long video, running a download, giving a presentation, or in my case, listening to playback where the Mac would otherwise nod off and interrupt you.

Normally you'd reach for the menu-bar icon, click it, and pick a duration every time. That works, but if you do it often, it's a small recurring friction. By wrapping it in an AppleScript and binding that to a Keyboard Maestro hotkey, you turn the whole thing into one keystroke that starts a session with your preferred settings automatically. Personally, I use **Hyper key + A** to toggle Amphetamine on and off, and it kicks off with the default duration baked into the AppleScript.

## The Script

Here's the entire automation — it's a single line of AppleScript:

```applescript
tell application "Amphetamine" to start new session with options {duration:4, interval:hours, displaySleepAllowed:false}
```

Let me unpack what each part is doing, because the options are easy to tailor to your needs. It tells Amphetamine to start a new session with three settings: `duration:4` and `interval:hours` mean the session lasts four hours, and `displaySleepAllowed:false` means the screen stays on too, not just the system. If you wanted a one-hour session you'd change `duration` to `1`; if you wanted to allow the display to sleep while keeping the system awake (handy for background tasks), you'd flip `displaySleepAllowed` to `true`. Amphetamine's AppleScript support is genuinely flexible, so you can craft the exact behavior you want.

## Wiring It Into Keyboard Maestro

To turn this into a hotkey, create a new macro in Keyboard Maestro. Give it a **Hot Key trigger** — I use Hyper key + A, but any unused combination works — and add a single **Execute an AppleScript** action containing the line above. Save it, and that's it. Now pressing your hotkey instantly starts an Amphetamine session with your chosen duration, no clicking required.

A quick word on the "Hyper key" since I mention it a lot: it's a custom modifier (usually Caps Lock remapped to act as Control + Option + Command + Shift all at once) that gives you a whole layer of conflict-free shortcuts. If you don't have one set up, just pick any normal hotkey combination instead — the automation works exactly the same.

## Making It a Toggle

One nice refinement: with a little extra logic you can make the same hotkey turn Amphetamine *off* if a session is already running, giving you a true on/off toggle rather than just an "on" switch. Amphetamine's scripting dictionary includes commands to end sessions, so you can have Keyboard Maestro check the current state and either start or stop accordingly. For a quick tip, though, the single start command above covers the most common need.

## Common Use Cases

To give you a feel for when this earns its keep, here are the moments I reach for it. Watching a long video or following an on-screen recipe, where you're not touching the keyboard but you need the screen to stay on. Giving a presentation or screen-sharing on a call, where having your Mac dim or lock mid-sentence is genuinely awkward. Running a long download, backup, or render that you want to finish without the system dozing off. And reading a lengthy article where the screen would otherwise time out right as you hit the good part. In every one of these, a single tap of the hotkey buys you a guaranteed block of wakefulness without diving into System Settings — and because the session ends on its own after the duration you set, you never have to remember to turn it back off.

## A Note on Battery

One sensible habit: be a little mindful on a laptop, since keeping the display awake uses more power. That's exactly why I set a finite duration in the script rather than an indefinite session — four hours covers almost any task, and then your Mac quietly returns to its normal energy-saving behavior. Plugged in, it's a non-issue; on battery, a bounded session is the responsible default.

## Conclusion

This is a small automation, but it's the kind of thing that quietly improves your day every time you use it. Instead of hunting for a menu-bar icon, you tap one shortcut and your Mac stays wide awake for as long as you told it to. Drop the AppleScript into a Keyboard Maestro macro, bind it to a hotkey, and adjust the duration to taste. It's a perfect example of how a single line of script plus the right trigger can smooth out a recurring little chore in your Mac workflow.