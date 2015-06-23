function Game(canvas) {
	this.canvas = canvas;
	this.selectedParticleType = null;
	this.addEventListeners();
}

Game.prototype.updateSelectedParticleType = function(particleType) {
	this.selectedParticleType = particleType;
}

Game.prototype.getMousePosition = function(event) {
	return {
		x: event.pageX - this.canvas.element.getBoundingClientRect().left,
		y: event.pageY - this.canvas.element.getBoundingClientRect().top
	}
}

Game.prototype.addEventListener = function(type, callback) {
	this.canvas.element.addEventListener(type, callback);
}

Game.prototype.removeEventListener = function(type, callback) {
	this.canvas.element.removeEventListener(type, callback);
}

Game.prototype.addParticle = function() {
	var mousePosition = this.getMousePosition(event);
	var particle = Particle.create(this.selectedParticleType, mousePosition.x, mousePosition.y);
	this.canvas.addParticle(particle);
}

Game.prototype.addEventListeners = function() {
	this.addMouseEvents();

	[].forEach.call(document.querySelectorAll('button'), function (el) {
		el.addEventListener('click', function() {
			document.querySelectorAll('.selected')[0].classList.remove('selected');
			this.updateSelectedParticleType(el.id);
			el.className += 'selected';
		}.bind(this));
	}.bind(this));
}

Game.prototype.addMouseEvents = function() {
	var onMouseMove = function(event) {
		this.addParticle();
	}.bind(this);

	var onMouseDown = function(event) {
		this.addParticle();
		this.addEventListener('mousemove', onMouseMove);
	}.bind(this);

	var removeMouseMoveEvent = function() {
		this.removeEventListener('mousemove', onMouseMove);
	}.bind(this);

	this.addEventListener('mousedown', onMouseDown);
	this.addEventListener('mouseup', removeMouseMoveEvent);
	this.addEventListener('mouseleave', removeMouseMoveEvent);
}
