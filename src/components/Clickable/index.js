import React, { Component } from "react";
import "./index.css";

class Clickable extends Component {

  state = {
    clicked: false
  }

  click = () => {
    if (!this.state.clicked) {
      this.setState({ clicked: true })
      this.props.increaseScore();
      this.props.setMessage("correct");
    } else {
      this.props.resetScore();
      this.props.setMessage("incorrect");
    }
    this.props.shuffleClickables();
  };

  render() {
    return (
        <button
          key={this.props.id}
          className="btn col"
          onClick={this.click}
          data-clicked={this.state.clicked}
        >
          <img src={this.props.img} alt={this.props.alt} />
        </button>
    );
  }
}

export default Clickable;
