import React, { Component } from "react";

class Score extends Component {
  state = {
    score: 0,
    message: false
  };

  

  render() {
    return (
      <>
        <li className="nav-item message">Make a click</li>
        <li className="nav-item">Your score: {this.state.score}</li>
      </>
    );
  }
}

export default Score;
