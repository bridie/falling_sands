document.addEventListener("DOMContentLoaded", function(event) {
	var canvas = new Canvas();
	var rock = new Rock();

	canvas.domElement.addEventListener('click', function(event) {
		var positionX = event.pageX - canvas.domElement.getBoundingClientRect().left;
		var positionY = event.pageY - canvas.domElement.getBoundingClientRect().top;
		canvas.draw(rock, positionX, positionY);
	});
});