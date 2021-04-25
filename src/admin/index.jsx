import React from "react";
import { useState } from "react";
import "./admin.scss";
import Sidebar from "../admin/sidebar/SideBar";
import Main from "../admin/main/Main";

const Admin = ({ children }) => {
  return (
    <div className="container">
      <Main />

      <Sidebar />
    </div>
  );
};

export default Admin;
