import React, { useState } from "react";
import { featchWeather } from "./api/fetchWeather";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const test = document.querySelector("#testfavicon");

  const testFavicon = () => {
    const favicon = test;
    favicon.href =
      "https://cdn.iconscout.com/icon/free/png-512/weather-296-1100758.png";
  };

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await featchWeather(query);
      console.log(data);
      setWeather(data);
      setQuery("");
    }
  };
  return (
    <div className="main-container">
      <img src={testFavicon()} alt="" />
      <input
        type="text"
        className="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt=""
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
