---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
description: ""
date: {{ .Date }}
url: /{{ .TranslationBaseName | urlize }}/
image: /img/velja.png
categories:
  - one
tags:
  - one
  - two
  - three
draft: true
---
