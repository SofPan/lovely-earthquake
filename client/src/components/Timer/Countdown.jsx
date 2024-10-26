import { useEffect, useState } from "react";

const Countdown = props => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTimeRemaining = (milliseconds) => {
    setHours(Math.floor((milliseconds / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((milliseconds / 1000 / 60) % 60));
    setSeconds(Math.floor((milliseconds / 1000) % 60));
  }
  useEffect(() => {
    getTimeRemaining(props.time);
  }, [props.time]);

  return(
    <div>
      <h1>Countdown Timer Component</h1>
      <h2>
        {hours}:{minutes}:{seconds}
      </h2>
    </div>
  )
}

export default Countdown;