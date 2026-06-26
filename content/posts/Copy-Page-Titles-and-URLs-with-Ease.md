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
youtube_id: "yxGhn6odaVg"
---

## Video

{{< youtube yxGhn6odaVg >}}

## A Simple Safari Hack That Saves Real Time

Welcome to my latest tutorial, where I show you a simple but genuinely useful little hack for Safari. The idea is straightforward: with a couple of automation tools working together, you can grab a Safari page's title *and* its URL in one smooth motion, formatted and ready to drop wherever you need them. It sounds minor until you realize how often you actually do this by hand.

Think about how many times a day you find yourself copying a link, then going back to also copy the page title, then pasting both somewhere and cleaning up the formatting. If you're building a bibliography, putting together a reference page, sharing sources with a colleague, or just keeping a running list of articles to read later, that little dance adds up fast. This automation collapses the whole thing into a single keystroke.

## How It Works

For this one I lean on two short AppleScripts paired with [TextExpander](https://shareasale.com/r.cfm?b=1244193&amp;u=2423013&amp;m=81274&amp;urllink=&amp;afftrack=). Each piece has a clear job. The AppleScripts do the talking to Safari — one fetches the title of the page you're looking at, the other fetches the URL. TextExpander is the trigger and the glue: it lets you fire these scripts off with a short abbreviation, so you don't have to open a script editor or remember anything complicated. Type your snippet, and the formatted result appears. (If you want to follow along, you can sign up for TextExpander and save 20% using the link above.)

The beauty of splitting it into two scripts is flexibility. Sometimes you only want the URL. Sometimes you only want the title. And sometimes you want them combined into a clean link. Having each piece available on its own means you can mix and match depending on what you're doing.

## The Scripts

Here are the two AppleScripts. They're short enough that you can read them and understand exactly what's happening — no black boxes.

**Title Script**

```applescript
tell application "Safari"
    set mytitle to name of current tab in window 1
end tell

return mytitle
```

This one tells Safari to look at the current tab in your front window and grab its name — which is the page title — then return it. That returned value is what TextExpander inserts for you.

**URL Script**

```applescript
tell application "Safari" to return URL of current tab of window 1
```

Even simpler. It's a one-liner that asks Safari for the URL of the current tab and hands it straight back. No extra steps.

## Setting It Up

To put this to work, create a TextExpander snippet for each script and set its content type to run an AppleScript (TextExpander supports script snippets directly). Give each one an abbreviation you'll actually remember — something like `;title` and `;url` works well because the leading semicolon keeps it from firing accidentally while you type normally. Once they're saved, you just type the abbreviation in any text field and the live title or URL drops right in.

From there it's easy to get creative. You can build a snippet that calls both pieces and wraps them in Markdown link format, or arrange them however your reference style needs. Start with the two basic scripts above, get comfortable, and then shape them around your own workflow.

## Where I Actually Use This

Let me give you a few concrete examples of where this earns its keep, because "copy a title and URL" can sound abstract until you see it in context. When I'm doing research for a video or article, I keep a running notes file of sources, and every link in there needs both the title and the URL so I can find it again later — this snippet builds each entry in one shot. When I'm sharing an interesting page with someone in a chat app, a clean `[Title](URL)` link looks far more professional than a naked string of characters. And if you write anywhere that supports Markdown — a blog, a wiki, a notes app like Obsidian or Bear — this drops in a properly formatted link instantly, no manual bracket-and-parenthesis typing required.

Students and academics get a lot of mileage out of it too. Building a bibliography or a references section means capturing the same two pieces of information dozens of times, and doing it by hand is exactly the kind of repetitive task that invites mistakes. Automating it means every citation is consistent and you never accidentally paste the wrong URL under the wrong title. Once you start using it, you'll be surprised how many little moments in your day involve grabbing a link and a title together.

## A Note on Going Further

I'll be honest: this first version is great, but it isn't the final word. The fully automated approach assumes you're always on the page you mean to copy from, and there are moments — like quickly switching to another window mid-task — where that assumption can trip you up. That's exactly why I revisited this in a follow-up. If you like this, definitely check out part two of the series, where I rebuild the same idea with Keyboard Maestro for even more precision and control over what gets copied and where it goes.

## Conclusion

If you're ready to make your Safari browsing a little smoother, give this a try. Set up the two AppleScripts, wire them into TextExpander, and enjoy grabbing page titles and URLs with a single short snippet instead of the usual copy-paste shuffle. It's a small automation, but it's the kind of thing you'll use constantly once it's in place.

Give it a go, and let me know in the comments how it works for you — I always love seeing how people adapt these to their own setups. And stay tuned to the channel, because as I mentioned, this automation already got an upgrade in part two of the series.
