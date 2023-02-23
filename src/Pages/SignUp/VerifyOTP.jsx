import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";

function VerifyOTP() {
  return (
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
                    <div className="SignUp__Header">Verify OTP.</div>

                    <div className="SignUp__Header__Note">
                      A One-Time-Password has been sent to this(Phone Number).
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
                      Enter OTP
                    </label>
                  </div>
                </div>
                <br />
                <div className="Otp__Btn">
                  <Link to="/ConfirmPhoneNumber" className="Clique__Link">
                    <button className="Log__Btn Log__Back">Back</button>
                  </Link>
                  <Link to="/SignUpSuccessful" className="Clique__Link">
                    <button className="Log__Btn">Verify OTP</button>
                  </Link>
                </div>
                <br />

                <div className="Clique__Qes">
                  <span>Time Counter : </span> Otp not received?
                  <Link className="Clique__Link">
                    <span>Resend OTP</span>
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

export default VerifyOTP;
