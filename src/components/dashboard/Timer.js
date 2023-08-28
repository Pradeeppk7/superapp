import React, { useState } from 'react';
import './Timer.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import moment from 'moment';
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
const Timer = () => {
  let [seconds, setSeconds] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [hours, setHours] = useState(0);
  let [isPause, setPause] = useState(false);
  let [isplay, setPlay] = useState(true);
  let [key, setKey] = useState(0);
  function totalTime(remainingTime) {
    if (minutes === 0 && seconds === 0 && hours === 0) {
      return '00:00:00';
    }
    return moment.unix(remainingTime).utc().format('HH:mm:ss');
  }
  function durations() {
    return hours * 60 * 60 + minutes * 60 + seconds;
  }
  function play() {
    setPause(true);
    setPlay(false);
  }
  function pause() {
    setPause(false);
    setPlay(true);
  }
  function reset() {
    setSeconds(0);
    setHours(0);
    setMinutes(0);
    setPlay(true);
    setPause(false);
    durations();
    setKey(key + 1);
  }

  function increaseSec() {
    if (seconds == 60) {
      return;
    }
    setSeconds(seconds + 1);
    return;
  }
  function increaseMin() {
    if (minutes == 60) {
      return;
    }
    setMinutes(minutes + 1);
    return;
  }
  function increaseHour() {
    setHours(hours + 1);
    return;
  }

  function decreaseMin() {
    if (minutes == 0) {
      return;
    }
    setMinutes(minutes - 1);
  }
  function decreaseSec() {
    if (seconds == 0) {
      return;
    }
    setSeconds(seconds - 1);
  }
  function decreaseHour() {
    if (hours == 0) {
      return;
    }
    setHours(hours - 1);
  }
  return (
    <div className="timersection">
      <div className="clock">
        <CountdownCircleTimer
          className="clocktimer"
          isPlaying={isPause}
          duration={durations()}
          colors={'#FF6A6A'}
          size="167"
          onComplete={reset} 
          key={key}
          
        >
          {({ remainingTime }) => (
            <span className="clockfonts">
              {' '}
              {totalTime(remainingTime)}
            </span>
          )}
        </CountdownCircleTimer>
      </div>
      <div className="timeoptions">
        <div className="options">
          <div className="hourtimer colflex">
            <p>Hours</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="18"
              viewBox="0 0 27 18"
              fill="none"
              onClick={increaseHour}
            >
              <path
                d="M10.8779 1.12301L1.14451 10.8564C-0.0409617 12.0418 -0.305509 13.3983 0.350868 14.9256C1.00724 16.453 2.17649 17.218 3.85862 17.2205H23.1381C24.8227 17.2205 25.9932 16.4555 26.6496 14.9256C27.306 13.3958 27.0402 12.0393 25.8522 10.8564L16.1189 1.12301C15.7445 0.74865 15.339 0.467882 14.9022 0.280703C14.4655 0.093523 13.9975 -7.05719e-05 13.4984 -7.05719e-05C12.9992 -7.05719e-05 12.5313 0.093523 12.0945 0.280703C11.6578 0.467882 11.2522 0.74865 10.8779 1.12301Z"
                fill="#949494"
              />
            </svg>
            <h2>{hours}</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="18"
              viewBox="0 0 27 18"
              fill="none"
              onClick={decreaseHour}
            >
              <path
                d="M10.8779 16.0975L1.14451 6.36411C-0.0409617 5.17864 -0.305509 3.82221 0.350868 2.29482C1.00724 0.767436 2.17649 0.00249573 3.85862 0H23.1381C24.8227 0 25.9932 0.764941 26.6496 2.29482C27.306 3.8247 27.0402 5.18113 25.8522 6.36411L16.1189 16.0975C15.7445 16.4718 15.339 16.7526 14.9022 16.9398C14.4655 17.1269 13.9975 17.2205 13.4984 17.2205C12.9992 17.2205 12.5313 17.1269 12.0945 16.9398C11.6578 16.7526 11.2522 16.4718 10.8779 16.0975Z"
                fill="#949494"
              />
            </svg>
          </div>
          <div className="mintimer colflex">
            <p>Minutes</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="18"
              viewBox="0 0 27 18"
              fill="none"
              onClick={increaseMin}
            >
              <path
                d="M10.8779 1.12301L1.14451 10.8564C-0.0409617 12.0418 -0.305509 13.3983 0.350868 14.9256C1.00724 16.453 2.17649 17.218 3.85862 17.2205H23.1381C24.8227 17.2205 25.9932 16.4555 26.6496 14.9256C27.306 13.3958 27.0402 12.0393 25.8522 10.8564L16.1189 1.12301C15.7445 0.74865 15.339 0.467882 14.9022 0.280703C14.4655 0.093523 13.9975 -7.05719e-05 13.4984 -7.05719e-05C12.9992 -7.05719e-05 12.5313 0.093523 12.0945 0.280703C11.6578 0.467882 11.2522 0.74865 10.8779 1.12301Z"
                fill="#949494"
              />
            </svg>
            <h2>{minutes}</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="18"
              viewBox="0 0 27 18"
              fill="none"
              onClick={decreaseMin}
            >
              <path
                d="M10.8779 16.0975L1.14451 6.36411C-0.0409617 5.17864 -0.305509 3.82221 0.350868 2.29482C1.00724 0.767436 2.17649 0.00249573 3.85862 0H23.1381C24.8227 0 25.9932 0.764941 26.6496 2.29482C27.306 3.8247 27.0402 5.18113 25.8522 6.36411L16.1189 16.0975C15.7445 16.4718 15.339 16.7526 14.9022 16.9398C14.4655 17.1269 13.9975 17.2205 13.4984 17.2205C12.9992 17.2205 12.5313 17.1269 12.0945 16.9398C11.6578 16.7526 11.2522 16.4718 10.8779 16.0975Z"
                fill="#949494"
              />
            </svg>
          </div>
          <div className="sectimer colflex">
            <p>Seconds</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="18"
              viewBox="0 0 27 18"
              fill="none"
              onClick={increaseSec}
            >
              <path
                d="M10.8779 1.12301L1.14451 10.8564C-0.0409617 12.0418 -0.305509 13.3983 0.350868 14.9256C1.00724 16.453 2.17649 17.218 3.85862 17.2205H23.1381C24.8227 17.2205 25.9932 16.4555 26.6496 14.9256C27.306 13.3958 27.0402 12.0393 25.8522 10.8564L16.1189 1.12301C15.7445 0.74865 15.339 0.467882 14.9022 0.280703C14.4655 0.093523 13.9975 -7.05719e-05 13.4984 -7.05719e-05C12.9992 -7.05719e-05 12.5313 0.093523 12.0945 0.280703C11.6578 0.467882 11.2522 0.74865 10.8779 1.12301Z"
                fill="#949494"
              />
            </svg>
            <h2>{seconds}</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="18"
              viewBox="0 0 27 18"
              fill="none"
              onClick={decreaseSec}
            >
              <path
                d="M10.8779 16.0975L1.14451 6.36411C-0.0409617 5.17864 -0.305509 3.82221 0.350868 2.29482C1.00724 0.767436 2.17649 0.00249573 3.85862 0H23.1381C24.8227 0 25.9932 0.764941 26.6496 2.29482C27.306 3.8247 27.0402 5.18113 25.8522 6.36411L16.1189 16.0975C15.7445 16.4718 15.339 16.7526 14.9022 16.9398C14.4655 17.1269 13.9975 17.2205 13.4984 17.2205C12.9992 17.2205 12.5313 17.1269 12.0945 16.9398C11.6578 16.7526 11.2522 16.4718 10.8779 16.0975Z"
                fill="#949494"
              />
            </svg>
          </div>
        </div>
        <div className="btnclock">
          {isplay ? (
            <button id="play" onClick={play}>
              Play
            </button>
          ) : (
            <div>
              <button id="pause" onClick={pause}>Pause</button>{' '}
              <button id="reset" onClick={reset}>Reset</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Timer.propTypes = propTypes;
Timer.defaultProps = defaultProps;
// #endregion

export default Timer;
