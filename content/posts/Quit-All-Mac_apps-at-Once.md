---
title: "Quit All Mac apps at Once"
description: "Quit all apps at once"
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
---

## Video

{{< youtube xcxpCUd-LBA >}}

## Introduction

In today's tutorial, I'll guide you through two powerful techniques to close all your apps in a flash! Whether you're a productivity enthusiast or just looking to streamline your Automation workflow, this video is a must-watch.

## Keyboard Maestro

To create this action In Keyboard Maestro, all you need to do is insert the "Execute an AppleScript" action along with the AppleScript that would go inside the Keyboard Maestro action in order for it to run. The worst part is writeing the script With the proper syntax. Lucky for you, I'll be providingp the script below:

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
This is my preferred method but you must decide what's the best option for you.

## Apple Shortcuts

Within Apple shortcuts, only the quit all apps action is needed, and then you must select the apps that you don't want to close or exclude from the automation. If you are uncomfortable working with AppleScript, the Shortcuts App may be the best one  utilize. You just have to know what buttons to click!

![Shortcuts editor](/img/shortcutsint.webp)


## Conclusion

Both Shortcuts and Keyboard Maestro are great tools for this automation. You just have to decide which option works best in your particular workflow. In the comment section below, please will you let me know which option you chose?