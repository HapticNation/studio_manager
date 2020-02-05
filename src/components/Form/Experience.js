import React from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../../actions/updateAction';
import { Dropdown, Form, MultiSelect } from '../Fields';
import { focusArea, strengths, groupedInstruments, genres } from '../../data';

const groupStyles = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between'
};
const groupBadgeStyles = {
	backgroundColor: '#EBECF0',
	borderRadius: '2em',
	color: '#172B4D',
	display: 'inline-block',
	fontSize: 12,
	fontWeight: 'normal',
	lineHeight: '1',
	minWidth: 1,
	padding: '0.16666666666667em 0.5em',
	textAlign: 'center'
};

const formatGroupLabel = data => (
	<div style={groupStyles}>
		<span>{data.label}</span>
		<span style={groupBadgeStyles}>{data.options.length}</span>
	</div>
);

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
			<br />
			<label>Strengths</label>
			<MultiSelect name='workStrengths' options={strengths} register={register} />
			<br />
			<label>Known Instruments</label>
			<MultiSelect
				name='instruments'
				options={groupedInstruments}
				grouped={formatGroupLabel}
				register={register}
			/>
		</Form>
	);
};

export default withRouter(Experience);
