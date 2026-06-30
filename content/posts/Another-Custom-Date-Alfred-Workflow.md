---
title: "Another Custom Date Alfred Workflow"
description: "Build a custom Alfred workflow with a Bash script that instantly tells you the day of the week for any date you type — no calendar app needed."
date: 2024-02-24
url: /Another-Custom-Date-Alfred-Workflow/
image: /img/dteworkflow.webp
categories:
  - My Apps
tags:
  - Alfred Workflow
  - Bash Script
  - Mac automation
  - Ask Date
draft: False
youtube_id: "LW2UpV3eHyY"
---

## Video
{{< youtube LW2UpV3eHyY >}}

## Introduction

In my newest video, I share a little Alfred workflow that answers a question I find myself asking constantly: *what day of the week does this date fall on?* Maybe it's your birthday this year, the date of an upcoming event, or a deadline you're trying to plan around. Normally you'd open a calendar app and scroll to find out — but with this workflow, you just type the date and Alfred tells you the day instantly. It's powered by a small custom bash script, and it's a perfect example of how a tiny bit of scripting can remove a recurring micro-chore from your day.

## How You Use It

The workflow couldn't be simpler to operate. You trigger Alfred and type the keyword followed by the date, like this:

```
Dte 3/24
```

Alfred runs the script behind the scenes and immediately shows you the day of the week for that date. No calendar app, no scrolling, no online date calculator — just type and read. And because it's an Alfred workflow, the result is right there in the Alfred window the moment you finish typing.

## Why a Bash Script?

The engine here is a custom bash script, and bash is a great fit for this kind of job because the command line already understands dates extremely well. Unix systems have a powerful built-in `date` command that can take a date you give it and reformat it however you like — including spitting out the day of the week. By wrapping that capability in a script and feeding it your input from Alfred, you get instant answers without reinventing any wheels. The script takes the date you type, hands it to the system's date logic, and returns the weekday name.

This is also why the tool is so fast and lightweight: it's not calling out to a website or loading a heavy app, it's just running a quick local command and handing the answer straight back to Alfred.

## The Productivity Angle

What I really like about this workflow is that it does more than just *tell* you the day — it's built to slot into how you actually work. With a simple trigger you not only see the day of the week for any date, you also have the option to **copy that result directly to your clipboard**. That little addition is what turns it from a novelty into a genuine productivity tool: you can look up a day and immediately paste it into an email, a calendar entry, a note, or a message without retyping anything.

That's a principle I come back to again and again with automation — the best small tools don't just answer a question, they hand you the answer in a form you can use right away. Removing that extra "now copy it and paste it somewhere" step is exactly the kind of friction that's worth automating away.

## Real-World Uses

You might wonder when you'd actually reach for something like this, and the answer is more often than you'd think. Planning an event and need to know if a date falls on a weekend? Type it in. Someone mentions a deadline as "the 14th" and you want to know what day that is without opening Calendar? Instant. Curious what day of the week you were born, or what day a holiday lands on this year? Done in a keystroke. Because it returns the answer right inside Alfred — and optionally copies it to your clipboard — it slots neatly into the middle of whatever you're already doing, whether that's writing an email, filling out a form, or jotting a note. It's the kind of micro-tool you don't realize you needed until it's there, and then you find yourself using it constantly.

## Building Your Own

If you want to make one like this, the recipe is straightforward: create an Alfred workflow with a **Keyword** input that accepts an argument (your date), feed that argument into a **Run Script** action containing the bash that formats the date into a weekday, and then route the output to a **Copy to Clipboard** action (or Alfred's Large Type / clipboard output) so you can grab the result. Pick a keyword that's quick to type — I used `Dte` — and you've got your own instant date-to-day lookup. You can tweak the script to accept different date formats or to also return extra info, like how many days away the date is.

## Conclusion

It's a simple utility, but that's exactly the point — get the day of the week for any date, instantly, and copy it with a keystroke. Little Alfred workflows like this are the bread and butter of a smooth Mac setup: each one shaves a few seconds and a bit of mental effort off a task you do all the time. Stack enough of them together and your whole workflow starts to feel effortless.