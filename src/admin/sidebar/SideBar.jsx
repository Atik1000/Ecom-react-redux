import React from 'react';
import './SideBar.scss';

const SideBar = ({sidebarOpen,openSidebar,closeSidebar}) => {
    return (
        <div className={sidebarOpen?"sidebar-responsive":""} id="sidebar">
            <div className="sidebar-title">
                <div className="sidebar-img">
                <h1>codersbite</h1>
                </div>
                <i className="fa fa-times" onClick={()=>closeSidebar()}></i>
             
            </div>
            <div className="sidebar_menu">
                <div className="sidebar_link active_menu_link">
                    <i className="fa fa-home"></i>
                    <a href="#">Dashbord</a>
                </div>
                <h2>MNG</h2>
                <div className="sidebar_link">
                    <i className='fa fa-user-secret'></i>
                    <a href="#">Admin Manager</a>
                </div>
                <div className="sidebar_link">
                    <i className='fa fa-building-o'></i>
                    <a href="#">company Manager</a>
                </div>
                <div className="sidebar_link">
                    <i className='fa fa-archive'></i>
                    <a href="#">Waerhouse</a>
                </div>
                <div className="sidebar_link">
                  <i className='fa fa-wrench'></i>
                    <a href="#">Employee Manager</a>
                </div>
                <div className="sidebar_link">
                  <i className='fa fa-handshake-o'></i>
                    <a href="#">Contract</a>
                </div>
                <h2>LEAVE</h2>
                <div className="sidebar_link">
                  <i className='fa fa-question'></i>
                    <a href="#">Request</a>
                </div>
                <div className="sidebar_link">
                  <i className='fa fa-sign-out'></i>
                    <a href="#">Leave policy</a>
                </div> 
                <div className="sidebar_link">
                  <i className='fa fa-calendar-check-o'></i>
                    <a href="#">Special Days</a>
                </div> 
                <div className="sidebar_link">
                  <i className='fa fa-files-o'></i>
                    <a href="#">Applu for leave</a>
                </div> 
                <h2>PAYROLL</h2>
                <div className="sidebar_link">
                  <i className='fa fa-money'></i>
                    <a href="#">Payroll</a>
                </div> 
                <div className="sidebar_link">
                  <i className='fa fa-briefcase'></i>
                    <a href="#">Paygrade</a>
                </div> 
                <div className="sidebar_logout">
                  <i className='fa fa-power-off'></i>
                    <a href="#">Logout</a>
                </div> 
            </div>
            
        </div>
       
    );
};

export default SideBar;