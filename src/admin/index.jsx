import React from 'react';
import { useState } from 'react';
import './admin.scss';
import Navbar from "../admin/navbar/Navbar"
import Sidebar from "../admin/sidebar/SideBar"

const Admin = () => {
    const [sidebarOpen,setSidebarOpen]=useState(false);

    const openSidebar=()=>{
        setSidebarOpen(true)
    }
    const closeSidebar=()=>{
        setSidebarOpen(false)
    }
    return (
        <div className="container">
            <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
            <h1>This is admin pannel</h1>
            <Sidebar sidebarOpen={sidebarOpen} openSidebar={openSidebar} closeSidebar={closeSidebar}/>
        </div>
    );
};

export default Admin;