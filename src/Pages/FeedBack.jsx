import React from "react";
import "../Pages/CleeQ.css";
import "../Pages/Responsive.css";

function FeedBack() {
  return (
    <div>
      <div className="SoleraBody6">
        <div className="container LandingContFeedback ">
          <div className="LandingHedings1" data-aos="zoom-in-up">
            Our clients that trust us
          </div>
          <div className="container ClientBox p-0">
            <div className="row">
              <div className="col-lg-4">
                <div className="">
                  <img
                    src="/assets/solera/nani.png"
                    alt=""
                    className="ClientLogo"
                  />
                </div>
                <p className="SoleraIntro22">
                  Our innovative medical software will help you boost the
                  efficiency of your day-to-day operations and allow you to
                  access the platform from any device.
                </p>
              </div>
              <div className="col-lg-4">
                <div className="">
                  <img
                    src="/assets/solera/nani.png"
                    alt=""
                    className="ClientLogo"
                  />
                </div>
                <p className="SoleraIntro22">
                  Our innovative medical software will help you boost the
                  efficiency of your day-to-day operations and allow you to
                  access the platform from any device.
                </p>
              </div>{" "}
              <div className="col-lg-4">
                <div className="">
                  <img
                    src="/assets/solera/nani.png"
                    alt=""
                    className="ClientLogo"
                  />
                </div>
                <p className="SoleraIntro22">
                  Our innovative medical software will help you boost the
                  efficiency of your day-to-day operations and allow you to
                  access the platform from any device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
