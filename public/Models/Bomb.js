import { BaseBomb } from "../../shared/Bomb.js";
import { ExplosionManager } from "../../client/ManagerClasses/ExplosionManager.js";

export class Bomb extends BaseBomb {
  constructor(ownerId, x, y, explosionRadius, timer, row, col, tileSize) {
    super(ownerId, x, y, explosionRadius, timer);
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
    super.startTimer(() => {
      ExplosionManager.handleExplosion(this);
    });
  }

  render(container) {
    this.updatePosition();
    container.appendChild(this.element);
    this.startTimer();
  }
}
