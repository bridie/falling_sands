function Canvas() {
	this.id = document.getElementById('falling-sands-grid');
	this.context = this.id.getContext('2d');
}

Canvas.prototype.draw = function(particle) {
	this.context.fillStyle = particle.color;
	this.context.fillRect(event.pageX, event.pageY, particle.width, particle.height);
}