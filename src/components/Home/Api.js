import React, { useState } from "react";
import "./Api.css"; // Import your CSS file

const api = {
  key: "7038c620973b33a5ceee8911b29c4376",
  base: "https://api.openweathermap.org/data/2.5/",
};

export const Api = () => {
  const [search, setSearch] = useState("");
  const [weatherForecast, setWeatherForecast] = useState([]);

  const searchPressed = async () => {
    const response = await fetch(
      `${api.base}forecast?q=${search}&units=metric&cnt=30&APPID=${api.key}`
    );
    const result = await response.json();
    setWeatherForecast(result.list);
  };

  return (
    <div className="container">
      {" "}
      {/* Added a container class for styling */}
      {/* Header */}
      <h1 className="header">Weather Forecast App</h1>
      <div className="search-container">
        {" "}
        {/* Added a search-container class */}
        {/* Search Box */}
        <input
          type="text"
          placeholder="Search.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-button" onClick={searchPressed}>
          Search
        </button>
      </div>
      <ul className="weather-forecast">
        {weatherForecast.map((forecast) => (
          <li key={forecast.dt}>
            <p className="day-number">{forecast.dt_txt}</p>
            <p>{forecast.main.temp} °C</p>
            <p>{forecast.weather[0].main}</p>
            {/* Add the number of days */}
          </li>
        ))}
      </ul>
    </div>
  );
};
