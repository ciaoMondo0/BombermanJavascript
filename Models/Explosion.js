class Explosion {
    constructor(x, y, radius, duration = 500) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.duration = duration;
      this.createdAt = Date.now();
    }
    isCollidingWith(wall) {
      const wallCenterX = wall.x + 20;
      const wallCenterY = wall.y + 20;
      const dx = this.x - wallCenterX;
      const dy = this.y - wallCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance < this.radius;
    }
}