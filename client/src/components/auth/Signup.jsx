import React, { useState } from "react";
import { signup } from "../../api/apicalls";
import { Link } from "react-router-dom";

export default function Signup(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signup({ username, password, email });
    window.location.reload(false);
  };

  const handleKey = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    else if (name === "password") setPassword(value);
    else if (name === "email") setEmail(value);
  };

  return (
    <div className="main-container row">
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
            <label>Email</label>
            <input
              name="email"
              onKeyUp={handleKey}
              type="text"
              placeholder="Email address"
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
            Signup
          </button>
          <div className="auth-form-link">
            Already have your account ? <Link to="/login">Log in here</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
