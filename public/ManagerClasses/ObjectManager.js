import { Wall } from "../Models/Wall.js";

export class ObjectManager {
  constructor(container, layout, rows, cols, tileSize) {
    this.container = container;
    this.layout = layout;
    this.rows = rows;
    this.cols = cols;
    this.tileSize = tileSize;
    this.walls = [];
  }

  generateWalls() {
    for (let i = 0; i < this.layout.length; i++) {
      const tileValue = this.layout[i];
      const row = Math.floor(i / this.cols);
      const col = i % this.cols;
      if (tileValue === 1) {
        const wall = new Wall(row, col, this.tileSize);
        this.walls.push(wall);
      }
    }
  }

  render() {
    this.walls.forEach(wall => wall.render(this.container));
  }
}
