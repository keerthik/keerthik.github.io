$(document).ready(function() {
	generateImages();
});

function generateImages() {
	$('.hexTop').addClass('printTop');
	$('.hexBottom').addClass('printBottom');
	var cards = $('.unit-card-outer');
	console.log(cards);
	for (var i = 0; i < cards.length; i++) {
		html2canvas(cards[i]).then(function(canvas) {
			// Export to png's, possibly even append into pdf
	    console.log(canvas);
	    document.body.appendChild(canvas);
		});
	}	
	// Hide the normal stuff
	$('.faction-bloc').css('display','none');
}

