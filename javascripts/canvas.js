function Canvas() {
	this.domElement = document.getElementById('falling-sands-grid');
	this.context = this.domElement.getContext('2d');
}

Canvas.prototype.draw = function(particle, positionX, positionY) {
	this.context.fillStyle = particle.color;
	this.context.fillRect(positionX - (particle.width / 2), positionY - (particle.height / 2), particle.width, particle.height);
}