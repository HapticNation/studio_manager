import React from 'react';
import { Card, CardHeader, CardFooter, CardTitle, CardContent } from '../Layout';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../../actions/updateAction';
import { useForm } from 'react-hook-form';
import { HeroWithSteps } from '../Layout';

export const Form = props => {
	const { register, handleSubmit } = useForm();
	const { action, state } = useStateMachine(updateAction);
	const onSubmit = data => {
		action(data);
		console.log('data', data);
		props.history.push(props.pushPath);
	};
	return (
		<>
			<HeroWithSteps step={props.step} />
			<form
				onSubmit={
					props.submitAction ? handleSubmit(onSubmit) : handleSubmit(onSubmit)
				}
			>
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
