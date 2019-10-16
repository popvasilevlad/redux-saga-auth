import React from 'react';
import CenteringLayer from './centering-wrapper-style';

const CenteringWrapper = props => (
	<CenteringLayer
		wrapWidth={props.wrapWidth}
		minWrapWidth={props.minWrapWidth}
		wrapHeight={props.wrapHeight}
	>
		<div>{props.children}</div>
	</CenteringLayer>
);

export default CenteringWrapper;