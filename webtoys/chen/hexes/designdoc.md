---
layout: plaintext
headtouse: plaintexthead.html
title: Hexplorer project specs
---

# Hexplorer

> Note: This document contains "spoilers" to the contents of the game

## Vital stats
* Game: [play here](/webtoys/chen/hexes)
* Project start date: 08 Jan 2016
* Code repository: [on github](https://github.com/keerthik/keerthik.github.io/tree/master/webtoys/chen/hexes)
* Hours estimate: 67;
* Work breakdown: brainstorm 10%, gameplay design and logic 5%; loot (content) preparation 20%; colors, styling, animations, and polish 55%; testing 10%

> An exercise in real work being 1% inspiration (or ~15% in this case) and 99% (~85%, rather) perspiration.

## Abstract
The objective is to build a simple game that entertains and is a bit memorable. It should be easy to pick up, but takes a few tries to figure out a winning strategy. Familiarity with an existing popular game provides a robust base solving a broad range of design concerns. To that end, this is a hex-grid based puzzle version of popular number game ["2048"](https://gabrielecirulli.github.io/2048/) or "threes" or "1024".

It combines progress with exploration, in this implementation by creating small personal rewards for the player based on how far they get. 

The levels get exponentially harder to clear as the steps to go from one level to the next equal the steps needed to get up to that level since the start of the game.

## A Twist
In Hexplorer I use hexes instead of squares, for a variety of reasons outlined in the rest of this document, including a silly personal reason: You work with graphene (hexagons!?), we're linked by dicestorm (more hexagons), and if you think of this (and/or me) when you see hexagons -- It's cheesy, but hey I'll take it :D

## Core Mechanics
The concept is to combine like numbers by having them stack, either against another occupied tile or against the edge of the playable region. The objective is to build the largest possible number before the grid fills up preventing you from taking any actions (game over). This is the core of this genre of games.

### Gameplay Space
This specific game has a reduced game space -- since we use hexes the most reasonable shape was a single hex surrounded by a single layer of hexes, resulting in 7 cells rather than 16 like in 2048. This kept the scope of the game limited which increases the chances of the player hitting theoretical max sooner, ie, revealing all of the content within a reasonable time frame.

### Game Response
Actions that affect the board (successful shove/rotation) will eventually spawn a new tile. The rate at which new tiles are spawned increases as the player is expected to be more familiar with the game, determined by the largest number on the board.

### Control Scheme
Being a hex grid means there are 6 cardinal directions instead of 4 (like in 2048). 
To maintain control scheme simplicity, only left/right slide tiles in a direction (as in the other games). We introduce rotational flexibility instead of another shove direction, using up/down to rotate the entire grid counterclockwise/clockwise. Only left/right slides result in merging.

A desirable outcome of this control scheme is that it makes the game play out differently from 2048, without adding too much cognitive overhead. A downside is the controls are a little unintuitive at first since the player needs to get used to up/down having rotational impact -- while looking at the right of the board (where the arrow icons are placed) this is intuitive, but if you look at any other part of the board while pressing the keys, it can be confusing.

### Game Over
The game ends in a loss when

* all hexes are filled AND 
* (an invalid shove is made OR 
*  no valid shoves are available)

768 is the theoretical maximum in the game, resulting in the game ending in a win.

## Loot!
Loot is unlocked based on the largest number on the board.

Just a little something beyond score to keep you exploring further into the game space.
They are intended to be personalized to the player.

Rewards are intended to be increasing surprise factor later on in the game as they take more work to get to.

* 24 - Provide a hint. This should help go on without getting stuck.
* 96 - Tie to IRL. To make the game more memorable and personal
* 192 - Bring back fluttershy-can-fly! I spent a fair amount of time on this and wanted a good set up to bring it back!
* 384 - Just as a window into my thoughts behind this whole thing, if you were curious
* 768 - The highest number, the final reward, the cheesiest thought.

