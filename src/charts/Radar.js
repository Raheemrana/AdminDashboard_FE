import React from 'react';
import { Radar } from 'react-chartjs-2';

const RadarChart = ({ title, data }) => {


const chartOptions ={
    scales: {
        r: {
            angleLines: {
                display: false
            }
        }
    }
};

  return (
    <div className="chart-card">
      <h2 style={{display: "flex", justifyContent: "center"}}>{title}</h2>
      <Radar data={data} options={chartOptions} />
    </div>
  );
};

export default RadarChart;
