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
---

In this video, we will be using a simple command in the terminal to create a main folder, and then creating five subfolders within it - all in one go!

## Video

{{< youtube BftRV7myH8U >}}

## The Problem

In this video, we will be using a simple command in the terminal to create a main folder, and then creating five subfolders within it - all in one go! The "all in one go!" Portion is done by teeing two commands together using the pipe command. This will save you time and effort, especially if you need to create a bunch of folders regularly.

We'll start by opening up the terminal and entering the command to create the parent main folder then the subfolders. Then, we'll pipe the mkdir command with the open one so The whole operation is done in one command. You'll be able to see the folders in Finder because the parent folder will open automatically when is run. 

## What is the Pipe command?

The pipe command simply ties two seperate commands togetyher so they can be run simaltaniously. To pipe two commands together you simply place the pipe "|" symbol between each command with spaces. 

## The Command

```
mkdir -p test6folder/{red,white,blue,purple,yellow} | open test6folder
```

## AppleScript

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

## Conclusion

If I get to adding the AppleScript script for opening the folder, I will. 