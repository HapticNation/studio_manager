import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../actions/updateAction";
import { Steps } from "../Steps";

const Profile = props => {
  const { register, handleSubmit } = useForm();
  const { action, state } = useStateMachine(updateAction);
  const onSubmit = data => {
    action({
      ...data,
      step: 2
    });
    props.history.push("./Experience");
  };

  console.log("Profile Step:" + state.data.step);
  return (
    <div>
      <Steps step={state.data.step} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label className="control">First Name</label>
          <input
            className="input"
            type="text"
            placeholder="First Name"
            name="firstName"
            ref={register}
          />
        </div>
        <div className="field">
          <label className="control">Last Name</label>
          <input
            className="input"
            type="text"
            placeholder="Last Name"
            name="lastName"
            ref={register}
            defaultValue={state.data.lastName}
          />
        </div>

        <div className="field">
          <label className="control">Email</label>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="Email"
              name="email"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              defaultValue={state.data.email}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check" />
            </span>
          </p>
        </div>
        <div className="field">
          <label className="control">Phone</label>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="tel"
              placeholder="Phone"
              name="phone"
              ref={register({ required: true, minLength: 6, maxLength: 12 })}
              defaultValue={state.data.phone}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-phone" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check" />
            </span>
          </p>
        </div>

        <h2>Performance/Work Preference</h2>
        <div className="select is-rounded">
          <select name="groupPref" ref={register({ required: true })}>
            <option value="both">Group and Solo</option>
            <option value="group">Group/Team Only</option>
            <option value="solo">Solo Only</option>
          </select>
        </div>

        <h2>Under Contract?</h2>
        <div className="select is-rounded">
          <select name="contract" ref={register({ required: true })}>
            <option value="free_agent">N/A</option>
            <option value="signed">Signed to Label</option>
            <option value="employed">Employed in Industry</option>
            <option value="freelance">Freelance</option>
          </select>
        </div>

        <div className="control">
          <button className="button is-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Profile);
