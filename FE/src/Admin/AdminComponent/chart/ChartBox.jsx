import React from "react";
import { Doughnut, Pie, Line, Bar } from "react-chartjs-2";

const ChartBox = ({ title, ChartComponent, data, options }) => (
  <div className="col-md-6 mb-4">
    <div className="box">
      <div className="box-header with-border">
        <h3 className="box-title">{title}</h3>
      </div>
      <div className="box-body">
        <div
          className="chart"
          style={{
            height: "320px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ChartComponent data={data} options={options} />
        </div>
      </div>
    </div>
  </div>
);

export default ChartBox;
