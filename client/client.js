const socket = io();

socket.emit("newPlayer", { x: 40, y: 40 });

document.addEventListener("keydown", (event) => {
  let direction = null;

  switch (event.key) {
    case "ArrowUp": direction = "up"; break;
    case "ArrowDown": direction = "down"; break;
    case "ArrowLeft": direction = "left"; break;
    case "ArrowRight": direction = "right"; break;
  }

  if (direction) {
    socket.emit("playerMoved", { direction });
  }
});

socket.on("updatePlayers", (players) => {
  console.log("Updated players:", players);
});
