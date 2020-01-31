import React from 'react';
import { StepItem } from './';

const Steps = props => {
	return (
		<ul className='steps is-horizontal'>
			<StepItem
				path='/'
				active={props.step === '/' ? 'is-active' : ''}
				icon='user-astronaut'
			/>
			<StepItem
				path='/Experience'
				active={props.step === '/Experience' ? 'is-active' : ''}
				icon='map-signs'
			/>
			<StepItem
				path='/Portfolio'
				active={props.step === '/Portfolio' ? 'is-active' : ''}
				icon='upload'
			/>
			<StepItem
				path='/Result'
				active={props.step === '/Result' ? 'is-active' : ''}
				icon='check'
			/>
		</ul>
	);
};

export default Steps;
