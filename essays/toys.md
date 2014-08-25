---
layout: post
folder: play
title: toys to games
update: June 2014
len: 11 min
---
# Toys -> Games
<div class="essay-subtext">cross-posted: <a href="https://medium.com/@keerthiko/toys-to-games-25d35b40425d">on Medium</a></div>

Operation Dicestorm, our board game project, is what I would describe as “intense” as board games go — tactically challenging and involved, with a variety of moving parts. Earlier on in its development, we tested with several inexperienced board gamer friends, just to see how it felt. While they didn’t delve into tactical theorycrafting, they still enjoyed the game a lot. But they weren't able to explain why. This got me thinking, and that’s when I formulated the concept of “Toys to Games.” The more I pondered it, the more powerful I realized this concept is, for design discussion, evaluation, improvement and more.
Awesome folks playtesting an Operation Dicestorm prototype

A note: If you happened to stumble upon this piece but aren't particularly interested in game design, know that this framework is also useful beyond just game design, as I outline towards the end.
What Is “Toys to Games”?

> “Toys to Games” is the concept that a great toy makes an excellent foundation for a great game.

To understand this better, we need to describe what a game is and what a toy is. Much of this is borrowed from Jesse Schell's wonderful book, The Art of Game Design.

###What is a Game?

A game is a system with rules and well-defined interactions where all players are aiming to attain certain objective goals. Some characteristics of games:

* There's a concept of “doing well” or “doing badly”
* There's a feedback loop of tasks and rewards (complete a task, receive a reward, get assigned the next task)
* You can "win" or "lose"

> A good game provides a challenging objective while rewarding the player’s mastery.

###And a Toy?

A toy is fundamentally a concept or object that is intended to be fun to interact with given no preexisting instruction. Characteristics of a toy:

* Primarily based around physical interaction
* No preexisting knowledge expected
* No sense of winning or losing
* Objectives non-existent or optional

> A good toy is extremely fun to interact with even when there is no objective goal to be obtained.

##A Look at Famous Toys

Very often, children treat toys as toys when they're younger. As they get older, they revive some of the same toy concepts by building games around them to unlock challenges and rewards. I think it's useful to look at some famous toys and games and get a sense for where in the spectrum of toys to games they fall, and what tips them from one side to another.

###Slinky

A classic household toy. A shiny thing that comes in a little box with no instructions or rules. No matter what you try to do with it, it’s somewhat fun. But as kids grow older, it becomes a vessel for games like “climb the stairs.” And kids never grow too old for slinky games, mind you.

###LEGOs
There's a little ambiguity because of the breadth of what LEGOs include. Some argue you can technically be “good at LEGOs,” but really, you’re not beating someone else at it when you make something cool and creative. However, no one will deny they are a ton of fun to play with, even if you aren't trying to make what’s on the box, or sometimes even make anything at all. Finding that you have just the right piece to splint that weak limb, placing the right joint to complete that aesthetic aspect, nothing is more satisfying in the toy world. When I was in college, my roommate did a summer job as a camp instructor for some students working with LEGO Mindstorm sets to make racecars, battlebots, and more. Those are definitely games, with competition and scoring, built around an amazing toy.

##Video Game Toys

Because my focus as a designer is on video games, I can’t help but dedicate a section to this. Video games, as the name suggests, are almost always games. There are a few 'toys' (Minecraft, Sim City) by the classification above that are considered video games, and a lot of toys that are thinly coated with a game layer (Transport Tycoon, The Sims) to give the player a sense of doing well or doing badly.

But what's more important is being able to identify the core toy in any game, or a part of a game. Usually, the core toy =   
the primary control scheme +   
the immediate gameplay effects it results in +   
rest of the feedback loop to inform the player of those effects +   
regardless of \[insert game objective\] wherever possible

Let's break down the implications of each of those clauses.

###Control Scheme

* Physical: How tiring is it for your fingers to rest over these keys? Do you have to use the mouse too? Is activity balanced between left and right hands? Can you reach all controls easily? If not, is it more fun to learn to reach all of them effectively?
* Focus: Is the focus on reflexes? Careful feathering for fine tuned controls? Timing? Speed? Each control needs to have a focus.
* Reason: Does a control actually have a reason to exist -- i.e, you actually use it regularly, yet it's not something you want held down all the time.

###Gameplay Effect

* Intuitive: The link between your physical control and the gameplay effect should be obvious
* Mechanic-centric: The gameplay effect should affect the system of the game in a meaningful way. For example, moving a character is meaningful, toggling the visibility of its hitpoint bar less so.
* \[While the hitpoints themself are part of the feedback, the control for turning them on or off should not be considered part of the toy.\]

###Feedback

* Informative: effectively tell the player what he just asked for.
* Responsive: quickly let the player know it worked.
* Satisfying: graphics and sound effects play the main role here.

###Regardless Of

This is the most important clause. You should be able to say the above is fun regardless of relevant core objectives of the "game" you're considering. Sprinting around, wall-running and backflipping in Prince of Persia: Sands of Time is fun regardless of really trying to go anywhere.

###Need For Example

Let's consider the toy core of Need For Speed: Most Wanted.
Notice the motion blur, sparks and lights adding to the speed feedback

I’m going to primarily consider the control scheme on PC, because controls layout on a console is a moot point, since it’s more dependent on the controller layout rather than what button assignments the game designers picked.

The primary control scheme is

* Left, Right > Turn (fine-tune focus)
* Up, Down > Accelerate, Brake (timing focus)

The arrow grid is a tried and tested, simple, easy and natural arrangement of keys for players.

It does get a little tiring to hold down the gas. However you often need to let it go to control your speed in turns, and thus has a reason to exist. Mastering the timing of controlling your acceleration and braking is fun. Mastering the ability to tune how much to turn is fun. In general, mastering these controls to truly command the car to go how you want is fun. Regardless of whether you're winning your race, or even going in the right direction.

Smoke from the turning wheels on pavement, motion blur, screeching tires and revving engine sounds round off the feedback loop, making the core of NFS -- a "racing game" -- a fun toy.

##1 Great Toy to N Great Games

The fundamental thesis of Toys to Games is that if you start by focusing on building a great toy, you create a fertile ground for a great game. Most individual games have a threshold of how long they can enthrall a player. However, if the core toy is flexible enough, when players are bored of the original game, there's still opportunity for more games around it.

This is pretty popular and effective in the world of video games. Nintendo is famously known for starting most of their game concepts with "great controls." The point is if you have controls that feel good, the game is very likely to be sound. Cue every Smash game.

In fact, this can effectively be extended to the creation of many core video game genres -- how good the controls feel. The popular genres built around a strong core toy:

* FPS: moving and shooting from first-person perspective. Emphasis on accurate and fast control with a mouse or joystick \[inspired by real projectile weapons\]
* RTS: managing many tasks across different places on a system that all works together. Combination of precise mouse usage and high throughput, well-timed keyboard action \[almost like playing a musical instrument while also drawing pictures\]
* Racing: sense of speed, feather-able controls with tight feedback loops. Simple controls with an emphasis on finely tuned control with great responsiveness \[almost like driving a real car\]

Forget video games. A bouncy ball! The number and scale of sports and games humans have created from a spherical object with an amount of bounce is kind of mind-boggling. All because the ball is an amazing toy.

##From Outside The Framework

It goes without saying, Toys To Games is not the only framework for approaching game design. Many games have been built without this idea. What does the result tend to look like?

###A Great Game Without A Great Toy

Chess is technically not built around much of a toy in its raw state. You've probably noticed that popular versions of chess incorporate clip-in/magnetic pieces, beautiful wooden folding boards and artistic pieces, which please the senses and make setting up the game and moving pieces intrinsically fun, even if you are moving without following rules, like a toy. Still, the core experience of chess is really not a very good toy, so it goes to show you can have great games even without focusing on the toy aspect, but while having a good ruleset.

However, you may notice that in these cases, players often take it upon themselves to find ways to make their interactions with the game more fun. The way poker dealers handle cards, a chess player smacks off an enemy piece or even those adjustments in non-game situations like these folks, are based on the intention to make a physical interaction more fun than just functional.

###Breaking the Core Toy

A scenario where the toy-factor is not given enough consideration is when video games are ported from one platform to another. Very often these ports are assigned to a dev team that does not run any design-focused playtesting beyond basic QA for major bugs. The lack of a design-minded approach when the controls are being cast into a completely new mold often results in really clunky controls that either technically cannot reproduce the feel of the original controls, or map them poorly resulting in something unresponsive or uncomfortable to use. Even if the original game wasn't designed focusing on the toy aspect, breaking whatever toy there is can kill the game.

##Analyses Using The Framework

Many fun core video game toys are inspired by fun real-world interactions. For example, driving a real car is fun, which inspired racing games.

Extending on the above, a very useful formula for designing a fun video game is to pick a fun real-world interaction as the toy, then allow the players to “play” with the toy in a way they would never be able to in real life. For example, GTA lets you steal amazing vehicles (trains, planes, tractors, ambulances) and drive around like a reckless maniac, something you can’t consider reasonable or fun in real life.

Playing musical instruments is another extremely enjoyable real-world interaction.
\[Disclaimer: I’m not a musician, so this is my analysis as a game designer\]
This is very interesting to me because musical instruments are a natural combination of a lot of aspects of a fun toy:

* well designed control scheme — they feel good to key, strum and pluck. Even if some are complicated, they feel good to master
* relevant control effects — every string, fret and piston valve matters
* an amazing feedback loop — hearing the music that you create, and how good it feels when you learn exactly how to use the controls to produce the sounds you want

Combined with the idea that fun real-life toys are popular, and that games let you interact with those toys in ways real-life will never let you, we can understand why Guitar Hero and Rock Band are so popular — they let people without genius talent interact with the fun world of music easily, with all the backgrounds of a studio band, and feel like a stage star.

Usually, being able to do more things with fewer controls in an intuitive way is preferable — for example, platform games use \[jump\] + \[right\] = \[leap right\] rather than assigning three separate keys for \[leap left\], \[jump up\] and \[leap right\]. It’s interesting to note that this wasn't always the case, and is a non-trivial development that seems blindingly obvious today.

For a given game, you can split its evaluation into how good of a game (complexity space, challenge, back-story, etc) it is, and how good of a toy (feedback, controls and interactivity, “mojo”) it is built around. Interestingly enough, people tend to be more split about the former than the latter — that is to say, most people generally agree about the toy portion being fun, but people’s tastes are a lot more varied about the game portion. Usually, there’s a strong correlation between this split and the audience that enjoys the game the most. Kids usually care a lot more about the toy being really good, and adults care more about the game being good.

I use “Toys to Games” to sometimes come up with new game ideas — either starting from an established toy concept I like, or getting inspired when I come across a fun action to do, which is how Dicestorm was born.

It’s also a good way to pinpoint the cause of frustrations players may have with a game’s design. Strip away the game objectives (mentally at least) and play. Is it a decent toy? If it isn’t, you have a fundamental problem with the core of your game — how the player interacts with your game world.

##Beyond Games

Toys actually make a great core for any product that humans interact with. An entire department of the MIT Media Labs is dedicated to “Playful Systems.”

Many popular product design paradigms such as flip-phones, zippers, seat belts, etc were established because there was an inexplicable satisfaction in their intended use case (snap, zip, click) in addition to being functional. If you've ever been told “not to play with” something, it’s probably because at its core it was a pretty good toy. Yes, that includes most of your food.

So if you’re building a human-facing product, whether it’s physical, software, or even food, think about whether it has a good toy at its core. This will increase the chances of making your product that much more timeless and “sticky” (in the good way) for its users, because well, who doesn't want a fun thing.

- - -

Cover image credit: the excellent JK Brickworks site full of awesome LEGO stuff.   

- - -
See my last game design post “Make It Fun to Face Too”.    
Also check out {{ site.ds }}, the board game mentioned in the article.
