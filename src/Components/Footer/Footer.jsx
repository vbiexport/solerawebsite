import React from "react";
import "../../Pages/CleeQ.css";
import "../../Pages/Responsive.css";

function Footer() {
  return (
    <div className="container FooterWrapper">
      <div className="container overflow-hidden p-0">
        <div className="row gy-2">
          <div className="col-lg-2">
            <div className="FooterNav">Pages</div>
            <br />

            <div className="FooterNavLinks">
              <div>
                <a href="#Home" className="ClickLink2">
                  Home
                </a>
              </div>
              <div>
                <a href="#Services" className="ClickLink2">
                  Our Searvices
                </a>
              </div>
              <div>
                <a href="#Pricing" className="ClickLink2">
                  Pricing
                </a>
              </div>
              <div>
                <a href="#ContactUs" className="ClickLink2">
                  Contact Us
                </a>
              </div>
              <div>
                <a href="#Features" className="ClickLink2">
                  Solera Features
                </a>
              </div>
              <div>
                <a href="#WhyChooseUs" className="ClickLink2">
                  Why Choose Us
                </a>
              </div>
              <div>
                <a href="#AboutUs" className="ClickLink2">
                  About us
                </a>
              </div>{" "}
            </div>
          </div>
          <div className="col-lg-2">
            <div className="FooterNav">Partner</div>
            <br />

            <div className="FooterNavLinks">
              <div className="Footerx">Login</div>
              <div className="Footerx">Become a partner</div>{" "}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="FooterNav">Opening days / hours</div>
            <br />

            <div className="FooterNavLinks">
              <div className="Footerx">Monday - Friday:</div>
              <div className="Footerx">8:00AM - 4:30PM</div>{" "}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="FooterNav">Contact us</div>
            <br />
            <div className="FooterNavLinks">
              <div className="Footerx">
                Send us an email : sales@solera.com 
              </div>
              {/* <div className="Footerx">
                 +1(456)-789-8999
              </div> */}
              {/* <div className="Footerx">
              sales@solera.com 
              </div> */}

            

              {/* <div className="Footerx">
                insert Twitter, FB, IG, LinkedIn & YT icons under the slogan
              </div> */}
            </div>{" "}
          </div>
        </div>
      </div>

      <div className="container FoterContainer">
        <div className="copyright-text">
          <div className="ImgeContainer">
            <img src="/assets/solera/ss.png" alt="" className="FooterLogo" />
          </div>
          <div className="FooterNote">
            Copyright &copy;{new Date().getFullYear()} Solera Inc. All Rights
            Reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
