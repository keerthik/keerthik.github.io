
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
var LEFT_KEY = 37;
var RIGHT_KEY = 39;
var UP_KEY = 38;
var DOWN_KEY = 40;

var cycle_classes = ["left_hex", "bottomleft_hex", "bottomright_hex", 
					 "right_hex", "topright_hex", "topleft_hex", 
					 "center_hex"];
var gameState = [6, 5, 4, 3, 2, 1, 0];
var LEFTS = [0, 1, 5];
var RIGHTS = [3, 2, 4];
var CENTER = 6;

var spawnTrigger = 4;

function LaunchDance () {
	$(".hexagon").each(function (index) {
		if (index < 6)
			$(this).removeClass("center_hex").addClass(cycle_classes[index]);
		else
			console.log("omg extra hexes: " + index);
		$(this).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
		    // code to execute after transition ends
		    function(e) {
		    	$(this).removeClass(cycle_classes[index]).addClass(cycle_classes[(index < 5)?(index + 1):0]);
		});
	});

}

function SlideIfPossible(iLHS, iRHS) {
	if (gameState[iLHS] != 0 && 
	       (gameState[iLHS] == gameState[iRHS] || gameState[iRHS] == 0)) {
		gameState[iRHS] += gameState[iLHS];
		gameState[iLHS] = 0;
		// make a copy. animate it. destroy it.
		$("#num_" + iLHS).removeClass(cycle_classes[iLHS]).addClass(cycle_classes[iRHS]);
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
			var last = gameState[5];			
			for (var i = 5; i > 0; i--) {
				gameState[i] = gameState[i-1];
				$("#num_" + i).removeClass(cycle_classes[i]).addClass(cycle_classes[i-1]);
			}
			gameState[0] = last;
			$("#num_0").removeClass(cycle_classes[0]).addClass(cycle_classes[5]);
			changes ++;
			break;

		case DOWN_KEY:
			var last = gameState[0];
			for (var i = 0; i < 5; i++) {
				gameState[i] = gameState[i+1];
				$("#num_" + i).removeClass(cycle_classes[i]).addClass(cycle_classes[i+1]);
			}
			gameState[5] = last;
			$("#num_5").removeClass(cycle_classes[5]).addClass(cycle_classes[0]);
			changes ++;
			break;
		default:
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
}

function ReflectGameState() {
	for (var i = 0; i < 7; i++) {
		var inner = (gameState[i] > 0)?gameState[i]:"";
		//$("#num_" + i).html(inner);		
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