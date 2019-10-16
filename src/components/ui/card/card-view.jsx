import React from 'react';
import CardWrapper from './card-style';

const Card = props => (
	<CardWrapper>
		{props.children}
	</CardWrapper>
);

export default Card;