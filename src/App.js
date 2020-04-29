import React, { Fragment } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { AllCharts } from "./components/AllCharts";

function App() {
  return (
    <Fragment>
      <div className="main-section">
        <Header />
      </div>
      <AllCharts />
    </Fragment>
  );
}

export default App;
