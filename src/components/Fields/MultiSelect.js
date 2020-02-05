import React, { useState } from 'react';
import Select from 'react-select';

const MultiSelect = ({ register, ...props }) => {
	return (
		<>
			<br />
			<label>{props.label}</label>
			<br />
			<Select
				isMulti
				name={props.name}
				options={props.options}
				className='is-rounded'
				classNamePrefix='select'
				formatGroupLabel={props.grouped ? props.grouped : ''}
				ref={register}
			/>
			<br />
		</>
	);
};

export default MultiSelect;
