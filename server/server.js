const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");

const { GameMap } = require("../server/entities/GameMap.js");
const { BasePlayer } = require("./entities/BasePlayer.js");
const { BaseBomb } = require("./entities/BaseBomb.js");
const ExplosionManager = require("./entities/ExplosionManager.js");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname, "..", "public")));

const players = {};     
let collidables = [];   
const bombs = {};       
const tileSize = 40;
const rows = 11, cols = 15;

const gameMap = new GameMap(rows, cols);

io.on("connection", (socket) => {
  console.log(`Player connected: ${socket.id}`);
 
  socket.on("newPlayer", (playerData) => {
    // Creates a new player
    const newPlayer = new BasePlayer(socket.id, playerData.x, playerData.y);
    players[socket.id] = newPlayer;
    // Adds the player to the collidables list
    collidables.push(newPlayer);
    
    // Sends the updated status of the player to the client
    io.emit("updatePlayers", Object.values(players).map(p => p.toJSON()));
  });
  
  socket.on("playerMoved", (data) => {
    if (players[socket.id]) {
      players[socket.id].move(data.direction);
      io.emit("updatePlayers", Object.values(players).map(p => p.toJSON()));
    }
  });
  
  socket.on("placeBomb", (bombData) => {
    const bomb = new BaseBomb(socket.id, bombData.x, bombData.y);
    bombs[socket.id] = bomb;
    io.emit("newBomb", bomb.toJSON());
    
    bomb.startTimer((explodedBomb) => {
      ExplosionManager.handleExplosion(explodedBomb, collidables);
      // Sends the explosion event to the client
      io.emit("explodeBomb", explodedBomb.toJSON());
      io.emit("updatePlayers", Object.values(players).map(p => p.toJSON()));
    });
  });
  
  socket.on("disconnect", () => {
    console.log(`Player disconnected: ${socket.id}`);
    // Removes the player from the players object
    delete players[socket.id];
    // Removes the player from the collidables list
    collidables = collidables.filter(p => p.id !== socket.id);
    io.emit("updatePlayers", Object.values(players).map(p => p.toJSON()));
  });
});

server.listen(3300, () => console.log("Server running on port 3300"));
