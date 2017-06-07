---
layout: post
title: "site updated again"
date: 2017-06-06
img: "image-not-found.png"
---

{% include quote.html
    quote="One machine can do the work of fifty ordinary men.  No machine can do the work of one extraordinary man."
    person="Elbert Hubbard"
    url="https://en.wikipedia.org/wiki/Elbert_Hubbard" %}

{% include image.html
    img=page.img
    title="this is just an update for the site &mdash; image not found placeholders"
    caption="this is just an update for the site &mdash; image not found placeholders" %}


I've been working on making the site a bit better on mobile and including some coding snippets. It's good to be back.


Here are the major updates to my site:
* Projects is up and running now, finally...
* Added contact form via Google Forms, all it used was an `iframe`
{% highlight html %}
<iframe src="link_to_form" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
{% endhighlight %}
* Added [Font Awesome](http://fontawesome.io/) icons, yes they're awesome
* Added syntax highlighting via `rouge`, [link to tutorial](https://benhur07b.github.io/2017/03/25/add-syntax-highlighting-to-your-jekyll-site-with-rouge.html)
* Added "image not available" placeholder (see above) using simple one-line javascript below:
{% highlight html %}
<img src="/assets/img/image.png" alt="image" onerror="this.onerror=null;this.src='/assets/img/image-not-found.png';"/>
{% endhighlight %}
* Removed logo :( &mdash; will put back in later
