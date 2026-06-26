---
title: "Keyboard Maestro Automates Better Writing with Grammarly"
description: "A Keyboard Maestro macro that pulls clipboard text, opens Grammarly, and pastes it in automatically for faster editing on your Mac."
date: 2023-01-29
url: /writing-with-grammarly/
image: /img/grammarly3.png
categories:
  - Mac
tags:
  - Automaton
  - Keyboard Maestro
draft: false
youtube_id: "it0wyeX0FOk"
---
---
title: "Keyboard Maestro Automates Better Writing with Grammarly"
description: "Description goes here"
date: 2023-01-29
url: /writing-with-grammarly/
image: /img/grammarly3.png
categories:
  - Mac
tags:
  - Automaton
  - Keyboard Maestro
draft: false
---

{{< youtube it0wyeX0FOk >}}

In this tutorial I'll show you a Keyboard Maestro macro I use to automate a smoother writing-and-editing experience with Grammarly. It's a small automation, but it removes a handful of repetitive steps I was doing constantly, and it's a great example of how a few Keyboard Maestro actions strung together can save you real time every day.

## The Idea Behind the Macro

Here's the workflow this solves. Grammarly is one of my go-to tools for catching typos and tightening up my writing, and its web editor is a great place to run text through. The problem is the friction of getting text *into* it: I'd copy something, switch to my browser, open the Grammarly site, click into the editor, and paste — every single time. None of those steps is hard, but doing them over and over adds up and breaks your flow.

So the goal of this macro is simple: take whatever text is on my clipboard, open the Grammarly site automatically, and paste the text straight into the editor — all in a couple of seconds, so I can jump right into editing instead of fiddling with setup.

## Standing on the Shoulders of Giants

I want to give credit where it's due. I didn't build this macro entirely from scratch — the original came from [David Sparks](https://www.macsparky.com/), who, if you're into Mac automation, is an absolute legend. The man is an automation superhero in my book, and a ton of what I've learned traces back to his work. If you don't already follow MacSparky, do yourself a favor and check him out.

This is also a point worth making on its own: you don't always have to invent automations from zero. The Mac automation community shares macros, shortcuts, and scripts generously, and a great way to learn is to grab someone else's working macro and study how it's put together. That's exactly what I did here.

## The One Tweak I Had to Make

That said, I couldn't just drop David's macro in and have it run perfectly on my machine, and the reason is a useful lesson for anyone building with Keyboard Maestro. The original relied on Keyboard Maestro's **"click on found image"** action — a feature where the macro looks at the screen, finds a button or element by matching an image of it, and clicks there. It's clever, but it can be finicky. It depends on things like your screen resolution, scaling, and the exact appearance of the element, so a macro that works flawlessly on one Mac can stumble on another.

On my Mac, that "click on found image" action was the sticking point. So I modified that one action to get the macro working reliably on my setup. The rest of the logic stayed the same — only that single screen-matching step needed adjusting. If you try this macro and it doesn't behave at first, that image-based action is almost certainly the culprit, and swapping it for a more direct approach (like a keyboard shortcut or a more reliable click target) usually sorts it out.

## How It Works in Practice

Once it's dialed in, using it is effortless. I copy the text I want to polish, trigger the macro, and Keyboard Maestro takes over: it opens the Grammarly website, waits for the editor to be ready, and pastes my clipboard text right into the writing field. Within seconds I'm staring at my text in Grammarly with all its suggestions ready to go, and I never touched the browser manually. What used to be five little steps becomes one keystroke.

That's really the magic of Keyboard Maestro in a nutshell — it chains together the boring intermediate steps so you only have to think about the part that actually matters, which here is the editing itself.

## Conclusion

This Grammarly macro is a perfect example of the kind of automation I love: not flashy, but genuinely useful, and something that pays off a little bit every single day. Big thanks again to David Sparks for the original — and a reminder that adapting someone else's macro is a totally valid (and educational) way to build your own toolkit.

If you give it a try, keep an eye on that "click on found image" action, since that's the part most likely to need a tweak on your machine. Watch the video to see the whole thing in action, and as always, let me know how it works for you. Little automations like this are exactly what keep my Mac feeling like it's working *for* me, not the other way around.
