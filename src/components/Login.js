import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login_body">
      <body className="align">
        <div className="grid">
          <form
            action="https://httpbin.org/post"
            method="POST"
            className="form login"
          >
            <div className="form__field">
              <label for="login__username">
                <span className="hidden">Username</span>
              </label>
              <input
                autocomplete="username"
                id="login__username"
                type="text"
                name="username"
                className="form__input"
                placeholder="Username"
                required
              />
            </div>

            <div className="form__field">
              <label for="login__password"></label>
              <input
                id="login__password"
                type="password"
                name="password"
                className="form__input"
                placeholder="Password"
                required
              />
            </div>
            <Link to="/home">
              <div className="form__field">
                <input type="submit" value="Sign In" />
              </div>
            </Link>
          </form>
        </div>
      </body>
    </div>
  );
};

export default Login;
