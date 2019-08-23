import React, { useState } from "react";
import axios from 'axios';

const Login = props => {

  const initialLogin = {
    username: "Lambda School",
    password: "i<3Lambd4",
  };

  const [login, setLogin] = useState(initialLogin);
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const handleChange = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

   const handleSubmit = e => {
    e.preventDefault();

     axios
      .post("http://localhost:5000/api/login", login)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubbles");
        setLogin(initialLogin);
      })
      .catch(err => {
        console.log("err", err);
      });
  };
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <h4>Please, Login</h4>
      <form onSubmit={handleSubmit}>
        <fieldset className = "login">
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              id="username"
              value={login.username}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              id="password"
              value={login.password}
              onChange={handleChange}
            />
          </label>
          <button>Login</button>
        </fieldset>
      </form>
    </>
  );
};

export default Login;
