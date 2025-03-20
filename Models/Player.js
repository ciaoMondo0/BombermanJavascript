 class Player extends Character  {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.speed = 40;
    this.direction = "down"; 
  }


  movement(direction) {
    this.direction = direction;

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

    this.updatePosition();
  }
  //check collision position + new position
      /*
       if can move then update position with speed

      */

    canMove(obj){
      return (
        this.x < obj2.x + obj2.width &&
        this.x + this.width > obj2.x &&
        this.y < obj2.y + obj2.height &&
        this.y + this.height > obj2.y
      );


    }


    render(container) {
      console.log("Rendering player...");
      super.render(container); 
    }




  }
  window.Player = Player;



