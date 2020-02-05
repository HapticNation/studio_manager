import React from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../../actions/updateAction';
import { Dropdown, Form } from '../Form';
import { focusArea } from '../../data';

const Experience = props => {
	const { register, handleSubmit } = useForm();
	const { action } = useStateMachine(updateAction);
	const onSubmit = data => {
		action(data);
		props.history.push('./Result');
	};

	return (
		<Form
			step={props.location.pathname}
			title='Experience'
			onSubmit={handleSubmit(onSubmit)}
		>
			<Dropdown
				label='Focus Area'
				name='focusArea'
				register={register}
				options={focusArea}
			/>
		</Form>
	);
};

export default withRouter(Experience);
