import React from 'react';
import BackgroundWrapper from './background-style.js';

const Spinner = props => (
	<BackgroundWrapper>
		{props.children}
	</BackgroundWrapper>
);

export default Spinner;