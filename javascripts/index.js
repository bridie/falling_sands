document.addEventListener("DOMContentLoaded", function(event) {

	var game = new Game(new Canvas());
	game.updateSelectedParticleType('Rock');

	setInterval(function() {
		game.canvas.draw();
	}, 50);
});