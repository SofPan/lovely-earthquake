// import { useEffect, useState } from 'react';
import '../../styles/Timer/AnimatedBorder.css';
import BreathingAnimation from './BreathingAnimation';
import Clock from './Clock';

const AnimatedBorder = (props) => {
  const borderTime = props.settings.duration;
  // const [breathingIn, setBreathingIn] = useState(true);
  // const [timeTest, setTimeTest] = useState(5000);

  // useEffect(() => {
  //   if (timeTest > 0){
  //     const interval = setInterval(() => {
  //       setTimeTest(timeTest - 1000);
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   } else {
  //     setBreathingIn(!breathingIn);
  //     setTimeTest(5000);
  //   }
  // });

  return(
    <div id="clock-border" className="clock-animation">
      <div className="clock-inner">
        <BreathingAnimation settings={props.settings} />
        <div className="clock-countdown">
          <Clock time={props.time} />
        </div>
      </div>
      <div 
        style={{
          animationDuration: borderTime + 'ms'
        }} 
        className='left-half'
      ></div>
      <div 
        style={{
          animationDuration: borderTime + 'ms'
        }} 
        className='right-half'
      ></div>
    </div>
  )
}

export default AnimatedBorder;