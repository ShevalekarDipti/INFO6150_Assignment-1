import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./displayweather.css";

function WeatherList(props) {
    const { data } = props;
    const newUrl = "http://openweathermap.org/img/wn/";

    return (
        <div>
            <h2 className='text-center'>Weekly Weather Forecast</h2>
            <div className='d-flex justify-content-center mb-5'>
            {data.cod != 404 ? (
                <React.Fragment>
                    
                    <ul class="weather-box-list mt-5">
                        
                        <li>
                            <Link to={`/${new Date(data.list[5].dt * 1000).toLocaleString("en-US", { weekday: "long" }).toLocaleLowerCase()}`} state={{
                                data: data,
                                day: new Date(data.list[5].dt * 1000).getDay(),
                                date: data.list[5].dt_txt.substring(8,10),
                                pos : 0
                                
                                }}>
                            <div class="weather-box">
                                <h1>{new Date(data.list[5].dt * 1000).toLocaleString("en-US", { weekday: "long" })}</h1>
                                <img className="image" src={newUrl + data.list[5].weather[0].icon + "@2x.png"} alt="sun" />
                                <span class="temp">{Math.floor(data.list[5].main.temp - 273.15)} °C</span> 
                            </div>
                            </Link>
                        </li>
                        <li>
                        <Link to={`/${new Date(data.list[12].dt * 1000).toLocaleString("en-US", { weekday: "long" }).toLocaleLowerCase()}`} state={{
                                data: data,
                                day: new Date(data.list[12].dt * 1000).toLocaleString("en-US", { weekday: "long" }),
                                date: data.list[12].dt_txt.substring(8,10),
                                pos: 8
                                }}>
                            <div class="weather-box">
                                <h1>{new Date(data.list[12].dt * 1000).toLocaleString("en-US", { weekday: "long" })}</h1>
                                <img className="image"  src={newUrl + data.list[12].weather[0].icon + "@2x.png"} alt="sun" />
                                <span class="temp">{Math.floor(data.list[12].main.temp - 273.15)} °C</span>
                            </div>
                            </Link>
                        </li>
                        <li>
                        <Link to={`/${new Date(data.list[21].dt * 1000).toLocaleString("en-US", { weekday: "long" }).toLocaleLowerCase()}`} state={{
                                data: data,
                                day: new Date(data.list[21].dt * 1000).toLocaleString("en-US", { weekday: "long" }),
                                date: data.list[21].dt_txt.substring(8,10),
                                pos: 16
                                }}>
                            <div class="weather-box">
                                <h1>{new Date(data.list[21].dt * 1000).toLocaleString("en-US", { weekday: "long" })}</h1>
                                <img className="image" src={newUrl + data.list[21].weather[0].icon + "@2x.png"} alt="sun" />
                                <span class="temp">{Math.floor(data.list[21].main.temp - 273.15)} °C</span>
                            </div>
                            </Link>
                        </li>
                        <li>
                        <Link to={`/${new Date(data.list[29].dt * 1000).toLocaleString("en-US", { weekday: "long" }).toLocaleLowerCase()}`} state={{
                                data: data,
                                day: new Date(data.list[29].dt * 1000).toLocaleString("en-US", { weekday: "long" }),
                                date: data.list[29].dt_txt.substring(8,10),
                                pos: 24
                                }}>
                            <div class="weather-box">
                                <h1>{new Date(data.list[29].dt * 1000).toLocaleString("en-US", { weekday: "long" })}</h1>
                                <img className="image" src={newUrl + data.list[29].weather[0].icon + "@2x.png"} alt="sun" />
                                <span class="temp">{Math.floor(data.list[29].main.temp - 273.15)} °C</span>
                            </div>
                            </Link>
                        </li>
                        <li>
                        <Link to={`/${new Date(data.list[38].dt * 1000).toLocaleString("en-US", { weekday: "long" }).toLocaleLowerCase()}`} state={{
                                data: data,
                                day: new Date(data.list[38].dt * 1000).toLocaleString("en-US", { weekday: "long" }),
                                date: data.list[38].dt_txt.substring(8,10),
                                pos: 32
                                }}>
                            <div class="weather-box">
                                <h1>{new Date(data.list[38].dt * 1000).toLocaleString("en-US", { weekday: "long" })}</h1>
                                <img className="image"  src={newUrl + data.list[38].weather[0].icon + "@2x.png"} alt="sun" />
                                <span class="temp">{Math.floor(data.list[38].main.temp - 273.15)} °C</span>
                            </div>
                            </Link>
                        </li>
                    </ul>
                </React.Fragment>) : (
                <div className="maincard">
                    <h2>{data.message}</h2>
                </div>
            )}
        </div>
        </div>
      
    )
}

export default WeatherList;