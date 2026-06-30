---
title: "Goodbye WordPress, Hello Hugo & AI"
author: "A.B. Anwar"
description: "Why I left WordPress for good and rebuilt my site with Hugo and AI — moving from a hacked, plugin-dependent CMS to a fast, secure static site I fully control."
date: 2026-06-29T23:54:35-07:00
url: /goodbye-wordpress-hello-hugo-ai/
image: /img/Goodbye_WordPress.webp
categories:
  - automation
tags:
  - wordPress
  - Hugo
  - Claude AI
draft: false
youtube_id: dnzkGKNKDOg
---
## Video
{{< youtube dnzkGKNKDOg >}}

## Why I Finally Left WordPress

I didn't leave WordPress because of a trend. I left because I was tired of being a
part-time security guard for my own blog. My advertising site, Inside That Ad, had a
recurring problem: I'd ignore it for a few weeks, come back, and find it hacked,
buried in spam comments, or throwing a 500 Internal Server Error. That error usually
meant the same thing every time — malware had wormed its way in, and I'd be paying
someone on Fiverr a hundred bucks (or more) just to clean it up.

That cycle is the dirty secret of a lot of WordPress sites. WordPress itself is fine,
but it's a *dynamic* platform: every page is assembled on the fly by PHP talking to a
database, often with a stack of plugins bolted on. Each of those plugins is code you
have to keep updated, and each one is a potential door for an attacker. Miss a few
updates — which I always did — and you've left the doors unlocked.

## What Hugo Actually Is

The fix was to move to **Hugo**, a static site generator. If you've never heard the
term, here's the simplest way to think about it: instead of building each page when a
visitor shows up, Hugo builds *all* your pages ahead of time into plain HTML files.
When someone visits, the server just hands over a finished file. There's no database
query, no PHP execution, no plugin code running in the background.

That single architectural difference is why I wanted it. With nothing executing on
each request, there's a dramatically smaller attack surface. No database to inject
into. No plugin vulnerabilities to patch at 2 a.m. No comment spam, because there's no
live comment system unless you choose to add one. The trade-off is that Hugo isn't a
point-and-click dashboard like WordPress — you work with files, templates, and
Markdown. But that trade-off is exactly what gives you control.

## The Migration: What I Had to Take With Me

Rebuilding wasn't magic. I had to physically pull my content out of the old site
before anything else. From cPanel, I grabbed a few specific things:

- The **uploads folder** — basically every image I'd ever added.
- The **SQL database**, which held all my posts and their data.
- An **XML export** of the site content.
- Reference copies of pages and the banner so I could match the old look.

Then I handed all of it to Claude and started rebuilding. If you take one practical
lesson from this, let it be this: **your content lives in predictable places.** Images
in uploads, posts in the database, and an XML export as a portable backup. Knowing
where those three things are is most of what a migration actually requires.

## The Honest Truth About "AI Builds Your Site"

I want to push back on something. You've probably seen the gurus on YouTube promising
that "one prompt builds you a full website in 60 seconds." I don't believe that, and
after doing this for real, I believe it even less.

Rebuilding my site with Claude took a *lot* of prompting and a lot of tokens. It was
iterative — describe what I wanted, look at the result, correct it, refine it, repeat.
The AI was genuinely the engine that made it possible for a non-developer like me to do
this at all, but it was a collaboration, not a vending machine. If you go into an
AI-assisted rebuild expecting one perfect prompt, you'll quit in frustration. Go in
expecting a back-and-forth conversation, and you'll be amazed at what you can ship.

## What I Was Able to Rebuild

Here's the part that surprised me. I didn't just recreate a static brochure — I
rebuilt the *interactive* pieces too, with AI doing the heavy lifting:

- **Custom social share buttons.** I built a "copy caption" button that grabs an
  excerpt plus the link, and a working share button for X. (Facebook was finicky —
  worth knowing those platforms behave differently.)
- **A fixed contact form** so people can reach me without me publishing my email in
  plain text for bots to scrape.
- **An ad submission form** so readers can submit an ad to be featured on the blog.
- **A Gumroad store integration**, so my creative brief PDF is purchasable right from
  the site.
- **Custom social icons and a media kit** — small touches that used to require a plugin
  pack, now just built directly.

The only things I *didn't* bring over were the plugins I never updated and the spam
comments I never wanted. I don't miss either.

## Owning Your Site Instead of Renting It

There's a second, quieter lesson here about control. I also have a personal site built
on Hugo, but I originally hired someone to build it. It looked great — until I wanted
to change something. To add anything, I had to reverse-engineer what the developer did,
copy a working example, paste it in exactly the right place, and modify it carefully.

What changed everything was AI. Now, when I want to add a non-standard social icon, a
new section, or a media kit, I can describe it to Claude and actually do it myself. The
site stopped being something I rent from a developer's knowledge and became something I
own and can evolve.

## Should You Make the Switch?

Static isn't right for everyone. If you need live user accounts, a built-in commenting
dashboard, or a non-technical team editing in a visual UI, WordPress still has real
advantages. But if your site is mostly content — a blog, a portfolio, a small business
page — and you're tired of maintenance, hacks, and plugin roulette, a static site
generator like Hugo is worth a serious look. Pair it with an AI assistant to flatten
the learning curve, and the wall that used to separate "I have an idea" from "it's live
on my site" gets a lot lower.

That's the real takeaway: this isn't about hating WordPress. It's about moving to
something you can control, secure, and improve on your own terms. If you think there's
something I should add, let me know in the comments — and I'll see you in the next one.