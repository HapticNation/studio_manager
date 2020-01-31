import React from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../../actions/updateAction';
import { Steps } from '../Steps';

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
		<div>
			<Steps step={props.location.pathname} />
			<form onSubmit={handleSubmit(onSubmit)}>
				<h2>Experience</h2>
				<label>Specialty</label>
				<select
					name='preferredWork'
					ref={register({ required: true })}
					defaultValue={state.data.preferredWork}
				>
					<option value='Performer'>Performer</option>
					<option value='Writer'>Writer</option>
					<option value='Producer'>Producer</option>
					<option value='Engineer'>Engineer</option>
					<option value='Technician'>Technician</option>
				</select>
				<label>
					<h3>Strengths:</h3>
				</label>
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
					<input
						type='checkbox'
						name='instruments'
						ref={register}
						value='Guitar'
					/>
				</label>
				<label>
					Bass
					<input
						type='checkbox'
						name='instruments'
						ref={register}
						value='Bass'
					/>
				</label>
				<label>
					Vocals
					<input
						type='checkbox'
						name='instruments'
						ref={register}
						value='Vocals'
					/>
				</label>
				<label>
					Drums
					<input
						type='checkbox'
						name='instruments'
						ref={register}
						value='Drums'
					/>
				</label>
				<label>
					Synth
					<input
						type='checkbox'
						name='instruments'
						ref={register}
						value='Synth'
					/>
				</label>
				<label>
					Brass
					<input
						type='checkbox'
						name='instruments'
						ref={register}
						value='Brass'
					/>
				</label>
				<input type='submit' />
			</form>
		</div>
	);
};

export default withRouter(Experience);
