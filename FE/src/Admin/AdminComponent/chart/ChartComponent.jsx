import {
  CategoryScale,
  Chart as ChartJs,
  LineElement,
  LinearScale,
  PointElement,
} from "chart.js/auto";

import { Container } from "react-bootstrap";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import { useGetCountInductryApplication } from "../../AdminAPI/use/useGetCountInductryApplication";
import { useGetCountIndustry } from "../../AdminAPI/use/useGetCountIndustry";
import { useGetCountLocationJob } from "../../AdminAPI/use/useGetCountLocationJob";
import { useGetTotalPriceByRanksjs } from "../../AdminAPI/use/useGetTotalPriceByRanks";
import ChartBox from "./ChartBox";
import { LoadingPage } from "../../../UI/LoadingPage";

ChartJs.register(LinearScale, LineElement, PointElement, CategoryScale);

const ChartComponent = () => {
  const { chartData, isLoading: isLoadingCountIndustry } =
    useGetCountIndustry();

  const { chartData2, isLoading: isLoadingCountApplyCation } =
    useGetCountInductryApplication();

  const { chartData3, isLoading: isLoadingCountLocationJob } =
    useGetCountLocationJob();

  const { chartData4, isLoading: isLoadingTotalPriceByRanks } =
    useGetTotalPriceByRanksjs();

  if (
    isLoadingCountIndustry ||
    isLoadingCountApplyCation ||
    isLoadingCountLocationJob ||
    isLoadingTotalPriceByRanks
  ) {
    return <LoadingPage />;
  }

  const generateColors = (length) => {
    return Array.from({ length }, () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgba(${r},${g},${b},0.6)`;
    });
  };

  const createChartData = (labels, data, datasetLabel) => ({
    labels,
    datasets: [
      {
        label: datasetLabel,
        backgroundColor: generateColors(labels.length),
        borderWidth: 1,
        data,
      },
    ],
  });

  // công việc theo ngành
  const chartDataIndustry = createChartData(
    chartData.data.map((item) => item.stacticName),
    chartData.data.map((item) => item.total),
    "Công việc theo ngành"
  );

  // số lượng apply
  const chartDataApplications = createChartData(
    chartData2.data.map((item) => item.stacticName),
    chartData2.data.map((item) => item.total),
    "Số lượng ứng tuyển"
  );

  // thống kê công việc theo thành phố
  const chartDataLocation = createChartData(
    chartData3.data.map((item) => item.stacticName),
    chartData3.data.map((item) => item.total),
    "Công việc theo thành phố"
  );

  // tổng tiền theo hạng
  const chartDataTotalPriceRank = createChartData(
    chartData4.data.map((item) => item.stacticName),
    chartData4.data.map((item) => item.total),
    "Tổng tiền theo hạng"
  );

  const options = {
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <Container>
      <h3 className="mt-5">Biểu đồ thống kê</h3>
      <div className="row">
        <ChartBox
          title="Thông kê công việc theo ngành"
          ChartComponent={Doughnut}
          data={chartDataIndustry}
          options={options}
        />
        <ChartBox
          title="Top 4 công việc ứng tuyển nhiều nhất"
          ChartComponent={Pie}
          data={chartDataApplications}
          options={options}
        />
        <ChartBox
          title="Thống kê doanh thu theo hạng"
          ChartComponent={Bar}
          data={chartDataTotalPriceRank}
          options={options}
        />
        <ChartBox
          title="Top 4 công việc theo thành phố"
          ChartComponent={Bar}
          data={chartDataLocation}
          options={options}
        />
      </div>
    </Container>
  );
};

export default ChartComponent;
