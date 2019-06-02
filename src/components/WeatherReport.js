import React from 'react';
import ReactWeather from 'react-open-weather';

export class WeatherReport extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="weatherContainer">
          <div className="weatherDetailBox">
            <ul className="cityList">
              <li>
                  <div className="cityName">
                    Cannaught Place, New Delhi
                  </div>
                  <div>
                    <span className="geoPath">Lat 28.6315</span>
                    <span className="geoPath">Long 77.2167</span>
                  </div>

              </li>
            </ul>
          </div>
          <div className="weatherDetailBox">
          </div>
        </div>
        <div className="weatherContainer weeklyWeatherContainer">
          <ReactWeather
            forecast="5days"
            apikey="1d7c3fe0a7be475e9e3110440190106"
            type="city"
            city="Delhi"
          />
        </div>
      </div>
    );
  }
}

export default WeatherReport;


