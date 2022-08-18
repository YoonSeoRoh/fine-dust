import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyRegion from "./pages/MyRegion";
import EntireRegions from "./pages/EntireRegions";
import BookMark from "./pages/BookMark";
import Tab from "./components/Tab";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyRegion />} />
        <Route path="/entireregions" element={<EntireRegions />} />
        <Route path="/bookmark" element={<BookMark />} />
      </Routes>
      <Tab />
    </BrowserRouter>
  );
};
