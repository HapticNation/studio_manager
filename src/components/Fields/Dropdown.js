import React, { useEffect } from 'react';

const Dropdown = ({ register, options, name, ...rest }) => {
	useEffect(() => {
		console.log('StateChange', 'Bloop');
	}, [options]);
	return (
		<div className='select is-rounded'>
			<select name={name} ref={register} {...rest}>
				{options.map(value => (
					<option key={value.id} value={value.val}>
						{value.text}
					</option>
				))}
			</select>
		</div>
	);
};

export default Dropdown;
