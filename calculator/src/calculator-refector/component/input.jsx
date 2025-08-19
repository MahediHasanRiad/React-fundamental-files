import React from "react";
import PropTypes from "prop-types";

const Input = ({type, name, value, onChange}) => {
    // internal css
    const style = {
        padding: '5px',
        borderRadius: '2px',
        border: '1px solid gray'
    }

    return(
        <input 
            style={style}
            type={type} 
            name={name} 
            value={value} 
            onChange={onChange} 
        />
    )
}

Input.propTypes = {
    type: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.shape({
        a: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired
    }).isRequired,
    onChange: PropTypes.func.isRequired
}

export default Input;