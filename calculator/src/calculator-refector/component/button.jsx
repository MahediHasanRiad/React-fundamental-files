import React from "react";
import PropTypes from "prop-types";

const Button = ({onClick, text}) => {

    const style = {
        padding: '0.25rem 1rem',
        borderRadius: '2px',
        border: '1px solid gray'
    }

    return(
        <button
            style={style} 
            onClick={onClick}
            >
            {text}
        </button>
    )
}

Button.propTypes = {
    onclick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

export default Button;