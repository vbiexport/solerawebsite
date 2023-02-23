import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";

function SignUpSuccessful() {
  return (
    <div>
      <div>
        {" "}
        <div className="LoginBody">
          <div className="Login__Signup__Page">
            <div className="column22 Img__cont">
              <div className="column223">
                <div className="dex2">
                  <img src="/assets/2.jpg" alt="" className="Img__Class" />
                </div>
              </div>
            </div>
            <div className="column22 SignupLogin__cont">
              <div className="column223">
                <div className="dex22">
                  <div className="logoSignup__Cont">
                    <div className="logo__Cont">
                      <img
                        src="/assets/ImgLogo.jpeg"
                        alt=""
                        className="ImgLogo"
                      />
                    </div>
                    <div className="logo__SignUp__Note">
                      <div className="SignUp__Header">Sign Up for free..</div>

                      <div className="SignUp__Header__Note">
                        Sign Up with clique24 for free and explore..
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="SignUp__success__Note">
                    Congratulations! <br />
                    <span className="SignUp__success__Note__Tittle">
                      {" "}
                      Your Sign up is Successful.
                    </span>
                  </div>
                  <br />{" "}
                  <div>
                    <Link to="/Login" className="Clique__Link">
                      <button className="Log__Btn">Login</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpSuccessful;
