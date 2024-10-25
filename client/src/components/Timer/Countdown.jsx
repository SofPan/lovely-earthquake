import { useEffect, useState } from "react";

const Countdown = () => {
  const [time, setTime] = useState(10000);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTimeRemaining = (milliseconds) => {
    setHours(Math.floor((milliseconds / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((milliseconds / 1000 / 60) % 60));
    setSeconds(Math.floor((milliseconds / 1000) % 60));
  }
  useEffect(() => {
    if (time > -1){
      const interval = setInterval(() => {
        getTimeRemaining(time);
        setTime(time - 1000);
      }, 1000);
      return () => clearInterval(interval);
    }
  });
  return(
    <div>
      <h2>
        {hours}:{minutes}:{seconds}
      </h2>
    </div>
  )
}

export default Countdown;