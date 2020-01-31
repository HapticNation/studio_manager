import React from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../../actions/updateAction';
import { Steps } from '../Steps';
import { TextField, Dropdown } from '../Fields';

import {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardImage,
	CardSubtitle,
	CardContent
} from '../Layout';

const groupPref = [
	{ id: 'g1', text: 'Select Preference', val: '' },
	{ id: 'g2', text: 'Group and Solo', val: 'both' },
	{ id: 'g3', text: 'Group Only', val: 'group' },
	{ id: 'g4', text: 'Solo Only', val: 'solo' }
];

const contract = [
	{ id: 'c1', text: 'Select Status', val: '' },
	{ id: 'c2', text: 'Unsigned', val: 'unsigned' },
	{ id: 'c3', text: 'Signed', val: 'signed' },
	{ id: 'c4', text: 'Employed', val: 'employed' },
	{ id: 'c5', text: 'Freelance', val: 'freelance' }
];

const Profile = props => {
	const { register, handleSubmit } = useForm();
	const { action, state } = useStateMachine(updateAction);
	const onSubmit = data => {
		action(data);
		console.log('data', data);
		props.history.push('./Experience');
	};
	return (
		<>
			<section className='hero is-dark '>
				<div className='hero-head'>
					<section className='hero-segment-title has-text-centered'>
						<p className='title'>Haptic Nation</p>
					</section>
				</div>

				<div className='hero-foot'>
					<section className='hero-segment-steps'>
						<Steps step={props.location.pathname} />
					</section>
				</div>
			</section>

			<Card>
				<form onSubmit={handleSubmit(onSubmit)}>
					<CardHeader>
						<CardTitle title='Profile' />
					</CardHeader>

					<CardContent>
						<TextField
							register={register}
							label='First Name'
							type='text'
							placeholder='First Name'
							name='firstName'
							default={state.data.firstName}
						/>

						<TextField
							register={register}
							label='Last Name'
							type='text'
							placeholder='Last Name'
							name='lastName'
							default={state.data.lastName}
						/>
						<TextField
							register={register}
							label='Email'
							type='email'
							placeholder='Email Address'
							name='email'
							hasIcon={true}
							iconLeft='envelope'
							iconRight='check'
							default={state.data.email}
						/>
						<TextField
							register={register}
							label='Phone'
							type='tel'
							placeholder='Phone Number'
							name='phone'
							hasIcon={true}
							iconLeft='phone'
							iconRight='check'
							default={state.data.phone}
						/>

						<CardSubtitle subtitle='Performance/Work Preference' />
						<Dropdown
							name='groupPref'
							register={register}
							options={groupPref}
						/>
						<Dropdown
							name='contract'
							register={register}
							options={contract}
						/>
					</CardContent>
					<CardFooter>
						<div className='control'>
							<button className='button is-primary'>Submit</button>
						</div>
					</CardFooter>
				</form>
			</Card>
		</>
	);
};

export default withRouter(Profile);
