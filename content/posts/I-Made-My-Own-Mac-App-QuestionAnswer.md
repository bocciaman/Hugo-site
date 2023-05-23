---
title: "I Made My Own Mac App QuestionAnswer"
description: "I made my own Mac app"
date: 2023-05-22
url: /I-Made-My-Own-Mac-App-QuestionAnswer/
image: /img/MyApp.webp
categories:
  - Alfred
  -Bash script
tags:
  - Alfred
  - bash
  - Chatgpt
draft: false
---

In the world of Mac, apps and software like Brett Terpstra's [QuickQuestion](https://brettterpstra.com/projects/quickquestion/), Alfred, and ChatGPT from OpenAI provide powerful tools for automation and efficiency. It's possible to combine these tools to create a highly personalized Mac app that can not only serve your unique needs but also provide an interesting learning experience.

## The Inspiration - QuickQuestion

{{< youtube t-tw2v6BW_I >}}

QuickQuestion by Brett Terpstra is an ingenious little app that answers your questions based on predetermined responses. But I found a roadblock; I couldn't get QuickQuestion to work on my system with Alfred, a productivity application for macOS. This dilemma sparked an idea, why not create my own version of this app that can seamlessly integrate with my system, Alfred and my Google Drive?

## The Journey - From Roadblock to Innovation

Building a Mac app from scratch might seem like an uphill task, but with the right resources and a pinch of perseverance, it is achievable. My journey began with a close look at ChatGPT, a sophisticated AI model developed by OpenAI, and a touch of Bash scripting.

## Enlisting ChatGPT's Help

ChatGPT, a sibling of the powerful language model GPT-3, provides an excellent resource when it comes to understanding and generating human-like text. Harnessing this capability, I decided to use it to handle the main part of an Alfred workflow.

Creating an Alfred workflow with ChatGPT involved training the model to understand the questions and generate the appropriate predetermined answers. This part of the journey was fascinating, not just because of the AI integration, but also due to the extensive scripting involved.

## The Magic of Bash Scripting

With the core part of the Alfred workflow ready, it was time to dive into Bash scripting. My goal was to create a script that allowed me to ask a question and get the predetermined answer within the Alfred search bar.

Bash (Bourne Again Shell) is a command language interpreter for the GNU operating system. It's great for automating routine tasks and, in my case, for scripting this question-answer functionality. After some coding and testing, I had a script that worked perfectly with Alfred.

## Beyond Alfred - Command Line Interface

Satisfied with the Alfred workflow, I didn't stop there. I decided to take the same bash script and modify it slightly to work as a command-line program. This was done to ensure that I could get the same functionality outside of Alfred, by directly using the terminal.

Creating a command-line interface (CLI) out of the bash script increased the utility and accessibility of the app. Now, irrespective of whether Alfred was running or not, I could still ask questions and get answers directly from the terminal.

## Conclusion

The journey to build a Mac app integrating QuickQuestion, Alfred, and ChatGPT, using a Bash script, was both challenging and exciting. What started as an idea to bypass a roadblock turned into a unique project that honed my scripting skills and deepened my understanding of AI.

This project is proof that with a bit of initiative and creativity, anyone can build their own app, tailored to meet their specific needs. It's a reminder of the power and potential that lies within the fusion of different software tools. More importantly, it highlights the value of self-learning and problem-solving in our ever-evolving digital world.