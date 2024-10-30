import { useEffect, useState } from "react";

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
    // console.log("session", session);
    return <li key={session.id}>
      {session.session_name} : 
      <button 
        onClick={
          () => {
            props.handleInput({
              duration: session.duration,
              breatheIn: session.breathing_in_time,
              breatheOut: session.breathing_out_time,
              hold: session.hold || 4000
            })
          }}>
          Start Session
      </button>
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