import React from 'react';
import './App.css';
import "./ManageWeather";
import ManageWeather from './ManageWeather';

function App() {  
  
  return (
    <div className="App">
        <h1>Five-Day Forecast</h1>
        <ManageWeather/>
    </div>
  );
}

export default App;