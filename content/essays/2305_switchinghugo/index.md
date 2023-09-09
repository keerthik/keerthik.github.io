---
title: "Switching to Hugo"
terminal: "switchinghugo.md"
date: 2023-05-14
draft: false
---

So I decided to rewrite my formerly jekyll-powered personal site with hugo.

> 🚧 While I'm migrating to Hugo, my old essays may be inaccessible 🚧.

> This is because I'm too lazy to keep two working branches for my site.


## Why?
I'll say upfront that I still have only good things to say about Jekyll, and I love how mature and true to its core Jekyll has remained. My switching has nothing really to do with Jekyll or its flaws.

There are no good reasons, to be perfectly honest. My website had gotten stale, both technically and in terms of content (my essays, portfolio items, toys, and even my unpublished draft content).

My first step when returning to my site after a long hiatus is to do something a bit more drastic technically first, just to sort of shake off the cruft, in a manner of speaking.

### Tech stack bloat
Something I have experienced working on jekyll sites over several years (the last one was set up with jekyll circa 2013) is significant bloat with each convenience I want added. My personal site is pretty much entirely in my control, so I can nuke it with impunity to reset the bloat.

### I needed a refresh
It has been a while since I've effectively learned a new tech tool. I play around with Unreal coming from Unity, and as mentioned I started learning go, but it's slow progress as my adult synapses have calcified the way they have.

### Go immersion
Go got me interested in hugo, and hugo got me interested in go. It felt natural to learn both simultaneously, to experience the output along with the input.  With familiarity of how it works as an end-user, and basic language comprehension, I can start reading plugin codebases and learn how and why Go is used better.

I'm writing this post itself because I also feel the need for a "first post" as I am going through the [gohugo quickstart tutorial](https://gohugo.io/getting-started/quick-start/).

### Fun sidenote
My Steamdeck has been my web development machine throughout setting up this website.

<div class="clearfix"></div>

![Coding with the steamdeck](images/deckdev.png#center)

<div class="clearfix"></div>

## Worklog
I attempted at first to surgically remove and replace content in my Jekyll site with their hugo counterparts after playing with a hugo quickstart sample site separately. I quickly abandoned this approach in favor of a new plan starting from the sample site folder:
 - make hugo quickstart project
 - write this post
 - make sure site navigation with a single post is robust
 - rebuild the theme from scratch so I have a complete understanding of the theme system and hugo's partials reference chains
 - remove dependency on a third-party theme in favor of (A) above, which is to reduce tech stack bloat/complexity - the more moving parts I introduce that I do not intimately understand, the more parts of my site and project I am scared to update and touch in the future[^parts].
 - bring back dependency on a third-party theme. Themes get complicated when you want them to be responsive! I may customize this later
 - read through and added the [Magnific Image Pop-up module](https://gist.github.com/zjeaton/0cdd7e4bed9d292ab6f3d76b0369f16d)

Rebuilding the theme was the most daunting task here from the outset. I started by using an imported theme as recommended in the quickstart, but very quickly it is apparent that using a fully personal theme seems to be the biggest barrier for a new hugo adopter. I will probably return to the way of making minor CSS modifications of color/fonts rather than entire components or styles for the near future.

[^parts]: Using moving parts I don't understand is likely a necessity for projects that need to scale, is worked on by multiple people, and needs to outlive my tenure working on it (eg: work). However my website is a project I want to own as completely as possible and as I see fit, at least in terms of comprehension of the technical details involved.