import React from "react";
import { Container } from "@material-ui/core";
import Header from "../header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <>{children}</>
      <Footer />
    </>
  );
};

export default Layout;
