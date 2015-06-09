document.addEventListener("DOMContentLoaded", function(event) {
	var canvas = new Canvas;

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

	[].forEach.call(document.querySelectorAll('button'), function (el) {
		el.addEventListener('click', function() {
			document.querySelectorAll('.selected')[0].classList.remove('selected');
			game.updateSelectedParticle(new window[el.id]);
			el.className += 'selected';
		});
	});

});