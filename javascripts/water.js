function Water(x, y) {
	this.color = '#2E65C9';
	this.width = 3;
	this.height = 3;
	this.x;
	this.y;
}

Water.prototype.behave = function() {
	if (this.y < 600) {
		this.y++;
	}
}