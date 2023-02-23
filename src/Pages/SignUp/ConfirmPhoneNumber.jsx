import React from "react";
import "../Home.css";
import { Link } from "react-router-dom";

function ConfirmPhoneNumber() {
  return (
    <div>
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
                    <div className="SignUp__Header">Confirm Phone number.</div>

                    <div className="SignUp__Header__Note">
                      Confirm that this Phone number is available to receive
                      OTP.
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
                </div>

                <div className="Clique__Qes">
                  Is your Phone Number correct? Do you want to change it?
                </div>

                <br />

                <br />
                <div className="Otp__Btn">
                  <Link to="/Signup" className="Clique__Link">
                    <button className="Log__Btn ChangeNumber__Btn">
                      Change{" "}
                    </button>{" "}
                  </Link>
                  <Link to="/VerifyOTP" className="Clique__Link">
                    <button className="Log__Btn">Send OTP </button>
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
  );
}

export default ConfirmPhoneNumber;
