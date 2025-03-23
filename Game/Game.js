import { GameMap } from "../Models/GameMap.js";
import { ObjectManager } from "./ObjectManager.js";
import { GameObject } from "../Models/GameObject.js";
import { Player } from "../Models/Player.js";
import { Bomb } from "../Models/Bomb.js";
import  { ExplosionManager } from "../Game/ExplosionManager.js";
document.addEventListener("DOMContentLoaded", () => {
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

  const gameMap = new GameMap("mapContainer", 11, 15, tileSize);
  console.log("ObjectManager about to generate walls...");

  const objectManager = new ObjectManager(gameMap.container, layout, 11, 15, tileSize);
  objectManager.generateWalls();
  objectManager.render();
  console.log("Walls generated:", objectManager.walls.length);

  const player = new Player(40, 40, tileSize, tileSize);

  player.render(gameMap.container);
  ExplosionManager.addCollidable(player);
  document.addEventListener("keydown", (event) => {
    switch (event.key) {
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
          const bombX = player.x;
          const bombY = player.y;
          const row = Math.floor(bombY / tileSize);
          const col = Math.floor(bombX / tileSize);
    
          const bomb = new Bomb(bombX, bombY, 50, 2000, row, col, tileSize);
          
          bomb.render(gameMap.container);
          break;
        


    }
  });

});

