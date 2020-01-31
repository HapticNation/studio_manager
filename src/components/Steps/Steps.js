import React from "react";
import { StepItem } from "./";

const Steps = props => {
  return (
    <ul className="steps is-horizontal is-narrow is-centered has-content-centered">
      <StepItem
        active={props.step === 1 ? "is-active" : ""}
        icon="user-astronaut"
      />
      <StepItem active={props.step === 2 ? "is-active" : ""} icon="map-signs" />
      <StepItem active={props.step === 3 ? "is-active" : ""} icon="upload" />
      <StepItem active={props.step === 4 ? "is-active" : ""} icon="check" />
    </ul>
  );
};

export default Steps;
