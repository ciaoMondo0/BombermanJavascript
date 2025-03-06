class Enemy extends Character{


    constructor (x,y ){
        super(x, y)
    }



    update(){

    if(health > 0){
        this.movement()
    }



    }


    hitCharacter(){

        if(health > 0){
            health--;
        }
    }


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





    }
