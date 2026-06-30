---
title: "I Made My Own Mac App: QuestionAnswer"
description: "How I built a personal Mac Qdescription: "I made my own Mac app"A app using Alfred and a Bash script — with ChatGPT's help — that retrieves saved answers instantly without leaving the Alfred search bar."
date: 2023-05-22
url: /I-Made-My-Own-Mac-App-QuestionAnswer/
image: /img/MyApp.webp
categories:
  - Alfred
  - Bash script
tags:
  - Alfred
  - bash
  - Chatgpt
draft: false
youtube_id: "t-tw2v6BW_I"
---

Every now and then a small annoyance turns into a fun little project, and that's exactly what happened here. I'd been eyeing tools like Brett Terpstra's [QuickQuestion](https://brettterpstra.com/projects/quickquestion/), Alfred, and ChatGPT, and I started wondering what would happen if I stitched them together into something that fit my own workflow. The result was a personalized Mac "app" — really a Bash script wired into Alfred — that answers my questions from a set of predetermined responses. Here's the whole story, plus what I learned along the way so you can build your own version.

## The Inspiration - QuickQuestion

{{< youtube t-tw2v6BW_I >}}

QuickQuestion by Brett Terpstra is one of those clever little utilities that looks simple on the surface but solves a real problem: you ask it something, and it hands back a saved answer instead of making you dig through notes. I loved the concept. The trouble was, I couldn't get it playing nicely with Alfred on my system, and Alfred is the hub everything else on my Mac runs through. Rather than fight it, I figured I'd take the idea I liked and rebuild it my way — something that integrates with Alfred and my Google Drive without the friction.

## The Journey - From Roadblock to Innovation

Building your own Mac tool from scratch sounds intimidating, and I'll be honest, I expected it to be harder than it was. The trick is that you don't have to know everything up front. You just need a clear goal and a willingness to poke at it until it works. My goal was simple: type a question, get my answer back. My two ingredients were ChatGPT to help me write the logic, and a bit of Bash to glue it all together.

## Enlisting ChatGPT's Help

This is where ChatGPT really earned its keep. I'm comfortable in the terminal, but I'm not a career programmer, and that's exactly the gap an AI assistant fills. Instead of searching forums for the right syntax, I described what I wanted in plain English — "I want a script that takes a question as input, looks it up in a list, and returns the matching answer" — and let ChatGPT draft the first version.

What I want to stress here is that you don't take the AI's first answer as gospel. I treated it like a conversation. It gave me a starting script, I ran it, something broke, I pasted the error back in, and we iterated. That back-and-forth is the real workflow, and it's a great way to actually *learn* what the code is doing rather than blindly copying it. By the end I understood every line, because I'd debugged every line.

## The Magic of Bash Scripting

With the logic roughed out, it was time to make it feel like an app. Bash (the Bourne Again Shell) is the command language built into macOS, and it's perfect for exactly this kind of quick automation. My script reads the question I pass in, matches it against my list of saved questions and answers, and prints the right response.

Wiring that into Alfred is the part that makes it feel magical. Alfred lets you trigger a script with a keyword, so I can hit my hotkey, type a keyword followed by my question, and the answer pops up right there in the Alfred bar — no app to open, no file to dig through. A few rounds of testing to handle edge cases (what happens when there's no match, how to deal with extra spaces) and it was running smoothly.

## Beyond Alfred - Command Line Interface

I could have stopped there, but I had a thought: what if Alfred isn't running, or I'm already in the terminal? So I took the same script and adapted it to run as a standalone command-line tool. It's only a small change, but now I have two front doors to the same engine. If I'm working in the shell, I just call the script directly and get my answer without ever touching Alfred.

That's a habit I'd encourage with any automation you build — once the core logic works, ask yourself where *else* you'd want to reach it. A little extra effort turns a single-purpose hack into something genuinely flexible.

## What You'll Need to Try This Yourself

If you want to recreate this, here's the short list: Alfred (the Powerpack version, for workflows), a text editor for your script, a place to store your question-and-answer data — I used Google Drive so it syncs — and access to ChatGPT to help you write and refine the code. Start tiny. Get it working with two or three questions before you worry about a big list. Once the skeleton works, growing it is just adding more entries.

## Conclusion

What started as frustration with an app that wouldn't cooperate turned into one of my favorite little projects. Combining QuickQuestion's idea with Alfred, ChatGPT, and a bit of Bash gave me a tool that's genuinely mine — built to fit the way I work, not the other way around.

More than the tool itself, the real takeaway is how approachable this kind of thing has become. You no longer need to be a seasoned developer to build something useful; you need a problem worth solving, an AI assistant to help you over the syntax bumps, and enough patience to iterate. If you've ever looked at an app and thought "I wish it did this one thing differently," that's your cue. Give it a shot — you might be surprised how far a small script and a little creativity can take you.
