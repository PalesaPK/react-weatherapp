import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherInfo = {
    city: "Johannesburg",
    temperature: 18,
    date: "Thursday 16:00",
    description: "Clear Sky",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    wind: 3,
  };

  return (
    <div className="Weather">
      <div className="container">
        <form id="search-form">
          <div className="row">
            <div className="col-7">
              <input
                id="city-search"
                type="search"
                placeholder="Enter city"
                autoComplete="off"
                className="form-control"
              />
            </div>
            <div className="col-1">
              <input type="submit" value="🔍" className="search" />
            </div>
            <div className="col-1">
              <button id="currentLocation">Current</button>
            </div>
          </div>
        </form>
        <br />
        <div className="row">
          <div className="col-6">
            <span>
              <h1>{weatherInfo.temperature}</h1>
            </span>
            <span className="units">°C</span>
            <div>
              <span className="city" id="city">
                {weatherInfo.city}
              </span>{" "}
              <span>📍</span>
            </div>

            <div id="description">{weatherInfo.description}</div>
            <br />
            <span className="wind">Wind: </span>
            <span id="wind-speed">{weatherInfo.wind}</span>
            <span className="windSpeedUnit"> m/s</span>
            <div id="time">{weatherInfo.date}</div>
          </div>
          <div className="col-6">
            <img src={weatherInfo.imgUrl} id="icon" alt="sunny" />
          </div>
        </div>
        <div className="prediction" id="forecast"></div>
      </div>
      <span className="footer">
        This project was coded by Palesa Kgomari and is {""}
        <a
          href="https://github.com/PalesaPK/react-weatherapp"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
        {""} and {""}
        <a
          href="https://glistening-speculoos-7a110a.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </span>
    </div>
  );
}
