import React from 'react';
import { StepItem } from './';

const Steps = props => {
	return (
		<ul className='steps is-horizontal is-narrow is-centered has-content-centered'>
			<StepItem
				active={props.step === '/' ? 'is-active' : ''}
				icon='user-astronaut'
			/>
			<StepItem
				active={props.step === '/Experience' ? 'is-active' : ''}
				icon='map-signs'
			/>
			<StepItem
				active={props.step === '/Portfolio' ? 'is-active' : ''}
				icon='upload'
			/>
			<StepItem active={props.step === '/Result' ? 'is-active' : ''} icon='check' />
		</ul>
	);
};

export default Steps;
