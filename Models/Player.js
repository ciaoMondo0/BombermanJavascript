 class Player extends Character  {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.speed = 40;
    this.health = 10;
    this.direction = "down"; 
  }


  movement(direction, collidables = []) {
    const oldX = this.x;
    const oldY = this.y;
  
    switch (direction) {
      case "up":
        this.y -= this.speed;
        this.element.className = "character up";
        break;
      case "down":
        this.y += this.speed;
        this.element.className = "character down";
        break;
      case "left":
        this.x -= this.speed;
        this.element.className = "character left";
        break;
      case "right":
        this.x += this.speed;
        this.element.className = "character right";
        break;
    }
  
    const canMove = collidables.every(obj => 
      !CollisionManager.isColliding(this.getCollisionBox(), obj.getCollisionBox())
    );
  
    if (!canMove) {
      this.x = oldX;
      this.y = oldY;
    }
  
    this.updatePosition();
  }
  



    onExplosion() {
      this.health -= 10;
      console.log(`Enemy hit! Health now: ${this.health}`);
      if (this.health <= 0) {
        this.destroy();
      }
    }


    destroy() {
      console.log("Enemy destroyed");
      if(this.element.parentNode){
        this.element.parentNode.removeChild(this.element);
      }
    }
    getCollisionBox() {
      return {
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height
      };
    }
  

    render(container) {
      console.log("Rendering player...");
      super.render(container); 
    }




  }
  window.Player = Player;



