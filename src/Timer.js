// Timer.js
import { useState, useEffect } from 'react';
import './App.css';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const formatTime = (seconds) => {
    const hh = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const mm = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const ss = (seconds % 60).toString().padStart(2, '0');
    return `${hh}:${mm}:${ss}`;
  };

  return (
    <div>
      <h2>Timer: {formatTime(time)}</h2>
    </div>
  );
}

export default Timer;