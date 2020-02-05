import React from 'react';

const Dropdown = ({ register, label, options, name, ...rest }) => {
	return (
		<>
			<br />
			<label>{label}</label>
			<br />
			<div className='select is-rounded'>
				<select name={name} ref={register} {...rest}>
					{options.map(value => (
						<option key={value.id} value={value.val}>
							{value.text}
						</option>
					))}
				</select>
			</div>
			<br />
		</>
	);
};

export default Dropdown;
