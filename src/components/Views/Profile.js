import React from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../../actions/updateAction';
import { TextField, Dropdown, Form } from '../Form';
import { groupPref, contract, focusArea } from '../../data';

const Profile = props => {
	const { register, handleSubmit } = useForm();
	const { action, state } = useStateMachine(updateAction);
	const onSubmit = data => {
		action(data);
		props.history.push('./Experience');
	};
	return (
		<Form
			step={props.location.pathname}
			title='Profile'
			onSubmit={handleSubmit(onSubmit)}
		>
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
			<Dropdown
				label='Solo/Group Work Preference'
				name='groupPref'
				register={register}
				options={groupPref}
			/>
			<Dropdown
				label='Focus'
				name='focusArea'
				register={register}
				options={focusArea}
			/>
			<Dropdown
				label='Employed or Under Contract?'
				name='contract'
				register={register}
				options={contract}
			/>
		</Form>
	);
};

export default withRouter(Profile);
