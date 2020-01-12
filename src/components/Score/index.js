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
        <li className={`nav-item message ${this.props.message}`} >
          {this.props.message
            ? this.props.message === "correct" ? "That's right!" : "You've already clicked that one"
            : "Click an image below"}
        </li>
        <li className="nav-item">Your score: {this.props.score}</li>
      </>
    );
  }
}

export default Score;
