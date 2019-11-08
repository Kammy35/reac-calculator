import React from 'react';
import './Button.css';

const isOperator = val => {
    return !isNaN(val) || val ==="." || val ==="=";
    /*The isNaN() function determines whether a value is an illegal number (Not-a-Number).
    This function returns true if the value equates to NaN. Otherwise it returns false.*/
};

//functional component//
export const Button = props => (
    <div className={`button-wrapper ${isOperator(props.children) ? null : "operator"}`}
        onClick={() => props.handleClick(props.children)}>
        {props.children}
    </div>
);



