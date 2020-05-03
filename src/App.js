import React, { Fragment } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { AllCharts } from "./components/AllCharts";

function App() {
  return (
    <div className="root-class">
      <div className="main-section">
        <Header />
      </div>
      <div className="main-aside">
        <AllCharts />
      </div>
    </div>
  );
}

export default App;
