import React, { useState } from "react";

export default function Login({ socket, setUserLayout }) {
  //  const nameRef = useRef();
  const [userName, setUserName] = useState("");
  const [err, setErr] = useState();

  function handleChange(evt) {
    const name = evt.target.value;
    setUserName(name);
  }

  //callback from socket
  function setUserLogin(user, isValid) {
    //alert();
    debugger;
    if (!isValid) {
      //set error object
      setErr("already taken");
    } else {
      //call setUSer on Layout comonent
      setUserLayout(user);
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    debugger;
    //check user is valid
    socket.emit("verifyuser", userName, setUserLogin);
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login-form">
        {/* <label htmlFor="nickname">
          <h2>Name</h2>
        </label> */}
        <input
          type="text"
          id="name"
          value={userName}
          onChange={handleChange}
          placeholder={"Your Name"}
        />
        <br />
        <button type="submit" className="btn btn-primary">
          Join
        </button>
        <div className="error">{err ? err : null}</div>
      </form>
    </div>
  );
}
