import { useEffect, useState } from "react";

import Countdown from './Countdown';

const Timer = () => {
  const [time, setTime] = useState(10000);

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
      {time}
      <Countdown time={time}/>
    </div>
  )
}

export default Timer;