---
title: "Markdown Link Creation Made Simple"
description: "Easily create markdown links with Alfred and AppleScript."
date: 2024-04-01
url: /Markdown-Link-Creation-Made-Simple/
image: /img/markdownlink.webp
categories:
  - macOS 
tags:
  - Markdown link
  - Automation
  - Productivity
  - Safari
draft: False
---
## Video
{{< youtube BcuvHWqEU-k >}}

## Markdown Links
In a recent project, I developed a script designed to expedite the markdown link creation process, specifically tailored for users of Safari, Apple's native web browser. This script automates the generation of markdown links from selected text and the URL of the front-most active Safari tab. Inspired by [John Lindquist](https://johnlindquist.com/generate-markdown-links-from-your-selected-text-and-chromes-current-url-using-alfred/), who created a similar tool for Google Chrome URLs, my goal was to bring this convenience to Safari users. By automating this task, the script aims to save time and enhance productivity for anyone working extensively with markdown, allowing for a smoother workflow and a focus on content rather than process.

## Script for Safari
```Bash

#!/bin/bash

# Fetch the URL of the current tab in Safari using AppleScript
url=$(osascript -e 'tell application "Safari" to return URL of current tab of window 1')

# Format and echo the URL as a Markdown link
echo "[$1]($url)"
```
## Script for Google Chrome

'''BSash
url=$(osascript -e 'tell application "Google Chrome" to return URL of active tab of front window')

echo "[$1]($url)"
'''