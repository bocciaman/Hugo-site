---
title: "PSA Be Careful When Using Google Authenticator"
description: "Bringing attention to the pitfalls of Google Authenticator"
date: 2022-11-14
url: /PSA-Be-careful-when-using-Google-Authenticator/
image: /img/Authenticator.png
categories:
  - iOS
tags:
  - Google Authenticator
  - iOS
  - 2FA
draft: false
youtube_id: "_-7kaL0I3J0"
---

In this video I share with you a scary experience I  had using Google's Authenticator App. The Authenticator App is Google's 2FA app that latches on to your specific device and when you transfer your device the codes don't transfer over like other apps.
<!--more-->
 
## Video

{{< youtube _-7kaL0I3J0 >}}

### What Is Google Authenticator?

Google Authenticator is a free app from Google that generates unique time-based one-time passwords (TOTPs) on your phone or tablet, adding an extra layer of security to your online accounts. The idea is simple and genuinely effective: even if someone steals your password, they still can't get in without the short-lived code from your device. Those codes refresh every 30 seconds or so, so they're only valid for a brief window. It's one of the most common forms of two-factor authentication (2FA) and works with a huge range of services — Google, Facebook, Twitter, and crucially, many banking and financial apps.

I want to be clear up front: **2FA is good, and you should use it.** This post isn't a warning against two-factor authentication — it's a warning about one specific, painful gotcha with how Google Authenticator historically handled device transfers.

### The Pros

The upside is real. Google Authenticator meaningfully hardens your accounts: every login that supports it requires both your password *and* a fresh code from your phone, which shuts down the vast majority of remote account-takeover attempts. It's free, it's simple, and it works offline since the codes are generated on the device itself rather than sent over the network. For protecting sensitive accounts, that's exactly what you want.

### The Con That Bit Me

Here's the scary part, and the reason I made this video. Historically, Google Authenticator's codes were tied to the specific physical device — and the app **did not warn you** that those codes would *not* transfer over when you migrate to a new phone the way your photos, messages, and other data do. I learned this the hard way: I had already erased my old iPhone 11 before realizing the codes were gone with it. That locked me out of several financial apps I rely on, and it sent me into a genuine panic.

Recovering was a nerve-wracking ordeal. I had to restore data back onto my old device, log into each affected account using the Authenticator codes that were available there, remove the 2FA layer from each one, and only *then* erase the old device again. It was hours of stress that could have been avoided entirely if I'd known the codes don't migrate automatically.

### A Note on Recent Changes

It's worth mentioning that Google has since added an account-sync feature that can back up your Authenticator codes to your Google account, which helps with exactly this problem. But I'd still treat device migration carefully — sync has to be enabled and working, and relying on it blindly is how people get caught out. There are also alternative authenticator apps (like Authy, or password managers with built-in 2FA such as 1Password) that were designed from the start to back up and sync your codes across devices. If you're choosing an authenticator today, that backup capability is worth prioritizing.

### A Better Long-Term Habit: Save Your Backup Codes

Beyond the migration steps, there's one habit that would have saved me the entire ordeal: when you first enable 2FA on any account, most services offer a set of **one-time backup/recovery codes**. Save those somewhere safe — ideally in a password manager. Those codes let you get back into an account even if your authenticator app is gone entirely, no matter what device you're on. Pair that with using an authenticator that backs up to the cloud, and a lost or wiped phone goes from a panic-inducing lockout to a minor inconvenience. Think of backup codes as the fire escape you hope you never need but are very glad exists.

## The Safe Way to Switch Phones

To avoid locking yourself out of accounts that use Google Authenticator, follow these steps **before** you erase your old device:

1. **Make an iCloud backup** of your old device, so you have a full restore point.
2. **Remove 2FA** from every app currently using Google Authenticator on your old device (you'll re-add it shortly).
3. **Transfer all your data** to your new device — *without deleting the old one yet.*
4. **Re-add 2FA** to each app that needs it, now on your new device.
5. **Only now** is it safe to erase your old device.

Following that order guarantees you always have a working code available somewhere until your new phone is fully set up. The cardinal rule: never wipe the old device until you've confirmed 2FA is working on the new one.

## Conclusion

Two-factor authentication is essential, and Google Authenticator does its core job well — but its old device-transfer behavior is a trap that's cost a lot of people access to important accounts, myself included. Whether you stick with Google Authenticator (and enable its sync), or move to an app with solid backup built in, the lesson is the same: plan your phone migration deliberately, keep 2FA working on at least one device throughout, and never erase your old phone until everything's confirmed on the new one. A little caution here saves you from a very stressful afternoon.