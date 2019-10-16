import styled from 'styled-components';
import { colors, widthMap } from 'constants/styles';

const StyledButton = styled.button`
    position: relative;
    width: ${props => widthMap[props.size] || 'auto'};
    cursor: pointer;
    font-family: 'Quicksand', sans-serif;
    font-weight: 800;
    letter-spacing: 1px;
    color: white;
    text-transform: uppercase;
    border-radius: 5px;
    height: 50px;
    line-height: 35px;
    text-align: center;
    outline: 0;
    border: 0;
    background-color: ${colors.primaryGreen};
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.3);
    &:hover {
        background-color: ${colors.darkerGreen};
    }
`;

export default StyledButton;