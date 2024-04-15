import React from "react";

function AmbulanceHailingSystem() {
  return (
    <div>
      <div className="SoleraBody1">
        <div className="container LandingContOthers landing-page-container">
          <div className="LandingWrapper">
            <div className="LandingContainer">
              <div className="LandingCoverUp">
                <div className="LandingHedings1" data-aos="zoom-in-up">
                  Ambulance Hailing System
                </div>

                <p className="SoleraIntro1">
                  Our innovative medical software will help you boost the
                  efficiency of your day-to-day operations and allow you to
                  access the platform from any device.
                </p>
              </div>
              <div className="DemoRequest">
                <button className="DemoBTN">Request for demo</button>
              </div>
            </div>
            <div className="LandImg02">
              <img
                src="/assets/solera/amb.png"
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

export default AmbulanceHailingSystem;
