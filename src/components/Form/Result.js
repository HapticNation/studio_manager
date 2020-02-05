import React from 'react';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../../actions/updateAction';
import { Steps } from '../Steps';

const Result = props => {
	const { state } = useStateMachine(updateAction);
	state.data.knownInstruments.forEach(function(i) {
		console.log(i);
	});

	return (
		<div>
			<Steps step={props.location.pathname} />
			<h2>Result:</h2>
			<pre>{JSON.stringify(state, null, 2)}</pre>
		</div>
	);
};

export default Result;
