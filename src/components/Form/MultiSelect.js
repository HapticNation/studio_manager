import React from 'react';
import Select from 'react-select';

const groupStyles = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between'
};

const groupBadgeStyles = {
	backgroundColor: '#EBECF0',
	borderRadius: '2em',
	color: '#172B4D',
	display: 'inline-block',
	fontSize: 12,
	fontWeight: 'normal',
	lineHeight: '1',
	minWidth: 1,
	padding: '0.16666666666667em 0.5em',
	textAlign: 'center'
};

const formatGroupLabel = data => (
	<div style={groupStyles}>
		<span>{data.label}</span>
		<span style={groupBadgeStyles}>{data.options.length}</span>
	</div>
);

const MultiSelect = ({ register, ...props }) => {
	console.log({ multiselectProps: props });
	return (
		<>
			<br />
			<label>{props.label}</label>
			<br />
			<Select
				closeMenuOnSelect={false}
				isMulti
				name={props.name}
				options={props.options}
				className='is-rounded'
				classNamePrefix='select'
				formatGroupLabel={formatGroupLabel}
				onChange={props.onChange}
				value={props.value}
			/>
			<br />
		</>
	);
};

export default MultiSelect;
