import React from 'react';
import './Button.css';

const isOperator = val => {
    return !isNaN(val) || val === "." || val === "C" || val === "%" || val === "⌫"; 
}

export const Button = props => (
    <div className={`button-wrapper ${
            isOperator(props.children) ? null : "operator"}`}
                onClick={() => props.handleClick(props.children)}>
                    {props.children}
        </div>
);

export const ClearButton = props => (
    <div className="clear-btn" onClick={props.handleClear}>
        {props.children}
    </div>
);

export const PlusMinus = props => (
    <div className="plus-minus" onClick={props.handlePosNeg}>
        {props.children}
    </div>
);

export const BackSpace = props => (
    <div className="backspace" onClick={props.handleBackSpace}>
        {props.children}
    </div>
);

