export class BasePlayer {
    constructor(id, x, y) {
      this.id = id;
      this.x = x;
      this.y = y;
      this.speed = 40;
      this.health = 10;
      this.direction = "down";
      this.destroyed = false;
      this.width = 40;
      this.height = 40;
    }
  
    move(direction) {
      const oldX = this.x;
      const oldY = this.y;
      switch (direction) {
        case "up":    this.y -= this.speed; break;
        case "down":  this.y += this.speed; break;
        case "left":  this.x -= this.speed; break;
        case "right": this.x += this.speed; break;
      }
    }
  
    onExplosion() {
      this.health -= 10;
      console.log(`Health now: ${this.health}`);
      if (this.health <= 0) {
        this.destroy();
      }
    }
  
    destroy() {
      console.log("Player destroyed");
      this.destroyed = true;
    }
  
    getCollisionBox() {
      return {
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
      };
    }
  
    toJSON() {
      return {
        id: this.id,
        x: this.x,
        y: this.y,
        health: this.health,
        destroyed: this.destroyed,
        width: this.width,
        height: this.height,
      };
    }
  }
  