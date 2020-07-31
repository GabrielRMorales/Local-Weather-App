import React from 'react';
import './App.css';
import axios from "axios";
import "./DisplayWeather";
import DisplayWeather from './DisplayWeather';

function App() {
  
  
  return (
    <div className="App">
        <h1>Forecast</h1>
        <DisplayWeather />     
    </div>
  );
}

export default App;