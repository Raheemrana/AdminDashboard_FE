import { useEffect, useState } from 'react';
import './App.css';
import Homepage from './components/homepage';

function App() {
  const [isDate,setDate] = useState(false)


  useEffect(()=>{
    const a = fetch('https://api.example.com/data')
    if(a.ok){
      console.log('hello')
    }
    else{
      console.log('bybe')
    }
  }, [isDate])
  const yearsDate = {
    labels : [ 2000,2002,2005,2006,2007],
    datasets: [{
      label: "Data of years",
      data: [100,150,50,120,50]
    },],
    }
    const monthsDate = {
      labels : [ 'Mon','Tues','Wed','Thurs','Fri', 'Sat', 'Sun'],
      datasets: [{
        label: "Data of days",
        data: [100,150,50,120,50, 75, 21]
      },],
      }
      const [chartData, setChartData] = useState(yearsDate)
    function handleClick(){
      const temp = isDate ? yearsDate : monthsDate;
      setChartData(temp)
      setDate(!isDate)
    }
  return (
    <div className="App" >
      Hello
      <div style={{width: 700}}>
      <Homepage data = {chartData}/>
      </div>
      <button onClick={handleClick}> Change Data </button>
    </div>
  );
}

export default App;
