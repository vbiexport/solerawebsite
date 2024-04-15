import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "../Pages/CleeQ.css";

function SoleraLogo() {
  return (
    <div>
      <Navbar.Brand>
        <img
          src="/assets/solera/soleralogo.png"
          alt=""
          className="Solera-Logo"
        />
      </Navbar.Brand>
    </div>
  );
}

export default SoleraLogo;
