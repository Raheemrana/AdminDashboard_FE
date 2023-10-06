import React from 'react';
import { Line } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto";

const options = {
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(255, 214, 0, 1)', // Change the color of the horizontal gridlines
      },
      ticks: {
        color: 'rgba(255, 206, 86, 1)', // Color of Y-axis tick labels
      },
    },
    x: {
      grid: {
        color: 'rgba(255, 99, 132, 0)', // Change the color of the vertical gridlines
      },
      ticks: {
        color: 'rgba(255, 206, 86, 1)', // Color of X-axis tick labels
      },
    },
  },
};

function LineChart({data}) {
  return (
    <div >
        <Line data = {data} options={options}/>
    </div>
  );
}

export default LineChart;
