import React, { useState } from 'react';
import StyledInput from './input-style';

const Input = React.forwardRef((props, ref) => {
	const [ inputValue, handleEdit ] = useState(props.value || '');

	const handleKeyDown = e => {
		if (e.keyCode === 13 && !!props.onSubmit) props.onSubmit();
	};

	return (
	    <StyledInput
	        placeholder={props.placeholder}
	        size={props.size}
	        type={props.type}
	        onChange ={ e => handleEdit(e.target.value)}
	        onKeyDown={ e => handleKeyDown(e)}
	        value={inputValue}
	        ref={ref}
	        error={props.error}
	    />
	);
});

export default Input;