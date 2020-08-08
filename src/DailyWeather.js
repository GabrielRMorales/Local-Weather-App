import React from "react";
import {convertToDay, getFahrenheit} from "./AppMethods";

const DailyWeather = (props)=>{

    return <div>
        <h2 class="day">{convertToDay(props.weather.day)}</h2>
        <img src={`http://openweathermap.org/img/wn/${props.weather.icon}@2x.png`}/>
        <div class="low">{getFahrenheit(props.weather.low)}&deg;</div>
        <div class="high">{getFahrenheit(props.weather.high)}&deg;</div>
    </div>;
}

export default DailyWeather;