import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="weatherTemperature">
        <span>
          <h1>{Math.round(props.celsius)}</h1>
        </span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={displayFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <div className="weatherTemperature">
        <span>
          <h1>{Math.round(fahrenheit)}</h1>
        </span>
        <span className="units">
          <a href="/" onClick={displayCelsius}>
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  }
}
