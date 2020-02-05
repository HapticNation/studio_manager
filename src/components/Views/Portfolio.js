import React from 'react';
import { withRouter } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';
import { useForm } from 'react-hook-form';
import updateAction from '../../actions/updateAction';
import { Form } from '../Form';
import { Upload } from '../Files';

const Experience = props => {
	const { handleSubmit } = useForm();
	const { action } = useStateMachine(updateAction);
	const onSubmit = data => {
		action(data);
		props.history.push('./Result');
	};

	return (
		<Form
			step={props.location.pathname}
			title='Portfolio'
			onSubmit={handleSubmit(onSubmit)}
		>
			<Upload />
		</Form>
	);
};

export default withRouter(Experience);
