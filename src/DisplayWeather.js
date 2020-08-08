import React from "react";
import DailyWeather from "./DailyWeather";
import {getWeather} from "./AppMethods";

function DisplayWeather(){

    const [fiveDayForecast, setForecast] = React.useState([])
    
   React.useEffect(function(){      
      getWeather().then(data=>{
        setForecast(data);
      });
      
    }, []);

  return (<div>
      <ul class="main-display">
       {fiveDayForecast.map((data)=>{
         let weatherProps={day: data.dt_txt.split(" ")[0],
         icon: data.weather[0].icon,
         low: data.main.temp_min,
         high: data.main.temp_max};

         return <li class="weather-today">
         <DailyWeather weather={weatherProps}/>
       </li>;
       })}
      </ul>
      </div>);
}

export default DisplayWeather;