import React, { Component } from "react";
import Form from "./form-component";

class Login extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  inputValue = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // for not refreshing page
    console.log(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    return (
      <div className="container">
        <Form
          value={this.state}
          inputValue={this.inputValue}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Login;
