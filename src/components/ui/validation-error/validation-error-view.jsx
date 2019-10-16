import React from 'react';
import ValidationErrorWrapper from './validation-error-style';

const ValidationError = props => (
	<>
		<ValidationErrorWrapper>
			{props.text}
		</ValidationErrorWrapper>
	</>
);

export default ValidationError;