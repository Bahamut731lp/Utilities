Array.prototype.getRandomItem = function() {
    const length = this.length;
    const index = Math.floor(Math.random() * length);
    return this[index];
}