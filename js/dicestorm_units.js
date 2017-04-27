$(document).ready(function() {
	//generateImages();
});

function generateImages() {
	var stuff = $('.unit-card-outer');
	//console.log(orbspecials);
	console.log(stuff);
	for (var i = 0; i < stuff.length; i++) {
		console.log(stuff[i]);
		html2canvas(stuff[i]).then(function(canvas) {
			// Export to png's, possibly even append into pdf
	    console.log(canvas);
	    document.body.appendChild(canvas);
		});
	}	
}

