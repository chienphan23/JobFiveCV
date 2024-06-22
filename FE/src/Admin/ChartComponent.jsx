import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Container } from 'react-bootstrap';
import { Chart as ChartJs, LinearScale } from 'chart.js/auto'; // Đảm bảo import LinearScale từ Chart.js

ChartJs.register(LinearScale); // Đăng ký LinearScale trước khi sử dụng

export const ChartComponent = () => {
  // Dữ liệu biểu đồ
  const data = {
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7'],
    datasets: [
      {
        label: 'Dữ liệu đầu tiên của tôi',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  // Cài đặt tùy chọn biểu đồ
  const options = {
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
      },
    },
  };

  return (
    <Container>
      <h3 className="mt-5">Biểu đồ cột đơn giản sử dụng React Bootstrap 5 và Chart.js</h3>
      <Bar data={data} options={options} />
    </Container>
  );
};

export default ChartComponent;
