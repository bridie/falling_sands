function Game() {
	this.canvas = document.getElementById('falling-sands-grid');
	this.context = this.canvas.getContext('2d');
	this.mousePosition = {};
	this.selectedParticle = null;
	this.addEventListeners();
}

Game.prototype.updateSelectedParticle = function(particle) {
	this.selectedParticle = particle;
}

Game.prototype.createParticle = function(particle) {
	this.context.fillStyle = particle.color;
	this.context.fillRect(this.mousePosition.x - (particle.width / 2), this.mousePosition.y - (particle.height / 2), particle.width, particle.height);
}

Game.prototype.setMousePosition = function(event) {
	this.mousePosition.x = event.pageX - this.canvas.getBoundingClientRect().left;
	this.mousePosition.y = event.pageY - this.canvas.getBoundingClientRect().top;
}

Game.prototype.addEventListeners = function() {
	var self = this;
	var onMouseMove;
	self.canvas.addEventListener('mousedown', onMouseDown = function(event) {
		self.setMousePosition(event);
		self.createParticle(self.selectedParticle);
		self.canvas.addEventListener('mousemove', onMouseMove = function(event) {
			self.setMousePosition(event);
			self.createParticle(self.selectedParticle);
		});
	});

	self.canvas.addEventListener('mouseup', function() {
		self.canvas.removeEventListener('mousemove', onMouseMove);
	});

	self.canvas.addEventListener('mouseleave', function() {
		self.canvas.removeEventListener('mousemove', onMouseMove);
	});
}