import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);

    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);

    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return weekDays[day];
  }

  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} />
      <div className="forecast-temps">
        <span className="forecast-max-temp">{maxTemperature()}</span>
        <span className="forecast-min-temp">{minTemperature()}</span>
      </div>
    </div>
  );
}
