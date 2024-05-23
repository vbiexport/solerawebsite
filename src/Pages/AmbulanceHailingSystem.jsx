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
                  Our Ambulance Hailing System app provides real-time tracking
                  and updates, allowing users to monitor the status of their
                  ambulance and estimated time of arrival. At the heart of our
                  Ambulance Hailing System is a commitment to saving lives and
                  ensuring timely access to critical medical care. Join us in
                  revolutionizing emergency response and making our communities
                  safer and healthier."
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
