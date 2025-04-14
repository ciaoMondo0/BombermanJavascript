export class BaseBomb {
    constructor(ownerId, x, y, explosionRadius = 50, timer = 2000) {
      this.ownerId = ownerId;
      this.x = x;
      this.y = y;
      this.explosionRadius = explosionRadius;
      this.timer = timer;
      this.exploded = false;
    }
  
    startTimer(callback) {
      setTimeout(() => {
        this.exploded = true;
        callback(this);
      }, this.timer);
    }
  
    toJSON() {
      return {
        ownerId: this.ownerId,
        x: this.x,
        y: this.y,
        explosionRadius: this.explosionRadius,
        exploded: this.exploded,
      };
    }
  }
  