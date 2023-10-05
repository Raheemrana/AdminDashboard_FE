import { useEffect, useState } from "react";
import BarChart from "../charts/bar";
import LineChart from "../charts/Line";
import { getSalesByGender, getfilteredSales } from "../apis/sales";
import { getproductsDropdown } from "../apis/products";
import { getCategoriesDropdown } from "../apis/category";
import Cards from "./Cards";
import "./Homepage.css";

const backgroundColor = [
  "rgba(255, 99, 132, 0.8)",
  "rgba(54, 162, 235, 0.8)",
  "rgba(255, 206, 86, 0.8)",
  "rgba(75, 192, 192, 0.8)",
  "rgba(153, 102, 255, 0.8)",
  "rgba(255, 159, 64, 0.8)",
];
function Homepage() {
  //#region useStates
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [productChoice, setProductChoice] = useState(0);
  const [categoryChoice, setCategoryChoice] = useState(0);
  const [productsDropdown, setProductsDropdown] = useState([]);
  const [categoriesDropdown, setcategoriesDropdown] = useState([]);
  const [reloadData, setReloadData] = useState(false);

  //#endregion
  
  //#region loadDropdowns
  useEffect(() => {
    getproductsDropdown(
      (res) => {
        setProductsDropdown(res);
      },
      (err) => {
        console.log(err);
      }
    );
    getCategoriesDropdown(
      (res) => {
        setcategoriesDropdown(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);
  //#endregion
  
  //#region load data
  useEffect(() => {
    getfilteredSales(
      startDate,
      endDate,
      productChoice,
      categoryChoice,
      null,
      (res) => {
        setChartData({
          labels: res.data.labels,
          datasets: [
            {
              label: "",
              data: res.data.dataset,
              backgroundColor: backgroundColor,
              borderColor: 'rgba(255, 99, 132, 1)', 
              borderWidth: 2,
              fill: false, 
            },
          ],
        })
      },
      (err) => {
        console.log(err);
      }
    );
  }, [reloadData]);
  //#endregion

  function refreshData(){
    setReloadData(!reloadData)
  }

  
  return (
    <div className="bg-gradient-primary">
      <div>
        <Cards />
      </div>
      <div className="datepickers">
        <input
          className="datepick"
          type="date"
          id="sDate"
          value={startDate}
          onChange={(value) => setStartDate(value.target.value)}
        />
        &emsp;
        <input
          className="datepick"
          type="date"
          id="eDate"
          value={endDate}
          onChange={(value) => setEndDate(value.target.value)}
        />
        &emsp;
        <select
          name="products"
          id="cars"
          onChange={(value) => setProductChoice(value.target.value)}
        >
          {productsDropdown.map((x) => {
            return <option value={x.key}> {x.value} </option>;
          })}
        </select>
        &emsp;
        <select
          name="products"
          id="cars"
          onChange={(value) => setCategoryChoice(value.target.value)}
        >
          {categoriesDropdown.map((x) => {
            return <option value={x.key}> {x.value} </option>;
          })}
        </select>
        &emsp;
        <button class="rounded-button" onClick={refreshData}>
          <i class="fas fa-redo"></i>
        </button>
      </div>
      <div className="chart">
        <LineChart data={chartData} />
      </div>
      <div className="chart">
        <LineChart data={chartData} />
      </div>
    </div>
  );
}

export default Homepage;
