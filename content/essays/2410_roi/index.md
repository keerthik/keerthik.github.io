---
layout: post
tags: 
- play
- design
categories: 
- play
title: "ROI: Balance is more than numbers"
terminal: roi.md
date: 2024-12-01
lastmod: 2024-12-01
draft: true
---

In the modern era, gamers demand their Game Is Balanced. The biggest taboo a popular game can make is when one "tool" or combination turns out to be significantly more potent than others. This has obvious ramifications in competitive multiplayer games. But even for single player games, players get pretty invested in any statistically significant discrepancy in end-results from options that are presented as equals. "Busted"[^busted] and "garbage" are equally unfun for players, even when there isn't a human opponent inflicting this imbalance upon them. 

[^busted]: busted: overpowered, too strong, too obvious a choice for being effective; garbage: underpowered, too weak, too obviously *not* an option for being effective.

## The ROI axis
The simplest balancing equation is the cost-benefit analysis, or "ROI" of employing the tool — where a tool is a unit, item, ability, mechanic, or combination thereof. I like to think of the ROI axis as a multi-variable polynomial equation, where the LHS represents "investment" or costs to the player, and the RHS represents "return" or benefits to their playthrough. Take, for instance an RPG like Diablo or Fallout, and the tool in question is a generic weapon you can buy from a store.

## The object properties term
Generally, there are several costs associated with obtaining such a weapon that you can see when trying to obtain it: the money cost, the weilding stats requirements, encumberance & inventory space taken. On the flip side, you have the stats associated that determine its potency: damage, range, speed, dual-wielding flexibility, stat buffs, target debuffs/elemental properties, and other special abilities. These are the things I think are best balanced with a spreadsheet: items meant to be weak, should be cheap; items meant to be powerful, 'spency.

## The system interaction term
Less obvious — but perhaps more significant — are the costs  that manifest from the game's overall design, rather than the tool's stats: how far into the game you have to get to access it, how easily you can reach a shop to access it, or how likely you will get such an item from random loot drops without needing to find a shop. 

Similarly, there are also benefits emergent from the game's design, like how many other tools (character classes, weapons, items, or abilities) synergize with it, how many enemies are vulnerable to it, how the evolving challenges scale with the weapon potency as the game progresses from the point of acquiring the weapon. A powerful anti-boss cannon that does 2x the DPS of every other weapon against boss characters, but is significantly weaker than every other weapon of its weapon tier against "generic" enemies can be considered busted or garbage depending on how hard bosses are compared to generics, or how much of the gameplay time is spent battling bosses vs generics. You can choose to sprinkle a 5-minute boss encounter in every 10-15 minutes, or you can have just one ~15 minute boss battle per major region that takes about ~2 hours to get to.

This stuff can be shoehorned into a spreadsheet, but typically is handled with statistical analysis of numerous playthoughs: look at the success and failure rate, the correlations between adoption and various player performance benchmarks at the intended stages of the game with the given tool and with alternatives, to see that tool efficacy is in line with their intent: tools are effective where they're supposed to be good, tools are weak where they're supposed to be weak, with the correct net trade offs.

## The experiential term
What experience do you sacrifice, and what experience do you get to enjoy? Suppose a core feature and *draw* of your game is parkour — chaining movement types to navigate complex environments or quickly reach/avoid enemies — such as in Mirror's Edge. Let's say we are considering designing a powerful weapon, with the balance trade-off where it prevents your use of some parkour mechanics in your toolkit like rolling or hanging off an edge. While this design choice has significant terms in the "object properties" and "system interaction" terms, there's something else going on here. You don't get to do something else when you use this weapon. What if this weapon allowed you to fly freely, negating the need to parkour? Well, you still *don't get to parkour*, which was a fun and core mechanic. A strange thing to sacrifice in a *game*! The only way to balance this is to make sure that flight or usage of that weapon is incredibly fun itself.

## Spreadsheeting
Spreadsheets for balancing has varying utility. The first term (object properties) is the simplest to apply to a spreadsheet. You can plug in the properties of each tool and assign a weighted scoring function to ensure all the tools are in line with design intent, but it's important to remember this is just one term of the equation. However it gets harder to score 

the resource cost to produce it, the time to produce it, the tech tier level to access production of the unit — the "investment" — to even access the unit, let alone get any utility from it. Once accessed, the unit has several stats associated that determine its potency: movement speed, damage, range, HP, and special abilities or traits to provide utility, or "returns". For the moment, let's say our hypothetical RTS game's design has set aside special abilities, as that would require its own cost-benefit analysis that would be nested within and complicate that of individual units.