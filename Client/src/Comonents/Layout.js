import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Login from "./Login";
import ChatContainer from "./ChatContainer";

export default function Layout() {
  const [socket, setSocket] = useState();
  const [user, setUser] = useState();
  const url = "http://localhost:5000/";

  useEffect(() => {
    // alert();
    const socket = io(url);
    socket.on("connect", () => {
      //alert();
      console.log("connected");
      setSocket(socket);
    });
  }, [user]);

  function logout() {
    //disconnect from s(ocket
    socket.emit("logout", user);
    setUser(null);
  }

  function setUserLayout(user) {
    setUser(user);
    console.log(user);
    socket.emit("userconnected", user);
  }

  return (
    <div>
      {user ? (
        <ChatContainer user={user} socket={socket} logout={logout} />
      ) : (
        <Login socket={socket} setUserLayout={setUserLayout}></Login>
      )}
    </div>
  );
}
