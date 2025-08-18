import React from "react";
import PropTypes from "prop-types";

const InputField = props => (
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
         <input
            className="form-control m-2"
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            id={props.name}
            value={props.value}
            onChange={props.onChange}
          />
    </div>
)

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.string.isRequired
}

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: ''
}

export default InputField