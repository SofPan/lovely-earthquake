import { useState } from 'react';
import './App.css';
import Presets from './components/Sessions/Presets';
import Timer from './components/Timer/Timer'

function App() {
  const [duration, setDuration] = useState(0);

  const handleUserInput = (input) => {
    setDuration(input);
  }
  return (
    <div className="App">
      {/* <header className="App-header">

      </header> */}
      <Timer duration={duration} />
      <Presets handleInput={handleUserInput} />
    </div>
  );
}

export default App;
