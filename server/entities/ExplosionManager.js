const { isColliding } = require('../../public/ManagerClasses/CollisionManager.js');

class ExplosionManager {

  static handleExplosion(bomb, collidables) {
    if (!bomb.exploded) return;

    const explosionBox = {
      x: bomb.x - bomb.explosionRadius,
      y: bomb.y - bomb.explosionRadius,
      width: bomb.explosionRadius * 2,
      height: bomb.explosionRadius * 2,
    };

    collidables.forEach(obj => {
      const box = obj.getCollisionBox(); 
      if (isColliding(box, explosionBox)) {
        obj.onExplosion();
      }
    });
  }
}

module.exports = ExplosionManager;
