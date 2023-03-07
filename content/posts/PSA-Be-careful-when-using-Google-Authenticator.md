---
title: "PSA Be Careful When Using Google Authenticator"
description: "Bringing attention to the pitfalls of Google Authenticator"
date: 2022-11-14
url: /PSA-Be-careful-when-using-Google-Authenticator/
image: /img/Authenticator.png
categories:
  - one
tags:
  - one
  - two
  - three
draft: true
---

In this video I share with you a scary experience I  had using Google's Authenticator App. The Authenticator App is Google's 2FA app that latches on to your specific device and when you transfer your device the codes don't transfer over like other apps.
<!--more-->
 
## Video

{{< youtube _-7kaL0I3J0 >}}

### Google Authenticator

Google Authenticator is a free app developed by Google that generates unique time-based one-time passwords (TOTPs) on your smartphone or tablet, providing an extra layer of security for your online accounts. By using the app, you can ensure that only you can access your accounts, as the generated codes are only valid for a short period of time and are required along with your regular login credentials. It is commonly used for two-factor authentication (2FA) and is compatible with a wide range of online services, including Google, Facebook, Twitter, and more.

### Pros

The app does provide a layer of security that makes the user feel superior to those who don't use the app. You get a new code to access every site that intergrates with it in combinatinon with the traditional password. 

### Cons

The app doesn't inform you that it will not transfer over with the rest of your data should you switch phones. I discovered this after I had erased my older iPhone 11. This locked me out of several financial apps that I use sending into extrme panic. To regain access to my financial accounts, I  had to restore data to my old device, access each account with the available Google Authenticator code and remove that layer of security before erasing the device again. 

## Conclusion

In order do not lock yourself out of accounts utilizing Google Authenticator you must follow these steps in order before erasing your old device.

1. Make an iCloud backup of your old device.
2. Remove 2FA securiity from all apps using 2FA on your old device. 
3. Transfer all data  to your new device without deleting the old device.
4. Add 2FA security back to the apps that require on your new device.
5. Now you can erase your old device