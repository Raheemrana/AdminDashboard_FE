import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './ProductsList.css'
import Navbar from './Navbar';

const ProductsList = () => {
  // Sample data for AG Grid
  const rowData = [
    { id: 1, name: 'John', age: 28, country: 'USA' },
    { id: 2, name: 'Alice', age: 32, country: 'Canada' },
    { id: 3, name: 'Bob', age: 24, country: 'UK' },
    // Add more sample data as needed
  ];

  // Column definitions for AG Grid
  const columnDefs = [
    { headerName: 'ID', field: 'id', sortable: true, filter: true },
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Age', field: 'age', sortable: true, filter: true },
    { headerName: 'Country', field: 'country', sortable: true, filter: true }
  ];

  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div className="grid-container">
      <div className="grid-header">
        <h1 className="grid-title">Products</h1>
      </div>
      <div className="ag-theme-alpine" style={{width: '100%', height: '400px'}}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
        />
    </div>
    </div>
    </>
  );
};

export default ProductsList;
