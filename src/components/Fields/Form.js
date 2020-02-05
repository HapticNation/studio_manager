import React from 'react';
import { Card, CardHeader, CardFooter, CardTitle, CardContent } from '../Layout';
import { useStateMachine } from 'little-state-machine';
import { withRouter } from 'react-router-dom';
import updateAction from '../../actions/updateAction';
import { useForm } from 'react-hook-form';
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
						<div className='control'>
							<button className='button is-primary'>Submit</button>
						</div>
					</CardFooter>
				</Card>
			</form>
		</>
	);
};
