import React, { Component } from "react";

import "./index.css"

class Score extends Component {
  updateScoreMessage() {
    this.guessMessage("correct");
    this.props.message = "correct";
  }

  render() {
    return (
      <>
        <li key="2" className={`nav-item message ${this.props.message}`} >
          {this.props.message
            ? this.props.message === "correct" ? "That's right!" : "You've already clicked that one"
            : "Click an image below"}
        </li>
        <li key="3" className="nav-item">Your score: {this.props.score}</li>
      </>
    );
  }
}

export default Score;
