import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = "0ebc654fccbc00189d5408f3d6f15b08";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form id="search-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-7">
                <input
                  id="city-search"
                  type="search"
                  placeholder="Enter city"
                  autoComplete="off"
                  className="form-control"
                  onChange={handleChange}
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
          <WeatherInfo data={weatherData} />
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
    search();
    return "Loading...";
  }
}
