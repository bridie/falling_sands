function Game(defaultSelectedParticle) {
	this.selectedParticle = defaultSelectedParticle;
}

Game.prototype.updateSelectedParticle = function(particle) {
	this.selectedParticle = particle;
}