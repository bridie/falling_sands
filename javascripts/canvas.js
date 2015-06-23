function Canvas() {
	this.element = document.getElementById('falling-sands-grid');
	this.context = this.element.getContext('2d');
	this.particles = [];
}

Canvas.prototype.addParticle = function(particle) {
	this.particles.push(particle);
}

Canvas.prototype.draw = function() {
	this.particles.forEach(function(particle) {
		this.context.fillStyle = particle.color;
		this.context.fillRect(particle.x, particle.y, particle.width, particle.height);
	}.bind(this));
}