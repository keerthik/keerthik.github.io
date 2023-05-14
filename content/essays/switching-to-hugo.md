---
title: "Switching to Hugo"
date: 2023-05-30T00:00:00-05:00
draft: false
---

So I decided to rewrite my formerly jekyll-powered personal site with hugo.

## Why?
I'll say upfront that I still have only good things to say about Jekyll, and I love how mature and true to its core Jekyll has remained. My switching has nothing really to do with Jekyll or its flaws.

There are no good reasons, to be perfectly honest. My website had gotten stale, both technically and in terms of content (my essays, portfolio items, toys, and even my unpublished draft content).

My first step when returning to my site after a long hiatus is to do something a bit more drastic technically first, just to sort of shake off the cruft, in a manner of speaking.

### Tech stack bloat
Something I have experienced working on jekyll sites over several years (the last one was set up with jekyll circa 2013) is significant bloat with each convenience I want added. My personal site is pretty much entirely in my control, so I can nuke it with impunity to reset the bloat.

### I needed a refresh
It has been a while since I've effectively learned a new tech tool. I play around with Unreal coming from Unity, and as mentioned I started learning go, but it's slow progress as my adult synapses have calcified the way they have.

### Go is cool
I just started to learn go, and I want to experience software written in go along the way. With familiarity of how it works as an end-user, and basic language comprehension, I can start reading the hugo codebase and learn how Go can achieve goals better. From experience with the website we have built for [BitGym](www.bitgym.com) I know Jekyll doesn't scale that well for slightly more complex sites, with i18n support so 5x the baseline page count to generate). My crude understanding is that some credit of the miraculous performance numbers of hugo's site generation can be attributed to go, and I want to learn how that works.

I'm writing this in a way because I also feel the need for a "first post" in the way of going through the gohugo quickstart tutorial.

## Worklog
I attempted at first to surgically remove and replace content in my Jekyll site with their hugo counterparts after playing with a hugo quickstart sample site separately. I quickly abandoned this approach in favor of a new plan starting from the sample site folder:
 - make hugo [quickstart](https://gohugo.io/getting-started/quick-start/) project
 - write this post
 - make sure site navigation with a single post is robust
 - rebuild the theme from scratch so I have a complete understanding of the theme system and hugo's partials reference chains
 - remove dependency on a third-party theme in favor of (A) above, which is to reduce tech stack bloat/complexity - the more moving parts I introduce that I do not intimately understand, the more parts of my site and project I am scared to update and touch in the future[^parts].
 - bring back dependency on a third-party theme. Themes get complicated when you want them to be responsive! I may customize this later

Rebuilding the theme was the most daunting task here from the outset. I started by using an imported theme as recommended in the quickstart, but very quickly it is apparent that using a fully personal theme seems to be the biggest barrier for a new hugo adopter.

I followed this to generally go about making my own theme.

[^parts]: Using moving parts I don't understand is likely a necessity for projects that need to scale, is worked on by multiple people, and needs to outlive my tenure working on it (eg: work). However my website is a project I want to own as completely as possible and as I see fit, at least in terms of comprehension of the technical details involved.