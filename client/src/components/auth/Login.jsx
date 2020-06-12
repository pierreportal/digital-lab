import React, { useState } from "react";
import { login } from "../../api/apicalls";
import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [loggedIn, setLoggedIn] = useState(!!props.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
    // setLoggedIn(true);
    window.location.reload(false);
  };

  const handleKey = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    else if (name === "password") setPassword(value);
  };

  return (
    <div className="main-container row">
      {props.user ? (
        <div className="auth-form column">
          <p>Hey {props.user.name}, you are on the authentication page.</p>
          <Link to={"/auth/logout"}>log out ? </Link>
        </div>
      ) : (
        <div className="auth-form">
          <form className="column" onSubmit={handleSubmit}>
            <h1>Digitalab⚡</h1>
            <div className="row">
              <label>Username</label>
              <input
                name="username"
                onKeyUp={handleKey}
                type="text"
                placeholder="Username"
                autoComplete="off"
              />
            </div>
            <div className="row">
              <label>Password</label>
              <input
                name="password"
                onKeyUp={handleKey}
                type="password"
                placeholder="Password"
                autoComplete="off"
              />
            </div>
            <button className="auth-form-btn" type="submit">
              Login
            </button>
            <div className="auth-form-link">
              Don't have your account yet ?{" "}
              <Link to="/signup">Signup here</Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
