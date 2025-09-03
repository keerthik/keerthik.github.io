---
categories:
- play
title: Overpowered
terminal: overpowered.md
date: 2015-07-01
lastmod: 2015-07-01
---

{{% include "/snippets/dicestormintro.md" %}}

When creating a game with a sizeable variety of mechanics that are meant to work in tandem with each other, there are a number of apparent challenges, like balance and learning curve. There are also a few less apparent challenges; one that we discovered is that it's difficult to test what works and what doesn't as not everything gets played in every game. 

The main strength of having a mix of diverse mechanics is in fun factor, at the cost of the challenges mentioned above -- every game is more interesting, epic and creative because of the increased surface area for interaction between mechanics. Hence, it is paramount that every mechanic is satisfying and fun to play, before they need to be balanced, simplified, or printed on a rule card. And the best way to work on that aspect is to repeatedly see how players react to a mechanic coming into play, the caster and opponent both, over a number of games and cicrumstances. If the right reactions come out, every challenge involved is worth it, and that's always the most important thing for us game designers. And to observe those reactions, we need the playtesters to play our newest mechanics, the ones we are most unsure about. It is also best to subtly encourage players to bring these into play, rather than instructing them.

So how do we do it?

## Power Overwhelming

One approach to do this is something we see in "Games as a service" video games like League of Legends or Hearthstone -- Overpower the mechanics you want to observe for a period of time. "Overpowering" refers to raising the numbers on new spells, champions, or cards to *just* above your intuition for balance. The idea is to rebalance the mechanic when you're satisfied with the other factors of the design before solidifying its place in the game.

The first and simplest thing to see is how excited players are to bring out the mechanics. That indicates how fun it is for the primary stakeholder, the mechanic "invoker". If despite being overpowered it is not favoured over the more familiar mechanics of the game, then there is something fundamental lacking about the new spell, unit, or property you introduced to the game. The next stakeholders are opponents. Certainly, opposition players will exhibit frustration facing such new (overpowered) mechanics for a variety of reasons. But what needs attention is the primary root cause of those frustrations. Is it not [fun to face](../1403_antifun/)? Is it because the effects and implications on the game are unintuitive? Is it because the counter that you as the designer had in mind (or another) hasn't been figured out yet, but players are trying? Are players just bored and uninterested in figuring it out, and just find ways to circumvent or avoid it? Once those have been cleared, and player frustrations can be traced primarily to the fact that the numbers just don't play out, only *then* is it finally time to rebalance the mechanic in context with the rest of the game.

With Dicestorm, I wanted to introduce an ability that gave the Orbotron faction more flexibility -- thus the "Core Reconfiguration" ability was born. Core Reconfiguration allows one of the Orbotron unit types to transform into one of the other types. My intuitive sense of balance for the ability stipulated that the unit should be adjacent to the type of unit it wanted to emulate, and it should cost an action (ending the player's turn) to execute Reconfiguration. However, when testing it, I opted to remove the adjacency requirement and the action cost. Since there was very little for players to lose, it was brought into play quite often. When I was happy with the result, I added the action cost back in. \[I decided against reimplementing the adjacency requirement, simply because the way it would interact with the rest of the game would just not have been as fun.\]

## Pitfalls
There are a few things to watch out for. For one, you certainly have to Overpower in moderation. In widely played games like Heroes of the Storm or LoL, there is persistant [bitterness among players](http://kotaku.com/heroes-of-the-storms-new-butcher-character-seems-really-1715968732) about new characters being overpowered and how frustrating it is playing against the new character. It takes a certain amount of strength to keep improving your game in the face of that. However, it is a just price to pay to rapidly acquire vastly more data to work with than by doing exclusively in-house alpha tests.

With Dicestorm, the difficulty of organizing tests is a little harder with limited physical prototypes and test organizers available, and I have been victim to a couple of pitfalls in using this method. Occasionally I end up implementing too many previously-untested mechanics at once. As any engineer or scientist knows, you should isolate your bugs or experimental hypotheses keeping other factors constant, or your results are far less useful due to too many variables contaminating each other. Other times, after a playtest I've caught myself rebalancing other aspects of the game when they were perfectly fine, in light of my new overpowered mechanic, throwing off the balance game-wide. Luckily I maintain revisions of my rulesets so I can rollback and re-justify every decision and change I made. Sometimes we just carelessly over-overpower things, making the entire playtest session unfun, and also drawing far less useful data about frustration sources.

Playtests are extremely valuable and potent in making a game amazing, whether a video game or board game, but they need to be used wisely. Using the principle of per-playtest overpowering, you can covertly encourage use of an isolated mechanic to gather the data you want to see how players physically and emotionally react to having it come into play.


