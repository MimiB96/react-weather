import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormatDate from "./FormatDate";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      feels_like: Math.round(response.data.main.feels_like),
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      uvi: response.data.sys.uvi,
      iconurl: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Look Up City"
                className="form-control"
                autoFocus="on"
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormatDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img src={weatherData.iconurl} alt={weatherData.description} />
            <span className="temperature">{weatherData.temperature}</span>
            <span className="units">℃</span>
          </div>
          <div className="col-3">
            <ul>
              <li>Feels like: {weatherData.feels_like} °</li>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} m/s</li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <li>UV Index: {weatherData.uvi} </li>
              <li className="riseSet">Sunrise:{weatherData.sunrise} </li>
              <li className="riseSet">Sunset:{weatherData.sunset} </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "25499f9fd2b3b742a2a887d3d9745f66";
    let city = "Ikeja";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return `Loading...`;
  }
}
