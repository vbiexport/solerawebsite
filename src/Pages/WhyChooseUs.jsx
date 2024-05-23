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
                Reliability, Customer Satisfaction and more
              </div>

              <p className="SoleraIntro1">
                we pride ourselves on delivering unparalleled value and service
                to our customers
              </p>
            </div>
            {/* <div className="DemoRequest">
              <button className="DemoBTN">Request for demo</button>
            </div> */}
          </div>
          {/* <div className="LandImg02">
            <div className="container">
              <div className="row g-2">
                <div className="col">
                  <div className="soleraBox">IMAGE OF REPORTS Dashboards</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
