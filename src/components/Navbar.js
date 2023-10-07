import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="nav-links-left">
          <a href="dashboard">Dashboard</a>
        </div>
        <div className="logo">
        <div className="nav-links-left">
          <a href="/">Admin Panel</a>
        </div>
        </div>
        <div className="nav-links-right">
          <a href="products">Products</a>
        </div>
        &emsp;
        <div className="nav-links-right">
          <a href="customers">Customers</a>
        </div>
        &emsp;
        <div className="nav-links-right">
          <a href="inventorydetails">Inventory Details</a>
        </div>
      </div>
      {/* Rest of your content goes here */}
    </div>
  );
};

export default Navbar;