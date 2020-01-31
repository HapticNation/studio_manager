import React from "react";

const StepItem = props => {
  console.log(props.active);
  return (
    <li className={`steps-segment ${props.active}`}>
      <span className="steps-marker">
        <i className={`fas fa-${props.icon}`} />
        {props.children}
      </span>
    </li>
  );
};

export default StepItem;
