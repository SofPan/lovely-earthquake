import { useEffect, useState } from "react";

import Clock from './Clock';

const Timer = () => {
  const [time, setTime] = useState(15000);

  useEffect(() => {
    if (time > 0){
      const interval = setInterval(() => {
        setTime(time - 1000);
      }, 1000);
      return () => clearInterval(interval);
    }
  });

  return(
    <div>
      <Clock time={time}/>
    </div>
  )
}

export default Timer;