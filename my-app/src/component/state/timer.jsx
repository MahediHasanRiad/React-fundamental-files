import React, { Component } from "react";
import "./timer.style.css";


// class-5.6 incomplete 
// class-5.6 incomplete 
// class-5.6 incomplete 
// class-5.6 incomplete 

class Timer extends Component {
  state = {
    timer: 0,
  };

  increment = () => {
    this.setState({ timer: this.state.timer + 1 });
  };
  decrement = () => {
    if (this.state.timer > 0) {
      this.setState({ timer: this.state.timer - 1 });
    }
  };

  intervalId = null

  start = () => {
    if (this.state.timer > 0 && !this.intervalId) {
      
    }
  };

  render() {
    return (
      <div>
        <h1>This is Timer</h1>
        <div>
          <button class="btn" onClick={() => this.decrement()}> - </button>
          <span>{this.state.timer}</span>
          <button class="btn" onClick={() => this.increment()}> + </button>
        </div>
        <div>
          <button class="btn" onClick={() => this.start()}> Start </button>
          <button class="btn">Stop</button>
          <button class="btn">Reset</button>
        </div>
      </div>
    );
  }
}

export default Timer;
