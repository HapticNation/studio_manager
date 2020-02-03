import React from 'react';
import { Steps } from '../Steps';

export const Hero = props => {
	return (
		<section className={`hero ${props.dark ? 'is-dark' : ''}`}>
			{props.children}
		</section>
	);
};

export const HeroHead = props => {
	return <div className='hero-head'>{props.children}</div>;
};

export const HeroTitle = props => {
	return (
		<section
			className={`hero-segment-title ${
				props.textCentered ? 'has-text-centered' : ''
			}`}
		>
			<p className='title'>{props.title}</p>
		</section>
	);
};

export const HeroFoot = props => {
	return (
		<div className='hero-foot'>
			{props.steps ? (
				<section className='hero-segment-steps'>
					<Steps step={props.step} />
				</section>
			) : (
				props.children
			)}
		</div>
	);
};

export const HeroWithSteps = props => {
	return (
		<Hero dark>
			<HeroHead>
				<HeroTitle title='Haptic Nation' textCentered />
			</HeroHead>
			<HeroFoot steps={true} step={props.step} />
		</Hero>
	);
};
