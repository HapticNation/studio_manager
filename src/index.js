import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StateMachineProvider, createStore, DevTool } from 'little-state-machine';
import { Profile, Experience, Portfolio, Result } from './components/Views';
import './styles/scss/styles.scss';

createStore({
	data: {}
});

const App = props => {
	return (
		<StateMachineProvider>
			{process.env.NODE_ENV !== 'production' && <DevTool />}

			<Router>
				<Route exact path='/' component={Profile} />
				<Route path='/Experience' component={Experience} />
				<Route path='/Portfolio' component={Portfolio} />
				<Route path='/Result' component={Result} />
			</Router>
		</StateMachineProvider>
	);
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
