import React from 'react';
import { PolarArea } from 'react-chartjs-2';

const PlotAreaChart = ({title, data}) => {

  return (
    <div >
    <h2>{title}</h2>
      <PolarArea data={data} />
    </div>
  );
};

export default PlotAreaChart;
