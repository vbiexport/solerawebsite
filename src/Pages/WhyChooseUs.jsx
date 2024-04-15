import React from "react";
import { FiLifeBuoy } from "react-icons/fi";
import "../Pages/CleeQ.css";
import "../Pages/Responsive.css";

function WhyChooseUs() {
  return (
        <div className="SoleraBody3">
        <div className="container LandingContOthers landing-page-container">
          <div className="LandingWrapper">
            <div className="LandingContainer">
              <div className="LandingCoverUp">
                <div className="SolersFeaturesHeading">Why Choose Solera</div>
                <div className="LandingHedings1" data-aos="zoom-in-up">
                  Streamlined inventory, effortless billing
                </div>
  
                <p className="SoleraIntro1">
                  Our innovative medical software will help you boost the
                  efficiency of your day-to-day operations and allow you to access
                  the platform from any device.
                </p>
              </div>
              <div className="DemoRequest">
                <button className="DemoBTN">Request for demo</button>
              </div>
            </div>
            <div className="LandImg02">
              <div className="container">
                <div className="row g-2">
                  <div className="col-6">
                    <div className="soleraBox">
                      <FiLifeBuoy className="soleraBoxIcon" />
                      <div className="soleraBoxHeading">Point of Sale</div>
                      <div>Point of Sale</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="border bg-light soleraBox">
                      Custom column padding
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="border bg-light soleraBox">
                      Custom column padding
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="soleraBox">Custom column padding</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default WhyChooseUs