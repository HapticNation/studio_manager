import React from 'react';

const Input = ({ register, ...props }) => {
	return (
		<input
			className='input'
			type={props.type}
			placeholder={props.placeholder}
			name={props.name}
			ref={register}
			defaultValue={props.default}
		/>
	);
};

const TextField = props => {
	return (
		<div className='field'>
			<label className='control'>{props.label}</label>
			{props.hasIcon ? (
				<p className='control has-icons-left has-icons-right'>
					<Input {...props} />
					<span className='icon is-small is-left'>
						<i className={`fas fa-${props.iconLeft}`} />
					</span>
					<span className='icon is-small is-right'>
						<i className={`fas fa-${props.iconRight}`} />
					</span>
				</p>
			) : (
				<Input {...props} />
			)}
		</div>
	);
};

export default TextField;
