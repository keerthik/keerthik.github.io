# Design Doc
## Abstract
This is a hex-grid based puzzle version of popular number game "2048" or "threes" or "1024". It combines progress with exploration, in this implementation creating small personal rewards for the player based on how far they get. The rewards will increase in density as you go up because it gets harder to go up each level.

## Core Mechanics
The concept is to combine like numbers by having them stack, either against another occupied tile or against the edge of the playable region. The objective is to build the largest possible number before the grid fills up preventing you from taking any actions (game over)

When you reach a number that glows, moving it into the center will unlock a reward. 

## Control Scheme
Being a hex grid means there are 6 cardinal directions instead of 4 (like in 2048). To maintain control scheme simplicity, only 2 of these directions are used (left+right), and we introduce rotational flexibility instead, using up or down to rotate the entire grid clockwise or counterclockwise. Design: The game ends when - all hexes are filled AND (- an invalid shove is made OR - no valid shoves are available (*)) A shove will spawn a new tile. Freeze popping new ones when reward is live A reward is