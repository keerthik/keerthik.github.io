---

# Design Doc
## Abstract
The objective is to build a simple game that is easy to pick up, but takes a few tries to figure out a winning strategy. Familiarity with an existing popular game provides a robust base solving a broad range of design concerns. To that end, this is a hex-grid based puzzle version of popular number game ["2048"](https://gabrielecirulli.github.io/2048/) or "threes" or "1024". It combines progress with exploration, in this implementation by creating small personal rewards for the player based on how far they get. The rewards will increase in density as you go up because it gets harder to go up each level.

## A Twist
In Hexplorer we use hexes instead of squares, for a variety of reasons outlined in the rest of this document, including a personal reason: You work with graphene (hexagons!), we're linked by dicestorm (more hexagons), and if you think of this when you see hexagons maybe I can get you to think of me more :D

## Core Mechanics
The concept is to combine like numbers by having them stack, either against another occupied tile or against the edge of the playable region. The objective is to build the largest possible number before the grid fills up preventing you from taking any actions (game over)

When you reach a number that glows, it means you have unlocked a new reward.

## Control Scheme
Being a hex grid means there are 6 cardinal directions instead of 4 (like in 2048). 
To maintain control scheme simplicity, only 2 of these directions are used (left+right), and we introduce rotational flexibility instead, using up or down to rotate the entire grid clockwise or counterclockwise. This makes the game play differently from 2048 as well, which is a desirable outcome.

## Design
An action that actually affects the board (successful shove/rotation) will spawn a new tile .
The game ends when 
- all hexes are filled AND 
(- an invalid shove is made OR 
 - no valid shoves are available (*)) 

## "Rewards"
Something beyond score to keep the player exploring further into the game space.
They are intended to be personalized to the player.
In this case, Rewards unlock messages that reveal something about the thoughts given to the person.

Ordering --- how did I want to order these?
24 - "A hint! A new number will never spawn in the center hex. Keep it empty to stay alive"
96 - "Blueberries. Chocolate-covered ones. They're in your fridge."
192 - "3 years ago... I made good use of this thanksgiving <a href='../flutter/' target='_blank'>to put this back online</a>!"
384 - "Design Docs! Here's some scratchwork that went into this project"
768 - "You like Tabi socks? I figured this would be the best thing I've got for you. You have reached the theoretical highest number this game allows!"

I considered putting the choco-blueberries at a higher tier, but I didn't want them going bad. I figured I could just give you the socks for something else if you didn't get to it.


## Game Over
Upon reaching 768, "Thanks for playing this to the very end -- this is the theoretical maximum possible score with the given mechanics, good job!"
Upon "game over" - tips?