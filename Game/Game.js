

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

  // **Controllo del movimento con la tastiera**
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
        const bomb = new Bomb();

        


    }
  });

});

