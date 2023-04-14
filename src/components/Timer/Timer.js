import styles from './Timer.module.scss'
import { useEffect, useState } from 'react';
import Button from '../Button/Button';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  
  return (
    <div>
      <div className={styles.timer}>
        <span>{("0" + Math.floor((time / 36000) % 60)).slice(-2,)}:</span>
        <span>{("0" + Math.floor((time / 600) % 60)).slice(-2,)}:</span>
        <span>{("0" + Math.floor((time / 10) % 60)).slice(-2,)}.</span>
        <span>{("0" + ((time / 10) % 1000)).slice(1,)}</span>
      </div>
      <section>        
        <Button onClick={() => setRunning(true)}>Start</Button>
        <Button onClick={() => setRunning(false)}>Stop</Button>
        <Button onClick={() => setTime(0)}>Reset</Button>            
      </section> 
    </div>
  );
};

export default Stopwatch; 