function Game(canvas) {
	this.canvas = canvas;
	this.mousePosition = {};
	this.selectedParticle = null;
	this.addEventListeners();
}

Game.prototype.updateSelectedParticle = function(particle) {
	this.selectedParticle = particle;
}

Game.prototype.createParticle = function(particle) {
	this.canvas.context.fillStyle = particle.color;
	this.canvas.context.fillRect(this.mousePosition.x - (particle.width / 2), this.mousePosition.y - (particle.height / 2), particle.width, particle.height);
}

Game.prototype.setMousePosition = function(event) {
	this.mousePosition.x = event.pageX - this.canvas.element.getBoundingClientRect().left;
	this.mousePosition.y = event.pageY - this.canvas.element.getBoundingClientRect().top;
}

Game.prototype.addEventListeners = function() {
	var onMouseMove;
	this.canvas.element.addEventListener('mousedown', onMouseDown = function(event) {
		this.setMousePosition(event);
		this.createParticle(this.selectedParticle);
		this.canvas.element.addEventListener('mousemove', onMouseMove = function(event) {
			this.setMousePosition(event);
			this.createParticle(this.selectedParticle);
		}.bind(this));
	}.bind(this));

	this.canvas.element.addEventListener('mouseup', function() {
		this.canvas.element.removeEventListener('mousemove', onMouseMove);
	}.bind(this));

	this.canvas.element.addEventListener('mouseleave', function() {
		this.canvas.element.removeEventListener('mousemove', onMouseMove);
	}.bind(this));
}