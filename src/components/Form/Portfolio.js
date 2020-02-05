import React from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../../actions/updateAction';
import { Dropdown, MultiSelect, Form } from '../Fields';

const Portfolio = props => {
	const { register, handleSubmit } = useForm();
	const { action, state } = useStateMachine(updateAction);

	const onSubmit = data => {
		action(data);
		props.history.push('./Result');
	};

	return (
		<Form pushPath='./Result' step={props.location.pathname} title='Portfolio'>
			<MultiSelect ref={register} />
			<label>
				First Name:
				<input
					name='firstName'
					ref={register}
					defaultValue={state.data.firstName}
				/>
			</label>
			<label>
				Last Name:
				<input
					name='lastName'
					ref={register}
					defaultValue={state.data.lastName}
				/>
			</label>
		</Form>
	);
};

export default withRouter(Portfolio);
