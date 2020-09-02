import React from "react";
import DailyWeather from "./DailyWeather";
import {getWeather} from "./AppMethods";

class DisplayWeather extends React.Component{
  constructor(){
    super();
    this.state = {
      fiveDayForecast: [],
      useFahrenheit: true
    };
    this.handleClick=this.handleClick.bind(this);
  }

  componentDidMount(){
    getWeather().then(weather=>this.setState({
      fiveDayForecast: weather
    }));
  }

  handleClick(){
    this.setState((state)=>({
      useFahrenheit: !state.useFahrenheit
    }));
    }

    render(){
      return (<div>
        <div onClick={this.handleClick}>C&deg; / F&deg;</div>
          <ul class="main-display">
              {
              this.state.fiveDayForecast.map((data)=>{
                let weatherProps={day: data.dt_txt.split(" ")[0],
                icon: data.weather[0].icon,
                low: Math.round(data.main.temp_min*(9/5)) - 459.67,
                high: Math.round(data.main.temp_max*(9/5)) - 459.67
              };
  
                return <li class="weather-today">
                <DailyWeather weather={weatherProps} useFahrenheit={this.state.useFahrenheit}/>
              </li>;
            })}
          </ul>
        </div>);
    }
  
}

export default DisplayWeather;