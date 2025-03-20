class Enemy extends Character{


    constructor (x,y,  width, height, health = 100 ){
        super(x, y)
        this.width = width;
    this.height = height;
    this.health = health;
    this.element = document.createElement("div");
    this.element.classList.add("enemy");
    this.updatePosition();
    }



    updatePosition() {
      this.element.style.left = `${this.x}px`;
      this.element.style.top = `${this.y}px`;
    }
  
    applyDamage(damage) {
      this.health -= damage;
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
      container.appendChild(this.element);
    }
  }
  window.Enemy = Enemy;

/*
    movement(){
        let x = Math.random(1, 4)

        switch(x){
            case 1:
                this.setY(this.getY() - this.speed);
                break;
              case 2:
                this.setY(this.getY() + this.speed);
                break;
              case 3:
                this.setX(this.getX() - this.speed);
                break;
              case 4:
                this.setX(this.getX() + this.speed);
                break;
              default:
                break;
            }
        }
*/




    
