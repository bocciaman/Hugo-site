---
title: "How to Remote Control Your Mac With Keyboard Maestro"
description: "How to trigger any Keyboard Maestro macro on your Mac from your iPhone or iPad using an iOS Shortcut — turning your phone into a remote control for your desktop."
date: 2022-09-13
url: /How-to-Remote-Control-Your-Mac-with-Keyboard-Maestro/
image: /img/launch.png
categories:
  - Keyboard Maestro
tags:
  - Keyboard Maestro
  - Shortcuts
  - iOS
  - automation
draft: false
---

In this video, I walk through how to trigger a Keyboard Maestro macro on your Mac remotely — from your iPhone or iPad — using an iOS Shortcut as the trigger. It's a genuinely powerful trick: it means a tap on your phone can kick off anything your Mac is capable of automating, even when you're across the room or out of the house.

## Video

{{< youtube usjMG7Vp-z4 >}}

## Why Remote-Trigger Your Mac?

Before the how, let me sell you on the why, because once this clicks you'll start seeing uses everywhere. Your Mac is the most capable device you own when it comes to automation — Keyboard Maestro can launch apps, run scripts, rearrange windows, type text, control music, and basically anything else. Your iPhone, on the other hand, is the device that's always in your pocket. Bridging the two means you get your Mac's power with your phone's convenience.

A few real examples: tap a button on your phone to start a "focus" routine on your Mac that quits distracting apps and opens your work tools. Trigger a backup or a long-running script while you're away from the desk. Start or stop music. Kick off a screen recording. The point is, anything you've already built as a Keyboard Maestro macro can now be fired from your phone with a single tap.

## How the Pieces Fit Together

There are two halves to this setup, and understanding the roles makes it much easier. On the Mac side, **Keyboard Maestro** holds the macro you want to run, and it exposes that macro to the outside world through a web trigger — essentially a special URL that, when visited, runs the macro. On the iOS side, **Shortcuts** is the trigger: you build a simple shortcut whose only job is to call that URL. Tap the shortcut, the URL gets hit, and your Mac springs into action.

## Setting It Up on the Mac

First, you need the macro you want to run remotely. Build it in Keyboard Maestro as you normally would — or use one you already have. The key addition is the trigger: instead of (or in addition to) a hotkey, you give the macro a trigger that can be activated over the network. Keyboard Maestro can listen for an incoming web request and match it to a specific macro, so you'll configure the macro to fire when that request comes in.

Make a note of the address Keyboard Maestro gives you for reaching your Mac, along with whatever identifier points to the specific macro. That combination is what your iPhone will call. For this to work while you're on the same network, your Mac needs to be awake and reachable; if you want it to work from anywhere, you'll need your Mac accessible beyond your local network, which is a more advanced setup involving your router or a remote-access service.

## Setting Up the iOS Shortcut

On your iPhone or iPad, open the Shortcuts app and create a new shortcut. The core action is simple: use a **"Get Contents of URL"** action pointed at the trigger address from Keyboard Maestro. That's really the heart of it — the shortcut visits the URL, Keyboard Maestro sees the request, and the matching macro runs on your Mac.

Once it's built, give the shortcut a clear name and, if you like, add it to your Home Screen or trigger it with Siri or the Action Button. Now running your Mac macro is as easy as tapping an icon or saying a phrase.

## A Few Practical Notes

Keep your Mac awake for this to work — a sleeping Mac won't respond, so you may want to pair this with something like Amphetamine to keep it alert when you know you'll be triggering it. Test the shortcut while you're on the same Wi-Fi network first to confirm the basic plumbing works before you try anything fancier. And start with a harmless macro (one that just shows a notification, say) so you can confirm the trigger fires before wiring it up to something more consequential.

## Conclusion

Remote-triggering your Mac from your phone is one of those automations that feels a little bit like magic the first time it works — a tap on a device in your pocket, and your Mac across the room does your bidding. The setup comes down to two simple pieces: a Keyboard Maestro macro with a web trigger on the Mac, and a one-action Shortcut on iOS that calls it. Once you've got the pattern down, you can point it at any macro you build.

Keyboard Maestro is a genuinely powerful Mac automation program, and if you don't already own it, you can grab it from [Stairways Software](https://sites.fastspring.com/stairways/order/confirm). It's one of the best investments I've made in my Mac workflow, and tricks like this one are exactly why.