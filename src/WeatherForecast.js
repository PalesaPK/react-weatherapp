import React, { useState } from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState("");

  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="prediction" id="forecast">
        <div className="row">
          <div className="col-3">
            <div className="forecast-day">{forecast[0].dt}</div>
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              width="50"
            />
            <div className="forecast-temps">
              <span className="forecast-max-temp">{forecast[0].temp.max}°</span>
              <span className="forecast-min-temp">{forecast[0].temp.min}°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiKey = "0ebc654fccbc00189d5408f3d6f15b08";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayForecast);

    return null;
  }
}
