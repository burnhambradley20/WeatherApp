let weather = {
    apiKey: "80a4831cd36ca3c57c099b4b5435e35f",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city
        +"&units=imperial&appid="
        + this.apiKey
        ).then((response) => response.json())
        .then((data)=> this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerHTML = "Forcast for " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".temp").innerHTML = temp + "°F"
        document.querySelector(".humidity").innerHTML = humidity + "% Humidity"
        document.querySelector(".wind").innerHTML = "wind speed: " + speed + "MPH"
        },
        search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};
document.querySelector(".search button").addEventListener("click", function(){
weather.search()
})