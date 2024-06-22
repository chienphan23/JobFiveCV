import React from "react";
import "../documentation/css/style.css";
import ChartComponent from "./chart/ChartComponent";

export const AdminChart = () => {
  return (
    <div className="main-content-inner">
      <div className="sales-report-area sales-style-two">
        <div className="card">
          <div className="card-body">
            <ChartComponent />
          </div>
        </div>
      </div>
    </div>
  );
};
