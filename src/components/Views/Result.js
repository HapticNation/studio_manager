import React from 'react';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../../actions/updateAction';
import { Form } from '../Form';

const selectedValue = arr => {
	let newArr = [];
	arr.forEach(function(obj) {
		newArr.push(obj.value);
	});
	return newArr;
};

const Result = props => {
	const { state } = useStateMachine(updateAction);
	let stored = state.data;
	return (
		<Form step={props.location.pathname} title='Result' endStep>
			<h2>Result:</h2>
			<h3>Profile</h3>
			<p>Name: {`${stored.firstName} ${stored.lastName}`}</p>
			<p>Email: {stored.email}</p>
			<p>Phone: {stored.phone}</p>
			<p>
				{stored.groupPref === 'solo'
					? 'Prefers to work alone'
					: stored.groupPref === 'group'
					? 'Prefers to work in a group'
					: 'Will work alone or with a group'}
			</p>
			<p>Status: {stored.contract}</p>
			<p>Focus: {stored.focusArea}</p>

			<h3>Experience</h3>
			<p>Familiar Genres: {selectedValue(stored.genres)}</p>
			<p>Familiar Instruments: {selectedValue(stored.knownInstruments)}</p>
			<p>Role Experience: {selectedValue(stored.workStrengths)}</p>
			<pre>{JSON.stringify(state.data, null, 2)}</pre>
		</Form>
	);
};

export default Result;
