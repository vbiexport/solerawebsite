// import React from "react";
import { React, useEffect } from "react";
import "../../Pages/CleeQ.css";
import "../../Pages/Responsive.css";

import { makeStyles } from "@material-ui/core/styles";

import OurLanding from "./OurLanding";
import Aos from "aos";
import "aos/dist/aos.css";

import SoleraLogo from "../../Components/SoleraLogo";
import NavBarList from "../../Components/NavBar/NavBarList";
import SignUpAndLogin from "../../Components/SignUpAndLogin/SignUpAndLogin";
import Services from "../EMR";
import Pricing from "../Pricing";
import ContactUs from "../ContactUs";
import Features from "../Features";
import WhyChooseUs from "../WhyChooseUs";
import AboutUs from "../AboutUs";
import AmbulanceHailingSystem from "../AmbulanceHailingSystem";
import HospitalInventory from "../HospitalInventory";
import EMR from "../EMR";
import FeedBack from "../FeedBack";

const NavBar = () => {
  return (
    <div className="container NavBarContainer p-0">
      <div>
        <SoleraLogo />
      </div>
      <div className="NavBarListDetails">
        <div>
          <div className="NavBarWrapper">
            <div className="NavList1">
              <div>
                <a href="#Home" className="ClickLink">
                  Home
                </a>
              </div>

              <div className="dropdown">
                <button className="ClickLink">Our Services</button>
                <div className="dropdown-content">
                  <a href="#EMR">
                    {" "}
                    ¬ &nbsp;Comprehensive Electronic Hospital Records (EMR)
                    System
                  </a>
                  <a href="#HospitalInventory">
                    ¬ &nbsp;Hospital Inventory/Stock Management
                  </a>
                  <a href="#AmbulanceHailingSystem">
                    ¬ &nbsp;Ambulance Hailing System
                  </a>
                </div>
              </div>

              <div>
                <a href="#Pricing" className="ClickLink">
                  Pricing
                </a>
              </div>
              <div>
                <a href="#Features" className="ClickLink">
                  Solera Features
                </a>
              </div>

              <div>
                <a href="#FeedBack" className="ClickLink">
                  Our Clients
                </a>
              </div>

              <div>
                <a href="#WhyChooseUs" className="ClickLink">
                  Why Choose Us
                </a>
              </div>
              <div>
                <a href="#AboutUs" className="ClickLink">
                  About us
                </a>
              </div>
              <div>
                <a href="#ContactUs" className="ClickLink">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SignUpAndLoginContianer22">
        <SignUpAndLogin />
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function CleeQ() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const classes = useStyles();

  return (
    <div>
      <header className="SoleraSticky">
        <NavBar />
      </header>

      <div id="Home">
        <OurLanding />
      </div>

      <div id="EMR">
        <EMR />
      </div>
      <div id="HospitalInventory">
        <HospitalInventory />
      </div>
      <div id="AmbulanceHailingSystem">
        <AmbulanceHailingSystem />
      </div>
      <div id="Pricing">
        <Pricing />
      </div>
      <div id="Features">
        <Features />
      </div>
      <div id="FeedBack">
        <FeedBack />
      </div>
      <div id="WhyChooseUs">
        <WhyChooseUs />
      </div>
      <div id="AboutUs">
        <AboutUs />
      </div>
      <div id="ContactUs">
        <ContactUs />
      </div>
    </div>
  );
}

export default CleeQ;
