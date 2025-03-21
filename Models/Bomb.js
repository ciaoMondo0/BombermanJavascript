import { ExplosionManager } from '../managers/ExplosionManager.js';
import { GameObject } from "./GameObject.js";

export class Bomb extends GameObject {
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

  updatePosition() {
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
  }

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



  




  
  