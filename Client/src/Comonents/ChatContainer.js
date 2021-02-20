import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function ChatContainer(props) {
  const { user, logout, socket } = props;

  const [chats, setchats] = useState([]);
  const [activechat, setactivechat] = useState(null);
  return (
    <div>
      <Sidebar
        chats={chats}
        activechat={activechat}
        setActive={setactivechat}
        logout={logout}
        user={user}
      ></Sidebar>
      <div></div>
    </div>
  );
}
