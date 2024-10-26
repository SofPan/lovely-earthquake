import { useEffect, useState } from "react";

import Clock from './Clock';

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    // Maximum timer allowance is 8 hours
    if (time >= 28800000){
      throw new Error("Error: time cannot exceed 8 hours");
    }
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