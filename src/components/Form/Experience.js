import React from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../../actions/updateAction';
import { Steps } from '../Steps';
import { Dropdown } from '../Fields';
import { Form } from '../Fields';

const focusArea = [
	{ id: 'f1', text: 'Select Focus Area', val: '' },
	{ id: 'f2', text: 'Performer', val: 'Performer' },
	{ id: 'f3', text: 'Writer', val: 'Writer' },
	{ id: 'f4', text: 'Producer', val: 'Producer' },
	{ id: 'f5', text: 'Engineer', val: 'Engineer' },
	{ id: 'f6', text: 'Technician', val: 'Technician' }
];

const Experience = props => {
	const { register, handleSubmit } = useForm();
	const { action, state } = useStateMachine(updateAction);
	const onSubmit = data => {
		action(data);
		props.history.push('./Portfolio');
	};
	console.log(state.data);
	console.log('Experience Step: ' + state.data.step);
	return (
		<Form pushPath='./Portfolio.js' step={props.location.pathname} title='Experience'>
			<Dropdown
				label='Focus Area'
				name='focusArea'
				register={register}
				options={focusArea}
			/>

			<label>Strengths:</label>
			<br />
			<label>
				Performer
				<input
					type='checkbox'
					name='workStrengths'
					ref={register}
					value='Performer'
				/>
			</label>
			<label>
				Writer
				<input
					type='checkbox'
					name='workStrengths'
					ref={register}
					value='Writer'
				/>
			</label>
			<label>
				Producer
				<input
					type='checkbox'
					name='workStrengths'
					ref={register}
					value='Producer'
				/>
			</label>
			<label>
				Engineer
				<input
					type='checkbox'
					name='workStrengths'
					ref={register}
					value='Engineer'
				/>
			</label>
			<label>
				Technician
				<input
					type='checkbox'
					name='workStrengths'
					ref={register}
					value='Technician'
				/>
			</label>
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
