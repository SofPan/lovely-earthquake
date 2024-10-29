import { useEffect, useState } from 'react';
import '../../styles/Timer/AnimatedBorder.css';
import Clock from './Clock';

const AnimatedBorder = (props) => {
  const [breathingIn, setBreathingIn] = useState(true);
  const [timeTest, setTimeTest] = useState(5000);

  useEffect(() => {
    if (timeTest > 0){
      const interval = setInterval(() => {
        setTimeTest(timeTest - 1000);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setBreathingIn(!breathingIn);
      setTimeTest(5000);
    }
  });

  return(
    <div id="clock-border" className="clock-animation">
      <div class="clock-inner">
        <div 
        className={`clock-background ${breathingIn ? 'breathe-in' : 'breathe-out'}`}
        style={{
          animationDuration: '5000ms'
        }}
        >
        </div>
        <div className="clock-countdown">
          <Clock time={props.time} />
        </div>
      </div>
      <div 
        style={{
          animationDuration: props.borderTime + 'ms'
        }} 
        className='left-half'
      ></div>
      <div 
        style={{
          animationDuration: props.borderTime + 'ms'
        }} 
        className='right-half'
      ></div>
    </div>
  )
}

export default AnimatedBorder;