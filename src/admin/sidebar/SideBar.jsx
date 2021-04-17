import { Link } from "react-router-dom";
import React from "react";
import "./SideBar.scss";

const SideBar = ({ sidebarOpen, openSidebar, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-img">
          <h1>codersbite</h1>
        </div>
        <i className="fa fa-times" onClick={() => closeSidebar()}></i>
      </div>
      <div className="sidebar_menu">
        <div className="sidebar_link active_menu_link">
          <i className="fa fa-home"></i>
          <Link to="#">Dashbord</Link>
        </div>
        <h2>MNG</h2>
        <div className="sidebar_link">
          <i className="fa fa-user-secret"></i>
          <Link to="/add-category">Add category</Link>
        </div>
        <div className="sidebar_link">
          <i className="fa fa-building-o"></i>
          <Link to="/add-product">Add Product</Link>
        </div>
        <div className="sidebar_link">
          <i className="fa fa-archive"></i>
          <Link to="#">Waerhouse</Link>
        </div>
        <div className="sidebar_link">
          <i className="fa fa-wrench"></i>
          <Link to="#">Employee Manager</Link>
        </div>
        <div className="sidebar_link">
          <i className="fa fa-handshake-o"></i>
          <Link to="#">Contract</Link>
        </div>
        <h2>LEAVE</h2>
        <div className="sidebar_link">
          <i className="fa fa-question"></i>
          <Link href="#">Request</Link>
        </div>
        <div className="sidebar_link">
          <i className="fa fa-sign-out"></i>
          <Link href="#">Leave policy</Link>
        </div>
        <div className="sidebar_link">
          <i className="fa fa-calendar-check-o"></i>
          <Link href="#">Special Days</Link>
        </div>
        <div className="sidebar_link">
          <i className="fa fa-files-o"></i>
          <Link href="#">Applu for leave</Link>
        </div>
        <h2>PAYROLL</h2>
        <div className="sidebar_link">
          <i className="fa fa-money"></i>
          <Link href="#">Payroll</Link>
        </div>
        <div className="sidebar_link">
          <i className="fa fa-briefcase"></i>
          <Link href="#">Paygrade</Link>
        </div>
        <div className="sidebar_logout">
          <i className="fa fa-power-off"></i>
          <Link href="#">Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
