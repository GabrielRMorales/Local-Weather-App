import React from "react";
import axios from "axios";

function DisplayWeather(){

    const [fiveDayForecast, setForecast] = React.useState([])
    
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
  
      let day=new Date(date);
      return days[day.getDay()];
    }
    
    const key="36584e7259790df669629497aec20cbc";
  
    const getFahrenheit=(temperature)=>{
      return Math.round(temperature*(9/5) - 459.67);
    }
    
    const noRepeatDays=(arr)=>{
      let dayToCheck;
      return arr.filter((data)=>{
        let forecastDay=data.dt_txt.split(" ")[0];
        if (dayToCheck!==forecastDay){
          dayToCheck=forecastDay;
          return data;
        }
      });
    }

   React.useEffect(function(){
      axios.get("http://ip-api.com/json").then(res=>{
      return axios.get("http://api.openweathermap.org/data/2.5/forecast?zip="+res.data["zip"]+",us&appid="+key);
    }).then(function(res){
      const data=res.data.list[0];
      const forecast=noRepeatDays(res.data.list).slice(0,5);
      setForecast(forecast);
    });  
      
    }, []);

  return (<div>
      <ul class="main-display">
       {fiveDayForecast.map((data)=>{
         return <li class="weather-today">
         <h2 class="day">{convertToDay(data.dt_txt.split(" ")[0])}</h2>
         <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}/>
         <div class="low">{getFahrenheit(data.main.temp_min)}&deg;</div>
         <div class="high">{getFahrenheit(data.main.temp_max)}&deg;</div>
       </li>;
       })}
      </ul>
      </div>);
}

export default DisplayWeather;