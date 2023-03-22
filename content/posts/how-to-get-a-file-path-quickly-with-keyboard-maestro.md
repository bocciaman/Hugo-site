---
title: "How to Get a File Path Quickly With Keyboard Maestro"
description: "Quickly display the path of a file quickly using Keyboard Maestro and AppleScript."
date: 2022-08-23
url: /How-to-Get-a-File-Path-Quickly-with-Keyboard-Maestro/
image: /img/CurrentPath.png
categories:
  - Keyboard Maestro
  - AppleScript
tags:
  - AppleScript
  - Keyboard Maestro
  - Automation
draft: false
---

In this video, I  created an AppleScript to use with a Keyboard Maestro macro to quickly get the file path of any Finder folder you have open.
<!--more--> 

## Video

{{< youtube 3rs0Z2sSZsk >}}

## The Automation

There wasn't an easy way to get the file path to a folder in macOS but I found a script that will give you the file path in a neat little dialog box you can copy from to make use of it. Here os what dialog box looked like:

![Path Dialogbox](/img/pathbox.png)

## AppleScript

```applescript
tell application "Finder"
	set theWin to window 1
	set thePath to (POSIX path of (target of theWin as alias))
	display dialog thePath buttons {"Clipboard", "OK"} default button 2
	if the button returned of the result is "Clipboard" then
		set the clipboard to thePath
	end if
end tell
```

## Conclusion

This automation can be very handy to any Mac Power User. 