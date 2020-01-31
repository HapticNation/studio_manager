import React from "react";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../actions/updateAction";
import { Steps } from "../Steps";

const Result = props => {
  const { state } = useStateMachine(updateAction);

  return (
    <div>
      <Steps step={state.data.step} />
      <h2>Result:</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default Result;
