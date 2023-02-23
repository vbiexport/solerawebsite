import React from "react";
import "../Home.css";
import { Link } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import HomeNav from "../../Components/HomeNav/HomeNav";

function Login() {
  return (
    <div className="LoginBody">
      <div className="Login__Signup__Page">
        <div className="column22 Img__cont">
          <div className="column223">
            <div className="dex2">
              <img src="/assets/1.jpg" alt="" className="Img__Class" />
            </div>
          </div>
        </div>
        <div className="column22 SignupLogin__cont">
          <div className="column223">
            <div className="dex22">
              <div className="logoSignup__Cont">
                <div className="logo__Cont">
                  <img src="/assets/ImgLogo.jpeg" alt="" className="ImgLogo" />
                </div>
                <div className="logo__SignUp__Note">
                  <div className="SignUp__Header">Login.</div>

                  <div className="SignUp__Header__Note">
                    Enter Phone number in this format (9024213456)
                  </div>
                </div>
              </div>
              <br />

              <div className="Input__C">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Phone Number"
                  />
                  <label className="frol" for="floatingInput">
                    Phone Number
                  </label>
                </div>
                <div className="form-floating  ghshs">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label className="frol" for="floatingPassword">
                    Password
                  </label>
                </div>
              </div>
              <br />

              <div className="Clique__Qes">
                Do you have an account with us?{" "}
                <Link to="/Signup" className="Clique__Link">
                  <span>Sign up here</span>
                </Link>
              </div>
              <br />
              <div className="Clique__Qes">
                {" "}
                <Link to="/ForgotPassword" className="Clique__Link">
                  Forgot Password?{" "}
                </Link>
              </div>
              <br />
              <div>
                <button className="Log__Btn">Login</button>
              </div>
              <br />
              <div className="Clique__Qes">
                Go back to{" "}
                <Link to="/" className="Clique__Link">
                  <span>Home</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
