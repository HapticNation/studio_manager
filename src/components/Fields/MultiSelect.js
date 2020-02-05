import React, { useState } from 'react';
import Select from 'react-select';

const MultiSelect = ({ register, ...props }) => {
	return (
		<Select
			isMulti
			name={props.name}
			options={props.options}
			className='is-rounded'
			classNamePrefix='select'
			ref={register}
		/>
	);
};

export default MultiSelect;
