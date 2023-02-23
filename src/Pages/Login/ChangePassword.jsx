import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";

function ChangePassword() {
  return (
    <div>
      <div>
        {" "}
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
                      <img
                        src="/assets/ImgLogo.jpeg"
                        alt=""
                        className="ImgLogo"
                      />
                    </div>
                    <div className="logo__SignUp__Note">
                      <div className="SignUp__Header">Change Password</div>

                      <div className="SignUp__Header__Note">
                        Enter your New password.
                      </div>
                    </div>
                  </div>
                  <br />

                  <div className="Input__C">
                    <div className="row g-2">
                      <div className="col-md">
                        <div className="form-floating  mb-3">
                          <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                          />
                          <label className="frol" for="floatingPassword">
                            New Password
                          </label>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="form-floating  mb-3">
                          <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                          />
                          <label className="frol" for="floatingPassword">
                            Confirm New Password
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />

                  <div>
                    <Link to="/ChangePassword" className="Clique__Link">
                      <button className="Log__Btn">Confirm password</button>
                    </Link>
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
      </div>
    </div>
  );
}

export default ChangePassword;
