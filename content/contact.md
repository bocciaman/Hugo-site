---
title: "Contact Me"
description: "Get in touch with A.B. Anwar"
draft: false
url: "/contact/"
---

If you’d like to get in touch, please use the form below.

---

<form
  name="contact"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  action="/thank-you/"
>
  <!-- REQUIRED for Netlify Forms -->
  <input type="hidden" name="form-name" value="contact" />

  <!-- Honeypot (spam trap) -->
  <p style="display:none;">
    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
  </p>

  <p>
    <label for="name"><strong>Name</strong></label><br>
    <input type="text" id="name" name="name" required style="width:100%; padding:8px;">
  </p>

  <p>
    <label for="email"><strong>Email</strong></label><br>
    <input type="email" id="email" name="email" required style="width:100%; padding:8px;">
  </p>

  <p>
    <label for="subject"><strong>Subject</strong></label><br>
    <input type="text" id="subject" name="subject" required style="width:100%; padding:8px;">
  </p>

  <p>
    <label for="message"><strong>Message</strong></label><br>
    <textarea id="message" name="message" rows="6" required style="width:100%; padding:8px;"></textarea>
  </p>

  <p>
    <button type="submit" style="padding:10px 18px; cursor:pointer;">
      Send Message
    </button>
  </p>
</form>

---
