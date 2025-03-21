let inputBox = document.getElementById('input-box');
let weather_img = document.getElementById('image');
let temperature = document.getElementById('temperature');
let description = document.getElementById('description');
let humidity = document.getElementById('humidity');
let wind_speed = document.getElementById('wind-speed');
let cityname = document.getElementById('cityname');
let error = document.getElementById('error-box');
let weather_body = document.getElementById('weather-body');

function checkWeather(city) {
    let api_key = "c397a192c6397f639564473080cacb2f";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
        .then(response => response.json())
        .then(weather_data => {
            if (weather_data.cod != "200") {
                error.style.display = "flex";
                weather_body.style.display = "none";
                return false;
            }

            error.style.display = "none";
            weather_body.style.display = "flex";
            cityname.innerHTML = `${weather_data.name}`;
            temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
            description.innerHTML = `${weather_data.weather[0].description}`;


            humidity.innerHTML = `${weather_data.main.humidity}%`;
            wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

            switch (weather_data.weather[0].main) {
                case 'Clouds':
                    weather_img.src = "/assets/cloud.png";
                    break;
                case 'Clear':
                    weather_img.src = "/assets/clear.png";
                    break;
                case 'Rain':
                    weather_img.src = "/assets/rain.png";
                    break;
                case 'Mist':
                    weather_img.src = "/assets/mist.png";
                    break;
                case 'Snow':
                    weather_img.src = "/assets/snow.png";
                    break;
            }

            console.log(weather_data);
        })
}