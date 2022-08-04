import { useEffect, useState } from 'react';

const Timer = () => {

  const [time, setTime]= useState(0);
  const [start, setStart]= useState(false);

  useEffect(() => {    
    setTime(setInterval(() => {
      setTime(prevValue => prevValue + 1);
    }, 1))
    return () => {
      clearInterval(time);
    }
  },[start, time])// useEffect odpali się za każdym razem gdy Start ulegnie zmianie 

  return(
    <div className='Timer'>
      <div>{time}</div>
      <div>
        <button onClick={() => setStart(true)}>Start</button>
        <button onClick={() => setStart(false)}>Stop</button>
        <button onClick={() => setStart(true)}>Wznów</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  )
}

export default Timer;