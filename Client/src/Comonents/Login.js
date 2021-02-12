import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function Login({ socket, setUserLayout }) {
  const nameRef = useRef();
  const { user, setUser } = useState();
  const { err, setErr } = useState();

  function handleChange(evt) {
    const name = evt.target.value;
    setUser(name);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    //check user is valid
    socket.emit("verifyuser", user, setUserLogin);
  }

  function setUserLogin({ user, isValid }) {
    if (!isValid) {
      //set error object
      setErr("already taken");
    } else {
      //call setUSer on Layoit comonent
      setUserLayout(user);
    }
  }

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit} className="w-100">
          <Form.Group>
            <Form.Label>Enter your Name</Form.Label>

            <Form.Control
              tye="text"
              id="name"
              ref={nameRef}
              required
            ></Form.Control>
          </Form.Group>
          <Button type="submit" className="mr-2">
            Join
          </Button>
          {err != null ? <p>err</p> : <p></p>}
        </Form>
      </Container>
    </div>
  );
}
