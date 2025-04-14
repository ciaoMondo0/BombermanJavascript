
import { Explosion } from "../Models/Explosion.js"; 

export class ExplosionManager {
  static collidables = [];

  static handleExplosion(bomb) {
    if (!bomb.exploded) return;
    
    if (bomb.element && bomb.element.parentNode) {
      bomb.element.parentNode.removeChild(bomb.element);
    }
    
    const container = document.getElementById("mapContainer");
    const explosion = new Explosion(bomb.x, bomb.y, bomb.explosionRadius, 50);
    explosion.render(container);
    

  }

}
