import React, { Component } from "react";
import "./index.css";

class Clickable extends Component {
  state = {
    clicked: false
  };

  clickRegister = () => {
    if (!this.state.clicked) {
      this.setState({ clicked: true });
      this.props.increaseScore();
      this.props.setMessage("correct");
    } else {
      this.props.resetScore();
      this.props.setMessage("incorrect");
    }
  };

  render() {
    return (
      <>
        <button
          className="btn col"
          onClick={this.clickRegister}
        >
          <img src={this.props.img} alt={this.props.alt} />
        </button>
      </>
    );
  }
}

export default Clickable;
