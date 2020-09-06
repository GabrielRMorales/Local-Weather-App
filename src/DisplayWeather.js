import React from "react";
import DailyWeather from "./DailyWeather";
import {convertToDay, getWeather, convertTemp} from "./AppMethods";

class DisplayWeather extends React.Component{
  constructor(){
    super();
    this.state = {
      fiveDayForecast: [],
      scale: "f"
    };
    this.handleClick=this.handleClick.bind(this);
  }

  componentDidMount(){
    getWeather().then(weather=>{
      this.setState({
      fiveDayForecast: weather.map(function(dailyData){

       return {day: convertToDay(dailyData.dt_txt.split(" ")[0]),
              icon: dailyData.weather[0].icon,
              low: Math.round(dailyData.main.temp_min*(9/5)) - 459,
              high: Math.round(dailyData.main.temp_max*(9/5)) - 459
      }

        })
      })  
    });
  }

  handleClick(){
    this.setState((state)=>{
      console.log(state);
      if (state.scale==="c") {
        return {scale: "f"}
      }
      else {
        return {scale: "c"}
      }
    });
    }

    render(){
      return (<div>
        <div onClick={this.handleClick}>C&deg; / F&deg;</div>
          <ul class="main-display">
              {                
               this.state.fiveDayForecast.map((data)=>{
                let weatherProps={day: data.day,
                icon: data.icon,
                low: convertTemp(this.state.scale, data.low),
                high: convertTemp(this.state.scale, data.high)
              };
  
                return <li class="weather-today">
                <DailyWeather weather={weatherProps} />
              </li>;
            })}
          </ul>
        </div>);
    }
  
}

export default DisplayWeather;