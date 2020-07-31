import React from "react";
import axios from "axios";

function DisplayWeather(){

    const [day, setDay] = React.useState([]); 
    const [lowTemp, setLowTemp] = React.useState([]);
    const [highTemp, setHighTemp] = React.useState([]);
    
    const convertToDay=(date)=>{

      const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ];
  
      let day=new Date();
      return days[day.getDay(date)];
    }
    
    const key="36584e7259790df669629497aec20cbc";
  
    const getFahrenheit=(temperature)=>{
      return Math.round(temperature*(9/5) - 459.67);
    }

    React.useEffect(function(){
      axios.get("http://ip-api.com/json").then(res=>{
      return axios.get("http://api.openweathermap.org/data/2.5/forecast?zip="+res.data["zip"]+",us&appid="+key);
    }).then(function(res){
      const data=res.data.list.slice(0,1)[0];
      setDay(convertToDay(data.dt_txt.split(" ")[0]));
      setLowTemp(getFahrenheit(data.main.temp_min));
      setHighTemp(getFahrenheit(data.main.temp_max));
        
      });
    }, []);

  return (<div>
      <ul>{/*temps.map(temp=>(<li key={temp.dt}>{getFahrenheit(temp.main.temp)}</li>))*/ }</ul>
      <div id="main-display">
        <h2 id="day">{day}</h2>
        <img src="http://openweathermap.org/img/wn/01d@2x.png"/>
        <div id="low">{lowTemp}&deg;</div>
        <div id="high">{highTemp}&deg;</div>
      </div>
      </div>);
}

export default DisplayWeather;