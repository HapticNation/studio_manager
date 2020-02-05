import React from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../../actions/updateAction';
import { Dropdown, Form, MultiSelect } from '../Fields';
import { focusArea, strengths, groupedInstruments, genres } from '../../data';

const Experience = props => {
	const { register, handleSubmit } = useForm();
	const { action, state } = useStateMachine(updateAction);
	const onSubmit = data => {
		action(data);
		console.log('data', data);
		props.history.push('./Portfolio');
	};
	console.log(state.data);
	console.log('Experience Step: ' + state.data.step);
	return (
		<Form
			pushPath='./Portfolio.js'
			step={props.location.pathname}
			title='Experience'
			onSubmit={handleSubmit(onSubmit)}
		>
			>
			<Dropdown
				label='Focus Area'
				name='focusArea'
				register={register}
				options={focusArea}
			/>
			<MultiSelect name='workStrengths' options={strengths} register={register} />
			<label>
				<h3>Instruments:</h3>
			</label>
			<label>
				Guitar
				<input type='checkbox' name='instruments' ref={register} value='Guitar' />
			</label>
			<label>
				Bass
				<input type='checkbox' name='instruments' ref={register} value='Bass' />
			</label>
			<label>
				Vocals
				<input type='checkbox' name='instruments' ref={register} value='Vocals' />
			</label>
			<label>
				Drums
				<input type='checkbox' name='instruments' ref={register} value='Drums' />
			</label>
			<label>
				Synth
				<input type='checkbox' name='instruments' ref={register} value='Synth' />
			</label>
			<label>
				Brass
				<input type='checkbox' name='instruments' ref={register} value='Brass' />
			</label>
		</Form>
	);
};

export default withRouter(Experience);
