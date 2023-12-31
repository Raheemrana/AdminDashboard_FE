import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {getCustomers} from '../apis/customers'
import { getProducts } from '../apis/products';
import './ProductsList.css'
import Navbar from './Navbar';

const ProductsList = () => {
  const [productsData, setProductsData] = useState([])
  useEffect(()=>{
    getProducts((res)=>{
      setProductsData(res)
    },(err) =>{
      console.log(err)
    })
  },[])
  const columnDefs = [
    { headerName: 'ID', field: 'id', sortable: true, filter: true },
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Price', field: 'price', sortable: true, filter: true },
    { headerName: 'Category', field: 'category_name', sortable: true, filter: true }
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
          rowData={productsData}
          columnDefs={columnDefs}
        />
    </div>
    </div>
    </>
  );
};

export default ProductsList;
