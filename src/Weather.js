import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      time: "Friday 21:00",
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
  }

  if (weatherData.ready) {
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
                <h1>{Math.round(weatherData.temperature)}</h1>
              </span>
              <span className="units">°C</span>
              <div>
                <span className="city" id="city">
                  {weatherData.city}
                </span>{" "}
                <span>📍</span>
              </div>
              <div id="description">{weatherData.description}</div>
              <br />
              <span className="wind">Wind: </span>
              <span id="wind-speed">{weatherData.wind}</span>
              <span className="windSpeedUnit"> km/s</span>
              <div id="time">{weatherData.time}</div>
            </div>
            <div className="col-6">
              <img
                src={weatherData.iconUrl}
                id="icon"
                alt={weatherData.description}
              />
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
  } else {
    const apiKey = "0ebc654fccbc00189d5408f3d6f15b08";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);

    return "Loading...";
  }
}
