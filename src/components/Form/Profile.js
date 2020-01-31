import React from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../../actions/updateAction';
import { Steps } from '../Steps';
import { TextField, Dropdown } from '../Fields';

const groupPref = [
	{ id: 'g1', text: 'Select Preference', val: '' },
	{ id: 'g2', text: 'Group and Solo', val: 'both' },
	{ id: 'g3', text: 'Group Only', val: 'group' },
	{ id: 'g4', text: 'Solo Only', val: 'solo' }
];

const Profile = props => {
	const { register, handleSubmit } = useForm();
	const { action, state } = useStateMachine(updateAction);
	const onSubmit = data => {
		action(data);
		props.history.push('./Experience');
		console.log({
			function: 'onSubmit',
			location: 'profile',
			data: data
		});
	};
	console.log(props.location);
	console.log('Profile Step:' + state.data.step);
	return (
		<div>
			<Steps step={props.location.pathname} />
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField
					label='First Name'
					type='text'
					placeholder='First Name'
					name='firstName'
					default={state.data.firstName}
				/>

				<TextField
					label='Last Name'
					type='text'
					placeholder='Last Name'
					name='lastName'
					default={state.data.lastName}
				/>
				<TextField
					label='Email'
					type='email'
					placeholder='Email Address'
					name='email'
					hasIcon={true}
					iconLeft='envelope'
					iconRight='check'
					refPattern={register({ required: true, pattern: /^\S+@\S+$/i })}
					default={state.data.email}
				/>
				<TextField
					label='Phone'
					type='tel'
					placeholder='Phone Number'
					name='phone'
					hasIcon={true}
					iconLeft='phone'
					iconRight='check'
					default={state.data.phone}
				/>

				<h2>Performance/Work Preference</h2>
				<Dropdown name='groupPref' options={groupPref} />
				<div className='select is-rounded'>
					<select name='groupPref2' ref={register}>
						<option value='both'>Group and Solo</option>
						<option value='group'>Group/Team Only</option>
						<option value='solo'>Solo Only</option>
					</select>
				</div>

				<h2>Under Contract?</h2>
				<div className='select is-rounded'>
					<select name='contract' ref={register({ required: true })}>
						<option value='free_agent'>N/A</option>
						<option value='signed'>Signed to Label</option>
						<option value='employed'>Employed in Industry</option>
						<option value='freelance'>Freelance</option>
					</select>
				</div>

				<div className='control'>
					<button className='button is-primary'>Submit</button>
				</div>
			</form>
		</div>
	);
};

export default withRouter(Profile);
