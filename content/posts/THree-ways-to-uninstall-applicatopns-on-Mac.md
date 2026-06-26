---
title: "Three Ways to Uninstall Applicatopns on Mac"
description: ""
date: 2023-04-08
url: /Three-ways-to-uninstall-applicatopns-on-Mac/
image: /img/Uninstall.webp
categories:
  - macOS
tags:
  - Uninstall
  - Homebrew
  - AppCleaner
draft: false
youtube_id: "xD1it3zUVR4"
---

## Video

{{< youtube xD1it3zUVR4 >}}

## Introduction

If you're new to the Mac or you just want a cleaner way to remove the apps you no longer use, this one's for you. Uninstalling software on a Mac isn't quite as obvious as it is on Windows — there's no "Add or Remove Programs" screen — and the method most people reach for first actually leaves bits and pieces behind. So in this tutorial I walk through three different ways to uninstall an app, from the quick-and-easy approach to the thorough one to the command-line option for the power users. By the end you'll know exactly which to use depending on how clean you want the job to be.

## Method 1: The Native macOS Trash Method

This is the one almost everyone already knows: drag the app from your Applications folder to the Trash, then empty the Trash. Open Applications, find the app, drag its icon to the Trash in your Dock (or right-click and choose "Move to Trash"), and you're basically done. It's fast, it requires zero extra software, and for a lot of apps it's perfectly fine.

Here's the catch, though, and it's worth understanding. Dragging an app to the Trash removes the app *bundle* itself, but many apps scatter supporting files around your system — preference files, caches, application support folders, login items, and more, usually tucked away inside your Library folders. Those leftovers don't take up much space individually, but over years of installing and removing software they pile up, and occasionally they cause weird behavior if you reinstall the same app later. So the trash method is great for a quick cleanup, just know it's not a complete one.

## Method 2: AppCleaner (The Thorough Way)

When I actually want an app *gone* — every trace of it — I reach for [AppCleaner](https://freemacsoft.net/appcleaner/). It's a free third-party utility, and it's one of those tools I think every Mac user should have sitting in their Applications folder. It's lightweight, it's free, and it does exactly one thing very well.

Using it couldn't be simpler. Download AppCleaner from the link above and open it. Then drag the app you want to remove onto the AppCleaner window, and it instantly scans your system for every associated file — the app itself plus all those scattered preferences, caches, and support files I mentioned. It presents you with a tidy checklist of everything it found, you confirm, and it deletes the whole lot in one go. No hunting through Library folders by hand, no guesswork. If you care about keeping your Mac genuinely clean, this is the method I'd recommend most of the time.

## Method 3: The Homebrew Command Line

The third method is for folks who are comfortable in the terminal — or want to get comfortable. If you originally installed an app using [Homebrew](https://brew.sh), the Mac's popular package manager, then the cleanest way to remove it is right back through Homebrew. (If you've never set up Homebrew, I've got a separate video walking through that first-time installation, so check that out and then come back.)

Once Homebrew is installed, uninstalling is a single command. For a regular command-line tool you'd run `brew uninstall <appname>`, and for a GUI application installed as a cask you'd run `brew uninstall --cask <appname>`. Homebrew handles removing the files it placed for you. The big advantage here is consistency and speed: if you manage your software through Homebrew, you can install and uninstall everything the same way, and it slots neatly into scripts if you ever want to automate setting up or cleaning out a machine.

## What Those Leftover Files Actually Are

It's worth understanding what we mean by "leftover files," because it demystifies why AppCleaner exists at all. When you install and run a Mac app, it tends to create supporting files in a few predictable places: preference files (usually in `~/Library/Preferences`), caches (`~/Library/Caches`), and an Application Support folder (`~/Library/Application Support`) where it stores things like settings, databases, and your saved data. Some apps also install login items that launch them at startup, or background helpers that keep running.

When you drag just the app to the Trash, all of those supporting files stay behind, orphaned, because nothing is left to clean them up. Most of the time they're harmless — a few megabytes here and there. But two situations make them worth caring about. First, if you reinstall the same app later, those old preference files can carry over stale or corrupted settings that cause odd behavior, and a truly clean reinstall means clearing them out. Second, if you're someone who tries a lot of software, those orphaned files accumulate over months and years into a meaningful amount of digital clutter. That's the whole reason a tool like AppCleaner is so handy: it knows where apps hide their files and sweeps them all out at once, so you don't have to go spelunking through your Library folders by hand.

## Which Method Should You Use?

So which one is right? It depends on what you're after. If you just want something gone quickly and you're not worried about a few leftover files, the trash method is totally fine. If you want a genuinely complete removal with no orphaned files left behind, AppCleaner is my go-to. And if you live in the terminal or originally installed the app with Homebrew, the command-line route keeps everything tidy and consistent. There's no single "correct" answer — it's about matching the method to the moment.

## Conclusion

That's three solid ways to uninstall apps on your Mac, each with its own strengths. Whether you're brand new to macOS or just want a cleaner system, you've now got options ranging from the dead-simple to the thorough to the power-user approach. Follow along with the video to see each one in action, and pick whichever fits how you like to work. Personally, I keep AppCleaner around for anything I want fully gone — but it's good to know all three so you can choose the right tool for the job.
