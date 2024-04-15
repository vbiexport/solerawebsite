import React from "react";
import { FiCast, FiEdit, FiLifeBuoy, FiThermometer, FiUser } from "react-icons/fi";
import "../Pages/CleeQ.css";
import "../Pages/Responsive.css";
import DemoBtn from "../Components/DemoBtn";

function Features() {
  return (
    <div className="SoleraBody3">
      <div className="container LandingContOthers landing-page-container">
        <div className="LandingWrapper">
          <div className="LandingContainer">
            <div className="LandingCoverUp">
              <div className="SolersFeaturesHeading">Solera key features</div>
              <div className="LandingHedings1" data-aos="zoom-in-up">
                Simple & Affordable
              </div>

              <p className="SoleraIntro1">
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
            <div className="container">
              <div className="row g-2">
                <div className="col-6">
                  <div className="soleraBox">
                    <FiUser className="soleraBoxIcon" />
                    <div className="soleraBoxHeading">
                      User Friendly Interface
                    </div>
                    <div className="SoleraIntro11">
                      Its simple and user friendly interfaces, designed by
                      experts, allow you to get started with the software in a
                      few minutes while delivering an easier way of carrying out
                      everyday tasks such as patient’s registration and filing
                      patient’s records.
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="border bg-light soleraBox">
                    <FiCast className="soleraBoxIcon" />
                    <div className="soleraBoxHeading">e-Scheduling</div>
                    <div className="SoleraIntro11">
                      Advanced scheduling allows healthcare centers to create
                      automated-workflows startingfroma patient’s check-in,
                      patient reminders for periodic tests and medications, and
                      tracking of patient’s treatment progress.
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="border bg-light soleraBox">
                    <FiEdit  className="soleraBoxIcon" />
                    <div className="soleraBoxHeading">
                      e-Prescription & Lab integration
                    </div>
                    <div className="SoleraIntro11">
                      The Lab’s functions and prescription do not always have to
                      be stand-alone systems! Now with SOLERA’s med solution,
                      prescriptions from Doctors can be issued specifically for
                      a patient; while Lab requests can be sent automatically to
                      Lab scientist with results tied directly to each patient’s
                      e-records
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="soleraBox">
                    <FiThermometer className="soleraBoxIcon" />
                    <div className="soleraBoxHeading">
                      Automated pharmacy systems
                    </div>
                    <div className="SoleraIntro11">
                      Easily controls the inventory of the items in your store
                      and automates the processes for dispensing and admistering
                      products.

                     
                    </div>
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

export default Features;
