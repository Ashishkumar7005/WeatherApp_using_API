const apiKey="8c8422b241da3e0fa65c6ff4164a81d6";
  const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const searchBox= document.querySelector(".search input");
  const searchBtn= document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon");

  async function weatherinfo(city){
 const response= await fetch(apiUrl + city + `&appid=${apiKey}`);

 if(response.status==404){
  document.querySelector(".error").style.display= "block";
  document.querySelector(".weather").style.display= "none";
 }
 else{
  var data= await response.json();

 document.querySelector(".city").innerHTML= data.name;
 document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + " °C";
 document.querySelector(".humidity").innerHTML= data.main.humidity + " %";
 document.querySelector(".wind").innerHTML= data.wind.speed + " km/h";
 
  if(data.weather[0].main=="Clouds"){
  weatherIcon.src = "weather-app-img/clouds.png";
 }
else if(data.weather[0].main=="Clear"){
  weatherIcon.src = "weather-app-img/clear.png";
 }
else if(data.weather[0].main=="Rain"){
  weatherIcon.src = "weather-app-img/rain.png";
 }
else if(data.weather[0].main=="Drizzle"){
  weatherIcon.src = "weather-app-img/drizzle.png";
 }
else if(data.weather[0].main=="Mist"){
  weatherIcon.src = "weather-app-img/mist.png";
 }
 
 document.querySelector(".weather").style.display= "block";
 document.querySelector(".error").style.display= "none";
 

 }
  }


searchBtn.addEventListener("click",()=>{
  weatherinfo(searchBox.value);
})
