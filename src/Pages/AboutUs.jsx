import React from "react";
import { FiLifeBuoy } from "react-icons/fi";
import "../Pages/CleeQ.css";
import "../Pages/Responsive.css";

function AboutUs() {
  return (
    <div className="SoleraBody3">
      <div className="container AboutUsLanding landing-page-container">
        <div className="LandingWrapper">
          <div className="LandingContainer">
            <div className="LandingCoverUp20">
              <div className="SolersFeaturesHeading">About Us</div>
            </div>
            <div>
              <div className="LandingHedings10" data-aos="zoom-in-up">
                Who we are
              </div>

              <p className="SoleraIntro1">
                Solera is an organisation focused on providing effective
                technology solutions, with customer foot prints across Africa
                and India
              </p>
            </div>
            <br />
            <br />
            <div>
              <div className="LandingHedings10" data-aos="zoom-in-up">
                Our Vision
              </div>

              <p className="SoleraIntro1">
                SOLERA’s vision is to be the leading provider of technology
                based solutions tools in the healthcare industry,
                revolutionizing the day-to-day operations of medical staff and
                ultimately saving lives
              </p>
            </div>
            <br />
            <br />
            <div>
              <div className="LandingHedings10" data-aos="zoom-in-up">
                Our Mission
              </div>

              <p className="SoleraIntro1">
                SOLERA seeks to empower medical staff with easy-to-use systems
                that optimize healthcare deliveryand simplify Patien’ts
                registration and records management, thereby leading to improved
                patient engagement and better overall health outcomes. While
              </p>
            </div>

            <br />
            <br />
            <div>
              <div className="LandingHedings10" data-aos="zoom-in-up">
                Our core values
              </div>

              <p className="SoleraIntro1">
                Our team members share core values that are rooted in:
                <br />
                Transparency
                <br />
                Excellence
                <br />
                Professionalism
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
