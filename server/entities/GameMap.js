class GameMap {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.layout = this.generateEmptyLayout();
  }

  generateEmptyLayout() {
    const layout = [];
    for (let i = 0; i < this.rows * this.cols; i++) {
      layout.push(0); 
    }
    return layout;
  }

  setCell(row, col, value) {
    this.layout[row * this.cols + col] = value;
  }

  getCell(row, col) {
    return this.layout[row * this.cols + col];
  }
}

module.exports = { GameMap };
