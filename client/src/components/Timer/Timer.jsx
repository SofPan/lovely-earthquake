import { useEffect, useState } from "react";

import AnimatedBorder from "./AnimatedBorder";

const Timer = (props) => {
  const [time, setTime] = useState(props.duration || 0);
  // Set to the original user input duration for animated border timing
  const initialTime = props.duration || 0;

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
      <AnimatedBorder time={time} borderTime={initialTime} />
    </div>
  )
}

export default Timer;