class Explosion {
  constructor(x, y, radius, damage) {
    this.radius = radius;
    this.damage = damage;
    this.x = x - radius;
    this.y = y - radius;
    this.width = radius * 2;
    this.height = radius * 2;
  }
}

window.Explosion = Explosion;

/*
    isCollidingWith(obj){
      return (
        this.x < obj2.x + obj2.width &&
        this.x + this.width > obj2.x &&
        this.y < obj2.y + obj2.height &&
        this.y + this.height > obj2.y
      );


    }




    isCollidingWith(wall) {
      const wallCenterX = wall.x + 20;
      const wallCenterY = wall.y + 20;
      const dx = this.x - wallCenterX;
      const dy = this.y - wallCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance < this.radius;
    }
}*/




