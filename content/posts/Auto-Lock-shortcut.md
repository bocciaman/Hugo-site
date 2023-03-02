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
---

In this video, I show you how to create a shortcut for the auto-lock screen. The shortcut is useful when listening to voice memo playbacks because the iPad doesn't seem to continue playing when the screen turns off. The command needed for the shortcut to work is below. 

## Video

{{< youtube C3IrhpAqGQ8 >}}

The app created in this video did not fully solve the problem it was intended to solve. The shortcut took you straight to the lock screen settings page but there was no way for you to select a different time interval via auomation. 

## The Code

```
prefs:root=DISPLAY&path=AUTOLOCK
```

## Conclusion

The app really didn't accomplish its goal but it was a cool attempt. 