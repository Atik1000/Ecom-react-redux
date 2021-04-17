import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = ({ openSidebar, sidebarOpen }) => {
  return (
    <div className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars"></i>
      </div>
      <div className="navbar_left">
        <Link to="#">Subscribes</Link>
        <Link to="#">Video management</Link>
        <Link className="active_link" to="#">
          Admin
        </Link>
      </div>
      <div className="navbar_right">
        <Link to="#">
          <i className="fa fa-search"></i>
        </Link>
        <Link to="#">
          <i className="fa fa-clock-o"></i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
