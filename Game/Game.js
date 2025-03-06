
class Game {
    constructor(layout, width, tileSize) {
      this.layout = layout;
      this.width = width;
      this.tileSize = tileSize;
      this.grid = document.querySelector('.grid');
      this.squares = [];
      this.walls = [];
    }
  
    createBoard() {
      this.grid.innerHTML = "";
      for (let i = 0; i < this.layout.length; i++) {
        const square = document.createElement("div");
        square.classList.add("tile");
        const col = i % this.width;
        const row = Math.floor(i / this.width);
  
        if (this.layout[i] === 1) {
          square.classList.add("wall");
          const x = col * this.tileSize;
          const y = row * this.tileSize;
          const wall = new Walls(x, y, true);
          wall.element = square;
          this.walls.push(wall);
        } else if (this.layout[i] === 0) {
          square.classList.add("empty");
        }
        this.grid.appendChild(square);
        this.squares.push(square);
      }
    }
  
    updateWallViews() {
      this.walls.forEach(wall => {
        if (wall.destroyed && wall.element) {
          wall.element.remove();
          wall.element = null;
        }
      });
    }
  }
  
  const tileSize = 40;
  const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
    1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
  ];
  
  const game = new Game(layout, 15, tileSize);
  game.createBoard();
  
  const player = new Player(40, 40);
  const playerDiv = document.createElement("div");
  playerDiv.classList.add("player");
  playerDiv.style.left = player.x + "px";
  playerDiv.style.top = player.y + "px";
  document.querySelector(".grid").appendChild(playerDiv);
  
  function updatePlayerDOM() {
    playerDiv.style.left = player.x + "px";
    playerDiv.style.top = player.y + "px";
  }
  
  const bombs = [];
  
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        player.movement("up");
        break;
      case "ArrowDown":
        player.movement("down");
        break;
      case "ArrowLeft":
        player.movement("left");
        break;
      case "ArrowRight":
        player.movement("right");
        break;
      case " ":
        placeBomb();
        break;
      default:
        break;
    }
    updatePlayerDOM();
  });
  
  function placeBomb() {
    const bombX = Math.floor(player.x / tileSize) * tileSize;
    const bombY = Math.floor(player.y / tileSize) * tileSize;
    const bomb = new Bomb(bombX, bombY, 50, 2000);
    bombs.push(bomb);
    
    {
      const bombs = document.createElement("div");
      bombs.classList.add("bomb");
      bombs.style.left = bomb.x + "px";
      bombs.style.top = bomb.y + "px";
      document.querySelector(".grid").appendChild(bombs);
      
      setTimeout(() => {
        const explosion = bomb.explode(game.walls);
        bombs.remove();
        
        {
          const explosions = document.createElement("div");
          explosions.classList.add("explosion");
          explosions.style.width = (bomb.explosionRadius * 2) + "px";
          explosions.style.height = (bomb.explosionRadius * 2) + "px";
          explosions.style.left = (bomb.x - bomb.explosionRadius) + "px";
          explosions.style.top = (bomb.y - bomb.explosionRadius) + "px";
          document.querySelector(".grid").appendChild(explosions);
          
          setTimeout(() => {
            explosions.remove();
            game.updateWallViews();
          }, explosion.duration);
        }
      }, bomb.timer);
    }
  }
  