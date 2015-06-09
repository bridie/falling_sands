document.addEventListener("DOMContentLoaded", function(event) {
	var canvas = new Canvas;

	// The game starts of with rock selected as the default.
	var game = new Game(new Rock);

	var draw = function(event) {
		var positionX = event.pageX - canvas.domElement.getBoundingClientRect().left;
		var positionY = event.pageY - canvas.domElement.getBoundingClientRect().top;
		canvas.draw(game.selectedParticle, positionX, positionY);
	}

	canvas.domElement.addEventListener('mousedown', function(event) {
		canvas.domElement.addEventListener('mousemove', draw);
	});

	canvas.domElement.addEventListener('mouseup', function() {
		canvas.domElement.removeEventListener('mousemove', draw);
	});

	canvas.domElement.addEventListener('mouseleave', function() {
		canvas.domElement.removeEventListener('mousemove', draw);
	});

});