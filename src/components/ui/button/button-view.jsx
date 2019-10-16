import React from 'react';
import StyledButton from './button-style';

const Button = props => (
    <StyledButton
        onClick={props.handleClick}
        size={props.size}
    >
        {props.children || props.text}
    </StyledButton>
);

export default Button;