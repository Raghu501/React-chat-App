import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdEject } from "react-icons/md";

export default function Sidebar(props) {
  const { chats, setActiveChat, logout, user } = props;
  return (
    <div id="side-bar">
      <div className="heading">
        <div className="app-name">Skye{<FaChevronDown />}</div>
        {/* <div className="menu">
          <FAMenu />
        </div> */}
      </div>
      <div className="search">
        <i className="search-icon">{<FaSearch />}</i>
        <input placeholder="Search" type="text" />
        <div className="plus"></div>
      </div>
      <div
        onClick={() => {
          logout();
        }}
        title="Logout"
        className="logout"
      >
        {/* <MdEject /> */}
        <button> Logout</button>
      </div>
      {
        <div className="users">
          {chats.map((chat) => {
            if (chat.name) {
              const lastMessage = chat.messages[chat.messages.length - 1];
              //find the user, exclude the login user
              const user = chat.users.find(({ name }) => {
                return name !== user;
              }) || { name: "Community" };

              return (
                <div key={chat.id} onClick={setActiveChat(chat.id)}>
                  <div className="user-photo">{user.name[0].toUpperCase()}</div>
                  <div className="user-info">
                    <div className="name">{user.name}</div>
                    {lastMessage && (
                      <div className="last-message">{lastMessage.message}</div>
                    )}
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      }
      <div className="current-user">
        <span>{user}</span>
        <div
          onClick={() => {
            logout();
          }}
          title="Logout"
          className="logout"
        >
          {/* <MdEject /> */}
          <button> Logout</button>
        </div>
      </div>
    </div>
  );
}
