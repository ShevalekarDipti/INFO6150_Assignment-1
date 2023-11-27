import React from "react";
import "./displayweather.css";
import WeatherList from "./WeatherList";

function DisplayWeather(props) {
  const { data } = props;
  const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod != 404 ? data.weather[0].icon : null}` +
    "@2x.png";
    console.log(data);
  return (



    <div className="displayweather mb-3">
      {data.cod != 404 ? (
        <React.Fragment>
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <img className="weather-icon" src={iconurl} alt="" srcset="" />
            </div>
            <div className="ms-5 px-5">
              <h5>{new Date().toDateString()}</h5>
              <h3 style={{color: 'black'}}>{data.name}, {data.sys.country}</h3>
              <p>{data.weather[0].description}</p>
              <h4>Temperature : {Math.floor(data.main.temp - 273.15)}°C</h4>
              <div className="d-flex mt-3">
                <h4>{Math.floor(data.main.temp_max - 273.15)}°C / {Math.floor(data.main.temp_min - 273.15)}°C</h4>
              </div>
            </div>
          </div>
          
        </React.Fragment>
      ) : (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default DisplayWeather;
