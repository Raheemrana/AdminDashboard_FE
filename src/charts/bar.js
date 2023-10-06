// ChartCard.jsx

import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ title, data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: title,
        data: data.values,
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
        borderColor: 'rgba(75, 192, 192, 1)', // Border color
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-card">
      <h2>{title}</h2>
      <Bar data={data} options={chartOptions} />
    </div>
  );
};

export default BarChart;
