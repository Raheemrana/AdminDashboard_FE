import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import DoughnutChart from "../charts/Doughnut";
import PieChart from "../charts/Pie";
import BarChart from "../charts/Bar";
import RadarChart from "../charts/PlotArea";
import Navbar from "./Navbar";
import {
  getSalesByGender,
  getSalesByAge,
  getSalesByMedium,
  getSalesByWeekdays,
} from "../apis/sales";

const backgroundColor = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(75, 192, 192, 1)",
];
const backgroundColor2 = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(255, 159, 64, 0.2)",
  "rgba(75, 192, 192,0.2)",
];
const borderColors = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(75, 192, 192, 1)",
];

const Dashboard = () => {
  const [gendersData, setGendersData] = useState({ labels: [], datasets: [] });
  const [ageData, setAgeData] = useState({ labels: [], datasets: [] });
  const [transactionMediumData, setTransactionMediumData] = useState({
    labels: [],
    datasets: [],
  });
  const [weekdaysData, setweekdaysData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getSalesByGender(
      (res) => {
        setGendersData({
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
    getSalesByAge(
      (res) => {
        setAgeData({
          labels: res.labels,
          datasets: [
            {
              label: "",
              data: res.dataset,
              backgroundColor: backgroundColor2,
              borderColor: borderColors,
              borderWidth: 2,
              fill: false,
            },
          ],
        });
      },
      (err) => {
        console.error(err);
      }
    );
    getSalesByMedium(
      (res) => {
        setTransactionMediumData({
          labels: res.labels,
          datasets: [
            {
              label: "",
              data: res.dataset,
              backgroundColor: ["#ffd600", "#fb6340"],
              borderColor: ["#ffd600", "#fb6340"],
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
    getSalesByWeekdays(
      (res) => {
        setweekdaysData({
          labels: res.labels,
          datasets: [
            {
              label: "",
              data: res.dataset,
              backgroundColor: backgroundColor,
              borderColor: "rgba(255, 99, 132, 1)",
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
  }, []);

  return (
    <>
      <Navbar />
      <div className="Dashboard">
        <div className="section-header">
          <h1 className="section-title">Customer Insights</h1>
        </div>
        <div className="rowed">
          <div
            className="col-3"
            style={{ padding: "20px", margin: "auto", width: "25%" }}
          >
            <PieChart title="Based on Gender by Percentage" data={gendersData} />
          </div>
          <div
            className="col-3"
            style={{ padding: "0px", margin: "auto", width: "55%" }}
          >
            <BarChart title="Based on Age Group" data={ageData} />
          </div>
        </div>
        <div className="section-header">
          <h1 className="section-title">Transaction Insights</h1>
        </div>
        <div className="rowed">
          <div
            className="col-3"
            style={{ padding: "20px", margin: "auto", width: "25%" }}
          >
            <DoughnutChart
              title="Sales Count based on Type"
              data={transactionMediumData}
            />
          </div>
          <div
            className="col-3"
            style={{ padding: "20px", margin: "auto", width: "25%" }}
          >
            <RadarChart
              title="Based on Weekdays by Percentage"
              data={weekdaysData}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
