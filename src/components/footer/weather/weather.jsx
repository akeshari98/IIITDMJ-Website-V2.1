// Weather.js
import React from 'react';
import { FaCloudSun, FaThermometerHalf, FaTint, FaWind } from 'react-icons/fa';
import './weather.css'
const Weather = () => {
  // Hardcoded weather data for Jabalpur
  const weather = {
    description: "Clear Sky",
    temperature: 28,
    humidity: 60,
    windSpeed: 3,
    icon: "01d", // Icon code for clear sky
  };

  const weatherIcon = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;

  return (
    <div className="weather-container">
      <div className="weatherDes"><h5 className="weather-title">Jabalpur</h5>
      <img src={weatherIcon} alt={weather.description} /></div>
      <div className="weather-info">
        <p><FaCloudSun /> {weather.description}</p>
        <p><FaThermometerHalf /> Temperature: {weather.temperature}°C</p>
        <p><FaTint /> Humidity: {weather.humidity}%</p>
        <p><FaWind /> Wind Speed: {weather.windSpeed} m/s</p>
      </div>
    </div>
  );
};

export default Weather;
