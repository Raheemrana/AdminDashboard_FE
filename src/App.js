import React from 'react';
import './App.css';
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' exact element={ <Homepage/>} />
        </Routes>
    </Router>
  );
}

export default App;
