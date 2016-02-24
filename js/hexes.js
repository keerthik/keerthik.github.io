
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
	    	//console.log($(this).attr('class') + " index: " + index + " " + newIndex);
	    	$(this).removeClass(ANIM_CLASSES[index]).addClass(ANIM_CLASSES[newIndex]);
	    	//console.log($(this).attr('class') + " index: " + index + " " + newIndex);
	    	/*
	    	$(this).one(TRANSITION_END, function (e) {
				//console.log($(this).attr('class') + " index: " + newIndex);
	    		$(this).removeClass(ANIM_CLASSES[newIndex]).addClass(STATIC_CLASSES[newIndex]);
	    	});
			*/
			if (isFadeSet) return;
			isFadeSet = true;
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
		if (IsGameOver()) console.log("Game Over!");
	} else gameState[empties[getRandomInt(0, empties.length)]] = newItem;
}

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
	var spawnTrigger = 2;
	// Logic based on highest number achieved

	switch (Math.max(...gameState)) {
		case 12:
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

	changes += theseChanges;
	if (changes > spawnTrigger) {
		changes = 0;
		AddNewItem();
	}

	UpdateScore();	
}

var hintsShown = 0;
function ShowHint() {
	hintsShown ++;
}

function UpdateScore() {
	// Do some animation
	var old_score = $('#score').html();
	console.log("Score: " + old_score);
	$('#score').html(score);
}


function ReflectGameState() {
	for (var i = 0; i < 7; i++) {
		var inner = (gameState[i] > 0)?gameState[i]:"";
		$("#num_" + i).find('p').html(inner);
    	$("#num_" + i).removeClass().addClass(GetTileClass(i) + STATIC_CLASSES[i]);
	}
}


$(document).ready(function() {
	window.addEventListener("keydown", arrow_keys_handler, false);
	LaunchDance();

	// Click handlers
	$('#qmark').click(function (e) {
		ShowHint();
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