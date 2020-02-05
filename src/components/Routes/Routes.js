import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Experience, Portfolio, Profile, Result } from '../Views';

const Routes = () => {
	return (
		<Router>
			<Route exact path='/' component={Profile} />
			<Route path='/Experience' component={Experience} />
			<Route path='/Portfolio' component={Portfolio} />
			<Route path='/Result' component={Result} />
		</Router>
	);
};

export default Routes;
