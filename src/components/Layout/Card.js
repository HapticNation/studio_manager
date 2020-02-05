import React from 'react';

export const CardHeader = props => {
	return <header className='card-header'>{props.children}</header>;
};

export const CardTitle = props => {
	return <p className='card-header-title'>{props.title}</p>;
};

export const CardImage = props => {
	return (
		<div className='card-image'>
			<figure className='image is-flex'>{props.children}</figure>
		</div>
	);
};

export const CardSubtitle = props => {
	return <p className='subtitle'>{props.subtitle}</p>;
};
export const CardContent = props => {
	return (
		<div className='card-content'>
			<div className='content'>{props.children}</div>
		</div>
	);
};

export const CardFooter = props => {
	return (
		<footer className='card-footer level'>
			<div className='container level-right'>{props.children}</div>
		</footer>
	);
};

export const CardSubmit = props => {
	return (
		<CardFooter>
			<div id='button-wrapper' className='control level-item'>
				<button className='button is-primary'>Submit</button>
			</div>
		</CardFooter>
	);
};

export const Card = props => {
	return (
		<div id='card-wrapper' className='container'>
			<div className='card card-form'>{props.children}</div>
		</div>
	);
};
