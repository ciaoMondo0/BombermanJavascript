
import { PlayerRenderer } from "./Models/PlayerRenderer.js"
import { ExplosionManager } from "./ManagerClasses/ExplosionManager.js";
import {
  EVENT_NEW_PLAYER,
  EVENT_PLAYER_MOVED,
  EVENT_UPDATE_PLAYERS,
  EVENT_PLACE_BOMB,
  EVENT_EXPLODE_BOMB,
} from "./shared/constants.js";

const socket = io();
const players = {};

socket.on("connect", () => {
  console.log("Connected with id:", socket.id);
  socket.emit(EVENT_NEW_PLAYER, { x: 40, y: 40 });
});


socket.on(EVENT_UPDATE_PLAYERS, (playersData) => {
  const container = document.getElementById("mapContainer");
  Object.values(playersData).forEach((playerData) => {
    if (!players[playerData.id]) {
      players[playerData.id] = new PlayerRenderer(playerData);
      container.appendChild(players[playerData.id].element);
    } else {
      players[playerData.id].updateFromData(playerData);
    }
  });
});

socket.on(EVENT_EXPLODE_BOMB, (explodedBomb) => {
  console.log("Bomb exploded", explodedBomb);
  ExplosionManager.handleExplosion(explodedBomb);
});

document.addEventListener("keydown", (event) => {
  let direction = null;
  switch (event.key) {
    case "ArrowUp":
      direction = "up";
      break;
    case "ArrowDown":
      direction = "down";
      break;
    case "ArrowLeft":
      direction = "left";
      break;
    case "ArrowRight":
      direction = "right";
      break;
    case " ":
      if (players[socket.id]) {
        socket.emit(EVENT_PLACE_BOMB, { x: players[socket.id].x, y: players[socket.id].y });
      }
      return;
  }
  if (direction) {
    socket.emit(EVENT_PLAYER_MOVED, { direction });
  }
});


