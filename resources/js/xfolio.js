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
		//node.addClass()
	}
});

function show_overlay(overlayName) {
	$(".overlay").hide();
	$("#overlay_container").show();
	$("#"+overlayName).show();
}