---
title: About
description: About
Draft: false
---

Hi, my name is A.B.,

I'm a marketing professional, a Paralympic hopeful in the sport of Boccia, and a relatively new YouTuber. Recently (a.k.a., <span id="yt-years-ago"></span>), I started a [YouTube channel](https://www.youtube.com/@AutomationMaestro) to share some excellent macOS-based automation with people. I aim to teach people how to make their Macs work for them rather than vice versa. And yes, there are a couple of videos on my channel before I started posting regularly, but officially, my first [Keyboard Maestro video](https://www.youtube.com/watch?v=xsf3EIVerCY) premiered on October 14, 2019.

This site will hopefully grow to become my little corner of the Internet. I'll share longer-length blog posts accompanying my Mac automation-focused YouTube videos, other attempts at starting online businesses, investing and my interests in general.

{{< raw >}}
<script>
(function () {
  const startDate = new Date(2019, 9, 14); // 9 = October (months are 0-based)
  const today = new Date();

  let years = today.getFullYear() - startDate.getFullYear();
  const anniversaryNotReached =
    today.getMonth() < startDate.getMonth() ||
    (today.getMonth() === startDate.getMonth() && today.getDate() < startDate.getDate());

  if (anniversaryNotReached) years--;

  let text;
  if (years <= 0) text = "this year";
  else if (years === 1) text = "one year ago";
  else text = years + " years ago";

  document.getElementById("yt-years-ago").textContent = text;
})();
</script>
{{< /raw >}}