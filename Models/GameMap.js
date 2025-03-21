export class GameMap {
  constructor(containerId, rows, cols, tileSize) {
    this.container = document.getElementById(containerId);
    this.rows = rows;
    this.cols = cols;
    this.tileSize = tileSize;

    this.container.style.display = "grid";
    this.container.style.gridTemplateColumns = `repeat(${cols}, ${tileSize}px)`;
    this.container.style.gridTemplateRows = `repeat(${rows}, ${tileSize}px)`;
    this.container.style.width = "fit-content";
    this.container.style.position = "relative";

    this.createFreeCells();
  }

  createFreeCells() {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        const cell = document.createElement("div");
        cell.classList.add("tile", "free");
        cell.style.width = `${this.tileSize}px`;
        cell.style.height = `${this.tileSize}px`;
        cell.style.gridRowStart = row + 1;
        cell.style.gridColumnStart = col + 1;
        this.container.appendChild(cell);
      }
    }
  }
}

window.GameMap = GameMap;


