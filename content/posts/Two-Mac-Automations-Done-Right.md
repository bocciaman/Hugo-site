---
title: "Two Mac Automations Done Right: A Self-Writing Snippet and a One-Key Drive Launcher"
date: 2026-07-11
description: "Two Mac automations built properly — a TextExpander snippet that writes itself with JavaScript, and a Shortcut that opens any drive with a single keypress — plus a simple way to tell real automation from a glorified button."
author: "A.B. Anwar"
image: /img/optionb.webp
youtube_id: "t1UVwPXVj5s"
tags: ["mac automation", "textexpander", "javascript", "apple shortcuts", "keyboard shortcuts", "productivity"]
categories: ["Automation"]
draft: false
---
## Video
{{< youtube t1UVwPXVj5s >}}

Every year on the Fourth of July I post more or less the same message. And for longer than I'd like to admit, I retyped it by hand — the greeting, the year, the line about how old the country is. Two things always changed, I always had to think about them, and I occasionally got the number wrong.

This year I type five characters and it fills itself in. It even knows that 2026 is America's **250th** birthday, because it works that out on its own.

That's one of two automations I want to walk through here. They're deliberately different in kind, and the difference is the whole point. One of them *thinks*. The other one just *launches*. By the end I'll give you a clean way to tell those apart — and to spot the third kind, the one that actually deserves the word "automation" most of all.

## Automation #1 — A snippet that writes itself (TextExpander + JavaScript)

Most people use TextExpander to paste *stored* text: a canned email, a signature, a block of boilerplate. That's useful, but it's static. The message is whatever you saved, frozen at the moment you saved it.

The upgrade is to let the snippet *compute* its output instead of storing it. TextExpander can run JavaScript, and when it does, the snippet stops being text and becomes a tiny program that returns text. For anything that depends on today's date, that changes everything.

Here's the snippet:

```javascript
// America's birthday — computes the age and the year automatically
const FOUNDING_YEAR = 1776;
const now  = new Date();
const year = now.getFullYear();
const age  = year - FOUNDING_YEAR;

// Turn 250 into "250th", 251 into "251st", etc.
function ordinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// The LAST expression is what TextExpander pastes:
`Happy ${ordinal(age)} Birthday, America! 🇺🇸

Wishing everyone a safe and happy Fourth of July, ${year}.
#IndependenceDay #July4th`;
```

A few things worth pointing out, because they're the parts that make this durable rather than clever-for-a-day:

- **Only one number is hard-coded** — 1776. Everything else is derived. The year comes straight from the system clock, and the age is just subtraction. Nothing to update next year, or the year after.
- **The `ordinal` function is doing real work.** Getting "250th" vs "251st" vs "253rd" right by hand is exactly the kind of tiny, boring correctness that a machine should own. Set it up once and you never think about suffixes again.
- **The last line is what gets pasted.** In TextExpander, a JavaScript snippet outputs the value of the last expression it evaluates. That trailing template literal — the message itself, with the age and year dropped in — is the output.

To set it up: create a new snippet, change the content type from plain text to **JavaScript**, paste the code, and give it an abbreviation. I use a semicolon prefix — `;july4` — so it never fires by accident mid-sentence.

The test that actually proves the point: change your Mac's system year forward by one and fire the snippet again. It'll say "251st" and "2027" without you touching a character. That's the line between a snippet that *remembers* text and one that *generates* it. This one will still be correct long after I've forgotten how it works.

> **One version note:** confirm on your build of TextExpander that a JavaScript snippet outputs the last evaluated expression. It's the standard behavior, but versions drift — a five-second live test settles it.

## Automation #2 — A drive that opens with one keypress (Shortcuts + a hotkey)

The second automation has almost no brains, and that's fine. It solves a different problem: the same small motion, done constantly.

I keep project files on an external drive. Opening that specific folder means going into Finder, finding the volume, and drilling down — five seconds, a dozen times a day, forever. Worth killing.

Open the **Shortcuts** app, make a new shortcut, and add a single **Run Shell Script** action containing one line:

```bash
open "/Volumes/YourDriveName/Projects"
```

On macOS, `open` pointed at a folder opens it in Finder. Swap in your drive's exact mounted name and the folder you actually want. That's the entire automation.

There's a worthwhile upgrade, though, and it quietly pulls this automation back toward the "thinking" category. The bare version does nothing if the drive isn't plugged in — silently. So add a check:

```bash
DRIVE="/Volumes/YourDriveName/Projects"
if [ -d "$DRIVE" ]; then
  open "$DRIVE"
else
  osascript -e 'display notification "Drive not mounted" with title "Open Drive"'
fi
```

Now it opens the folder if the drive is there, and nudges me if it isn't. A small amount of logic turns "silently fails" into "tells me why."

The part that makes it fast: open the shortcut's details and find **Add Keyboard Shortcut**. I map mine to Control-Option-Command-D — "D" for drive — using a combination nothing else has claimed. From then on, from anywhere on the Mac, no app and no menu, one keypress drops me straight into the folder.

> **One path note:** the string under `/Volumes/` has to match your drive's mounted name exactly. If macOS ever mounts a second copy it appends " 1" to the name, which will silently break the path — so keep the drive name clean.

## So which of these is "real" automation?

Here's the honest bit, and it's the reason I put these two together in the first place.

That keyboard shortcut is fast, but *I'm* still the trigger. I press the key; it runs. So the drive launcher isn't self-running — it's a **launcher**. It collapses steps, but it waits for me every time.

I find it useful to sort automations into three kinds:

1. **Launchers.** They save steps but you pull the trigger, and they mostly do one thing. The drive shortcut lives here. Genuinely valuable, and the least "automated" of the three.
2. **Generators.** They do actual work — compute, transform, adapt to conditions — so the output changes without you rewriting anything. The self-updating July 4th snippet lives here. You still trigger it, but it's no longer just replaying something you stored.
3. **Self-triggering (event-driven) automations.** These fire on a *condition* rather than a command: when you plug the drive in, when you arrive somewhere, at a set time, when a file lands in a folder. Nobody presses anything. This is the tier Apple actually reserves the word "Automation" for in the Shortcuts app — the tap-to-run things are "shortcuts," and the event-triggered things are "automations."

Most tutorials blur all three together and call everything an "automation." It's worth keeping them straight, because the tier you're in tells you how much leverage you're actually getting. A launcher saves you seconds. A generator saves you from a recurring mistake. A self-triggering automation saves you from having to remember the task exists at all.

The two builds here cover the first two tiers. The third — the drive folder opening *itself* the moment you plug the drive in, no keypress required — is the natural next step, and it's a whole piece on its own. That's what I'll cover next.

## Grab the code

Both snippets are copy-paste ready above: the TextExpander JavaScript snippet, and both versions of the drive shortcut (bare and with the mount check). If you build the self-writing snippet, try the system-clock test — watching it correct itself a year into the future is the moment the idea clicks.
