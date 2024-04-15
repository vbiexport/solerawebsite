import React from "react";
import Footer from "../Components/Footer/Footer";
import "../Pages/CleeQ.css";
import "../Pages/Responsive.css";

function ContactUs() {
  return (
    <div>
      <div className="SoleraBody5">
        <div className="container ContactContOthers">
          <div className="SoleraLandingWrapper">
            <div className="ContactUsWrapper">
              <div className="LandingCoverUp2">
                <div className="ContactTittle" data-aos="zoom-in-up">
                  Reach out to us
                </div>

                <p className="SoleraIntro1">
                  We would be glad to deploy our solutions at your health
                  centers:
                </p>
              </div>
              {/* <div className="DemoRequest2">
                <button className="DemoBTN">Request for demo</button>
              </div> */}
            </div>
            <div className="ContactUsInput">
              <div className="container overflow-hidden">
                <div className="row gy-2">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control textInputForm"
                      id="exampleFormControlInput1"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control textInputForm"
                      id="exampleFormControlInput1"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>
              <br />
              <div className="container overflow-hidden">
                <div className="row gy-2">
                  <div className="col-lg-6">
                    <input
                      type="email"
                      className="form-control textInputForm"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="number"
                      className="form-control textInputForm"
                      id="exampleFormControlInput1"
                      placeholder="Phonenumber"
                    />
                  </div>
                </div>
              </div>
              <br />
              <div className="container overflow-hidden">
                <div className="row gx-5">
                  <div className="col">
                    <textarea
                      type="text"
                      placeholder="Comment"
                      className="form-control "
                      id="exampleFormControlTextarea1"
                      rows="6"
                    ></textarea>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
              <div className="DemoRequest2">
                <button className="DemoBTN2">Reach Out</button>
              </div>
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
