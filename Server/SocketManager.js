const io = require("./app").io;
module.exports = function (socket) {
  console.log("new client connection, id" + socket.id);

  //Logout event
  io.on("logout", (socket) => {
    socket.disconnect();
  });

  //verify user
  io.on("verifyuser", () => {
    //check user exists
    //build user object
    callback(true);
  });

  //connect user
  io.on("userconnected", () => {
    //broadcast to all connected clients
  });

  //const router= exress.Router();
};
