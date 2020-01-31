import React from 'react';

const short = arr => {
	if (arr.length) {
		switch (arr[1]) {
			case 1:
				result = 'is-full';
				break;
			case 2:
				result = 'is-half';
				break;
			case 3:
				switch (arr[0]) {
					case 1:
						result = 'is-one-third';
						break;
					case 2:
						result = 'is-two-thirds';
						break;
				}
			case 4:
				switch (arr[0]) {
					case 1:
						result = 'is-one-quarter';
						break;
					case 3:
						result = 'is-three-quarters';
						break;
				}
			case 5:
				switch (arr[0]) {
					case 1:
						result = 'is-one-fifth';
						break;
					case 2:
						result = 'is-two-fifths';
						break;
					case 3:
						result = 'is-three-fifths';
						break;
					case 4:
						result = 'is-four-fifths';
						break;
				}
		}
	} else {
		result = 'is-' + arr;
	}
	return result;
};

export const ColumnGroup = props => {
	return (
		<div className={`columns ${props.centered ? 'is-centered' : ''}`}>
			{props.children}
		</div>
	);
};

export const Column = props => {
	return (
		<div
			className={`column ${short(props.size)} ${props.space} ${props.responsive} ${
				props.gap
			} ${props.extra}`}
		>
			{props.children}
		</div>
	);
};
