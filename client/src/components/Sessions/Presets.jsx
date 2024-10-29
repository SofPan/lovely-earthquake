import { useEffect, useState } from "react";
import axios from 'axios';

const Presets = (props) => {
  const [presets, setPresets] = useState([]);

  useEffect(() => {
    const getPresets = async () => {
      try {
        const response = await fetch('http://localhost:8080/session', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
          throw new Error('Failed to retrieve sessions');
        }
        const responseData = await response.json();
        setPresets(responseData);
        return responseData;
    
      } catch (error) {
        console.log("error!", error);
      }
    }
    if (!presets.length){
      getPresets();
    }
  }, [presets.length]);


  const mapAndFilterPresets = presets.filter(session => session.session_type !== "CUSTOM").map(session => {
    return <li key={session.id}>
      {session.session_name} : 
      <button onClick={() => {props.handleInput(session.duration)}}>Start Session</button>
    </li>
  });

  return(
    <div>
      <h1>Preset List</h1>
      <ul>
        {mapAndFilterPresets}
      </ul>
    </div>
  )
}

export default Presets;