import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../../actions/updateAction';
import { Dropdown, Form, MultiSelect } from '../Fields';
import { focusArea, strengths, groupedInstruments, genres } from '../../data';

const Experience = props => {
	const { register, handleSubmit, setValue } = useForm();
	const { action, state } = useStateMachine(updateAction);
	const onSubmit = data => {
		action(data);
		console.log('data', data);
		props.history.push('./Portfolio');
	};

	const [instrumentValues, setInstrument] = useState({ selectedOption: [] });
	const [strengthValues, setStrength] = useState({ selectedOption: [] });

	const handleInstrumentChange = selectedOption => {
		setValue('knownInstruments', selectedOption);
		setInstrument({ selectedOption });
	};

	const handleStrengthChange = selectedOption => {
		setValue('workStrengths', selectedOption);
		setStrength({ selectedOption });
	};

	useEffect(() => {
		register({ name: 'knownInstruments' }); // custom register react-select for knownInstruments
		register({ name: 'workStrengths' }); // custom register react-select for workStrength
	}, [register]);

	console.log(state.data);
	console.log('Experience Step: ' + state.data.step);
	return (
		<Form
			pushPath='./Portfolio.js'
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
			<MultiSelect
				label='Strengths'
				options={strengths}
				value={strengthValues.selectedOption}
				onChange={handleStrengthChange}
			/>
			<MultiSelect
				label='Known Instruments'
				options={groupedInstruments}
				value={instrumentValues.selectedOption}
				onChange={handleInstrumentChange}
			/>
		</Form>
	);
};

export default withRouter(Experience);
