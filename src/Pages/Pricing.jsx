import React from "react";
import "../Pages/CleeQ.css";
import "../Pages/Responsive.css";

function Pricing() {
  return (
    <div>
      <div className="SoleraBody4">
        <div className="container LandingContOthers landing-page-container">
          <div className="LandingWrapper">
            <div className="LandingContainer">
              <div className="LandingCoverUp">
                <div className="LandingHedings1" data-aos="zoom-in-up">
                  Affordable pricing. <br />
                  Request for a quote
                </div>

                <p className="SoleraIntro">
                  Solera’s solution can be tailored to suit your specific needs.
                  Click on get quote and fill the form with your requirements,
                  and our sales support will reach out to provide you with the
                  needed quote
                </p>
              </div>
              <div className="DemoRequest">
                <button className="DemoBTN">Request for quote</button>
              </div>
            </div>
            <div className="LandImg02">
              <img
                src="/assets/solera/pr.png"
                alt=""
                className="SoleraLandingImg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
