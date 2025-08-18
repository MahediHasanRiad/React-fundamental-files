import React from "react";
import PropTypes from "prop-types";

const InputForm = (props) => (
  <div>
    <form>
      <input
        className="form-control"
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </form>
  </div>
);

InputForm.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onchange: PropTypes.func.isRequired
}

InputForm.defaultProps = {
    type: 'text',
    placeholder: ''
}

export default InputForm