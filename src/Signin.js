import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { Button, Form, TextInput } from "carbon-components-react";
import userIcon from "./user.png";
import "./Signin.scss";

function Signin(props) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { loggedIn, setLoggedIn } = props;

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const USERS = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    const userInfo = USERS.filter((user) => user.email === userEmail);

    if (userInfo.length === 1) {
      if (userInfo[0].email === userEmail) {
        if (userInfo[0].password === userPassword) {
          localStorage.setItem("token", "asdadaklwlkdsfaksdf");
          setLoggedIn(true);
          localStorage.setItem("currentUser", userEmail); // Success
        } else {
          window.alert("Incorrect password"); // Incorrect password
        }
      } else {
        window.alert("incorrect email"); // Incorrect email
      }
    }
  };

  return !loggedIn ? (
    <div>
      <Form className="login-form" onSubmit={handleSubmitForm}>
        <img src={userIcon} className="avatar" alt="avatar" />
        <h1 className="signInHeader">Sign In</h1>
        <TextInput
          className="text-input"
          type="email"
          labelText="Email"
          placeholder="Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />

        <TextInput
          className="text-input"
          type="password"
          required
          labelText="Password"
          placeholder="Password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <Button className="submit-button" type="submit">
          Sign In
        </Button>

        <Link className="signup-link" to="/register">
          Sign Up
        </Link>
      </Form>
    </div>
  ) : (
    <Redirect to="/dashboard" />
  );
}

export default Signin;
