function Particle() {

}

Particle.create = function(type, mouseX, mouseY) {
	var particle = new window[type];
	particle.x = Math.floor(mouseX - (particle.width / 2));
	particle.y = Math.floor(mouseY - (particle.height / 2));
	return particle;
}