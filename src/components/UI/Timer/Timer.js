import React, { useEffect , useState , useContext }   from 'react';

import timerLight from './img/timer.png';
import timerDark  from './img/timer_dark.png';

import './Timer.css';

import { Context }                                    from '../../Context';

const Timer = ({ name, cookTimeMinutes , metric }) => {

  const [timer      , setTimer]      = useState(timerLight);
  const { userTheme } = useContext(Context);

  useEffect(() => {

    if(userTheme === 'dark') {
      setTimer(timerDark);
    } else {
      setTimer(timerLight);
    };

  }, [userTheme]);  

  return (
    <div className="timer-ui-component">
      <img src={timer} alt={name} />
      <span>{cookTimeMinutes}</span>
      <div type="cookTimeMinutes">{metric}</div>
    </div>
  );
};

export default Timer;