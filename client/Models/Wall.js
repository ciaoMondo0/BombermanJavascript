 export class Wall {
      
      constructor(row, col, tileSize) {
        
        this.row = row;
        this.col = col;
        this.tileSize = tileSize;
        this.element = document.createElement("div");
        this.element.classList.add("wall");
        this.element.style.width = `${tileSize}px`;
        this.element.style.height = `${tileSize}px`;
        this.element.style.gridRowStart = row + 1;
        this.element.style.gridColumnStart = col + 1;
      }
    
      render(container) {
        container.appendChild(this.element);

      }
    }
    
    