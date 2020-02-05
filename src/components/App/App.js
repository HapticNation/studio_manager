import React from 'react';
import { StateMachineProvider, createStore, DevTool } from 'little-state-machine';
import { Routes } from '../Routes';

createStore({
	data: {}
});

const App = props => {
	return (
		<StateMachineProvider>
			{process.env.NODE_ENV !== 'production' && <DevTool />}
			<Routes />
		</StateMachineProvider>
	);
};

export default App;
