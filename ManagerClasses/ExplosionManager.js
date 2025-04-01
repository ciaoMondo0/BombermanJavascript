import { CollisionManager } from "../ManagerClasses/CollisionManager.js";
import { Explosion } from "../Models/Explosion.js";
export class ExplosionManager {
   
    static collidables = [];

    
   static  handleExplosion(bomb) {
        if (!bomb.exploded) return;
  
        if (bomb.element.parentNode) {
          bomb.element.parentNode.removeChild(bomb.element);
        }
        
        const explosion = new Explosion(bomb.x, bomb.y, bomb.explosionRadius, 50);
        explosion.render(document.getElementById("mapContainer"));
        this.collidables.forEach(obj => {
          const box = obj.getCollisionBox(); 
          if (CollisionManager.isColliding(box, explosion.getCollisionBox())) {
            obj.onExplosion();
          }
        });
      }
    
   static addCollidable(obj) {
      this.collidables.push(obj);
    }





  }
  
  