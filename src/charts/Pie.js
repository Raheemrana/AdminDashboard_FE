import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ title, data }) => {


const chartOptions = {
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
