import React from 'react';
import "./Button.css";

const Button = ({ content, type, buttonClick, id }) => {
    return (
        <div
            className={`Button ${content === '0' ? 'zero' : ''} ${type || ''}`}
            onClick={buttonClick}>{content}
        </div>
    );
};

export default Button;
