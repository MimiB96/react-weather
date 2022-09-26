import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>Calgary</h1>
      <ul>
        <li>Friday 16:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="cloudy-day"
          />
          <span className="temperature">6</span>
          <span className="units">℃</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 45%</li>
            <li>Humidity: 68%</li>
            <li>Wind: 7 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
