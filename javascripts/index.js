document.addEventListener("DOMContentLoaded", function(event) {
	var game = new Game(new Canvas);
	game.updateSelectedParticle(new Rock);

	[].forEach.call(document.querySelectorAll('button'), function (el) {
		el.addEventListener('click', function() {
			document.querySelectorAll('.selected')[0].classList.remove('selected');
			game.updateSelectedParticle(new window[el.id]);
			el.className += 'selected';
		});
	});
});