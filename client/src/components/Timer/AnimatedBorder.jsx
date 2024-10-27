import '../../styles/Timer/AnimatedBorder.css';

const AnimatedBorder = () => {
  return(
    <div id="clock-border" className="clock-animation">
      <div className="clock-inner">00:00:00</div>
      <div className='left-half'></div>
      <div className='right-half'></div>
    </div>
  )
}

export default AnimatedBorder;