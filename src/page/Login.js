import React from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <main>
      <div className="login-container">
        <div className="login-content">
          <div className="left-login-container">
            <div className="login-buttons">
              <Link to={"/login"}>
                <button className="btn btn1">LOGIN</button>
              </Link>
              <Link to={"/signup"}>
                <button className="btn btn2">REGISTER</button>
              </Link>
            </div>
            <div className="login-about-texts">
              <h1>WELCOME TO ELITE CARS</h1>
              <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.</h4>
            </div>
          </div>
          <div className="right-login-container">
            <form className="login-form">
              <Link to={"/"}>
                <h2>
                  Elite <span>Cars</span>
                </h2>
              </Link>
              <h3>Sign Into Your Account</h3>
              <div className="signinicons">
                <i class="bx bxl-google ic1"></i>
                <i class="bx bxl-facebook ic2"></i>
                <i class="bx bxl-twitter ic3"></i>
                <i class="bx bxl-linkedin ic4"></i>
              </div>
              <div className="orpart">
                <div className="orline"></div>
                <h5>Or</h5>
                <div className="orline"></div>
              </div>
              <div className="form-group">
                <div className="form-row">
                  <input type="email" required placeholder="Email Address" />
                  <i class="bx bx-envelope"></i>
                </div>
                <div className="form-row">
                  <input type="password" required placeholder="Password" />
                  <i class="bx bx-lock"></i>
                </div>
              </div>
              <div className="checkboxcon">
                <span>
                  <input type="checkbox" id="checkbox" />
                  Remember me
                </span>
                <span>Forgot password</span>
              </div>
              <button type="submit">Login</button>
              <h4>
                Don't have an account ?
                <Link to={"/signup"}>
                  <span> Register here</span>
                </Link>
              </h4>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
