import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Form, TextInput } from "carbon-components-react";
import registerIcon from "./register.png";
import "./Signin.scss";

const USERS = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];

function Register({ history }) {
  const [users, setUsers] = useState(USERS);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (redirect) {
      localStorage.setItem("users", JSON.stringify(users));

      history.push("/");
    }
  }, [users, history]);

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (users && users.filter((user) => user.email === email).length === 1) {
      window.alert("Email Already exists");
    } else {
      const newUser = {
        email: email,
        userName: userName,
        password: password,
      };

      setUsers([...users, newUser]);
      setRedirect(true);
    }
    setUserName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Form className="signup-form" onSubmit={handleSubmitForm}>
      <img src={registerIcon} className="avatar" alt="avatar" />

      <h1 className="registerHeader">Sign Up</h1>
      <TextInput
        required
        labelText="User Name"
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      ></TextInput>

      <TextInput
        required
        labelText="Email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></TextInput>

      <TextInput
        required
        labelText="Password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></TextInput>

      <Button className="submit-button" type="submit">
        Register
      </Button>

      <Link className="signup-link" to="/">
        Sign In
      </Link>
    </Form>
  );
}

export default Register;
