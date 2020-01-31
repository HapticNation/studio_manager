import React from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../../actions/updateAction';
import { Steps } from '../Steps';

const Portfolio = props => {
	const { register, handleSubmit } = useForm();
	const { action, state } = useStateMachine(updateAction);

	const onSubmit = data => {
		action(data);
		props.history.push('./Result');
	};

	return (
		<div>
			<Steps step={props.location.pathname} />
			<form onSubmit={handleSubmit(onSubmit)}>
				<h2>Step 1</h2>
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
				<input type='submit' />
				<input type='reset' />
			</form>
		</div>
	);
};

export default withRouter(Portfolio);
