class DestructibleWall {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.destroyed = false;
    this.element = document.createElement("div");
    this.element.classList.add("destructible-wall");
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
  }

  disintegrate() {
    this.destroyed = true;
    console.log("Wall destroyed");
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

window.DestructibleWall = DestructibleWall;
