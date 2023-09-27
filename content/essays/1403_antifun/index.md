---
layout: post
tags: 
- play
- design
categories:
- play
title: Make it fun to face too
date: 2014-03-01
update: 2014-03-01
cross: <a href="https://medium.com/p/97b4e72493ad">on Medium</a>
---
One of my big projects is our one-on-one versus board game, dubbed [Operation Dicestorm](https://www.facebook.com/dicestorm). While it’s my first focused attempt designing a board game, a lot of lessons I learned analyzing video game design is directly applicable. This post is about the concept of “Fun to Face Too,” an important paradigm to observe specifically when designing multiplayer games (pretty much every board game, and most modern video games), to create the very best game mechanics.

> The core objective of every mechanic in a game should be to maximize net fun had by all players.

In this [excellent forum post](http://forums.na.leagueoflegends.com/board/showthread.php?t=293417), Riot Games VP of Design Tom ‘Zileas’ Cadwell talks about the idea of “anti-fun > fun = bad,” among a slew of other great Game Design considerations. I think this specific concept of “maximize \[f(x)\] = \[fun - anti-fun\]” is understated, so I decided to write this post, to do a little more in-depth analysis of it.

Just like no mechanic exists in isolation, no player exists in isolation either. This means when evaluating the "fun factor" of each mechanic, consider every player in the game. Any mechanic that's beneficial for the player executing them is bound to be somewhat fun for them. Therefore, it's much more important — and far more challenging — to create opportunities for more fun for the opponent player than the executing player. This is a property that I call “Fun to Face.” When overlooked, we often wind up with “anti-fun mechanics,” a game design anti-pattern that crops up too often when designing individual mechanics in games.

## What makes a mechanic fun (or anti-fun)?

Talking about what makes something fun is a deep and philosophical topic that you and I can expend thousands of words on with no end in sight. There are many questions to ask to see if a mechanic is fun, but within the scope of this post, I will use the following, extremely simple heuristic to evaluate fun-factor:

* Is it challenging for the player?
* Is it very satisfying for the player when the desired outcome is achieved?

For each mechanic, we should answer these questions for all players — in this post I’m only going to consider ‘versus games’, so our only players will be User and Opponent (so ignoring Ally, Game/Dungeon Master, etc). For the User, it can score from “slightly fun” on the poor side, to “very fun” on the high side. For the Opponent, it can score from “always very anti-fun” (unacceptable) on the poor side through “slightly anti-fun” (acceptable) to “opportunity to be very fun” (desired) on the high side. Ideally, the sum of these two lies as far along the positive side as possible.

To see what works well and what doesn’t let’s analyze some examples from two of my favourite games: StarCraft 2 and DOTA2.

Disclaimer: commentary on balancing effectiveness of mechanics (“game balance”) is outside the scope of this post, and is not being considered for these analyses. Additionally, a lot of other design considerations are being ignored for the sake of the exercise below, but will be mentioned at the end.

Starting with some StarCraft 2 mechanics.

### “Baneling Landmines”

Banelings burrowed in small groups, can be triggered by the player to kill clumps of units that walk over it, by surprise.

**User**: Effectively pulling these off requires fairly high skill: with regards to awareness, timing, prior positioning, baiting, planning, avoiding detection, etc. When it works well, large clumps of enemies can be decimated at once, completely turning the tides of battle, not to mention pretty acid-covered bodies melting. Scores well on "Challenging" as well as "Satisfying".

**Opponent**: Dealing with baneling landmines involves taking into consideration that your Zerg enemy has the option of landmines, using scans at key choke points, recognizing your opponents tactical tendencies, and/or some dumb luck. It feels good to save your army from disaster as you blow up fruitless banelings sitting in the ground under your detection. This scores decently on "Challenging," and very well on "Satisfying".

As such, the mechanic of baneling landmines, is a strong “fun to face” mechanic.

### Concussive Shells

(aka "Marauder Slow", Terran Marauder passive)
This ability requires a cheap and short research, to passively modify the Marauder attack to have a crippling slowing effect.

**User**: Using this ability doesn't even require conscious intention past doing the research. To maximize effectiveness, there's a skill factor in cycling targets to keep an entire group of enemies slowed. But with SC2's stellar targetting AI, this has small visible effect. It is a little satisfying to see enemy units try to do things and fail and die crawling, but the overall satisfaction factor of combat is hardly increased by executing better to take advantage of this ability

Note that this doesn't change the fact that the ability is extremely effective and yields better combat results).

I think it rates poorly on both "Challenging" as well as "Satisfying" for the user.

**Opponent**: There’s really only one choice to 'beat' Concussive Shells: hard counter the unit (flyers, speedlings, storm, etc). Defeating a squadron of marauders with concussive shells thus is no more satisfying than beating any other army composition with their appropriate hard counters - little satisfaction due to overcoming the specific mechanic. Similarly, the only way to 'evade' it is to try to never encounter it. Avoiding getting slowed to death, while challenging, involves more foresight, careful positional play and avoidance rather than complex/satisfying execution (in most cases). On the other hand, once caught, it is extremely excruciating and frustrating attempting to do anything other than stand ground.
Passable score on "Challenging", but terrible on "Satisfying."
By this heuristic, Concussive Shells scores quite poorly for fun as a multiplayer mechanic.

In contrast, fun crowd-control mechanics in SC2 include Mothership Core Time Warp and Infestor Fungal Growth.

Taking a quick look at a pair of DOTA abilities

### Pudge's Meathook

It’s rare to get a clean shot

Launches a chain and hook towards a direction. If it comes into contact with a unit pull it towards Pudge, dealing massive damage if enemy. Skill shot.

**User**: "Skill-shots" are abilities that do not guarantee affecting a target, depending on the accuracy and timing of the player, and are challenging to use by nature. Meathook is particularly challenging because it’s best used at its maximum range, which makes everything else harder: complex timing, relative positioning, mana management and opponent prediction. When you catch a unit, it can range from causing yourself disaster (pulled an initiator among your teammates/saved an enemy by pulling an ally who was about to kill him) to winning the game (picked out and killed a key hero before he could be rescued). When Meathook is executed perfectly, it is probably the most satisfying isolated experience in DOTA. Flying colors in both axes for the user.

**Opponent**: Meathook is a very dodge-able ability, but it's far from trivial. It requires awareness of Pudge's presence, quick reflexes, careful positioning, creative use of available tools (summon an illusion, banish self, etc), effective teamwork with quick communication, and even good instinct. By dodging a Meathook you avert nearly certain death, gain a lot of information about the Pudge (skill build, location), set him back a hefty chunk of mana, and create an opportunity for trash-talk. This makes it extremely satisfying too.
Pretty darn good score on both axes.

Probably one of the oldest and most famous DOTA abilities, reimagined in just about every MOBA game ever, and for damn good reason! This mechanic is a brilliant “fun to face” experience.

### Anti-Mage's Mana Break

Passive ability that burns an amount of mana whenever attacking a target and deals damage equal to the mana burned.

**User**: Very similar to the Marauder slow. However, because of the impact of individual units and heroes in DOTA, selecting the right target is a lot more important here, adding a small factor of challenge. Mana Break is pretty satisfying as part of a system: when you take advantage of a unit being disabled (while AM himself can't disable, so requires teamwork) to maximize effectiveness, or prevent a hero from casting a key ability by just managing to burn enough mana in time, it is rewarding.

**Opponent**: Manaburn abilities are famously the signature "anti-fun" mechanics among LoL players, since Riot has religiously avoided manaburn abilities in League of Legends while every other MOBA incorporated it based on the DOTA model. Facing Mana Break is awfully similar to Concussive Shells as mentioned above. We can postulate a general idea here: If the only effective option for evading a mechanic is to prevent it from even coming into play (or hard-countering the containing unit/hero), then it will score poorly for the opponent in the "Satisfying" axis. Not only is it frustrating to avoid, but once afflicted, it removes your options to use any of your other abilities, reducing the fun mechanics at your disposal even further.

Riot Games is pretty accurate in labelling Mana Break as a fairly unfun mechanic.

In contrast, fun-to-face mana-removal abilities include Lion's Mana Siphon, or Ezalor's Mana Leak. Fun-to-face "attack modifiers" include Obsidian Destroyer's Arcane Orb, Sand King's Caustic Finale, and Huskar's Burning Spears.

## In The Defense of the Poorly Scoring Mechanics

Certainly these mechanics were each arrived at after much iteration and careful planning. Unfortunately the designers behind DOTA and SC2 have many constraints they have/had to work with. The biggest of these are that the game is played at an extremely competitive level, and its massive scale in terms of complexity and player-base.

The esports aspect adds a third and very important stakeholder for the fun-ness of a multiplayer mechanic - the spectator - which I haven't considered in this discussion, and is out of the scope of this post.

The tight competitive scene and the size of the player-base made it difficult for them to make radical changes to any units or mechanics once they released, because any change was bound to affect the intricate balance of the game and solicit a lot of flak from the community, or tip the win rates at the competitive level too much.

The scale of the game also makes crafting unique abilities for every unit nearly impossible. They were bound to have to fall back onto some simplistic mechanics to keep it fresh while still maintaining balance. It's quite impressive that nearly every single unit and ability in SC2 is extremely distinct.

There are also several other heuristics to evaluate the fun-ness of a mechanic. For example, as mentioned above, how fresh and distinct it is from everything else in the game. Also how easily it can be described, how quickly it can be learned, how well it relates to other mechanics in the game, and how simple it can be kept. Each of these points deserves several posts of their own. These facets are all important, and not so easily disambiguated.

I guess this is part of what makes the process of game design so damn challenging, but also extremely rewarding. It scores pretty well on fun-ness on our end, and if we do it right, it should on yours too ☺

- - -

Also check out {{ site.ds }}, the board game mentioned in the article.   
