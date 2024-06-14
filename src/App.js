import "./App.css";
import React, { useState } from "react";
import WeatherForecast from "./components/forecast";

function App() {
  const [City, setCity] = useState("");
  const [Weatherdata, setWeatherdata] = useState(null);
  const [error, seterror] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const fetchWeather = async () => {
    try {
      const ApiKey = "628816a736f3ba7b767d1cc62b22e313";
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${ApiKey}&units=metric`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      console.log(data);
      setWeatherdata(data);
      const forecastResponse = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${City}&appid=${ApiKey}`
      );
      const forecastData1 = await forecastResponse.json();
      console.log(forecastData1);
      setForecastData(forecastData1);
      seterror(null);
    } catch (error) {
      console.error(error);
      seterror(error.message);
      setWeatherdata(null);
      setForecastData(null);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearchClick = () => {
    fetchWeather();
  };

  return (
    <div className="bg">
      <div className="container">
        <div className="search">
          <div className="group">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
              </g>
            </svg>
            <input
              className="input"
              type="search"
              placeholder="City Name"
              value={City}
              onChange={handleInputChange}
            />
          </div>
          <input
            type="button"
            value="Search"
            className="inputBtn"
            onClick={handleSearchClick}
          />
        </div>
        {Weatherdata && (
          <>
            <div className="cityName">
              <p>{City}</p>
              <p className="dat">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="weatherIcon">
              <img
                src={`http://openweathermap.org/img/wn/${Weatherdata.weather[0].icon}@2x.png`}
                alt={Weatherdata.weather[0].description}
              />
            </div>
            <div className="temprature">
              <p className="cel">{Math.round(Weatherdata.main.temp)}°C</p>
              <div className="seprator"></div>
              <p className="fen">
                {Math.round(((Weatherdata.main.temp * 9) / 5 + 32).toFixed(1))}
                °F
              </p>
            </div>
            <div className="weatherCondition">
              <p>{Weatherdata.weather[0].description}</p>
            </div>
            <div className="weatherInfo">
              <p className="windSpeed">
                wind Speed: {Weatherdata.wind.speed} m/s
              </p>
              <p className="humidity">
                Humidity: {Weatherdata.main.humidity} %
              </p>
            </div>
          </>
        )}
        {error && <div className="error">Error: {error}</div>}
      </div>
        {/* <div className="forecast"> */}
      <center>
          {forecastData && (
            <WeatherForecast
              forecastData={forecastData.list}
            />
          )}
      </center>
        {/* </div> */}
    </div>
  );
}

export default App;
