import React, { useEffect, useState } from 'react';
import './Weather.css';
import axios from 'axios';
import press from '../../assets/pressure.png';
import wind from '../../assets/wind.png';
import humi from '../../assets/humidity.png';
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const Weather = () => {
  let [weather, setWeather] = useState();
  // let [localdate, setLocalDate] = useState();
  // let [localtime, setLocaltime] = useState();
  // let [condition, setCondition] = useState();
  // let [conditionimg, setConditionimg] = useState();
  //let [weather, setWeather] = useState();

  
    const fetchWeather = async () => {
      await axios
        .get(
          'https://api.weatherapi.com/v1/current.json?key=7dae42bd7c0041f285e172820232608&q=India&aqi=no'
        )
        .then(
           (res) =>
            
              setWeather(res.data)
              // setLocalDate(res.data.location.localtime.slice(0, 10)),
              // setLocaltime(res.data.location.localtime.slice(11, 16)), setCondition(res.data.current.condition.text), setConditionimg(res.data.current.condition.icon),
            )
        
        .catch((err) => {
          console.log(err);
        });
  };
  
    fetchWeather();
 

  return (
    <div className="weathersection">
      {weather ? (
        <div>
          {' '}
          <div className="weatherupper">
            <p className="date">{weather.location.localtime.slice(0, 10)}</p>
            <p className="time">{weather.location.localtime.slice(11, 16)}</p>
          </div>
          <div className="weatherlower">
            <div className="leftweather flexcol">
              {' '}
              <img src={weather.current.condition.icon} alt="" />
              <p className="weathercon">{weather.current.condition.text}</p>
            </div>
            <div className="verticalline"></div>
            <div className="middleweather flexcol">
              <p className="tempweather">
                {weather.current.temp_c}
                <span className="celius">&deg;C</span>
              </p>

              <div className="weathersmalldiv">
                <img src={press} alt="" className="" />
                <p>
                  {weather.current.pressure_mb} mbar<br></br> Pressure
                </p>
              </div>
            </div>
            <div className="verticalline"></div>
            <div className="rightweather flexcol">
              <div className="weathersmalldiv">
                <img src={wind} alt="" />
                <p>
                  {weather.current.wind_kph}km/h <br></br>Wind
                </p>
              </div>
              <div className="weathersmalldiv">
                <img src={humi} alt="" />
                <p>
                  {weather.current.humidity}% <br></br>Humidity
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1></h1>
      )}
    </div>
  );
};

Weather.propTypes = propTypes;
Weather.defaultProps = defaultProps;
// #endregion

export default Weather;
