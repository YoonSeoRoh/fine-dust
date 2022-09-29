import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyRegion from "./pages/MyRegion";
import EntireRegions from "./pages/EntireRegions";
import BookMark from "./pages/BookMark";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/myregion" element={<MyRegion />} />
          <Route path="/entireregions" element={<EntireRegions />} />
          <Route path="/bookmark" element={<BookMark />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};
