---
title: "Copy Page Titles and URLs With Ease"
description: "Automate copying Page titles and URLs from Safari with ease"
date: 2023-04-23
url: /Copy-Page-Titles-and-URLs-with-Ease/
image: /img/copytitle.webp
categories:
  - TextExpander
  - AppleScript
tags:
  - AppleScript
  - Mac
  - Mac automation
  - tutorials
  - Apple
  - TextExpander
  - Safari
draft: false
---

## Video

{{< youtube yxGhn6odaVg >}}

## AppleScript, TextExpander and more

Welcome to my latest video where I show you a simple yet highly useful hack for Safari! In this tutorial, I'll be demonstrating how you can easily copy a Safari page title and URL using just a few automation tools. This hack can be extremely helpful when creating bibliographies, reference pages, or simply keeping track of sources.

To achieve this automation, I'll be utilizing two AppleScripts along with TextExpander. These tools work together seamlessly to create a powerful workflow that can help you save time and increase productivity.

## Scripts

**Title Script**

```applescript
tell application "Safari"
    set mytitle to name of current tab in window 1
end tell

return mytitle
```

**URL Script**

```applescript
tell application "Safari" to return URL of current tab of window 1
```

## Conclusion

So, if you're ready to take your Safari browsing experience to the next level, then be sure to watch this video and learn how to copy page titles and URLs with ease. Don't forget to leave a comment below and let me know what you think! Stay tuned to this channel, this automation has already been improved upon in part 2 of this video series. 