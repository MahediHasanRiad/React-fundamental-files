import React, { Component } from "react";
import InputField from "../login-form/input-component";

class Register extends Component {
  items = {
    name: "",
    email: "",
    password: "",
    birthday: "",
    gender: "",
  };
  state = {
    values: this.items,
    agree: false,
  };

  inputValue = (event) => {
    this.setState({
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value,
      },
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  agreementHandle = event => {
    this.setState({agree: event.target.checked})
  }

  render() {
    return (
      <div>
        <form>
            {/* name field  */}
          <InputField
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name..."
            value={this.state.name}
            onChange={this.inputValue}
          />
          {/* email field  */}
          <InputField
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email..."
            value={this.state.email}
            onChange={this.inputValue}
          />
          {/* password field  */}
          <InputField
            type="text"
            name="password"
            id="password"
            placeholder="************************"
            value={this.state.password}
            onChange={this.inputValue}
          />
          {/* birthday field  */}
          <InputField
            type="date"
            name="birthday"
            id="gender"
            value={this.state.birthday}
            onChange={this.inputValue}
          />
          {/* Gender field  */}
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={this.inputValue}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={this.inputValue}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="Other"
            onChange={this.inputValue}
          />
          Other
          {/* Agreement field   */}
          <input
            type="checkbox"
            name="agree"
            value={this.agreementHandle}
            disabled={!this.agreementHandle}
            checked={this.state.agree}
            onChange={this.agreementHandle}
          />
          I am Agree
          <br />
          {/* submit field  */}
          <button
            type="submit"
            className="mt-2 bg-primary"
            onClick={this.submitHandler}
          >
            Create User
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
