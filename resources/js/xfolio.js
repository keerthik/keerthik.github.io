$(document).ready(function() {	
	$(".overlay").detach().appendTo("#overlay_container");
	$("#overlay_container").click(function() {
		$("#overlay_container").hide();
	});
	$("#overlay_container").hide();

	$("#xabout").click(function() {
		show_overlay("xabout_box");
	});
});

function show_overlay(overlayName) {
	$(".overlay").hide();
	$("#overlay_container").show();
	$("#"+overlayName).show();
}