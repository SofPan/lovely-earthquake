import { useEffect, useState } from "react";

const CustomSessions = (props) => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const getSessions = async () => {
      try {
        const response = await fetch('http://localhost:8080/session', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
          throw new Error('Failed to retrieve sessions');
        }
        const responseData = await response.json();
        setSessions(responseData);
        return responseData;
    
      } catch (error) {
        console.log("error!", error);
      }
    }
    if (!sessions.length){
      getSessions();
    }
  }, [sessions.length]);


  const mapAndFilterSessions = sessions.filter(session => session.session_type !== "PRESET").map(session => {
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
    <>
      <h1>Custom</h1>
      {mapAndFilterSessions}
    </>
  )
}

export default CustomSessions;