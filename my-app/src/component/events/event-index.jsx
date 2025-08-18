import React, { Component } from "react";
import classes from "./event.module.css";

class Events extends Component {
  state = {
    inputValue: "",
  };

  // event => is default
  eventHandle = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  focusEvent = (event) => {
    console.log('this is focus event')
  };

  blurEvent = (event) => {
    if(event.target.value){
        console.log('this is blur event')
    }else{
        alert('Input your name..')
    }
  };

  render() {
    return (
      <div>
        <input
          class={classes.input}
          type="text"
          placeholder="Enter your text..."
          onChange={this.eventHandle}
          onFocus={this.focusEvent}
          onBlur={this.blurEvent}
        />
        {/* see the result  */}

        {/* if value = something
        then print welcome...++ */}
        {this.state.inputValue && <h3>Welcome, {this.state.inputValue}</h3>}
      </div>
    );
  }
}

export default Events;
