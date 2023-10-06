import React, { useEffect, useState } from "react";
import DoughnutChart from "../charts/Doughnut";
import PieChart from "../charts/Pie";
import BarChart from "../charts/Bar";
import "./Dashboard.css";
import Navbar from "./Navbar";
import { getSalesByGender, getSalesByAge, getSalesByMedium } from "../apis/sales";

const backgroundColor = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
];

const Dashboard = () => {
  const [gendersData, setGendersData] = useState({ labels: [], datasets: [] });
  const [ageData, setAgeData] = useState({ labels: [], datasets: [] });
  const [transactionMediumData, setTransactionMediumData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    getSalesByGender((res) => {setGendersData({
          labels: res.labels,
          datasets: [
            {
              label: "",
              data: res.dataset,
              backgroundColor: [
                "rgba(75, 192, 192, 0.8)",
                "rgba(255, 159, 64, 0.8)",
              ],
              borderColor: "rgba(255, 99, 132, 0)",
              borderWidth: 0,
              fill: false,
            },
          ],
        });
      },
      (err) => {
        console.error(err);
      }
    );
    getSalesByAge((res) => {setAgeData({
          labels: res.labels,
          datasets: [
            {
              label: "",
              data: res.dataset,
              backgroundColor: backgroundColor,
              borderColor: "rgba(255, 99, 132, 0)",
              borderWidth: 0,
              fill: false,
            }
          ],
        });
      },
      (err) => {
        console.error(err);
      }
    );
    getSalesByMedium((res) => {setTransactionMediumData({
      labels: res.labels,
      datasets: [
        {
          label: "",
          data: res.dataset,
          backgroundColor: ['#ffd600','#fb6340'],
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 0,
          fill: false,
        }
      ],
    });
  },
  (err) => {
    console.error(err);
  }
);
  }, []);

  return (
    <>
      <Navbar />
      <div className="Dashboard">
      <div className="section-header">
        <h1 className="section-title">Customer Insights</h1>
      </div>
      <div className="row">
        <div className="" style={{ padding: "20px", margin:"auto", width: "25%" }}>
          <PieChart title="Gender Base" data={gendersData} />
        </div>
        <div className="" style={{ padding: "20px", margin:"auto", width: "45%" }}>
          <BarChart title="Age Base" data={ageData} />
        </div>
      </div>
      <div className="section-header">
        <h1 className="section-title">Transaction Insights</h1>
      </div>
      <div className="row">
        <div className="" style={{ padding: "20px", margin:"auto", width: "25%" }}>
          <DoughnutChart title="Medium Of Transaction" data={transactionMediumData} />
        </div>
      </div>
        
        
      </div>
    </>
  );
};

export default Dashboard;
