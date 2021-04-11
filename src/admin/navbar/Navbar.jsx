import React from 'react';
import "./Navbar.scss";

const Navbar = ({openSidebar,sidebarOpen}) => {
    return (
        <div className="navbar">
            <div className="nav_icon" onClick={()=>openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar_left">
                <a href="#">Subscribes</a>
                <a href="#">Video management</a>
                <a className="active_link" href="#">Admin</a>
            </div>
            <div className="navbar_right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                    <i className="fa fa-clock-o"></i>
                </a>

            </div>
        </div>
    );
};

export default Navbar;