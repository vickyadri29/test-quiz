import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

//Import from images
import GoogleLogo from "../../img/google-logo.png";

const LoginComponents = () => {
  useEffect(() => {
    document.title = "Test - Login page";
  }, []);
  
  return (
    <div>
      <div className="content">
        <h1>Test DOT Indonesia - Quiz</h1>
        <div className="login-content">
          <h2>Login</h2>

          <form>
            <Link to={"/quiz"}>
              <button type="submit" className="btn-google">
                <img src={GoogleLogo} alt="Google-logo" width="20" />
                <span className="name-btn">Sign in with Google</span>
              </button>
            </Link>
            <div className="other-sign-in">
              <span>—— or sign in with ——</span>
            </div>
            <div className="form-login">
              <label htmlFor="username">Username</label>
              <br />
              <input type="text" name="username" id="username" />
            </div>
            <div className="form-login">
              <label htmlFor="password">Password</label>
              <br />
              <input type="text" name="password" id="password" />
            </div>
            <div className="forgot-pass">
              <span>Forgot Password?</span>
            </div>
            <Link to={"/quiz"}>
              <button type="submit" className="btn-login">
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponents;
