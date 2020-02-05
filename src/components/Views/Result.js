import React from 'react';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../../actions/updateAction';
import { Form } from '../Form';

const Result = props => {
	const { state } = useStateMachine(updateAction);

	return (
		<Form step={props.location.pathname} title='Result' endStep>
			<h2>Result:</h2>
			<pre>{JSON.stringify(state, null, 2)}</pre>
		</Form>
	);
};

export default Result;
