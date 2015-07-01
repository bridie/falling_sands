function Canvas() {
	this.element = document.getElementById('falling-sands-grid');
	this.context = this.element.getContext('2d');
	this.width = 400;
	this.height = 600;
	this.particles = [];
	this.initialiseParticles();
}

Canvas.prototype.initialiseParticles = function() {
	for (var x = 0; x < this.width; x++) {
		var column = [];
		for (var y = 0; y < this.height; y++) {
			column.push('air');
		}
		this.particles.push(column);
	}
}

Canvas.prototype.addParticle = function(particle) {
	this.particles[particle.x][particle.y] = particle;
}

Canvas.prototype.draw = function() {
	this.context.clearRect(0, 0, 400, 600);

	for (var i = 0, iLength = this.particles.length; i < iLength; i++) {
		var col = this.particles[i];
		for (var j = 0, jLength = col.length; j < jLength; j++) {
			if (col[j] != 'air') {
				var particle = col[j];
				this.context.fillStyle = particle.color;
				this.context.fillRect(particle.x, particle.y, particle.width, particle.height);
				particle.behave();
			}
		}
	}
}