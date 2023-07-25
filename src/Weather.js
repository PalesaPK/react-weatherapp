import React from "react";
import axios from "axios";

export default function Weather(props) {
  function showWeather(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=c8a77112b2faf6684bb4b21a0aa778ae&units=metric`;
  axios.get(apiUrl).then(showWeather);
}
