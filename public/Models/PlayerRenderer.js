
export class PlayerRenderer {
  constructor(playerData) {
    this.id = playerData.id;
    this.x = playerData.x;
    this.y = playerData.y;
    this.width = playerData.width;
    this.height = playerData.height;
    this.health = playerData.health;
    this.destroyed = playerData.destroyed;
    
    this.element = document.createElement("div");
    this.element.classList.add("player");
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.position = "absolute";
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
  }

  updateFromData(playerData) {
    this.x = playerData.x;
    this.y = playerData.y;
    this.health = playerData.health;
    this.destroyed = playerData.destroyed;
    this.updatePosition();
    if (this.destroyed && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }

  render(container) {
    container.appendChild(this.element);
  }
}
