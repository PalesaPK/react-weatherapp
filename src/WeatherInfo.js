import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
        <br />
      <div className="row">
        <div className="col-6">
          <span>
            <h1>{Math.round(props.data.temperature)}</h1>
          </span>
          <span className="units">°C</span>
          <div>
            <span className="city" id="city">
              {props.data.city}
            </span>{" "}
            <span>📍</span>
          </div>
          <div id="description">{props.data.description}</div>
          <br />
          <span className="wind">Wind: </span>
          <span id="wind-speed">{props.data.wind}</span>
          <span className="windSpeedUnit"> km/s</span>
          <div id="time">
            <FormattedDate date={props.data.date} />
          </div>
        </div>
        <div className="col-6">
          <img
            src={props.data.iconUrl}
            id="icon"
            alt={props.data.description}
          />
        </div>
      </div>
    </div>
  );
}
