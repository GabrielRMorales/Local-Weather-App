import React from "react";

const DailyWeather = (props)=>{
    return <div>
        <h2 class="day">{props.weather.day}</h2>
        <img src={`http://openweathermap.org/img/wn/${props.weather.icon}@2x.png`}/>
        <div class="low">{props.weather.low}&deg;</div>
        <div class="high">{props.weather.high}&deg;</div>
    </div>;
}

export default DailyWeather;