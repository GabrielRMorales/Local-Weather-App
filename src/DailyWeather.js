import React from "react";
import {convertToDay, convertTemp} from "./AppMethods";

const DailyWeather = (props)=>{
    return <div>
        <h2 class="day">{convertToDay(props.weather.day)}</h2>
        <img src={`http://openweathermap.org/img/wn/${props.weather.icon}@2x.png`}/>
        <div class="low">{convertTemp(props.useFahrenheit, props.weather.low)}&deg;</div>
        <div class="high">{convertTemp(props.useFahrenheit, props.weather.high)}&deg;</div>
    </div>;
}

export default DailyWeather;