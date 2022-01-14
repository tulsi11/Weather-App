let weather = {
    "apikey": "8a0037e51a018ad9acb4c0024235e505",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apikey
        )
        .then((response) => response.json())
        .then((data) => this.display(data));
    },
    display: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp,humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText = "Weather in  " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + " °C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "kmph";
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
      }
    
};
const search1 = document.querySelector(".btn");
search1.addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event)
{
    if(event.key == "Enter"){
        weather.search();
    }
})

weather.fetchWeather("Pune");
