import React from 'react';
import { useForm } from 'react-hook-form';

const TextField = props => {
	const Input = () => {
		const { register } = useForm();
		return (
			<input
				className='input'
				type={props.type}
				placeholder={props.placeholder}
				name={props.name}
				ref={
					props.type === 'email'
						? register({ required: true, pattern: /^\S+@\S+$/i })
						: props.type === 'tel'
						? register({
								required: true,
								minLength: 6,
								maxLength: 12
						  })
						: register
				}
				defaultValue={props.default}
			/>
		);
	};
	return (
		<div className='field'>
			<label className='control'>{props.label}</label>
			{props.hasIcon ? (
				<p className='control has-icons-left has-icons-right'>
					<Input />
					<span className='icon is-small is-left'>
						<i className={`fas fa-${props.iconLeft}`} />
					</span>
					<span className='icon is-small is-right'>
						<i className={`fas fa-${props.iconRight}`} />
					</span>
				</p>
			) : (
				<Input />
			)}
		</div>
	);
};

export default TextField;
