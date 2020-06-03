import React from 'react';

const Button = ({ text, button_class }) => {
    return (
        <button className={button_class} type="button">{text}</button>
    );
}

export default Button;