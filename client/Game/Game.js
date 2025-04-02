const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const { GameMap } = require("./Models/GameMap");
const { ObjectManager } = require("./ManagerClasses/ObjectManager");
const { Player } = require("./Models/Player");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const players = {};
const bombs = [];

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
const objectManager = new ObjectManager(gameMap.container, layout, 11, 15, tileSize);
objectManager.generateWalls();

io.on("connection", (socket) => {
  console.log(`Player connected: ${socket.id}`);

  socket.on("newPlayer", (playerData) => {
    players[socket.id] = new Player(playerData.x, playerData.y, tileSize, tileSize);
    io.emit("updatePlayers", players);
  });

  socket.on("playerMoved", (data) => {
    if (players[socket.id] && objectManager) {
      players[socket.id].movement(data.direction, objectManager.walls);
      io.emit("updatePlayers", players);
    }
  });

  socket.on("placeBomb", (bombData) => {
    const bomb = { ...bombData, id: socket.id };
    bombs.push(bomb);
    io.emit("newBomb", bomb);
    
    setTimeout(() => {
      io.emit("explodeBomb", bomb);
    }, 2000);
  });

  socket.on("disconnect", () => {
    delete players[socket.id];
    io.emit("updatePlayers", players);
    console.log(`Player disconnected: ${socket.id}`);
  });
});

server.listen(3000, () => console.log("Server running on port 3000"));
