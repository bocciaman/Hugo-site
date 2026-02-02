---
title: "My Reading Log Shortcut"
description: ""
date: 2026-02-01T20:47:17-08:00
url: /my-reading-log-shortcut/
image: /img/Rlog.webp
categories:
  - iOS
tags:
  - iOS shortcut
  - Reading log
  - Automation
  - Shortcut
draft: False
---
## Video
{{< youtube 0KZuRxE3R0Y >}}

## I'm still here
Coming back to a YouTube channel after a long break is always a little strange. In this case, it had been about a year since I last uploaded anything to the Automation Maestro channel. Instead of easing back in with something flashy or overly complex, I wanted to share a shortcut I built for a very simple, very human goal: encouraging myself to read every day.

This shortcut wasn’t built overnight, and it wasn’t built in isolation. Like most automation projects, it came together through a mix of experimentation, trial and error, and inspiration from other creators in the automation and Shortcuts community. While I leaned on tutorials and ideas from YouTube along the way, the final result is something I put together myself to solve a problem I actually have—staying consistent with reading physical books.

## The Problem: Consistency, Not Motivation

For me, the challenge with reading has never really been motivation. I enjoy reading. The challenge has always been consistency and tracking. It’s easy to read a lot one day and then lose momentum the next. It’s also surprisingly annoying to keep a simple log of what you read without turning it into a chore.

I didn’t want an elaborate system. I didn’t want another app that demanded attention or sent notifications. What I wanted was a quick, frictionless way to log my reading the moment I finished for the day. That’s where this shortcut comes in.

## Introducing the Book Log Shortcut

The shortcut I shared in the video is called **Book Log**, and it lives entirely inside the Shortcuts app. When you run it, it asks you one straightforward question: *What are you reading today?*

From there, you have two choices. You can either continue reading your current book or select a new book. If you choose a new book, the shortcut prompts you to enter the title. That title is then stored so you can easily continue logging progress on it in the future.

One important requirement here is **Data Jar**. This shortcut relies on Data Jar to store and retrieve book titles and reading data. Without it, the shortcut won’t function as intended. Once Data Jar is installed, though, everything works smoothly in the background.

## Logging Your Reading in Seconds

After selecting or entering a book title, the shortcut asks for page numbers. You enter the page you started on and the page you ended on for that day’s reading session. That’s it. No timers, no word counts, no extra fields.

Once you confirm those numbers, the shortcut calculates the pages read and appends the entry to a note called **Reading Log**. Each new session gets added to the bottom of the note, creating a running log of your reading activity over time.

For example, if you start on page one and end on page 100, the shortcut records that session and calculates the number of pages read. The result is a clean, chronological record that lives in a single note you can review anytime.

## Why Notes Instead of a Database?

One design choice worth mentioning is the use of a single note to store all entries. Right now, every book and reading session lives inside the same Reading Log note. That was a deliberate choice to keep things simple.

That said, it’s not perfect. As I mentioned in the video, a future update could create a separate note for each book. That would make long-term tracking cleaner and easier to analyze. But for a first version, having everything in one place lowers complexity and keeps the shortcut fast.

Automation doesn’t have to be perfect on version one. It just has to be useful enough that you actually use it.

## Automation as Habit Support

What I like most about this shortcut is that it supports a habit without trying to control it. There are no reminders, streaks, or guilt-inducing notifications. The shortcut only runs when I choose to run it. It simply makes logging effortless once I’m done reading.

Over time, those small entries add up. Seeing a growing list of reading sessions creates a quiet sense of progress. It’s not about gamification—it’s about awareness. And awareness is often enough to keep a habit alive.

## Sharing It First on the Channel

Because this shortcut was built for personal use, sharing it felt a bit different from sharing something purely instructional. I wanted to show how it works, explain the thinking behind it, and make it available to anyone who might find it useful.

If you’re interested in trying it yourself, the download link is available in the video description. I’ve also included links to tools and services I personally use, for anyone who’s curious.

## Looking Ahead

This shortcut isn’t finished in the sense that it can’t be improved. Like most automation projects, it will probably evolve as my needs change. But even in its current form, it does exactly what I built it to do: encourage daily reading by making logging quick and painless.

After a long break, this felt like the right way to return to the channel—by sharing something practical, personal, and quietly useful. Sometimes the best automations aren’t about saving hours. They’re about making small, positive habits easier to maintain.