import { useEffect, useState } from 'react';
import BarChart from '../charts/bar';
import { getSalesByGender } from '../apis/sales';
import Cards from './Cards';
import './Homepage.css'

const backgroundColor = [
  'rgba(255, 99, 132, 0.8)',
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
]
const yearsDate = {
  labels : [ 2000,2002,2005,2006,2007],
  datasets: [{
    label: "",
    data: [100,133,56,120,50],
    backgroundColor : backgroundColor,
  },
],
  }

const monthsDate = {
  labels : [ 'Mon','Tues','Wed','Thurs','Fri', 'Sat', 'Sun'],
  datasets: [{
    label: "",
    data: [100,82,50,120,50, 39, 21],
    backgroundColor : backgroundColor,
    },
  ],
  }

function Homepage() {
  const [isDate,setDate] = useState(false)
  const [chartData, setChartData] = useState(yearsDate);
  const [startDate, setStartDate] = useState('');
  const [productChoice, setProductChoice] = useState(0);
  const [endDate, setEndDate] = useState('');
  const dropdown = [
    {key: "1", value: "Apple"},
    {key: "2", value: "Mango"},
    {key: "3", value: "Banana"},
    {key: "4", value: "Orange"}
  ]
  dropdown.unshift({key: "0", value: "Select Product"})

  useEffect(()=>{
    getSalesByGender((res)=>{
        console.log(res)
      }, (err) => {
        console.log(err)
      })
      }, 
    [isDate])

    function handleClick(){
      const temp = isDate ? yearsDate : monthsDate;
      setChartData(temp)
      setDate(!isDate)
    }

  return (
    <div className="bg-gradient-primary">
      <div>
        <Cards/>
      </div>
      <div className='datepickers'>
      <input className='datepick' type="date" id="sDate" value={startDate} onChange={(value) => setStartDate(value.target.value)}/>
      &emsp;
      <input className='datepick' type="date" id="eDate" value={endDate} onChange={(value) => setEndDate(value.target.value)}/>
      &emsp;
      <select name="products" id="cars" onChange={(value) => setProductChoice(value.target.value)}>
        {dropdown.map((x) =>{
          return <option value={x.key}> {x.value} </option>
        })}
      </select>
      </div>


      <div className="chart">
        <BarChart data = {chartData}/>
      </div>
      <div>
        <button onClick={handleClick}> Change Data </button>
      </div>
    </div>
  );
}

export default Homepage;
