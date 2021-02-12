const socketManager = require("./SocketManager");
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

const port = 5000;
server.listen(port, () => console.log(`Listening on port ${port}`));
const socketIo = require("socket.io");

const io = (module.exports = socketIo(server, {
  cors: {
    origin: "*",
  },
}));

io.on("connection", socketManager);
io.on("logout", (socket) => {
  socket.disconnect();
});

io.on("verifyuser", (socket, callback) => {
  //check user exists
  //build user object
  callback(true);
});

io.on("userconnected", (socket) => {
  //broadcast to all connected clients
});

//const router= exress.Router();
