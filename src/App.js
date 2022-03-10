import React from 'react';
import Navbar from './Navbar';
import './index.css';
import Home from './Home';



function App() {
  return (
  <div className="app">
    <Navbar/>
    <div className="content">
      <Home/>
    </div>
    </div>
  );
}

export default App;
