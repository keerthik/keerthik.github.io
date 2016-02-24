---

# Design Doc
## Abstract
This is a hex-grid based puzzle version of popular number game "2048" or "threes" or "1024". It combines progress with exploration, in this implementation creating small personal rewards for the player based on how far they get. The rewards will increase in density as you go up because it gets harder to go up each level.

## Core Mechanics
The concept is to combine like numbers by having them stack, either against another occupied tile or against the edge of the playable region. The objective is to build the largest possible number before the grid fills up preventing you from taking any actions (game over)

When you reach a number that glows, it means you have unlocked a new reward.

## Control Scheme
Being a hex grid means there are 6 cardinal directions instead of 4 (like in 2048). 
To maintain control scheme simplicity, only 2 of these directions are used (left+right), and we introduce rotational flexibility instead, using up or down to rotate the entire grid clockwise or counterclockwise. 

## Design
An action that actually affects the board (successful shove/rotation) will spawn a new tile .
The game ends when 
- all hexes are filled AND (- an invalid shove is made OR - no valid shoves are available (*)) 

## "Rewards"
Something beyond score to keep the player exploring further into the game space.
They are intended to be personalized to the player.
In this case, Rewards unlock messages that reveal something about the thoughts given to the person.
6
12 - Hi Chen. This is a non-gag present~
24 - 
48 - 
96 - Blueberries. Because you saids you like them, and I saw them.
192 - Design Docs! Here's some scratchwork that went into this project
384 - Why Hexes? You work with hexagons, I work with hexagons, if you think of this when you see hexagons maybe I can get you to think of me a lot~
768 - 3 years ago... I made good use of this thanksgiving to put this back online!

## Game Over
Upon reaching 768, "Thanks for playing this to the very end -- this is the theoretical maximum possible score with the given mechanics, good job!"
Upon "game over" - tips
