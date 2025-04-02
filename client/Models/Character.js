 import { GameObject } from "./GameObject.js";
 export class Character extends GameObject {
  constructor(x, y, width, height) {
    super(x, y); 
    this.width = width;
    this.height = height;
    this.element = document.createElement("div");
    this.element.classList.add("character");
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.position = "absolute"; 
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
  }

  render(container) {
    container.appendChild(this.element);
  }
  }
