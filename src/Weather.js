import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecastDay from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.homeCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      feels_like: Math.round(response.data.main.feels_like),
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      uvi: response.data.sys.uvi,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }
  function search() {
    const apiKey = "25499f9fd2b3b742a2a887d3d9745f66";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function submitResponse(event) {
    event.preventDefault();
    search();
  }
  function changeCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={submitResponse}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Look Up City"
                className="form-control"
                autoFocus="on"
                autoComplete="off"
                onChange={changeCity}
              />
            </div>
            <div className="col-3">
              <input
                type={"submit"}
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecastDay coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return `Loading...`;
  }
}
