function Canvas() {
	this.domElement = document.getElementById('falling-sands-grid');
	this.context = this.domElement.getContext('2d');
}

Canvas.prototype.draw = function(particle) {
	var positionX = event.pageX - this.domElement.getBoundingClientRect().left - (particle.width / 2);
	var positionY = event.pageY - this.domElement.getBoundingClientRect().top - (particle.height / 2);
	this.context.fillStyle = particle.color;
	this.context.fillRect(positionX, positionY, particle.width, particle.height);
}