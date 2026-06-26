---
title: "Create Folders and Pipe Commands"
description: "We will be using a simple command in the terminal to create a main folder, and then creating five subfolders within it - all in one go!"
date: 2023-03-19
url: /Create-Folders-and-Pipe-Commands/
image: /img/folders.jpg
categories:
  - Terminal
tags:
  - folders
  - termminal
  - pipe
  - command
draft: false
youtube_id: "BftRV7myH8U"
---

In this tutorial we're going to use a single, simple terminal command to create a main folder and five subfolders inside it — all in one go. If you ever find yourself making the same folder structure over and over, this little trick will save you a surprising amount of clicking and dragging.

## Video

{{< youtube BftRV7myH8U >}}

## The Problem

We all have folder structures we set up again and again — maybe a project folder with the same set of subfolders every time, or a sorting system you rebuild for each new client or month. Doing that by hand in Finder means right-clicking, choosing "New Folder," typing a name, and repeating five or six times. It's not hard, but it's tedious, and tedious tasks are exactly what the terminal is great at eliminating.

So instead of building the structure by hand, we'll do the whole thing with one command: create the parent folder, create all five subfolders inside it, and automatically pop the parent open in Finder so you can see the result. That "all in one go" part is the fun bit, and it comes down to combining two commands so they run back to back.

## What Is the Pipe Command?

The star of this trick is the pipe, written as the `|` symbol. In simple terms, the pipe lets you chain commands together. To use it, you just place the `|` symbol between two commands, with a space on either side, and the shell runs them in sequence. It's one of those foundational terminal concepts that, once it clicks, you'll start using everywhere.

A quick note on what's technically happening, because it's worth understanding: a pipe normally takes the *output* of the command on its left and feeds it as *input* to the command on the right. In our case we're using it more loosely — to run one command and then another in a single line — but the takeaway is the same: two operations, one line, zero extra clicks. As you get more comfortable, you'll find pipes are how a lot of powerful terminal one-liners are built.

## The Command

Here's the whole thing in a single line:

```
mkdir -p test6folder/{red,white,blue,purple,yellow} | open test6folder
```

Let's break it down so it's not just magic. `mkdir` is the "make directory" command. The `-p` flag tells it to create parent folders as needed and not complain if something already exists. The clever part is `test6folder/{red,white,blue,purple,yellow}` — that curly-brace syntax is called brace expansion, and the shell automatically expands it into five separate paths: `test6folder/red`, `test6folder/white`, and so on. So in one stroke, `mkdir` builds the parent folder *and* all five color-named subfolders inside it.

Then comes ` | open test6folder`, which runs the `open` command on the parent folder. On a Mac, `open` followed by a folder name launches that folder in Finder — so the moment the command finishes, the new `test6folder` springs open and you can see everything you just created. Change the folder names inside the braces to whatever you need, and you've got a reusable template for instant folder structures.

## Prefer AppleScript? Here's That Too

If the terminal isn't your thing, you can accomplish something similar with AppleScript, which some folks find more readable. This version creates a parent folder on your Desktop and then loops to make five numbered subfolders inside it:

```applescript
set desktopPath to (path to desktop) as text
set newFolder to "My Folder"

tell application "Finder"
	set parentFolder to make new folder at desktopPath with properties {name:newFolder}
	
	repeat with i from 1 to 5
		set subFolder to make new folder at parentFolder with properties {name:"Subfolder " & i}
	end repeat
	
	open parentFolder
end tell
```

You can read this one almost like a sentence. It grabs the path to your Desktop, sets a name for the new parent folder, and then tells Finder to create it. The `repeat` loop runs five times, making "Subfolder 1" through "Subfolder 5" inside the parent, and the final line opens the parent folder so you can see the result — the same end goal as the terminal command, just through Finder's own scripting. Drop this into Script Editor, hit run, and you've got your structure.

## Conclusion

There you have it — two ways to spin up a whole folder structure in seconds instead of building it by hand. The terminal one-liner with brace expansion and a pipe is fast and easily customizable, while the AppleScript version is friendly if you prefer to stay out of the command line. Either way, the real lesson is that any repetitive setup you do regularly is a candidate for a little automation. Pick the approach that fits how you like to work, tweak the folder names to match your own projects, and save yourself the clicking from here on out.
