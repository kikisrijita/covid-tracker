import React from "react";
import { PieChart } from "./PieChart";
import { LineChart } from "./LineChart";

export const AllCharts = () => {
  return (
    <div className="container">
      <h1 className="heading-secondary2">
        W<i className="fas fa-globe fa-1x"></i>rldwide Analytics
      </h1>
      <PieChart />
      <LineChart />
      <footer className="main-footer">
        <em>
          <i class="far fa-copyright"></i> developed by ecmascript_hub
        </em>
      </footer>
    </div>
  );
};
