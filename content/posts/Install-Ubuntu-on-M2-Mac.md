---
title: "Install Ubuntu on M2 Mac"
description: "How to install Ubuntu 22.04 LTS on an M2 Mac Studio using VMware Fusion 13 — run Linux safely in a virtual machine without touching your macOS installation."
date: 2023-12-04
url: /Install-Ubuntu-on-M2-Mac/
image: /img/MacLinux.webp
categories:
  - Linux
  - Mac
tags:
  - M2 Mac
  - VMware
  - Ubuntu
  - Installation
draft: False
youtube_id: "rYXXUZjwvAU"
---

## Introduction

Welcome to my tutorial on running Ubuntu Linux 22.04.3 LTS (Jammy Jellyfish) on VMware Fusion 13 as a virtual machine on an M2 Mac Studio. If you've ever wanted to play with Linux without giving up your Mac — or wiping a drive — a virtual machine is the safest, most flexible way to do it. This walkthrough works for both newcomers and experienced users, and I'll cover not just the steps but the things worth knowing about running Linux on Apple Silicon.

## Video

{{< youtube rYXXUZjwvAU >}}

## Why Run Linux in a Virtual Machine?

Before we dive in, it's worth understanding why a VM is such a good approach. A virtual machine runs an entire operating system in a window on top of macOS, completely sandboxed from your real system. That means you can experiment freely — install packages, break things, try different desktop environments — without any risk to your Mac. When you're done, you just close the window, and your Mac is untouched. It's perfect for learning Linux, testing software, or running Linux-only tools alongside your normal Mac apps.

One important note for Apple Silicon owners: because the M2 chip is ARM-based, you need an **ARM build** of Ubuntu, not the standard Intel (x86) version. This trips up a lot of people. That's why I point to a specific build in the video description — grabbing the right architecture is the difference between a smooth install and an installer that simply won't boot.

## What You'll Learn

Here's the ground this tutorial covers:

- **How to download and install VMware Fusion 13.** VMware Fusion is the virtualization app that hosts your VM, and there's a free personal-use tier that's perfect for this.
- **How to download the correct Ubuntu 22.04.3 LTS (Jammy Jellyfish) ARM build ISO.** The ISO is the disc image you install Linux from — and again, make sure it's the ARM/Apple Silicon version linked in the description.
- **How to create a new virtual machine in VMware Fusion.** This is where you tell VMware how much memory, CPU, and disk space to hand the VM, and point it at your Ubuntu ISO.
- **How to install Ubuntu Linux on that virtual machine.** Once the VM boots from the ISO, Ubuntu's own installer takes over and walks you through the rest.

## A Few Setup Tips

When you create the VM, be reasonably generous with resources if your Mac can spare them — more RAM and CPU cores make the Linux experience much snappier. The M2 Mac Studio has plenty of headroom, so I'd lean toward allocating a comfortable amount of memory rather than the bare minimum. After Ubuntu is installed, it's also worth installing VMware's guest tools (where available for ARM) to improve display resolution, clipboard sharing, and overall responsiveness between macOS and the VM.

## My Honest Take

Now for the honest part, because I always want to give you the real verdict rather than just a glowing how-to. I genuinely appreciated getting Ubuntu running in a VM with VMware Fusion on the Mac Studio — it works, and for occasional Linux use it's perfectly fine. But I have to be straight with you: in my experience, **Linux ran noticeably better on my dedicated iMac-Linux setup** than it did virtualized on the Mac.

![iMac-Linux](/img/iLinux.webp)

A virtual machine always carries some overhead, and running an ARM Linux build through a virtualization layer on Apple Silicon — while impressive that it works at all — just isn't as smooth as Linux running natively on its own hardware. So if you only need Linux now and then, or you want to learn and experiment safely, the VM route is excellent and I'd recommend it. But if Linux is going to be a daily driver for you, a dedicated machine (even an older one you repurpose) will give you a better day-to-day experience.

## Alternatives Worth Knowing

VMware Fusion is what I used here, but it's not the only way to run Linux on Apple Silicon, and it's worth knowing your options. **UTM** is a popular free, open-source virtualization app built specifically with Apple Silicon in mind, and many people find it a great fit for Macs. **Parallels Desktop** is the polished commercial option with excellent Mac integration, though it's a paid subscription. And if you only need the Linux *command line* rather than a full desktop, a lightweight container or a tool like Lima can be far less resource-hungry than a full VM. The right choice comes down to whether you want a full graphical Linux desktop or just a Linux shell, and how much you're willing to spend — but it's reassuring to know there are several solid paths to the same destination.

## Conclusion

Running Ubuntu on an M2 Mac via VMware Fusion is very doable, and it's a fantastic way to dip into Linux without committing your whole machine to it — just remember to grab the ARM build of Ubuntu, give the VM enough resources, and follow along with the video for the specifics. It's a great sandbox for learning and testing. Just keep your expectations realistic: a VM is convenient, but native Linux hardware still wins on raw performance.