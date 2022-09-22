import React from "react";
import { Outlet } from "react-router-dom";
import Tab from "./components/Tab";

const Layout = () => {
  return (
    <>
      <Outlet />
      <Tab />
    </>
  );
};

export default Layout;
