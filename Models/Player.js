class Player extends Character {
    constructor(x, y) {
      super(x, y);
      this.speed = 40; 
    }
    movement(direction) {
      switch(direction) {
        case "up":
          this.y -= this.speed;
          break;
        case "down":
          this.y += this.speed;
          break;
        case "left":
          this.x -= this.speed;
          break;
        case "right":
          this.x += this.speed;
          break;
        default:
          break;
      }
    }
  }
  