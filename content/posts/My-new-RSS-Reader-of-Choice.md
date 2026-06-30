---
title: "My New RSS Reader of Choice"
author: "A.B. Anwar"
description: "Why I switched to FreshRSS as my self-hosted RSS reader — full control of your feeds, no algorithm, no subscription fee, running locally via a Docker container."
date: 2023-11-04
url: /My-new-RSS-Reader-of-Choice/
image: /img/FreshRSS.webp
categories:
  - FreshRSS
tags:
  - Fulltext
  - FreshRSS
  - Mac automation
draft: false
youtube_id: "lY8-3jsQ-yM"
---

### Navigating the Information Deluge with FreshRSS
In the digital age, where information is as vast as the ocean, finding a streamlined way to keep up with the latest news and content can be overwhelming. That's where RSS (Really Simple Syndication) feeds come into play, offering a consolidated view of various online content. My journey in quest of the ideal RSS reader led me to discover FreshRSS, a powerful, self-hosted RSS feed aggregator. In this blog post, I'll share why I chose FreshRSS, how I run it through a Docker container, and the benefits it offers for efficient news browsing.

### Video
{{< youtube lY8-3jsQ-yM >}}

### A Quick Refresher: What Is RSS?

Before I get into FreshRSS specifically, it's worth remembering why RSS matters in the first place. RSS lets you subscribe directly to websites, blogs, and news outlets, and pulls all their new content into one place — no algorithm deciding what you see, no ads injected between posts, no doomscrolling. You follow exactly the sources you choose, and you see everything they publish, in order. In an era where social media feeds are increasingly cluttered and manipulative, RSS feels almost radical: it's just *your* sources, on *your* terms. The only question is which reader to use, and after a lot of searching, mine became FreshRSS.

### Why FreshRSS?

FreshRSS stands out for several reasons. First and foremost, it's **self-hosted**, which means I have complete control over my own data. There's no company harvesting my reading habits, no risk of the service shutting down and taking my feeds with it, and no subscription fee. The privacy and personalization you get from owning your own instance are genuinely hard to match with a commercial reader.

The interface is also a big part of the appeal. FreshRSS is clean and intuitive, making it easy to organize and read articles from a wide range of sources. You can sort feeds into folders, tag articles, and generally shape the experience around how your brain works. It's responsive too, so it looks and works great whether I'm on my Mac, my phone, or a tablet — essential in a multi-device world. One feature I especially appreciate is its full-text fetching: many feeds only publish a short summary, and FreshRSS can pull in the complete article so you can read everything in one place without clicking out to the original site.

And because FreshRSS supports the standard Google Reader API, it plays nicely with excellent mobile apps like Reeder and NetNewsWire — so I host the engine myself but can still read through a polished native app on my phone. That combination of self-hosted control plus great client apps is the best of both worlds.

### Running FreshRSS in a Docker Container

Setting up FreshRSS in a Docker container may sound intimidating if you haven't used Docker before, but it's surprisingly approachable. Docker packages an application together with everything it needs to run, in a self-contained "container" that's isolated from the rest of your system. That isolation is a real win: FreshRSS can't interfere with other services on the machine, and other services can't interfere with it, which is good for both stability and security.

The practical benefits go further. Docker makes installation a matter of pulling an image and starting the container, rather than manually installing a web server, PHP, and a database. It makes the setup portable — you can move it between machines or rebuild it identically with ease. And it makes updates and backups far less painful, since the whole environment is defined in a predictable, reproducible way. In my video tutorial, I walk through the entire process end to end: installing Docker, configuring FreshRSS, getting it running, and the tips and tricks I've picked up so you can replicate my setup without the trial and error I went through.

### Is Self-Hosting Right for You?

I'll be honest that self-hosting isn't for everyone — it asks for a little more upfront effort than just signing up for a hosted reader. But if you value privacy, want to truly own your data, and enjoy having a setup that's yours to customize, the payoff is well worth it. And thanks to Docker, the technical barrier is much lower than it used to be. If you're not ready to host your own, FreshRSS can also run on inexpensive shared hosting, so there's a gentler on-ramp available too.

### Conclusion

FreshRSS offers a rare blend of control, customization, and convenience for managing your RSS feeds. Whether you're a casual reader who just wants a calmer way to follow a few sites, or a power user who wants to own every part of the stack, it scales to fit. Running it through Docker makes it even more robust and maintainable. If you're tired of algorithm-driven feeds and want to take back control of how you consume news, I'd genuinely encourage you to give FreshRSS a try. As always, if you have questions about my setup or your own experience with it, drop them in the comments below.