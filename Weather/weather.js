let weather = {
  apiKey: "a04356d671782adbb7c1909cb48c69fb",
  fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data){
    const { name } = data;
    const { country } = data.sys;
    const { icon, main } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    // console.log(name, country, icon, main, temp, humidity, speed);
    document.querySelector("#city").innerText = name + ", " + country;
    document.querySelector("#temp").innerText = temp + " °C";
    document.querySelector("#desc").innerText = main;
    document.querySelector("#humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector("#windSpeed").innerText = "Wind Speed: " + speed + " m/s";
    document.querySelector("#icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
  },
  search: function () {
    this.fetchWeather(document.getElementById("searchbar").value);
  }
};
document.getElementById("search-btn").addEventListener("click", function(){
  weather.search();
})
document.getElementById("searchbar").addEventListener("keyup", function(event){
  if(event.key == "Enter")
    weather.search();
})
weather.fetchWeather("kolkata");
