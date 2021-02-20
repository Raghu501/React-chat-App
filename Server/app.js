const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

const port = 5000;
server.listen(port, () => console.log(`Listening on port ${port}`));
const socketIo = require("socket.io");

const io = (module.exports.io = socketIo(server, {
  cors: {
    origin: "*",
  },
}));
const socketManager = require("./SocketManager");
io.on("connection", socketManager);
