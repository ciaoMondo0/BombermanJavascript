export class Explosion {
  constructor(x, y, radius, damage) {
    this.radius = radius;
    this.damage = damage;
    this.x = x - radius;
    this.y = y - radius;
    this.width = radius * 2;
    this.height = radius * 2;
  }

  getCollisionBox() {
    return { x: this.x, y: this.y, width: this.width, height: this.height };
  }

  render(container) {
    const explosionEl = document.createElement("div");
    explosionEl.classList.add("explosion");
    explosionEl.style.position = "absolute";
    explosionEl.style.left = `${this.x}px`;
    explosionEl.style.top = `${this.y}px`;
    explosionEl.style.width = `${this.width}px`;
    explosionEl.style.height = `${this.height}px`;
    container.appendChild(explosionEl);
    setTimeout(() => {
      if (explosionEl.parentNode) {
        explosionEl.parentNode.removeChild(explosionEl);
      }
    }, 500);
  }
}
