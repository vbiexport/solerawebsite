import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function HomeNav() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="Home__Container"
        fixed="top"
      >
        <Container fluid className="Nav__Container ">
          <Nav>
            <Navbar.Brand href="#">
              <b className="Clique24">
                clique
                <b className="Clique24__24 ">24</b>
              </b>
            </Navbar.Brand>
          </Nav>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-auto ">
              <Nav.Link className="Clique__Tittles">Pricing</Nav.Link>

              <NavDropdown
                className="Clique__Tittles"
                title="Our Packages"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">
                  Clique Family
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Clique Companion
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Clique Basic
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">Clique Pro</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Clique Funding
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Clique Exclusive
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
              <div className="Login__Btn__Cont">
                <Link to="/Login" className="Clique__Link">
                  <div className="Login__Btn">Login</div>
                </Link>

                <Link to="/Signup" className="Clique__Link">
                  <div className="Join__Clique__Btn">Join Clique For Free</div>
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HomeNav;
