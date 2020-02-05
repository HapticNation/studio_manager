import React from 'react';
import {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardContent,
	CardSubmit
} from '../Layout';
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

					{props.endStep ? (
						''
					) : (
						<CardFooter>
							<CardSubmit />
						</CardFooter>
					)}
				</Card>
			</form>
		</>
	);
};
