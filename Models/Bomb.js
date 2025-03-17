class Bomb extends GameObject implements Explodable{
    constructor(x, y, explosionRadius = 50, timer = 2000) {
      super(x, y);
      this.explosionRadius = explosionRadius;
      this.timer = timer; 
      this.exploded = false;
    }
    
    explode(walls) {
      this.exploded = true;
      const explosion = new Explosion(this.x, this.y, this.explosionRadius, 500);
      walls.forEach(wall => {
        if (!wall.destroyed && explosion.isCollidingWith(wall)) {
          wall.disintegrate();
        }
      });
      return explosion;
    }
  }




  
  