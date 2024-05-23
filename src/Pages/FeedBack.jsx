import React from "react";
import "../Pages/CleeQ.css";
import "../Pages/Responsive.css";
import { FiHome } from "react-icons/fi";
import { FaLaptopMedical, FaUserInjured, FaUserMd, FaUserNurse } from "react-icons/fa";

function FeedBack() {
  return (
    <div>
      <div className="SoleraBody6">
        <div className="container LandingContFeedback ">
          <div className="LandingHedings1" data-aos="zoom-in-up">
            Join our community
          </div>
          <div className="container ClientBox p-0">
            <div className="row g-2">
              <div className="col-lg-3">
                <div className="comunity-Package">
                  <div>
                    <FaLaptopMedical  className="comunity-Package-Icon" />
                  </div>
                  <div>
                    <div className="Comunity-Count-Heading">Hospitals</div>
                    <div className="Comunity-Count">300 +</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="comunity-Package">
                  <div>
                    <FaUserInjured  className="comunity-Package-Icon" />
                  </div>
                  <div>
                    <div className="Comunity-Count-Heading">Patients</div>
                    <div className="Comunity-Count">6000 +</div>
                  </div>
                </div>
              </div>{" "}
              <div className="col-lg-3">
              <div className="comunity-Package">
                  <div><FaUserMd  className="comunity-Package-Icon"/></div>
                  <div>
                    <div className="Comunity-Count-Heading">Doctors</div>
                    <div className="Comunity-Count">200 +</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
              <div className="comunity-Package">
                  <div><FaUserNurse className="comunity-Package-Icon"/></div>
                  <div>
                    <div className="Comunity-Count-Heading">Nurses</div>
                    <div className="Comunity-Count">500 +</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
