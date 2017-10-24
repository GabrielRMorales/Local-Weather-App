$(document).ready(function(){
  
var ktemp, ftemp, ctemp, f=true, c=false, description, code;

$.getJSON("http://ip-api.com/json", function(data){
var api="http://api.openweathermap.org/data/2.5/weather?zip=" +data.zip+","+data.countryCode+"&appid=36584e7259790df669629497aec20cbc";

  $.getJSON(api, function(data){
    ktemp=data.main.temp;
    ftemp=Math.round(ktemp*(9/5) - 459.67);
    ctemp=Math.round((ftemp-32)*(5/9));
    description=data.weather[0].description;
    code=data.weather[0].id;
    $("#temp").html(ftemp+" F");
    $("#description").html(description);

    function show_weather(image_one, image_two){
      $("#icon").append("<img src='http://openweathermap.org/img/w/"+image_one);
      
      $("body").css("background-image", image_two);

    }

    if (code>=200&&code<=232){
        show_weather("11d.png'>","url(http://www.homeadvisor.com/r/wp-content/uploads/2015/03/Dollarphotoclub_43826198-1024x680.jpg)");
    }
    else if ((code>=300&&code<=321)||(code>=500&&code<=531)){
        show_weather("10d.png'>", "url(https://i.ytimg.com/vi/LbAigABOm_E/maxresdefault.jpg)");
    }
    
    else if (ftemp>=75){
        show_weather("01d.png'>","url(https://media-cdn.tripadvisor.com/media/photo-s/02/ee/83/cb/dolphin-watch.jpg)");
    } 
    else {
        show_weather("50d.png'>","url(https://www.osfashland.org/~/media/Content-Masthead-Folder/WeatherMH47.ashx?as=1&h=308&la=en&w=746&hash=88B4BF08C1D40F898E4AD0E7EFA866F20C831F87)");
    }  
});    
  $("#change").click(function(){
    if (c==false){
       $("#temp").html(ctemp+ " C");
       f=false;
       c=true;
    }
    else if (c==true){
        $("#temp").html(ftemp+" F");
        f=true;
        c=false;
    }
   });   
  });  

 });