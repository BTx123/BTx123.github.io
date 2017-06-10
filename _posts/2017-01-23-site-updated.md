---
layout: post
title: "site updated to Cloudflare"
date: 2017-01-23
img: "/blog/2017-01-23_https_1000x500.jpg"
---

{% include quote.html
    quote="The opportunity is often lost deliberating."
    person="Publilius Syrus"
    url="https://en.wikipedia.org/wiki/Publilius_Syrus" %}

{% include image.html
    img=page.img
    title="HTTPS - secure communication protocol not present with HTTP"
    caption="HTTPS - secure communication protocol not present with HTTP (image courtesy of Rigor.com)" %}

Today, I updated my site to use [HTTPS](https://en.wikipedia.org/wiki/HTTPS) &mdash; HTTP Secure &mdash; with the CDN [Cloudflare](https://www.cloudflare.com). It provides services such an auto-minification, content protection, and speeds up loading times. The setup process consisted of:

1. Getting a domain from [Namecheap](https://www.namecheap.com) which I already had from [GitHub Education](https://education.github.com/)
2. Creating my Cloudflare account with my domain name
3. [Correctly setting up my nameservers on Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9607/2210/how-to-set-up-dns-records-for-your-domain-in-cloudflare-account)
4. Correctly setting up DNS records for GitHub, email, and redirection to [briantom.me](briantom.me), which I copied from those originally on Namecheap and those that appeared automatically on the private email page
5. Change a few settings (HTTPS automatic rewrites, firewall, auto-minify, AMP links, caching, content protection, etc.) and [set up HTTPS redirect page rules](https://www.cloudflare.com/features-page-rules/must-use-page-rules/)

That's about it for setting up the site! I'm still working on getting email sent to my private email inbox though...
My email will be updated when it works, so stay tuned.

As a side note, I just started a new quarter and one of the classes I am taking is called ICS 11 - Internet and Public Policy, which explores the Internet and the economics and law surrounding this "network of networks."

Happy (soon to be) Chinese New Year!<br>
Brian
