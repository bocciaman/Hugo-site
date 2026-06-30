---
title: "Mastering JavaScript & TextExpander With ChatGPT's Help"
author: "A.B. Anwar"
description: "How I used ChatGPT to write a JavaScript snippet for TextExpander that auto-generates a formatted support ticket — letting AI handle the code so you get the result."
date: 2023-04-16
url: /master-javascript-and-textexpander-with-chatgpts-expert-guidance/
image: /img/ticket.webp
categories:
  - TextExpander
tags:
  - Javascript
  - Mac
  - Mac automation
  - TextExpander
  - Apple
  - productivity
  - ChatGBT
draft: false
youtube_id: "zO-Jly7w1DQ"
---

In this video, I show you how I used ChatGPT to write the JavaScript that powers a custom TextExpander snippet — and how you can do the same even if you're not a programmer. You can sign up now for [TextExpander](https://shareasale.com/r.cfm?b=1244193&amp;u=2423013&amp;m=81274&amp;urllink=&amp;afftrack=) and save 20%.

## Video

{{< youtube zO-Jly7w1DQ >}}

## Introduction

Are you tired of spending way too much time pulling the same piece of data out of a URL and dropping it into a document or spreadsheet? I was. The repetitive ones are exactly the tasks worth automating, and the good news is you no longer need to be a seasoned coder to do it. With TextExpander, a little JavaScript, and ChatGPT acting as your on-demand coding partner, you can build small tools that quietly save you time every single day. Let me walk you through how I did it.

## The Problem I Was Solving

My specific use case was ticket numbers. I was working with a customer support system where the ticket number was buried inside the page URL, and I kept needing to extract just that number and use it elsewhere. Doing it by hand meant selecting the right part of a long URL, copying it, and pasting it — over and over. It's the kind of tiny, mindless task that doesn't feel like much in the moment but adds up to a real chunk of your day.

The first step in any automation like this is the same: get crystal clear on exactly what you want to pull out and what you want to do with it. In my case, I needed the ticket number isolated from the rest of the URL and formatted so TextExpander could insert it cleanly. Once I knew precisely what "done" looked like, it was time to write the code.

## Letting ChatGPT Write the JavaScript

This is the part that used to be a wall for a lot of people, and it's where ChatGPT changes the game. I don't write JavaScript for a living, but I don't have to. I described what I needed in plain English — "I have a URL, I want to extract this specific number out of it using a regular expression, and return it formatted like this" — and ChatGPT drafted the code for me.

Regular expressions are the perfect example of why this is so helpful. Regex is powerful but notoriously fiddly to get right, and it's easy to lose an afternoon to a pattern that's *almost* working. Instead of fighting it, I let ChatGPT generate the pattern, then tested it against real URLs. When something didn't match the way I expected, I pasted the result back and asked it to adjust. That conversational loop — draft, test, refine — is the actual skill here, and it's a lot more approachable than learning regex from scratch.

## Refining It Over Time

One thing I'd recommend: don't expect to nail it in one sitting, and don't feel like you have to. I wrote the first working version, then deliberately let it sit for a few days and came back with fresh eyes. Coming back later, I noticed places it could be cleaner and more reliable, so I brought ChatGPT back in to help me optimize it. That second pass is where a script goes from "works on the example I tested" to "works on everything I throw at it."

Once I was happy with the code, I dropped it into TextExpander as a JavaScript snippet and gave it an abbreviation. Now, instead of manually fishing a ticket number out of a URL, I trigger the snippet and the formatted number appears instantly. A task that used to interrupt my flow several times a day basically disappeared.

## Why This Combination Works So Well

What makes ChatGPT, JavaScript, and TextExpander such a strong trio is how they cover for each other's weak spots. TextExpander gives you the easy trigger and insertion. JavaScript gives you the logic to actually process and reshape data, not just paste static text. And ChatGPT removes the biggest barrier of all — having to write that logic yourself from a blank page. Together they let you build genuinely custom tools that fit your exact workflow, even if your coding background is thin.

And the ticket-number example is just one small idea. The same approach works for reformatting dates, cleaning up text, generating boilerplate with variables, pulling pieces out of any structured string — the list goes on. Once you've built one, you start seeing automation opportunities everywhere.

## Conclusion

If any part of this sparked an idea for your own workflow, I'd encourage you to watch the video and then just try it. Pick one small, repetitive task, describe it to ChatGPT, and let it help you write the JavaScript to handle it inside TextExpander. You'll be surprised how quickly it comes together.

Be sure to subscribe to the channel for more Mac automation and productivity content — I'm always building and sharing little tools like this one. With the right combination of tools and a bit of creativity, you really can unlock a whole new level of efficiency in your day-to-day work.
