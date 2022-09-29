import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Tab from "./components/Tab";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Tab />
    </>
  );
};

export default Layout;
