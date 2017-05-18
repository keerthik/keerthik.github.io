$(document).ready(function() {	
	$(".overlay").detach().appendTo("#overlay_container");
	$("#overlay_container").click(function() {
		$("#overlay_container").hide();
	});
	$("#overlay_container").hide();

	$("#xabout").click(function() {
		show_overlay("xabout_box");
	});

	for (var i in tree_data) {
		var data = tree_data[i];
		$("#treecontainer").append('<div class="tnode" id="' + data.name + '"></div>');
		var node = $("#" + data.name);
		node.addClass("unlocked");
		node.css({	'left': data.left,
               		'top': data.top});
		for (var j in data.tags) {
			if (data.tags[j] == "game design") node.addClass("gdesign");
			if (data.tags[j] == "programming") node.addClass("prog");
			if (data.tags[j] == "hardware") node.addClass("hardware");
			if (data.tags[j] == "product") node.addClass("prod");
			if (data.tags[j] == "ai") {
				node.addClass("ai");
				node.addClass("teched");
			}
		}
		node.html(data.name);
	}
	$(".unlocked").click(function() {
		// Do animations for unlocking
		drawRectangle($(this), 3, 1000);
		// Unlock relevant children

	})
});

function show_overlay(overlayName) {
	$(".overlay").hide();
	$("#overlay_container").show();
	$("#"+overlayName).show();
}

function drawRectangle(target, thickness, duration) {
    console.log("drawing rectangle");
    var w = target.outerWidth();
    var h = target.outerHeight();
    var total = w+w+h+h;

    var wDuration = (w * 1.00 / total) * duration;
    var hDuration = (h * 1.00 / total) * duration;

    // hide flickering when both expanding and moving
    var tolerance = 1;

    var line1 = $('<div />', { class: 'line' }).css({
        left: 	-2*thickness,
        top: 	-2*thickness,
        height: thickness
    }).appendTo(target);

    line1.animate({ width: w }, wDuration, function() {

        var line2 = $('<div />', { class: 'line' }).css({
            left: 	w - 2*thickness,
            top: 	-2*thickness,
            width: 	thickness
        }).appendTo(target);

        line2.animate({ height: h }, hDuration, function() {
            
            var line3 = $('<div />', { class: 'line' }).css({
                left: 	w + tolerance - thickness,
                top:  	h - 2*thickness,
                height: thickness
            }).appendTo(target);

            line3.animate({ width: w, left: -thickness }, wDuration, function() {
                    
                var line4 = $('<div />', { class: 'line' }).css({
                    left: 	- 2*thickness,
                    top:  	h + tolerance,
                    width: 	thickness
                }).appendTo(target);
                
                line4.animate({ height: h + tolerance, top: -2*thickness }, hDuration);
                
            });
            
        });
        
    });
    
}
