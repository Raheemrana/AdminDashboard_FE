import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ title, data }) => {
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks:{
          callback:(value,index,values)=> {
            return `${value} %`
          }
        }
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
