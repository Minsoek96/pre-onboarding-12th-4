import { Chart } from "chart.js";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChartComponent from "../components/Chart";
import NotFoundPage from "../components/NotFoundPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<ChartComponent />}></Route>
        <Route path={"/*"} element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
