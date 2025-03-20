class Bomb extends GameObject {
    constructor(x, y, explosionRadius = 50, timer = 2000, row, col, tileSize) {
      super(x, y);
      this.explosionRadius = explosionRadius;
      this.timer = timer; 
      this.exploded = false;
      this.row = row;
      this.col = col;
      this.tileSize = tileSize;
      this.element = document.createElement("div");
      this.element.classList.add("bomb");
      this.element.style.width = `${tileSize}px`;
      this.element.style.height = `${tileSize}px`;
    }
    

  // Starts the timer and, when the timer expires, marks the bomb as exploded
  // and delegates the explosion handling to the ExplosionManager.
  startTimer() {
    setTimeout(() => {
      this.exploded = true;
      ExplosionManager.handleExplosion(this);
    }, this.timer);
  }
  
  render(container) {
    this.updatePosition();
    container.appendChild(this.element);
    this.startTimer();
  }
}

    /*
    explode(walls) {
      this.exploded = true;
      const explosion = new Explosion(this.x, this.y, this.explosionRadius, 500);
      walls.forEach(wall => {
        if (!wall.destroyed && explosion.isCollidingWith(wall)) {
          wall.disintegrate();
        }
      });
      return explosion;
   
   
   
   
    }*/


  




  
  