import React from "react";
import axios from "axios";

function DisplayWeather(){

    const [temps, setForecast] = React.useState([]); 
  
    const key="36584e7259790df669629497aec20cbc";
  
    axios.get("http://ip-api.com/json").then(res=>{
      return axios.get("http://api.openweathermap.org/data/2.5/forecast?zip="+res.data["zip"]+",us&appid="+key);
    }).then(function(res){
      const weekdayForecast=res.data.list.slice(0,1)[0];
      console.log(weekdayForecast["main"].temp_max);
        setForecast(weekdayForecast);
      });
 
  const getFahrenheit=(temperature)=>{
    return Math.round(temperature*(9/5) - 459.67);
  }

  return (<div>
      <ul>{/*temps.map(temp=>(<li key={temp.dt}>{getFahrenheit(temp.main.temp)}</li>))*/ }</ul>
      <div id="main-display">
        <h2 id="day">{/*temps.dt_txt*/}Friday</h2>
        <img src="http://openweathermap.org/img/wn/01d@2x.png"/>
        <div id="low">82&deg;</div>
        <div id="high">89&deg;</div>
      </div>
      </div>);
}

export default DisplayWeather;