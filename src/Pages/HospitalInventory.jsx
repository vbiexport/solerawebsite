import React from "react";

function HospitalInventory() {
  return (
    <div>
      <div className="SoleraBody1">
        <div className="container LandingContOthers landing-page-container">
          <div className="LandingWrapper">
            <div className="LandingContainer">
              <div className="LandingCoverUp">
                <div className="LandingHedings1" data-aos="zoom-in-up">
                  Hospital Inventory
                </div>

                <p className="SoleraIntro1">
                  Our hospital inventory system provides healthcare facilities
                  with the tools they need to effectively track, manage, and
                  replenish inventory levels. By utilizing advanced technology
                  and robust tracking mechanisms, our system helps hospitals
                  streamline procurement processes, minimize stockouts, and
                  reduce waste. With real-time visibility into inventory levels,
                  expiration dates, and usage patterns, healthcare providers can
                  make informed decisions to ensure adequate supplies are always
                  available when needed. 
                </p>
              </div>
              <div className="DemoRequest">
                <button className="DemoBTN">Request for demo</button>
              </div>
            </div>
            <div className="LandImg02">
              <img
                src="/assets/solera/inv.png"
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

export default HospitalInventory;
