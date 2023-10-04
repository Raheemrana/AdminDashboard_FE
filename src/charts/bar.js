import React from 'react';
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto";

const options = {
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(255, 255, 255, 1)', // Change the color of the horizontal gridlines
      },
      ticks: {
        color: 'rgba(255, 255, 255, 0.8)', // Color of Y-axis tick labels
      },
    },
    x: {
      grid: {
        color: 'rgba(255, 99, 132, 0)', // Change the color of the vertical gridlines
      },
      ticks: {
        color: 'rgba(255, 206, 86, 0.8)', // Color of Y-axis tick labels
      },
    },
  },
};

function BarChart({data}) {
  return (
    <div >
        <Bar data = {data} options={options}/>
    </div>
  );
}

export default BarChart;
