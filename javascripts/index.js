document.addEventListener("DOMContentLoaded", function(event) {
	var canvas = new Canvas();
	var rock = new Rock();

	canvas.id.addEventListener('click', function(event) {
		canvas.draw(rock);
	});
});