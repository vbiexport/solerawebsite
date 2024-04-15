import React from "react";
import { Link } from "react-router-dom";
import "../../Components/NavBar/NavBar.css";

function NavBarList() {
  return (
    <div>
      <div className="NavBarWrapper">
        <div className="NavList1">
          {/* <Link to="/" className="ClickLink">
            <div className="NavList">Home</div>
          </Link> */}
          <Link to="/CleeQX" className="ClickLink">
            <div className="NavList">About us</div>
          </Link>{" "}
          <Link to="/CleeQFunding" className="ClickLink">
            <div className="NavList">EMR Solutions</div>
          </Link>
          <Link to="/CleeQChat" className="ClickLink">
            <div className="NavList">Ambulance</div>
          </Link>
          <Link to="/Banking" className="ClickLink">
            <div className="NavList">Support</div>
          </Link>
          <Link to="/Banking" className="ClickLink">
            <div className="NavList">Our Services</div>
          </Link>
          <Link to="/Pricing" className="ClickLink">
            <div className="NavList">Pricing</div>
          </Link>
          {/* <Link to="/CleeQInvest" className="ClickLink">
              <div className="NavList">CleeQ-Invest</div>
            </Link> */}
        </div>
      </div>
    </div>
  );
}

export default NavBarList;
