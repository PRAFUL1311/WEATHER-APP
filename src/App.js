
import React, { useState } from 'react';
import './App.css';

function WeatherComponent() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=efd1a2c518b840a9b4265559200207&q=${city}`);
      const data = await response.json();
      setWeatherData(data.current);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className='background'>
      <div className='center-container'>
        <div className='main'>
          <header className='header'>
            <nav>
              <ol>
                <h3>WEATHER-APP</h3>
              </ol>
            </nav>
          </header>
          <div>
            <input
              placeholder='enter a city name'
              type='text'
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            {weatherData && (
              <div>
                <p>Temperature: {weatherData.temp_c}°C</p>
                <p>Wind Speed: {weatherData.wind_kph} km/h</p>
                {/* Add more details as needed */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherComponent;
