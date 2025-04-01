const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const players = {};
const bombs = [];

io.on("connection", (socket) => {
  console.log(`Player connected: ${socket.id}`);

  socket.on("newPlayer", (playerData) => {
    players[socket.id] = { ...playerData, id: socket.id };
    io.emit("updatePlayers", players);
  });

  socket.on("move", (data) => {
    if (players[socket.id]) {
      players[socket.id].x = data.x;
      players[socket.id].y = data.y;
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
