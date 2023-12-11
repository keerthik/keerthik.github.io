---
categories:
- tech
title: "Switching to Hugo"
terminal: "switchinghugo.md"
date: 2023-05-14
draft: false
---

So I decided to rewrite my formerly [jekyll](https://jekyllrb.com/)-powered personal site with [hugo](https://gohugo.io/).

## Why?

I'll say upfront that I believe one should use

- static sites for 99% of use cases
- Jekyll, for 99% of static sites

I love how mature and true to its core Jekyll has remained. My switching has nothing really to do with Jekyll or its limitations.

There are no good reasons, to be perfectly honest. Things collected a lot of dust around here, and in typical ADHD fashion when dusting things, I end up rebuilding them.

My first step when returning to my site after a long hiatus is to do something a bit more drastic technically first, just to sort of shake off the cruft, in a manner of speaking.

### Get up to date on SOTA

I maintain a couple of websites (for [BitGym](https://www.bitgym.com), for friends, for my public-facing projects) and I advocate static sites for all of them. As these sites mature, and their needs push up against the limitations of Jekyll's native functionality, it's a reminder to me to look into what's up in static-site-gen-land.

The best place for me to try out a new tool is on my personal site since I know it intimately, and I'm the only real stakeholder in its uptime.


### kOrc.me needed a refresh

The design and content on my site had gotten quite stale, and I hold the idea that our personal website should be more truly a representation of ourselves than any social media profile quite dearly.

### Go immersion

Go got me interested in hugo, and hugo got me interested in go. It felt natural to learn both simultaneously, to experience the output along with the input.  With familiarity of how it works as an end-user, and basic language comprehension, I can start reading plugin codebases and learn how and why Go is used better.

I'm writing this post itself because I also feel the need for a "first post" as I am going through the [gohugo quickstart tutorial](https://gohugo.io/getting-started/quick-start/).

## Fun sidenote

My Steamdeck has been my web development machine through the initial set up with Hugo. 

<div class="clearfix"></div>

![Coding with the steamdeck](images/deckdev.png#center)

<div class="clearfix"></div>

`hugo server` did seem to push the CPU a bit far and cause the machine to hang occasionally, but it wasn't terrible! I also happened to be in India where the ambient temperature tended to run a bit high so that probably wasn't helping.

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