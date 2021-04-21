import { Link } from "react-router-dom";
import React from "react";
import "./SideBar.scss";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useState } from "react";

const SideBar = ({ sidebarOpen, openSidebar, closeSidebar }) => {
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const toggle = () => setCategoryDropdownOpen((prevState) => !prevState);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const togglep = () => setProductDropdownOpen((prevState) => !prevState);
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
          <Link to="#">
     

            <Dropdown isOpen={categoryDropdownOpen} toggle={toggle}>
              <DropdownToggle caret> Category</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <Link to="/add-category">Add category</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to="/update-category">Update category</Link>
                  </DropdownItem>
                <DropdownItem>
                  <Link to='/delete-category'>Delete category</Link>
                  </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Link>
        </div>
        <div className="sidebar_link">

          <Link to="#"><Dropdown isOpen={productDropdownOpen} toggle={togglep}>
              <DropdownToggle caret> Product</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <Link to="/add-product">Add product</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to="/update-product">Update product</Link>
                  </DropdownItem>
                <DropdownItem>
                  <Link to='/delete-product'>Delete product</Link>
                  </DropdownItem>
              </DropdownMenu>
            </Dropdown></Link>
        </div>
        <div className="sidebar_link">
          <i className="fa fa-archive"></i>
          <Link to="#">
          
          </Link>
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
