import "../Home.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Modal } from "react-bootstrap";
import HomeNav from "../../Components/HomeNav/HomeNav";
import Offcanvas from "react-bootstrap/Offcanvas";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import { Close, MoreVert } from "@material-ui/icons";
import InputGroup from "react-bootstrap/InputGroup";

function Home() {
  return (
    <>
      {/* <HomeNav />*/}

      <div className="secion1">
        <div className="NavBarContainer">
          <HomeNav />
        </div>
        <div className="LandingPage__Container">
          <div className="container">
            <div className="Landing__Box Landing__Box__Res">
              <div className="column">
                <div className="Landing__Note">
                  Join The <br />
                  Community of <br />
                  Accountable Leaders.
                </div>
                <br />
                <div className="Leading__Note">
                  No 1 Banking and social Group Management App .
                </div>

                <br />
                <br />

                <div className="Landing__JoinClique__Note">
                  <div className="Landing__JoinClique flex-container">
                    <div className="Landing__Quest Hey">
                      Hey! Have you joined a Clique? &nbsp;&nbsp;
                    </div>

                    <Link to="/Signup" className="Clique__Link">
                      <div className="Landing__JoinClique__Note__Btn">
                        Start joining Cliques for free
                      </div>
                    </Link>
                  </div>
                </div>
                <br />
                <div className="Landing__No__Users">
                  Over 4M+ Users and 6M+ Cliques
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="Landing__Download__Btn">
                  <div className="Download__Btn">
                    <img
                      src="/assets/ios.png"
                      alt=""
                      className="Download__Btn__Img"
                    />
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="Download__Btn">
                    <img
                      src="/assets/Android.png"
                      alt=""
                      className="Download__Btn__Img"
                    />
                  </div>
                </div>
              </div>

              <div className="column1 Col__Img">
                <div className="LandingImg__Cont">
                  <img
                    src="/assets/cliqueImg.jpg"
                    alt=""
                    className="Landing__Picture img-fluid"
                  />
                </div>
              </div>

              {/* <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6 bg-primary text-white Note">
                    .col
                  </div>
                  <div className="col-lg-6 bg-dark text-white Note">.col</div>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
