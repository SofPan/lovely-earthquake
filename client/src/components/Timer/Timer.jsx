import { useEffect, useState } from "react";

import AnimatedBorder from "./AnimatedBorder";

const Timer = (props) => {
  const [time, setTime] = useState(0);
  // Set to the original user input duration for animated border timing

  useEffect(() => {
    setTime(props.sessionSettings.duration || 0)
  }, [props.sessionSettings.duration]);
  
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
  }, [time]);

  return(
    <div>
      <AnimatedBorder settings={props.sessionSettings} time={time} borderTime={props.sessionSettings.duration} />
    </div>
  )
}

export default Timer;