import React from "react";
import InputField from "./input-component";
import PropTypes from "prop-types";

const Form = (props) => (
  <div>
    <form>
      {/* dynamic input field  */}
      <InputField
        name="name"
        // label='Enter your name..'
        type="text"
        placeholder="Enter your name..."
        id="name"
        value={props.name}
        onChange={props.inputValue}
      />
      <InputField
        // label= 'Enter your email: '
        name="email"
        type="email"
        placeholder="enter your email..."
        id="email"
        value={props.email}
        onChange={props.inputValue}
      />
      <InputField
        // label='Enter your Password'
        name="password"
        type="password"
        placeholder="********************"
        id="password"
        value={props.password}
        onChange={props.inputValue}
      />
      <h1 className="btn" onClick={props.handleSubmit}>
        Submit
      </h1>
    </form>
  </div>
);

Form.propTypes = {
  value: PropTypes.object.isRequired,
  inputValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
