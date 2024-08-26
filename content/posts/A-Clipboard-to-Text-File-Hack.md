---
title: "A Clipboard to Text File Hack"
description: "A clipboard automation for creating new text files."
date: 2024-08-25
url: /A-Clipboard-to-Text-File-Hack/
image: /img/clip2txt.webp
categories:
  - macOS
tags:
  - Bash Scripting
  - Mac Automation
  - Tutorials
  - Apple
  - Productivity
  - Clipboard Automation
  - Alfred Workflows
draft: False
---

## Video
{{< youtube vq2-qD6YXAY >}}

Want to streamline your macOS workflow and save time? In this video, I’ll show you how to automate saving your clipboard content directly into a new text file that is saved in the frontmost Finder window/folder – all with a simple bash script!

Say goodbye to manual copy-pasting! Whether you’re a developer, content creator, or productivity enthusiast, this automation hack will make your life easier. I’ll guide you step-by-step on how to set up a service that instantly saves whatever is on your clipboard into a text file in your active Finder window – with just one shortcut. 

## The Script
```shell script
#!/bin/bash

# Get clipboard content using pbpaste
clipboard_content=$(pbpaste)

# Get the path of the frontmost Finder window
folder_path=$(osascript -e '
tell application "Finder"
    if (count of windows) > 0 then
        set thePath to (POSIX path of (target of front window as alias))
    else
        set thePath to ""
    end if
end tell
return thePath')

# Check if we have a valid folder path
if [[ -n "$folder_path" ]]; then
    # Define the file name and path
    file_path="${folder_path}Orig_FileName.txt"

    # Save the clipboard content to the file
    echo "$clipboard_content" > "$file_path"

    echo "Clipboard content saved to $file_path"
else
    echo "No Finder window detected."
fi
```

## Conclusion
 The Automation is useful when preserving original file names for files that have had file name changes to be more human readable.