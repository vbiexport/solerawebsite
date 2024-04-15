import React from 'react'
import "../../Components/NavBar/NavBar.css";
import "../../Pages/Responsive.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";
import SignUpAndLogin from '../SignUpAndLogin/SignUpAndLogin';

function NavBarRes() {
  return (
    <>
    {["lg"].map((expand) => (
      <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
        <Container className=" NavBarWrapperCont">
          <Navbar.Brand href="#"></Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-${expand}`}
              ></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <div className="DrawerList">
                  <Link to="/" className="ClickLink">
                    <div className="NavList">CleeQs</div>
                  </Link>
                  <Link to="/CleeQX" className="ClickLink">
                    <div className="NavList">CleeQ - X</div>
                  </Link>{" "}
                  <Link to="/CleeQFunding" className="ClickLink">
                    <div className="NavList">CleeQFunding</div>
                  </Link>
                  <Link to="/CleeQChat" className="ClickLink">
                    <div className="NavList">CleeQ-Chat</div>
                  </Link>
                  <Link to="/Banking" className="ClickLink">
                    <div className="NavList">Personal Banking</div>
                  </Link>
                  <Link to="/Pricing" className="ClickLink">
                    <div className="NavList">Pricing</div>
                  </Link>
                  <Link to="/Investments" className="ClickLink">
                    <div className="NavList">CleeQ-Invest</div>
                  </Link>
                </div>
              </Nav>
              <SignUpAndLogin />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </>
  )
}

export default NavBarRes