import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="nav-links-left">
          <a href="#dashboard">Dashboard</a>
        </div>
        <div className="logo">Admin Panel</div>
        <div className="nav-links-right">
          <a href="products">Products</a>
        </div>
      </div>
      {/* Rest of your content goes here */}
    </div>
  );
};

export default Navbar;