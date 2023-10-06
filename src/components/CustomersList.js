import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {getCustomers} from '../apis/customers'
import './ProductsList.css'
import Navbar from './Navbar';

const CustomersList = () => {
  const [customersData, setCustomersData] = useState([])
  useEffect(()=>{
    getCustomers((res)=>{
      setCustomersData(res)
    },(err) =>{
      console.log(err)
    })
  },[])
  const columnDefs = [
    { headerName: 'ID', field: 'id', sortable: true, filter: true },
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Age', field: 'age', sortable: true, filter: true },
    { headerName: 'Gender', field: 'gender', sortable: true, filter: true }
  ];

  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div className="grid-container">
      <div className="grid-header">
        <h1 className="grid-title">Customers</h1>
      </div>
      <div className="ag-theme-alpine" style={{width: '100%', height: '400px'}}>
        <AgGridReact
          rowData={customersData}
          columnDefs={columnDefs}
        />
    </div>
    </div>
    </>
  );
};

export default CustomersList;
