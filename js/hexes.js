/*
By Keerthik
To be honest, I'm not super proud of the quality of this code. 
Pros:
It is readable and concise
It works
Cons:
Poorly compartmentalized. Visual effects are too tightly coupled with gameplay logic.
This makes upgrading visual effects difficult
Inconsistent dependence on jquery as well as css for DOM manipulation.
*/
// Utility functions
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var arrow_keys_handler = function(e) {
    switch(e.keyCode){
        case 37: case 39: case 38:  case 40: // Arrow keys
        case 32: e.preventDefault(); break; // Space
        default: break; // do not block other keys
    }
};

var REWARDS_TIERS = {
	24: "t3",
	96: "t5",
	192:"t6",
	384:"t7",
	768:"t8"
};

var REWARDS_DATA = {
	24: "<p>Hint Get!</p> \
		 <p>A new number will never spawn in the center hex. Keep a low number (or empty hex) in the middle to stay alive longer</p> \
		 <hr> \
		 <p>Watch this space for cheesy lines~</p> \
		 <p>Yes, I made this whole thing specially for you pretty much because you're special to me~</p>",
	96: "<p>Blueberries Get</p> \
		 <p>Chocolate-covered ones. They're in your fridge</p> \
		 <hr> \
		 <p>For a while now, I think about you all the time, even grocery shopping, and thought \"Oh what the hell.\" </p> \
		 <p><span>They're probably still good...I hope. If not, oops.</span></p>",
	192:"<p>Magic~</p> \
		 <p>I made good use of this thanksgiving <a href='../flutter/' target='_blank'>to put this back online</a> !</p> \
		 <p>(needs you to use non-chrome)</p><hr> \
		 <p>In an attempt to keep myself from bugging you every time I think of you each day, I made myself work on reviving that; when I got bored with that, on this game; and if I still wasn't done thinking of you then I'd talk you</p> \
		 <p><span>That wasn't <em>too</em> often...right?</span></p>",
	384:"<p>How it's made!</p> \
		 <p>Curious? Here's <a href='/resources/images/hexes_scratch.jpg' target='_blank'>step 1</a> (paper scratch), \
		 <a href='designdoc.html' target='_blank'>step 2</a> (ongoing project documentation), \
		 <a href='https://github.com/keerthik/keerthik.github.io/tree/master/webtoys/chen/hexes' target='_blank'>step 3</a> (source files) and you're on the final product!</p> \
		 <hr> \
		 <p>This is a big reason I like you so much. Noone but you inspires me to put this much work into making games, all the while enjoying it purely for passion for the art. Just by you being you :3</p>",
	768:"<p>Ninja Tabi Get</p> \
		 <p>+3 chance to cast Silence on Peanut  <span> ...erm please don't use it for that</span></p> \
		 <hr> \
		 <p>Ah, the highest theoretically possible number this game allows, but maybe you'll find a way to get a higher number.</p> \
		 <p>After all, each day I spend around you makes me fall for you more than I thought was theoretically possible...</p> \
		 <p><span>...I'll see myself out</span></p>"
};

// Constants, basically
var TRANSITION_END = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
var LEFT_KEY = 37;
var RIGHT_KEY = 39;
var UP_KEY = 38;
var DOWN_KEY = 40;

var STATIC_CLASSES = ["left_hex", "bottomleft_hex", "bottomright_hex", 
					 "right_hex", "topright_hex", "topleft_hex", 
					 "center_hex"];
var ANIM_CLASSES = ["left_anim", "bottomleft_anim", "bottomright_anim", 
					 "right_anim", "topright_anim", "topleft_anim", 
					 "center_anim"];
var POP_CLASS = "pop_anim";
var LEFTS = [0, 1, 5];
var RIGHTS = [3, 2, 4];
var CENTER = 6;

// Global level stuff
var animating = false;
var gameState = [6, 0, 0, 6, 0, 0, 0];
var score = 0;

function LaunchDance () {
	var isFadeSet = false;
	animating = true;
	$('.hexagon.center_hex').each(function (index) {
		if (index < 6)
			$(this).removeClass('center_hex').addClass(ANIM_CLASSES[index]);
		else
			return;
		$(this).one(TRANSITION_END, function (e) {
	    	var newIndex = Cycle(index, 1);
	    	$(this).removeClass(ANIM_CLASSES[index]).addClass(ANIM_CLASSES[newIndex]);
			if (isFadeSet) return;
			isFadeSet = true;
	    	// This needs to be called only once, so we return above after the first time it's set
			$(this).one(TRANSITION_END, function (e) {
				$('#static').removeClass('initial').addClass('ready');
				$('#static').one(TRANSITION_END, function (e) {
					$('#game_state').removeClass('initial').addClass('ready');
					ReflectGameState();
					animating = false;
				});
			});
		});
	});
}

function Cycle(index, direction) {
	var newIndex = 	index == 6?6:
					((direction > 0 && index > 4)?0:
					((direction < 0 && index < 1)?5:
					(index + direction)));
	return newIndex;
}

function GetTileClass(index) {
	var colorTier = 't1 ';
	switch (gameState[index]) {
		case 12: colorTier = 't2 '; break;
		case 24: colorTier = 't3 '; break;
		case 48: colorTier = 't4 '; break;
		case 96: colorTier = 't5 '; break;
		case 192: colorTier = 't6 '; break;
		case 384: colorTier = 't7 '; break;
		case 768: colorTier = 't8 '; break;
		default: colorTier = 't1 ';
	}
	var base_class = 'numbox ' + ((gameState[index] > 0)?'hexagon_inner ':"");
	return base_class + colorTier;
}

function SlideIfPossible(iLHS, iRHS) {
	if (gameState[iLHS] != 0 && 
	       (gameState[iLHS] == gameState[iRHS] || gameState[iRHS] == 0)) {
		var rhsClass = GetTileClass(iRHS);
		var lhsClass = GetTileClass(iLHS);
		gameState[iRHS] += gameState[iLHS];
		// Modify score for successful merge
		if (gameState[iRHS] != gameState[iLHS]) score += gameState[iRHS];
		gameState[iLHS] = 0;
		
		$("#num_" + iLHS).removeClass().addClass(lhsClass + ANIM_CLASSES[iRHS]);
		$("#num_" + iRHS).addClass(rhsClass + POP_CLASS);
		return 1;
	}
	return 0;
}

function IsGameOver() {
// At this point we know all empties are filled;
	// If the center is empty, we have hope
	if (gameState[CENTER] == 0) return false;
	// If there are two adjacent are equal, we have hope
	for (var i = 0; i < 6; i++) {
		if (gameState[i] == gameState[Cycle(i, 1)]) return false;
		if (gameState[i] == gameState[CENTER]) return false;
	}
	return true;
}

function AddNewItem () {
	empties = [];
	for (var i = 0; i < 6; i++) {
		if (gameState[i] == 0) {
			empties.push(i);
		}
	}
	var newItem = Math.max(...gameState) > 192?12:6;
	if (empties.length < 1) {
		if (IsGameOver()) {
			$('#overlay').show();
			$('#game_over').show();
			$('#instructions').hide();
			$('#reward_text').hide();
		}
	} else gameState[empties[getRandomInt(0, empties.length)]] = newItem;
}

// The fundamental game loop
var changes = 0;
function UpdateGameWithInput (keyCode) {
	var oldState = $.extend([], gameState);

	var theseChanges = 0;
	// We don't want to accept input while animating
	if (animating) return;
	//$('#anim_s').css('display', 'block');
	//$('#game_state').css('display', 'none');
	switch (keyCode) {
		case LEFT_KEY:
			$('#left_').addClass('pressed');
			animating = true;
			theseChanges += SlideIfPossible(RIGHTS[1], LEFTS[1]);
			theseChanges += SlideIfPossible(RIGHTS[2], LEFTS[2]);
			if (gameState[CENTER] == 0) {
				theseChanges += SlideIfPossible(RIGHTS[0], LEFTS[0]);
				theseChanges += SlideIfPossible(RIGHTS[0], CENTER);
			} else {
				theseChanges += SlideIfPossible(CENTER, LEFTS[0]);					
				if (gameState[CENTER] == 0) {
					theseChanges += SlideIfPossible(RIGHTS[0], LEFTS[0]);
				} else {
					theseChanges += SlideIfPossible(RIGHTS[0], CENTER);
				}
			}
/*
			$("..center_hex").removeClass("center_hex").addClass("left_hex");
			$("..right_hex").addClass("center_hex");
			$("..topright_hex").removeClass("topright_hex").addClass("topleft_hex");
			$("..bottomright_hex").removeClass("bottomright_hex").addClass("bottomleft_hex");
*/			
			break;

		case RIGHT_KEY:
			$('#right_').addClass('pressed');
			animating = true;
			theseChanges += SlideIfPossible(LEFTS[1], RIGHTS[1]);
			theseChanges += SlideIfPossible(LEFTS[2], RIGHTS[2]);
			if (gameState[CENTER] == 0) {
				theseChanges += SlideIfPossible(LEFTS[0], RIGHTS[0]);
				theseChanges += SlideIfPossible(LEFTS[0], CENTER);
			} else {
				theseChanges += SlideIfPossible(CENTER, RIGHTS[0]);					
				if (gameState[CENTER] == 0) {
					theseChanges += SlideIfPossible(LEFTS[0], RIGHTS[0]);
				} else {
					theseChanges += SlideIfPossible(LEFTS[0], CENTER);
				}
			}
			break;

		case UP_KEY:
			$('#up_').addClass('pressed');
			animating = true;
			var last = gameState[5];	
			for (var i = 5; i > -1; i--) {
				var base_class = GetTileClass(i);
				gameState[i] = i==0?last:gameState[i-1];
				var newIndex = Cycle(i, 1);
				$("#num_" + i).removeClass().addClass(base_class + ANIM_CLASSES[newIndex]);
			}
			theseChanges ++;
			break;

		case DOWN_KEY:
			$('#down_').addClass('pressed');
			animating = true;
			var last = gameState[0];
			for (var i = 0; i < 6; i++) {
				var base_class = GetTileClass(i);
				gameState[i] = i==5?last:gameState[i+1];
				var newIndex = Cycle(i, -1);
				$("#num_" + i).removeClass().addClass(base_class + ANIM_CLASSES[newIndex]);
			}
			theseChanges ++;
			break;

		default:
			animating = false;
			break;
	}

	if (theseChanges == 0) animating = false;
	var spawnTrigger = 1;
	// Logic based on highest number achieved
	var maximus = Math.max(...gameState);
	switch (maximus) {
		case 24:			
			spawnTrigger = 1;
			break;
		case 96:
			spawnTrigger = 2;
			break;
		case 192: 
			spawnTrigger = 2;
			break;
		case 384: 
			spawnTrigger = 3;
			break;
		case 768: 
			spawnTrigger = 3;
			break;
		default: break;
	}
	// Unlock rewards
	if ($('#r' + maximus) && !$('#r' + maximus).hasClass('earned')) {
		$('#r' + maximus).addClass('earned ' + REWARDS_TIERS[maximus]);
	}

	changes += theseChanges;
	if (changes > spawnTrigger) {
		changes = 0;
		AddNewItem();
	}

	UpdateScore();	
}

function UpdateScore() {
	// Do some animation
	var old_score = $('#score').html();
	console.log("Score: " + old_score);
	$('#score').html(score);
}

function NewGame() {
	animating = false;
	gameState = [6, 0, 0, 6, 0, 0, 0];
	score = 0;
	$('.r_hexagon').removeClass('earned t3 t5 t6 t7 t8');
	ReflectGameState();
}

function ReflectGameState() {
	for (var i = 0; i < 7; i++) {
		var inner = (gameState[i] > 0)?gameState[i]:"";
		$("#num_" + i).find('p').html(inner);
    	$("#num_" + i).removeClass().addClass(GetTileClass(i) + STATIC_CLASSES[i]);
	}
}

function SetRewardText (element) {
	var i = parseInt(element.attr('id').match(/\d+/)[0]);
	var header = Math.max(...gameState)>767?
				"<h1>Winner! Thanks for playing~</h1>":
				"<h1>Loot! (Tier " + i + ")</h1> ";
	$('#reward_text').html(header + REWARDS_DATA[i]);
}

$(document).ready(function() {
	window.addEventListener("keydown", arrow_keys_handler, false);
	LaunchDance();
	NewGame();
	// Click handlers
	$('#newgame').click(function (e) {
		NewGame();
		e.stopPropagation();
	});

	$('#overlay').click(function (e) {
		e.stopPropagation();
	});

	$('html').click(function (e) {
		if ($('#overlay').is(':visible'))
			$('#overlay').hide();
	});

	$('#instructions_button').click(function (e) {
		if (!$('#overlay').is(':visible')) {
			$('#overlay').show();
			$('#instructions').show();
			$('#game_over').hide();
			$('#reward_text').hide();
		}
		e.stopPropagation();
	});

	$('.r_hexagon').click(function (e) {
		if (!$(this).hasClass('earned')) return;
		$('#overlay').show();
		$('#instructions').hide();
		$('#game_over').hide();
		SetRewardText($(this));
		$('#reward_text').show();
		e.stopPropagation();
	});

	// Controls
	$('html').keydown(function(e) {
		UpdateGameWithInput(e.which);
    });
    // Animations
    $('.arrow').bind(TRANSITION_END, function(e) {
    	// reset
    	$(this).removeClass('pressed');
    });

    $('.numbox').bind(TRANSITION_END, function (e) {
    	//$('#anim_s').css('display', 'none');
    	//$('#game_state').css('display', 'block');
    	// Reset data
    	var i = parseInt($(this).attr('id').match(/\d+/)[0]);
    	var inner = (gameState[i] > 0)?gameState[i]:"";
    	$(this).find('p').html(inner);
    	// Reset classes
    	$(this).removeClass().addClass(GetTileClass(i) + STATIC_CLASSES[i]);
    	animating = false;
    });
});