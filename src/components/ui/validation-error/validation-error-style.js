import styled from 'styled-components';
import { colors } from 'constants/styles';

const ValidationErrorMessage = styled.span`
	color: ${colors.darkRed};
	font-weight: 700;
	font-size: 12px;
	&:first-letter {
		text-transform: uppercase;
	}
`;

export default ValidationErrorMessage;