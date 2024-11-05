import { useState } from 'react';
import './App.css';
import Timer from './components/Timer/Timer'
import SessionsList from './components/Sessions/SessionsList';
import CreateNewSession from './components/Sessions/CreateNewSession';
import LoginForm from './components/forms/LoginForm'

function App() {
  const [sessionSettings, setSessionSettings] = useState(0);

  const handleUserInput = (input) => {
    setSessionSettings(input);
  }
  return (
    <div className="App">
      {/* <header className="App-header">

      </header> */}
      {/* <Timer sessionSettings={sessionSettings} />
      <SessionsList handleInput={handleUserInput} />
      <CreateNewSession /> */}
      <LoginForm />
    </div>
  );
}

export default App;
