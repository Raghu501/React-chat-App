//const io = require("./app").io;
let connectedUsers = {};
module.exports = function (socket) {
  console.log("new client connection, id" + socket.id);

  //Logout event
  socket.on("logout", (user) => {
    socket.disconnect();
    removeUser(user);
    // connectedUsers = newUsers;
    // console.log("k", newUsers);
    // console.log("l", connectedUsers);
  });

  //verify user
  socket.on("verifyuser", (userName, callback) => {
    //check user exists
    //build user object
    console.log("verifying user");
    //console.log(userName);
    //console.log(callback.toString());
    //debugger;
    if (isUserExistsAlready(userName)) {
      console.log("m");
      callback(userName, false);
    } else {
      console.log("t", userName);
      callback(userName, true);
    }
  });

  //connect user
  socket.on("userconnected", (user) => {
    //broadcast to all connected clients
    connectedUsers = addUser(user);
    socket.user = user;
    //console.log("con" + connectedUsers);
  });

  //const router= exress.Router();
};

function addUser(user) {
  connectedUsers = { ...connectedUsers, [user]: user };
  return connectedUsers;
}

function removeUser(username) {
  let newList = Object.assign({}, connectedUsers);
  //console.log("re", newList);
  delete newList[username];
  //console.log(username);
  connectedUsers = newList;
  console.log(connectedUsers);
  return newList;
}

function isUserExistsAlready(username) {
  //check exists in the obj
  return username in connectedUsers;
}
