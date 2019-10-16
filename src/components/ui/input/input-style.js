import styled from 'styled-components';
import { colors, widthMap } from 'constants/styles';

const StyledInput = styled.input`
    width: ${props => widthMap[props.size] || 'auto'}
    font-family: 'Quicksand', sans-serif;
    border: 1px solid ${props => props.error ? colors.primaryRed : colors.whiteGray};
    background-color: ${props => props.error ? colors.lightRed : '#FFF'};
    color: #4c7b8c;
    padding: 0 20px;
    border-radius: 5px;
    height: 50px;
    box-sizing: border-box;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.3);
    &:focus {
        outline: 0;
        border: 1px solid ${colors.fadedGray};
    }
    &::placeholder {
        font-family: 'Quicksand', sans-serif;
    }
    &:before {
        content: '&#x1f512';
    }
`;

export default StyledInput;