import { useState } from 'react';
import './App.css';
import Presets from './components/Sessions/Presets';
import Timer from './components/Timer/Timer'

function App() {
  const [sessionSettings, setSessionSettings] = useState(0);

  const handleUserInput = (input) => {
    setSessionSettings(input);
  }
  return (
    <div className="App">
      {/* <header className="App-header">

      </header> */}
      <Timer sessionSettings={sessionSettings} />
      <Presets handleInput={handleUserInput} />
    </div>
  );
}

export default App;
