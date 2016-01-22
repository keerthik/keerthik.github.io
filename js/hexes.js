
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

var cycle_classes = ["left_hex", "bottomleft_hex", "bottomright_hex", 
					 "right_hex", "topright_hex", "topleft_hex", 
					 "center_hex"];
var anim_classes = ["left_anim", "bottomleft_anim", "bottomright_anim", 
					 "right_anim", "topright_anim", "topleft_anim", 
					 "center_anim"];

var gameState = [6, 5, 4, 3, 2, 1, 0];
var LEFTS = [0, 1, 5];
var RIGHTS = [3, 2, 4];
var CENTER = 6;

var spawnTrigger = 4;

function LaunchDance () {
	$(".hexagon").each(function (index) {
		if (index < 6)
			$(this).removeClass("center_hex").addClass(anim_classes[index]);
		else
			console.log("omg extra hexes: " + index);
		/*
		$(this).one(TRANSITION_END,
		    function(e) {
		    	var newIndex = Cycle(index, 1);
		    	console.log($(this).attr('class') + " index: " + index + " " + newIndex);
		    	$(this).removeClass(anim_classes[index]).addClass(anim_classes[newIndex]);
		    	console.log($(this).attr('class') + " index: " + index + " " + newIndex);
		    	$(this).one(TRANSITION_END, function (e) {
					//console.log($(this).attr('class') + " index: " + newIndex);
		    		$(this).removeClass(anim_classes[newIndex]).addClass(cycle_classes[newIndex]);
		    	});
		});
		*/
	});

}

function Cycle(index, direction) {
	var newIndex = 	index == 6?6:
					((direction > 0 && index > 4)?0:
					((direction < 0 && index < 1)?5:
					(index + direction)));
	return newIndex;
}

function SlideIfPossible(iLHS, iRHS) {
	if (gameState[iLHS] != 0 && 
	       (gameState[iLHS] == gameState[iRHS] || gameState[iRHS] == 0)) {
		gameState[iRHS] += gameState[iLHS];
		gameState[iLHS] = 0;
		// make a copy. animate it. destroy it.
		$("#clone_" + iLHS).removeClass().addClass('clone ' + anim_classes[iRHS]);
		return 1;
	}
	return 0;
}

function AddNewItem () {
	empties = [];
	for (var i = 0; i < 6; i++) {
		if (gameState[i] == 0) {
			empties.push(i);
		}
	}
	gameState[empties[getRandomInt(0, empties.length)]] = 6;
}

var changes = 0;
function UpdateGameWithInput (keyCode) {
	var oldState = $.extend([], gameState);
	var addNewNum = true;

	//$('#anim_clones').css('display', 'block');
	//$('#game_state').css('display', 'none');
	switch (keyCode) {
		case LEFT_KEY: 
			changes += SlideIfPossible(RIGHTS[1], LEFTS[1]);
			changes += SlideIfPossible(RIGHTS[2], LEFTS[2]);
			if (gameState[CENTER] == 0) {
				changes += SlideIfPossible(RIGHTS[0], LEFTS[0]);
				changes += SlideIfPossible(RIGHTS[0], CENTER);
			} else {
				changes += SlideIfPossible(CENTER, LEFTS[0]);					
				if (gameState[CENTER] == 0) {
					changes += SlideIfPossible(RIGHTS[0], LEFTS[0]);
				} else {
					changes += SlideIfPossible(RIGHTS[0], CENTER);
				}
			}
/*
			$(".numbox.center_hex").removeClass("center_hex").addClass("left_hex");
			$(".numbox.right_hex").addClass("center_hex");
			$(".numbox.topright_hex").removeClass("topright_hex").addClass("topleft_hex");
			$(".numbox.bottomright_hex").removeClass("bottomright_hex").addClass("bottomleft_hex");
*/			
			console.log("slid left!");
			break;

		case RIGHT_KEY:
			changes += SlideIfPossible(LEFTS[1], RIGHTS[1]);
			changes += SlideIfPossible(LEFTS[2], RIGHTS[2]);
			if (gameState[CENTER] == 0) {
				changes += SlideIfPossible(LEFTS[0], RIGHTS[0]);
				changes += SlideIfPossible(LEFTS[0], CENTER);
			} else {
				changes += SlideIfPossible(CENTER, RIGHTS[0]);					
				if (gameState[CENTER] == 0) {
					changes += SlideIfPossible(LEFTS[0], RIGHTS[0]);
				} else {
					changes += SlideIfPossible(LEFTS[0], CENTER);
				}
			}
			console.log("slid right!");
			break;

		case UP_KEY:
			var last = gameState[0];
			for (var i = 0; i < 6; i++) {
				gameState[i] = i==5?last:gameState[i+1];
				var newIndex = Cycle(i, 1);
				$("#clone_" + i).removeClass().addClass('clone ' + anim_classes[newIndex]);
			}
			changes ++;
			console.log("rotated up!");
			break;

		case DOWN_KEY:
			var last = gameState[5];	
			for (var i = 5; i > -1; i--) {
				gameState[i] = i==0?last:gameState[i-1];
				var newIndex = Cycle(i, -1);
				$("#clone_" + i).removeClass().addClass('clone ' + anim_classes[newIndex]);
			}
			changes ++;
			console.log("rotated down!");
			break;

		default:
			//$('#anim_clones').css('display', 'none');
			//$('#game_state').css('display', 'block');
			break;
	}
// below we manipulate gamestate based on all the above input
	addNewNum = changes > spawnTrigger;
	if (addNewNum) {
		changes = 0;
		AddNewItem();
	}

	switch (Math.max(gameState)) {
		case 0: spawnTrigger = -1; break;
		case 6: spawnTrigger = 0; break;
		case 96: spawnTrigger = 1; break;
		case 768: spawnTrigger = 2; break;
	}

	ReflectGameState();

    // Animation clones
    $('.clone').bind(TRANSITION_END, function (e) {
    	console.log("onendinglyfe");
    	//$('#anim_clones').css('display', 'none');
    	//$('#game_state').css('display', 'block');
    	// Reset data
    	var i = parseInt($(this).attr('id').match(/\d+/)[0]);
    	$(this).html = (gameState[i] > 0)?gameState[i]:"";
    	// Reset classes
    	$(this).removeClass().addClass('clone ' + cycle_classes[i]);
    });

}

function ReflectGameState() {
	for (var i = 0; i < 7; i++) {
		var inner = (gameState[i] > 0)?gameState[i]:"";
		$("#num_" + i).html(inner);
		$("#clone_" + i).html(inner);

	}
}

$(document).ready(function() {
	window.addEventListener("keydown", arrow_keys_handler, false);
	LaunchDance();
	// Controls
	$('html').keydown(function(e) {
		UpdateGameWithInput(e.which);
    });
});