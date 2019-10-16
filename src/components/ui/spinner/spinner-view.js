import React from 'React';
import StyledSpinner from './spinner-style.js';

const { SpinnerWrapper, SpinnerAnimation } = StyledSpinner;

const Spinner = props => (
	<SpinnerWrapper>
		<SpinnerAnimation />
	</SpinnerWrapper>
);

export default Spinner;