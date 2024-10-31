import CustomSessions from "./CustomSessions";
import Presets from "./Presets";

const SessionsList = props => {
  return(
      <ul>
        <Presets handleInput={props.handleInput}/>
        <CustomSessions handleInput={props.handleInput} />
      </ul>
  )
}

export default SessionsList;