import React from "react";
import "../Home.css";
import { Link } from "react-router-dom";

function Signup() {
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
                  <div className="SignUp__Header">Sign Up.</div>

                  <div className="SignUp__Header__Note">
                    Sign Up with clique24 for free and explore.
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
                  <div className="valid-feedback Valid__Note">
                    Enter a valid Phone number!
                  </div>
                </div>
                <br />

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
                        Password
                      </label>
                      <div className="valid-feedback Valid__Note">
                        Looks good!
                      </div>
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
                        Confirm Password
                      </label>
                      <div className="valid-feedback Valid__Note">
                        Looks good!
                      </div>
                      <div className="valid-feedback Valid__Note">
                        Password does not match!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option className="frol" selected>
                    How did you know about us?
                  </option>

                  <option value="1">Google</option>
                  <option value="2">Radio</option>
                  <option value="3">Instagram Add</option>
                  <option value="4">Facebook Add</option>
                  <option value="5">Twitter Add</option>
                  <option value="6">Our social Media page</option>
                  <option value="7">From a friend</option>
                </select>
                <label className="frol" for="floatingSelect">
                  How did you know about us?
                </label>
              </div>

              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Accept our privacy terms.
                </label>
                <div className="valid-feedback Valid__Note">
                  You must accept out privacy terms to signup!
                </div>
              </div>
              <br />

              <div className="Terms__SignUp">
                <div className="Clique__Qes">
                  Already signed up?{" "}
                  <Link to="/Login" className="Clique__Link">
                    <span>Log in Here</span>
                  </Link>
                </div>

                <div>
                  <Link to="/ConfirmPhoneNumber" className="Clique__Link">
                    <button className="Log__Btn">Signup</button>
                  </Link>
                </div>
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

export default Signup;
