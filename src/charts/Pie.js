import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ title, data }) => {


const chartOptions = {
scales: {
    y: {
    beginAtZero: true,
    grid: {
        color: 'rgba(255, 214, 0, 0)', // Change the color of the horizontal gridlines
    },
    ticks: {
        color: 'rgba(255, 206, 86, 0)', // Color of Y-axis tick labels
    },
    },
    x: {
    grid: {
        color: 'rgba(255, 99, 132, 0)', // Change the color of the vertical gridlines
    },
    ticks: {
        color: 'rgba(255, 206, 86, 0)', // Color of X-axis tick labels
    },
    },
    
},
cutout: '50%'
};

  return (
    <div className="chart-card">
      <h2>{title}</h2>
      <Pie data={data} options={chartOptions} />
    </div>
  );
};

export default PieChart;
