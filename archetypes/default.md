---
title: "{{ replace .Name "-" " " | title }}"
description: ""
date: {{ now.Format "2006-01-02" }}
url: /{{ .Name }}/
image: /img/velja.png
categories:
  - one
tags:
  - one
  - two
  - three
draft: true
---
