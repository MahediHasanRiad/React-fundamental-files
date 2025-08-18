import React, { Component } from "react";

class PracticeForm extends Component {
  state = {
    name: "",
    country: "",
    birthday: "",
    gender: "",
    agree: false,
    skills: []
  };

  inputValue = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  checkedValue = (event) => {
    this.setState({ agree: event.target.value });
  };

  skillValue = event => {
    if(event.target.checked){
      this.setState({
        skills: [...this.state.skills, event.target.value]
      })
    }else{
      const skills = this.state.skills.filter(skill => skill !== event.target.value)
      this.setState({skills})
    }
  }

  render() {
    return (
      <div className="container">
        {/* name section  */}
        <input
          type="text"
          name="name"
          placeholder="Enter your name..."
          className="form-control"
          value={this.state.name}
          onChange={this.inputValue}
        />
        {/* country section  */}
        <select
          name="country"
          className="form-select"
          value={this.state.country}
          onChange={this.inputValue}
        >
          <option>Select your Country</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="Nepal">Nepal</option>
        </select>
        {/* birthday section  */}
        <input
          type="date"
          name="birthday"
          className="form-control"
          value={this.state.birthday}
          onChange={this.inputValue}
        />
        <input
          type="radio"
          name="gender"
          className="m-2"
          value="male"
          onChange={this.inputValue}
        />
        Male
        <input
          type="radio"
          name="gender"
          className="m-2"
          value="female"
          onChange={this.inputValue}
        />
        Female
        <input
          type="radio"
          name="gender"
          className="m-2"
          value="other"
          onChange={this.inputValue}
        />
        Other
        {/* skill section  */}
        <div>
          <span><b>Skill: </b></span>
          <input type="checkbox" className="m-2" name="skills" value= 'Python' onChange={this.skillValue}/>Python
          <input type="checkbox" className="m-2" name="skills" value= 'JavaScript' onChange={this.skillValue}/>JavaScript
          <input type="checkbox" className="m-2" name="skills" value= 'GoLang' onChange={this.skillValue}/>GoLang
          <input type="checkbox" className="m-2" name="skills" value= 'Java' onChange={this.skillValue}/>Java
        </div>
        {/* permission section  */}
        <input
          type="checkbox"
          name="agree"
          checked={this.state.agree}
          onChange={this.checkedValue}
        />
        I am agree for this...
        <br />
        <button className="btn" onClick={() => console.log(this.state)}>
          Submit
        </button>
      </div>
    );
  }
}

export default PracticeForm;
