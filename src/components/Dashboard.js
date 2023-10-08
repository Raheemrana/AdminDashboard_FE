import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import DoughnutChart from "../charts/Doughnut";
import PieChart from "../charts/Pie";
import BarChart from "../charts/Bar";
import { getInventory } from "../apis/inventory";
import Navbar from "./Navbar";
import {
  getSalesByGender,
  getSalesByAge,
  getSalesByMedium,
  getSalesByWeekdays,
} from "../apis/sales";
import LineChart from "../charts/Line";
import PlotAreaChart from "../charts/PlotArea";
import RadarChart from "../charts/Radar";
import { AgGridReact } from "ag-grid-react";

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
const borderColors2 = [
  "rgba(54, 162, 235, 1)",
  "rgba(255, 99, 132, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)"
];

const Dashboard = () => {
  //#region useStates
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
  const [inventoryData, setInventoryData] = useState({
    labels: [],
    datasets: [],
  });
  const [lowStockData,setLowStockData] = useState([])

  //#endregion

  //#region  useEffect
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
              borderColor: borderColors,
              borderWidth: 2
            },
          ],
        });
      },
      (err) => {
        console.error(err);
      }
    );
    getInventory(
      (res) => {
        setInventoryData({
          labels: res.labels,
          datasets: [
            {
              label: "",
              data: res.dataset,
              backgroundColor: ["rgba(54, 162, 235, 0.6)"],
              borderColor: borderColors2,
              borderWidth: 2,
              fill: true,
            },
          ],
        });
        setLowStockData(res.lowstock)
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);
  //#endregion

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
            <DoughnutChart title="Based on Gender" data={gendersData} />
          </div>
          <div
            className="col-3"
            style={{ padding: "0px", margin: "auto", width: "55%" }}
          >
            <BarChart title="Based on Age" data={ageData} />
          </div>
        </div>
        <div className="rowed">
          <div style={{margin:"auto"}}>
           <p>This shows the percentage of sales made by genders</p>
          </div>
          <div style={{margin:"auto"}}>
          <p>This shows sales percentage by the age bracket </p>
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
            <PieChart
              title="Sales Count based on Type"
              data={transactionMediumData}
            />
          </div>
          <div
            className="col-3"
            style={{ padding: "20px", margin: "auto", width: "25%" }}
          >
            <PlotAreaChart
              title="Based on Weekdays by Percentage"
              data={weekdaysData}
            />
          </div>
        </div>
        <div className="rowed">
          <div style={{margin:"auto"}}>
           <p>This shows the count of sales by methods of shopping </p>
          </div>
          <div style={{margin:"auto"}}>
          <p>This shows the percentage of sales upon weekdays</p>
          </div>
        </div>
        <div className="section-header">
          <h1 className="section-title">Inventory Insights</h1>
        </div>
        <div className="rowed">
          <div
            className="col-5"
            style={{ padding: "20px", margin: "auto", width: "30%" }}
          >
            <RadarChart
              title="Inventory Status"
              data={inventoryData}
            />
          </div>
          <div className="col-5">
            <h2 className="mt-3">
              Products with low stock
            </h2>
            <div className="stock">

          <div className="ag-theme-alpine mt-5" style={{width: '100%', height: '300px'}}>
              <AgGridReact
                rowData={lowStockData}
                columnDefs={[
                  { headerName: 'ID', field: 'ID'},
                  { headerName: 'Name', field: 'Name'},
                  { headerName: 'Stock', field: 'Stock'}
                ]}
                />
          </div>
                </div>
          </div>
        </div>
        <div className="rowed">
          <div style={{margin:"auto"}}>
           <p>This shows the count of each product in inventory</p>
          </div>
          </div>  
      </div>
    </>
  );
};

export default Dashboard;
