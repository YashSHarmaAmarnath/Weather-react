import React from "react";

function WeatherForecast({ forecastData }) {
  // Grouping forecast data by date
  const groupedByDate = forecastData.reduce((acc, forecast) => {
    const date = forecast.dt_txt.split(" ")[0]; // Extracting date from dt_txt
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(forecast);
    return acc;
  }, {});

  // Function to convert Unix timestamp to a human-readable date string
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
  };

  // Function to display weather information for a given date
  const renderWeatherForDate = (date, forecasts) => (
    <div key={date}>
      <div className="weather-details ">
        <div className="forecast-item">
          <h2>{formatDate(forecasts[0].dt)}</h2>
        <img
                src={`http://openweathermap.org/img/wn/${forecasts[0].weather[0].icon}@2x.png`}
                alt={forecasts[0].weather[0].description}
              />
          <h2>{Math.round(forecasts[0].main.temp)-273}°C</h2>
          <h3>{forecasts[0].weather[0].description}</h3>
        </div>
      </div>
    </div>
  );

  return (
    <div className="weather-forecast">
      {Object.entries(groupedByDate).map(([date, forecasts]) =>
        renderWeatherForDate(date, forecasts)
      )}
    </div>
  );
}

export default WeatherForecast;
