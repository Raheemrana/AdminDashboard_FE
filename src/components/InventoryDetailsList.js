import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './InventoryDetailsList.css'
import Navbar from './Navbar';
import { getInventoryInsight } from '../apis/inventory';

const InventoryDetailsList = () => {
  const [inventoryDetailsData, setInventoryDetailsData] = useState([])
  useEffect(()=>{
    getInventoryInsight((res)=>{
      setInventoryDetailsData(res)
    },(err) =>{
      console.log(err)
    })
  },[])
  const columnDefs = [
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Quantity', field: 'quantity', sortable: true, filter: true },
    { headerName: 'Date', field: 'date', sortable: true, filter: true }
  ];

  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div className="grid-container">
      <div className="grid-header">
        <h1 className="grid-title">Inventory Details</h1>
      </div>
      <div className="ag-theme-alpine" style={{width: '100%', height: '400px'}}>
        <AgGridReact
          rowData={inventoryDetailsData}
          columnDefs={columnDefs}
        />
    </div>
    </div>
    </>
  );
};

export default InventoryDetailsList;
