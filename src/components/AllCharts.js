import React from "react";
import { PieChart } from "./PieChart";

export const AllCharts = () => {
  return (
    <aside className="main-aside">
      <h1 className="heading-secondary2">
        W<i className="fas fa-globe fa-1x"></i>rldwide Analytics
      </h1>
      <PieChart />
    </aside>
  );
};
