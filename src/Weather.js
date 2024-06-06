import React, { useState } from "react";
const api = {
  key: "91bbc21fb5336bf7c345f1c6fde53e60",
  base: "http://api.openweathermap.org/data/2.5/",
};
function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");
  console.log(weather);

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        });
    }
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={search} // adding the keypress event
        placeholder="Search for a city..."
      />
      {weather && (
        <div>
          <h3>
            {weather.name}, {weather.sys.country}
          </h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].main}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
