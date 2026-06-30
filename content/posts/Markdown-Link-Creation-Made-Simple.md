---
title: "Markdown Link Creation Made Simple"
author: "A.B. Anwar"
description: "An Alfred workflow using AppleScript that grabs the title and URL of the current Safari tab and instantly formats it as a Markdown link — ready to paste anywhere."
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
youtube_id: "BcuvHWqEU-k"
---
## Video
{{< youtube BcuvHWqEU-k >}}

## Why Automate Markdown Links?

If you write in markdown at all — blog posts, documentation, notes in something like Obsidian — you already know the little ritual: copy the URL, type the square brackets, paste the link text, add the parentheses, paste the URL. It's not hard, but it's fiddly, and the more you do it the more those few seconds add up into a real interruption to your writing flow. The whole point of markdown is to keep your hands on the keyboard and your head in your content, so anything that breaks that rhythm is worth getting rid of.

That's exactly what this little project does. I built a script that takes whatever text you've selected and the URL of your front-most Safari tab and instantly assembles them into a proper markdown link — `[your text](the-url)` — ready to paste. I was inspired by [John Lindquist](https://johnlindquist.com/generate-markdown-links-from-your-selected-text-and-chromes-current-url-using-alfred/), who made a similar tool for Google Chrome, and I wanted to bring that same convenience to those of us who live in Safari, Apple's native browser.

## How It Works

The magic here is the combination of two tools: AppleScript, which can ask Safari what URL is currently open, and Alfred, which gives you a fast keyword trigger to run the script and pass in your link text. The script itself is tiny — that's the beauty of it. AppleScript grabs the URL, and a single line of bash wraps it together with your text in markdown's link format.

## The Script for Safari

```bash
#!/bin/bash

# Fetch the URL of the current tab in Safari using AppleScript
url=$(osascript -e 'tell application "Safari" to return URL of current tab of window 1')

# Format and echo the URL as a Markdown link
echo "[$1]($url)"
```

Let me break this down so it's not a black box. The `osascript -e` part runs a one-line AppleScript that tells Safari to return the URL of the current tab in the front window, and stores it in a variable called `url`. The last line then prints `[$1]($url)` — where `$1` is the text you pass into the script (your link label) and `$url` is the address it just fetched. The result is a clean, paste-ready markdown link.

## Wiring It Into Alfred

To actually use this, drop the script into an Alfred workflow (you'll need Alfred's Powerpack for workflows). Create a **Keyword** input — something like `mdlink` — connected to a **Run Script** action, and paste the bash above into it. Set the keyword to accept an argument, and make sure the script passes that argument through as `{query}` so it lands in `$1`. Then connect the output to a **Copy to Clipboard** action so the finished link is ready to paste the instant the script runs.

From then on the workflow is dead simple: select or think of your link text, make sure the page you want is open in Safari's front tab, trigger Alfred, type `mdlink your text here`, and hit Enter. The formatted markdown link is now on your clipboard. Paste it wherever you're writing and keep going — no brackets, no parentheses, no tab-switching.

## The Script for Google Chrome

If you're a Chrome user instead, the same idea works with a one-word change — you just point AppleScript at Chrome and ask for its active tab:

```bash
url=$(osascript -e 'tell application "Google Chrome" to return URL of active tab of front window')

echo "[$1]($url)"
```

The only difference is the application name and the slightly different way Chrome refers to its active tab versus Safari's "current tab." Everything else — wiring it into Alfred, passing your text as `$1`, copying the result — is identical.

## A Few Tips

A couple of things I've learned using this day to day. First, make sure the page you want really is the front-most tab before you trigger the script, since that's the URL it grabs — if you've got the wrong window in front, you'll get the wrong link. Second, if you ever want to default the link text to something (like the page title), you can extend the AppleScript to grab the tab's name too and use that when no argument is passed. And third, because the output is just text on the clipboard, this plays nicely with any markdown editor — it doesn't care whether you're in VS Code, Obsidian, or a plain text file.

## Conclusion

This is one of those tiny automations that pays for itself almost immediately. A few lines of AppleScript and bash, wired into an Alfred keyword, turn a multi-step copy-paste chore into a single command. If you write in markdown regularly, set this up once and you'll wonder how you ever did it by hand. Big thanks to John Lindquist for the original Chrome version that inspired it — and if you're on Safari, now you've got a version built just for you.