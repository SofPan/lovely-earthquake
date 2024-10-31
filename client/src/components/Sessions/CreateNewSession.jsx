/* 
  session object
  user_id -> Add at route level, current logged in user
  session_name -> type TEXT
  session_type -> "CUSTOM"
  duration -> Time in milliseconds, 0 for indefinite (Convert from user input)
  breathing_in_time -> TIme in milliseconds, 0 for none
  breathing_out_time -> Time in milliseconds, 0 for none
  hold_time -> Time in milliseconds, 0 for none
  is_saved -> Add at query level, true
  created_at -> Add at route level, NOW()
  updated_at -> Add at route level, NOW()
*/

const CreateNewSession = () => {

  const postFormData = async formValues => {
    try {
      await fetch('http://localhost:8080/session', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValues),
      })
      .then(response => {
        console.log("postFormData response", response);
        response.text()})
      .then(data => console.log("post response data", data));
  
    } catch (error) {
      console.log("error!", error);
    }
  }

  const convertTimeToMilliseconds = (timeType, timeAmount) => {
    return timeType === 'hours' ? (timeAmount * 60 * 60 * 1000) :
          timeType === 'minutes' ? (timeAmount * 60 * 1000) :
          (timeAmount * 1000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = e.target.elements;
    const calculatedDuration = convertTimeToMilliseconds("hours", formData.hours.value) + convertTimeToMilliseconds("minutes", formData.minutes.value);
    const formValues = {
      session_name: formData.sessionName.value,
      duration: calculatedDuration,
      breathing_in_time: convertTimeToMilliseconds("seconds", formData.breatheIn.value),
      breathing_out_time: convertTimeToMilliseconds("seconds", formData.breatheOut.value),
      hold_time: convertTimeToMilliseconds("seconds", formData.holdBreath.value),
    }
    postFormData(formValues);
  }
  return(
    <div>
      <h1>New Session Component</h1>
      <form action="POST" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="sessionName">Session Name</label>
          <input id="sessionName" type="text"/>
        </div>
        <h4>Session Length</h4>
        <div>
          <label htmlFor="hours">Hours</label>
          <input id="hours" type="number" max={7} min={0} placeholder="0"/>
        </div>
        <div>
          <label htmlFor="minutes">Minutes</label>
          <input id="minutes" type="number" max={59} min={0} placeholder="0"/>
        </div>
        <h4>Breath Work (in seconds)</h4>
        <div>
          <label htmlFor="breatheIn">Breathe in</label>
          <input id="breatheIn" type="number" max={15} min={0} />
        </div>
        <div>
          <label htmlFor="breatheOut">Breathe out</label>
          <input id="breatheOut" type="number" max={15} min={0} />
        </div>
        <div>
          <label htmlFor="holdBreath">Hold breath</label>
          <input id="holdBreath" type="number" max={15} min={0} />
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  )
}

export default CreateNewSession;