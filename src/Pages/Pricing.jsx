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
                  Affordable pricing
                </div>
                <br />
                <p className="SoleraIntro">
                  With transparent pricing structures and flexible payment
                  options, we strive to make our solutions accessible to
                  individuals and businesses alike. Whether you're a startup, a
                  small business, or a large enterprise, our pricing is designed
                  to accommodate your needs and scale with your growth.
                </p>
              </div>
              <div className="DemoRequest">
                <button className="DemoBTN">Request for quote</button>
              </div>
            </div>
            <div className="LandImg02">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6">
                    <div className=" PricingCont">
                      <div>Standard</div>
                      <div className="Pricing-Heading"> Starting from $4,000</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className=" PricingCont">
                      {" "}
                      <div>Custom</div>
                      <div className="Pricing-Heading">Contact us</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <img
                src="/assets/solera/pr.png"
                alt=""
                className="SoleraLandingImg"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
