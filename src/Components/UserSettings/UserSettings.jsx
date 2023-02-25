import {
  LockOutlined,
  NotificationsActiveOutlined,
  SettingsOutlined,
} from "@material-ui/icons";
import React from "react";
import "./UserSettings.css";
function UserSettings() {
  return (
    <>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown"></li>
      </ul>
      <div className="Settings__Cont">
        <div className="Settings__Not">
          <NotificationsActiveOutlined className="NavBarIcons" />{" "}
        </div>

        <div className="Clique__Sti">
          <LockOutlined className="NavBarIcons" /> LogOut
        </div>
        <div className="Clique__Sti">
          <SettingsOutlined className="NavBarIcons" /> Settings
        </div>

        <div className="NavBar__Img">
          <img src="/assets/UserAvater.png" alt="" className="Pro__Img" />
        </div>

        <div className="Hello__Sur">Hello! Surname</div>
      </div>
    </>
  );
}

export default UserSettings;
