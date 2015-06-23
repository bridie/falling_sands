function Particle() {

}

Particle.create = function(type, mouseX, mouseY) {
	var particle = new window[type];
	particle.x = mouseX - (particle.width / 2);
	particle.y = mouseY - (particle.height / 2);
	return particle;
}