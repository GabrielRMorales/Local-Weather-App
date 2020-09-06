import axios from "axios";

const getWeather=()=>{
    const key="36584e7259790df669629497aec20cbc";      
    return axios.get("http://ip-api.com/json").then(res=>{
      return axios.get("http://api.openweathermap.org/data/2.5/forecast?zip="+res.data["zip"]+",us&appid="+key);
    }).then(function(res){
        return noRepeatDays(res.data.list).slice(0,5);
    });
}

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

const getCelsius=(tempInF)=>{
  return Math.round((tempInF - 32) * (5/9));
}

const convertTemp=(scale, temp)=>{
  return scale === "f" ? temp: getCelsius(temp);
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


export {convertToDay, convertTemp, noRepeatDays, getWeather};