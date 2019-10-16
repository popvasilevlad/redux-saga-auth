import React from 'react';
import ValidationErrorWrapper from './validation-error-style';

const ValidationError = props => (
	<>
		<ValidationErrorWrapper>
			{props.text || props.children}
		</ValidationErrorWrapper>
	</>
);

export default ValidationError;