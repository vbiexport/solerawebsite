import { React } from "react";
import "../../Pages/CleeQ.css";
import RequestDemoModal from "../../Components/RequestDemoModal";
import DemoBtn from "../../Components/DemoBtn";

function OurLanding() {
  return (
    <div className="SoleraBody">
      <div className="container LandingCont landing-page-container">
        <div className="LandingWrapper">
          <div className="LandingContainer">
            <div className="LandingCoverUp">
              <div className="LandingHedings1" data-aos="zoom-in-up">
                Innovative Med-Tech <br />
                Solutions
              </div>

              <p className="SoleraIntro">
                Our innovative medical software will help you boost the
                efficiency of your day-to-day operations and allow you to access
                the platform from any device.
              </p>
            </div>
            <div className="DemoRequest">
              <DemoBtn />
            </div>
          </div>
          <div className="LandImg02">
            <img
              src="/assets/solera/LD8.png"
              alt=""
              className="SoleraLandingImg"
            />
          </div>
        </div>
      </div>
      <div className="MoreNote">
        Our Medical solutions simplifies the funtions of Doctors, Nurses,
        Matrons, Pharmacists and Lab Scientist all in one easy to use platform
      </div>
    </div>
  );
}

export default OurLanding;
