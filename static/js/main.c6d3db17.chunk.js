(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),i=a.n(r),o=(a(23),a(24),a(15)),l=a(16),s=a(2),u=a(18),h=a(17),d=function(e){return c.a.createElement("div",null,c.a.createElement("h2",{class:"day"},e.weather.day),c.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(e.weather.icon,"@2x.png")}),c.a.createElement("div",{class:"low"},e.weather.low,"\xb0"),c.a.createElement("div",{class:"high"},e.weather.high,"\xb0"))},m=a(4),p=a.n(m),f=(a(42).config(),function(e,t){return"f"===e?t:(a=t,Math.round(5/9*(a-32)));var a}),v=function(e){var t;return e.filter((function(e){var a=e.dt_txt.split(" ")[0];if(t!==a)return t=a,e}))},w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={fiveDayForecast:[],scale:"f"},e.handleClick=e.handleClick.bind(Object(s.a)(e)),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://ip-api.com/json").then((function(e){return p.a.get("https://api.openweathermap.org/data/2.5/forecast?zip="+e.data.zip+",us&appid=36584e7259790df669629497aec20cbc")})).then((function(e){return v(e.data.list).slice(0,5)})).then((function(t){e.setState({fiveDayForecast:t.map((function(e){return{day:(t=e.dt_txt.split(" ")[0],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(t).getDay()]),icon:e.weather[0].icon,low:Math.round(1.8*e.main.temp_min)-459,high:Math.round(1.8*e.main.temp_max)-459};var t}))})}))}},{key:"handleClick",value:function(){this.setState((function(e){return"c"===e.scale?{scale:"f"}:{scale:"c"}}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{onClick:this.handleClick},c.a.createElement("span",{class:"c"===this.state.scale?"active":""},"C\xb0 "),"/",c.a.createElement("span",{class:"f"===this.state.scale?"active":""},"F\xb0")),c.a.createElement("ul",{class:"main-display"},this.state.fiveDayForecast.map((function(t){var a={day:t.day,icon:t.icon,low:f(e.state.scale,t.low),high:f(e.state.scale,t.high)};return c.a.createElement("li",{class:"weather-today"},c.a.createElement(d,{weather:a}))}))))}}]),a}(c.a.Component);var y=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Five-Day Forecast"),c.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.c6d3db17.chunk.js.map