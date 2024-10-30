import { useEffect, useState } from "react";

const BreathingAnimation = props => {
  const [breathing, setBreathing] = useState(true);
  const [duration, setDuration] = useState(0);
  const [timingClass, setTimingClass] = useState('');

  useEffect(() => {
    if (!duration){
      setDuration(props.settings.breatheIn)
    }
  }, [props.settings.breatheIn])

  const chooseClass = () => {
    console.log("breathing state", breathing);
    setTimingClass(breathing === 'hold' ? 'hold' :
          !breathing ? 'breathe-out' :
          'breathe-in')
  }

  useEffect(() => {
    if (duration){
      chooseClass();
      if (breathing === 'hold') {
        const interval = setTimeout(() => {
            setBreathing(false);
          }, props.settings.hold);  
        return () => clearInterval(interval);
      } else if (breathing){
        const interval = setTimeout(() => {
            setBreathing('hold');
          }, props.settings.breatheIn);
  
        return () => clearInterval(interval);
      } else {
        const interval = setTimeout(() => {
          setBreathing(true);
        }, props.settings.breatheOut);

      return () => clearInterval(interval);
      }
    }
  }, [duration, breathing]);


  return(
    <div 
      className={`clock-background ${timingClass}`}
      style={{
        animationDuration: duration + 'ms'
      }}
    >
    </div>
  )
}

export default BreathingAnimation;