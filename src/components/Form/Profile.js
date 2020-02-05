import React from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../../actions/updateAction';
import { TextField, Dropdown } from '../Fields';
import { groupPref, contract, focusArea } from '../../data';
import {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardSubtitle,
	CardContent,
	HeroWithSteps
} from '../Layout';

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
			<HeroWithSteps step={props.location.pathname} />

			<form onSubmit={handleSubmit(onSubmit)}>
				<Card>
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
				</Card>
			</form>
		</>
	);
};

export default withRouter(Profile);
