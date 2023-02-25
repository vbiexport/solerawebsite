import React from "react";
import "./CliqueManagement.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import {
  ArrowDropDownOutlined,
  GroupAdd,
  NotificationsActiveOutlined,
  SettingsOutlined,
} from "@material-ui/icons";

import UserSettings from "../Components/UserSettings/UserSettings";
import Clique24UserLogo from "../Components/Clique24Logo/Clique24UserLogo";

function NavBar() {
  return (
    <div className="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light NavBar__bg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <Clique24UserLogo />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <UserSettings />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
