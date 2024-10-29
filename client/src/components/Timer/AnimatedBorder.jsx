import '../../styles/Timer/AnimatedBorder.css';
import Clock from './Clock';

const AnimatedBorder = (props) => {
  return(
    <div id="clock-border" className="clock-animation">
      <div className="clock-inner">
        <Clock time={props.time} />
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