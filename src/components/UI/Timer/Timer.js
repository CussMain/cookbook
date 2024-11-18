import React from 'react';
import timer from './img/timer.png';
import './Timer.css';

const Timer = ({ name, cookTimeMinutes , metric }) => {
  return (
    <div className="timer-ui-component">
      <img src={timer} alt={name} />
      <span>{cookTimeMinutes}</span>
      <div type="cookTimeMinutes">{metric}</div>
    </div>
  );
};

export default Timer;