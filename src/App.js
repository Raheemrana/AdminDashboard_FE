import React from 'react';
import './App.css';
import Homepage from './components/Homepage'
import ProductsList from './components/ProductsList';
import CustomersList from './components/CustomersList';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' exact element={ <Homepage/>} />
        <Route path='/products' exact element={ <ProductsList/>} />
        <Route path='/customers' exact element={ <CustomersList/>} />
        <Route path='/dashboard' exact element={ <Dashboard/>} />
        </Routes>
    </Router>
  );
}

export default App;
