import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Login from "./Login";

export default function Layout() {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [socket, setSocket] = useState();
  const [user, setUser] = useState();
  const url = "http://localhost:5000/";

  useEffect(() => {
    alert();
    const socket = io(url);
    socket.on("connect", () => {
      alert();
      console.log("connected");
      setSocket(socket);
    });
  }, []);

  function logout() {
    //disconnect from s(ocket
    socket.emit("logout");
    setUser(null);
  }

  function setUser(user) {
    setUser(user);

    socket.emit("userconnected", user, () => {
      setLoginSuccess(true);
    });
  }

  return (
    <div>
      loginSuccess?<Dashboard></Dashboard>:
      <Login socket={socket} setUser={setUser}></Login>
    </div>
  );
}
