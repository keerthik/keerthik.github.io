---
layout: ds/page
title: Instructions
headtouse: gamehead
---

[Back to Game](..)

[Unit Cards](units.html)

[Unit Cards (Epic)](units_epic.html)

Dicestorm is an fantasy/sci-fi 1v1 tactics game combining dexterity and strategy.

# Win Condition
The last side to have live units remaining on the board once the deployment rounds are over wins.

# Game Parameters

### Army Supply Cap
Total units that will be deployed for each player. Army Supply is the remaining number of units that can be deployed for each unit.
Recommended: 9; Advanced: 12

### Active Supply Cap
Max number of creatures active on the board. Active Supply is the number of creatures currently active on the board.
Recommended: 5; Advanced: 7

### Deploy Cap
Max units that may be deployed when free Active supply is available
Recommended: 2; Advanced: 3

# Game Setup
The two players sit directly across from each other. Each player picks one of the playable factions (currently: Orbotrons or Hellspawn) and collects all the corresponding unit tokens to their side of the play area. Set up the hex-grid board with the long-side facing each player. Place tokens face down in a stack on your side of the table matching the Army Supply Cap, and this will be your Army Supply.

# Round Structure
The game happens in rounds lasting about 4-8 minutes each. The game lasts a minimum of 5 rounds, and typically up to about 6 or 7.

Each round is composed of up to 3 phases: Deploy, Tactical, Bombardment (or Ranged).

## Initiative
The player with a lower Active Supply at the start of the round gets to choose who has initiative (and becomes Player 1). When tied, such as at the start of the game, both players roll D20s, and whoever rolls a higher value will gains the ability to choose.

Initiative is preserved for the entire round.

## Deploy
In this phase both players bring units onto the board and into play while they have remaining army supply and free active supply. Once a player has depleted their Army Supply, they no longer participate in the Deploy phase.

### Mechanics
The row closest to the player is their default deployment zone. Some unit abilities may provide additional deploy zones.
The player with initiative selects base units of their choice up to the Deploy Cap, while their Active Supply Cap has not been reached and they have not exhausted their Army Supply. Player 1 places all of them face-down on valid deployment zones, followed by Player 2. Player 1 flips newly deployed units face-up, followed by Player 2. 

Both players *must* deploy the maximum possible units given remaining Army Supply, Deploy Cap and their current Active Supply. Each player removes tokens from their Army Supply stack matching how many units were deployed.

Any "upon deployment" triggered abilities are triggered now. Once completed, move into the Tactical phase.

## Tactics
In this phase both players will take turns moving active units around the board and utilizing their unique abilities.

### Mechanics
Place a single turn token on each unit in play and on artifacts that receive turn tokens. 

Any "start of Tactics" triggered abilities are triggered now.

Player 1 takes a turn with a single piece that has a turn token on it. Take the turn token off the unit once it has been used. Player 2 will now take a turn. Both players take turns using single turn tokens until either player has exhausted all their turn tokens. The other player gets to finish up.

### Taking a turn
Each unit with a turn token may move up to the value specified as their Move before using any one of its Active Abilities. Using the Active Ability ends that unit's turn, consuming its turn token. Unless specified otherwise, a unit may no longer move or take any actions once it consumes its turn token, passing play to the opponent.

Movement may happen in any direction and units can change direction mid-movement. You may not path through or over occupied hexes unless specified otherwise.

You may end a turn simply by removing a unit's turn token, passing play to your opponent.

Once all turn tokens have been spent, move into the Bombardment/Ranged phase.

### Abilities
If a unit has more than one Active Ability, only one may be used with a turn token. Using an ability before completing the maximum move will void any unused movement unless specified otherwise. If a unit is destroyed as a result of an ability, trigger any "when destroyed☠" abilities.

A Passive Ability may be triggered any time the conditions are fulfilled even if the unit does not have a turn token.

## Bombardment
In this phase both players will bombard their enemy with dice and utilize abilities that are related to these dice.

NOTE: There is a slight advantage to playing *second* in the Bombardment phase, the opposite of the Tactics phase.

### Mechanics
For each unit in play, each player may collect the corresponding dice. Any Ranged abilities that provide dice to launch may be triggered now, paying any appropriate prices immediately. Each ranged ability may be used only once by a unit in a single Bombardment phase unless specified otherwise.

Player 1 will throw all their dice onto the board, with the aim of damaging the units in play, followed by Player 2. Note that all Bombardment damage is capable of "friendly fire", i.e., they do damage to units regardless of who threw the dice and who owns each unit.

Minimum throw range is 3” from the edge of the board, i.e., the player must release the die before their hand is any closer than 3" from the board.

* D6, D20 do face-value damage to a unit within the hex they land in.
* D8, D12 do face-value damage to units within the hex they land in, and half damage rounded down in all adjacent hexes, to a minimum of 1 damage.
* D12s can be re-thrown once, immediately after they have been thrown (before any other dice have been thrown).

Once both players have thrown all dice, Player 1 may trigger ranged abilities that affect "landed dice". Then the other player may do the same. Once all ranged abilities are complete, all dice damage is resolved. Trigger any "when destroyed" abilities here if appropriate.

Trigger any "at the end of the round" abilities here, and then move onto a new round.

# Pieces
Any hex card placed on the board is a "piece". They occupy space and block pathing.

Deployable pieces (base units) and Titan pieces are creatures, and receive turn tokens.

Artifacts are pieces that have special properties. They may or may not receive turn tokens. They do not count towards initiative calculations or the victory condition (they are not creatures).

Abilities may selectively affect only allied, enemy or both, and creatures, artifacts or pieces (both).

Pieces receive turn tokens only at the very the start of the Tactics phase unless mentioned otherwise. Thus, anything summoned "after Deploy" will receive a turn token, but anything summoned "at the start of Tactics" will not.

Summoned and deployed pieces receive max hp unless mentioned explicitly.

Pieces cannot be healed beyond their max hp.
