import styled from 'styled-components';

const CenteringLayer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${props => props.wrapHeight || 'auto'}; 
	> * {
		width: ${props => props.wrapWidth || 'auto'}; 
		min-width: ${props => props.minWrapWidth || 'auto'};
		display: flex;
		flex-direction: column;
	}
`

export default CenteringLayer;