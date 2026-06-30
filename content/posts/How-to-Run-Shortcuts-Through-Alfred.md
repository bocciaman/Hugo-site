---
title: "How to Run Shortcuts Through Alfred"
author: "A.B. Anwar"
description: "How to trigger any Apple Shortcut directly from the Alfred search bar using a free Alfred workflow — combining Mac Shortcuts speed with Alfred's instant-access launcher."
date: 2022-08-02
url: /How-to-Run-Shortcuts-Through-Alfred/
image: /img/Alfredshort.webp
categories:
  - Alfred
tags:
  - Alfred
  - Mac Automation
  - Shortcuts
  - Productivity
draft: false
youtube_id: "CzS4KMC-uCY"
---

In this video, I show you how I run shortcuts through the Alfred search bar. The shortcut I run in this particular demonstration is the "Calculate Tip" shortcut. Finally, I share the website where you can download and install the Alfred workflow for yourself.

## Video

{{< youtube CzS4KMC-uCY >}}

## Introduction

Alfred makes our lives easier by giving us lightning-fast access to applications, files, and — as I'll show here — Apple Shortcuts. If you've built up a collection of Shortcuts on your Mac, you've probably noticed there's no super-quick way to fire one off; you usually have to dig through the menu bar, the Shortcuts app, or a widget. In this tutorial I show you how to run any Shortcut straight from the Alfred search bar, using the handy "Calculate Tip" shortcut as my example, and I point you to where you can grab the Alfred workflow that makes it possible.

## Why Run Shortcuts Through Alfred?

Apple's Shortcuts app is genuinely powerful, but launching a shortcut isn't always fast — and speed is the whole point of automation. Alfred, on the other hand, is built for speed: a couple of keystrokes and you're off. Bringing the two together gives you the best of both worlds. Instead of hunting for a shortcut, you summon Alfred, type a couple of letters, and your shortcut runs immediately. For anyone who already lives in Alfred for launching apps and searching, this just folds your shortcuts into a workflow you're already using dozens of times a day.

## The "Calculate Tip" Example

The shortcut I demo is "Calculate Tip," and it's a perfect illustration of the payoff. We've all been there at a restaurant doing mental math on the tip. With this shortcut, you simply type the bill amount into the Alfred search bar followed by the keyword, and it instantly calculates the tip based on a default percentage and shows you the total. No phone calculator, no fumbling — just type the number and read the answer. It's a small thing, but it's exactly the kind of everyday friction that automation is great at removing, and it shows how a shortcut becomes far more useful when it's only a keystroke away.

## How to Set It Up

Getting this working comes down to one piece: the Alfred workflow that bridges Alfred and Shortcuts. Here's the flow:

First, **download and install the Alfred workflow** (you'll need Alfred's Powerpack, which is what unlocks workflows in the first place). Installing an Alfred workflow is as easy as double-clicking the downloaded file — Alfred imports it for you.

Once it's installed, you trigger shortcuts by typing **`SC`** into the Alfred search bar, followed by the shortcut you want to run. `SC` is the keyword that activates the workflow — think of it as telling Alfred, "I want to run a Shortcut now." From there you point it at the specific shortcut, pass along any input it needs (like the bill amount for Calculate Tip), and hit Enter. The workflow hands your request off to the Shortcuts app, which runs the shortcut and returns the result right there in Alfred.

That's the entire setup. Once it's in place, every shortcut you own becomes reachable through the same fast `SC` keyword, so you're not memorizing a different trigger for each one — you learn the pattern once and it works across your whole library.

## A Few Tips

A couple of things to get the most out of this. Keep the names of your shortcuts clear and distinct, since you'll be calling them by name through Alfred — short, memorable names make the whole thing faster. And think about which shortcuts genuinely benefit from instant access: quick calculators, text transformations, toggles, and lookups are ideal candidates, because the speed boost matters most for things you do frequently and want done *now*.

## Great Shortcuts to Trigger This Way

Once the workflow is in place, the fun part is deciding which shortcuts deserve a spot behind that fast `SC` keyword. The best candidates are the small, frequent ones where speed genuinely matters. Quick calculators like the Calculate Tip example are perfect. Text transformations — converting a selection to uppercase, stripping formatting, generating a timestamp — feel almost magical from the keyboard. Toggles and system tweaks, lookups, unit conversions, and "create a new note/reminder from this text" shortcuts all shine here too. The common thread is that these are things you want done *right now*, without breaking stride. Heavier, occasional shortcuts are fine to leave in the Shortcuts app; it's the everyday quick-hit ones that benefit most from living a keystroke away in Alfred.

## Conclusion

Alfred is already one of the best productivity tools on the Mac, and wiring your Shortcuts into it makes it even better. By running shortcuts through the Alfred search bar with the `SC` keyword, you turn Apple's powerful-but-sometimes-slow Shortcuts app into something you can trigger in a heartbeat. Download the workflow, give it a try with a shortcut like Calculate Tip, and start folding your automations into the search bar you already reach for all day long. Your workflow will thank you.