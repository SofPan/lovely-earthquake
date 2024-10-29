import { useEffect, useState } from "react";

const Clock = props => {
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
      <h2>
        <span id="hours">
          {hours < 10 ? "0" + hours : hours}
        </span>
        :
        <span id="minutes">
        {minutes < 10 ? "0" + minutes : minutes}
        </span>
        :
        <span id="seconds">
        {seconds < 10 ? "0" + seconds : seconds}  
        </span>
      </h2>
    </div>
  )
}

export default Clock;