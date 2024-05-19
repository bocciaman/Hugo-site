---
title: "Automate Amphetamine for Mac With Keyboard Maestro"
description: "Automate keeping your Mac awake."
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
---
## Video
{{< youtube 8UESvHjr_f8 >}}

## Discussion
In this video, I show you how to automate [Amphetamine](https://apps.apple.com/us/app/amphetamine/id937984704?mt=12), the application that keeps your Mac awake with a little AppleScript and Keyboard Maestro as the trigger. Personally, I use the keyboard shortcut Hyper key + A to turn Amphetamine on and off, and it uses the default duration set by AppleScript. 

The AppleScript is below is the Script.

## The Script
```applescript
tell application "Amphetamine" to start new session with options {duration:4, interval:hours, displaySleepAllowed:false}
```

## Conclusion
 This is just a quick tip on how to automate your Mac's sleep workflow.