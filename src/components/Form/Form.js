import React from 'react';
import { Card, CardHeader, CardFooter, CardTitle, CardContent } from '../Layout';
import { HeroWithSteps } from '../Layout';

export const Form = props => {
	return (
		<>
			<HeroWithSteps step={props.step} />
			<form onSubmit={props.onSubmit}>
				<Card>
					<CardHeader>
						<CardTitle title={props.title} />
					</CardHeader>

					<CardContent>{props.children}</CardContent>

					<CardFooter>
						{props.endStep ? (
							''
						) : (
							<div className='control'>
								<button className='button is-primary'>Submit</button>
							</div>
						)}
					</CardFooter>
				</Card>
			</form>
		</>
	);
};
