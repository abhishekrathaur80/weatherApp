import React, { useState } from "react";

import { options, fetchData } from "./utils";

import classes from "./Weather.module.css";

const Weather = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = (event) => {
    setSearchTxt(event.target.value);
  };

  const clickHandler = async () => {
    setLoading(true);
    setError(null);
    try {
      const weatherResponse = await fetchData(
        `https://openweather43.p.rapidapi.com/weather?q=${searchTxt}`,
        options
      );
      setWeatherData(weatherResponse);
      setLoading(false);
    } catch (error) {
      setError("City Not Found");
      setLoading(false);
    }
  };

  return (
    <div className={classes.container}>
      <h2>Weather Application</h2>
      <input type="text" value={searchTxt} onChange={handleSearch} />
      <button onClick={clickHandler}>Search</button>

      {loading && <p className={classes.loading}>Loading ...</p>}
      {error && <p className={classes.error}>{error}</p>}

      {weatherData && (
        <div className={classes["weather-details"]}>
          <h3>{weatherData.name}</h3>
          <p>Temperature: {weatherData.main.temp}</p>
          <p>Weather : {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
