import { Chart as ChartJs, LinearScale } from "chart.js/auto";
import React from "react";
import { Container } from "react-bootstrap";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { useGetCountIndustry } from "../../AdminAPI/use/useGetCountIndustry";
import { useGetCountInductryApplication } from "../../AdminAPI/use/useGetCountInductryApplication";
import { useGetCountLocationJob } from "../../AdminAPI/use/useGetCountLocationJob";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { LoadingPage } from "../../../UI/LoadingPage";

ChartJs.register(LinearScale);

const ChartComponent = () => {
  const { chartData, isLoading: isLoadingCountIndustry } =
    useGetCountIndustry();

  const { chartData2, isLoading: isLoadingCountApplyCation } =
    useGetCountInductryApplication();

  const { chartData3, isLoading: isLoadingCountLocationJob } =
    useGetCountLocationJob();

  if (
    isLoadingCountIndustry ||
    isLoadingCountApplyCation ||
    isLoadingCountLocationJob
  ) {
    return <LoadingPage />;
  }

  const labelsName = chartData.data.map((item) => item.industryName);
  const jobsData = chartData.data.map((item) => item.totalJobs);

  const labelsName2 = chartData2.data.map((item) => item.industryName);
  const jobsData2 = chartData2.data.map((item) => item.totalJobs);

  const labelsName3 = chartData3.data.map((item) => item.industryName);
  const jobsData3 = chartData3.data.map((item) => item.totalJobs);

  // Generate random colors for each label
  const colors = labelsName.map(() => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r},${g},${b},0.6)`;
  });

  const data = {
    labels: labelsName,
    datasets: [
      {
        label: "Chỉ số",
        backgroundColor: colors,
        borderColor: colors.map((color) => color.replace("0.6", "1")),
        borderWidth: 1,
        data: jobsData,
      },
    ],
  };

  const data2 = {
    labels: labelsName2,
    datasets: [
      {
        label: "Chỉ số",
        backgroundColor: colors,
        borderColor: colors.map((color) => color.replace("0.6", "1")),
        borderWidth: 1,
        data: jobsData2,
      },
    ],
  };

  const data3 = {
    labels: labelsName3,
    datasets: [
      {
        label: "Chỉ số",
        backgroundColor: colors,
        borderColor: colors.map((color) => color.replace("0.6", "1")),
        borderWidth: 1,
        data: jobsData3,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <section className="Container">
      <h3 className="mt-5">Biểu đồ thống kê</h3>
      <div className="row">
        <div className="col-md-6">
          <div className="box">
            <div className="box-header with-border">
              <h3 className="box-title" style={{ textAlign: "left" }}>
                Area Chart
              </h3>
            </div>
            <div className="box-body">
              <div
                className="chart"
                style={{
                  height: "360px",
                  marginLeft: "90px",
                }}
              >
                <Doughnut data={data} options={options} />
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box-header with-border">
              <h3 className="box-title" style={{ textAlign: "left" }}>
                Donut Chart
              </h3>
            </div>
            <div
              className="box-body"
              style={{
                height: "360px",
                marginLeft: "90px",
              }}
            >
              <Pie data={data2} options={options} />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="box box-info">
            <div className="box-header with-border">
              <h3 className="box-title">Line Chart</h3>
            </div>
            <div className="box-body">
              <div className="chart">
                <Line data={data3} options={options} />
              </div>
            </div>
          </div>

          <div className="box box-success">
            <div className="box-header with-border">
              <h3 className="box-title">Bar Chart</h3>
            </div>
            <div className="box-body">
              <div className="chart" style={{ width: "90%" }}>
                <Bar data={data} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartComponent;
