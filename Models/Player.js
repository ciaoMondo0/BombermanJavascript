class Player extends Character /*implements Collidable*/ {
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

      //check collision position + new position
      /*
       if can move then update position with speed

      */
    }


    canMove(obj){
      return (
        this.x < obj2.x + obj2.width &&
        this.x + this.width > obj2.x &&
        this.y < obj2.y + obj2.height &&
        this.y + this.height > obj2.y
      );


    }


    render(){


      




    }




  }
  