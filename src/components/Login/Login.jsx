import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

//Import from images
import LoginPhoto from "../../img/login-photo.jpg";

const LoginComponents = () => {
  return (
    <div>
      <h1>Test DOT Indonesia - Quiz</h1>
      <div>
        <img src={LoginPhoto} alt="" width="350" />
        <h2>Login</h2>
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label htmlFor="password">Username</label>
            <input type="text" name="password" id="password" />
          </div>
          <Link to={'/quiz'}>
            <button type="submit">Login</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginComponents;
