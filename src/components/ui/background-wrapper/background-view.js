import React from 'React';
import BackgroundWrapper from './background-style.js';

const Spinner = props => (
	<BackgroundWrapper>
		{props.children}
	</BackgroundWrapper>
);

export default Spinner;