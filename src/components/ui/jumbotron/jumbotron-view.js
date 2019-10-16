import React from 'react';
import StyledJumbotron from './jumbotron-style';

const Jumbotron = () => {
	const { Wrapper, Title, Subtitle } = StyledJumbotron;

	return (
		<Wrapper>
			<Title>Hello!</Title>
			<Subtitle>
				Insert your credentials and let the magic begin. Sort of.
			</Subtitle>
		</Wrapper>
	);
};

export default Jumbotron;