import React from 'react';

const StepItem = props => {
	return (
		<li className={`steps-segment ${props.active}`}>
			<a href={props.path} className='steps-marker'>
				<i className={`fas fa-${props.icon}`} />
				{props.children}
			</a>
		</li>
	);
};

export default StepItem;
