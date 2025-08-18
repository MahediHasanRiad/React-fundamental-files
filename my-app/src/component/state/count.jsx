import React, { Component } from "react";

class Count extends Component {
  // must use "state" for increase value
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            // this.setState for increase value
            this.setState({ count: this.state.count + 1 });
          }}>
          Increase
        </button>
      </div>
    );
  }
}

export default Count;
