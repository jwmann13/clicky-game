import React, { Component } from "react";
import "./index.css"

class Clickable extends Component {

    state = {
        clicked: false
    };

    clickRegister = () => {
      if (!this.state.clicked) {
        this.setState({ clicked: true })
      } else {
        console.log("nop")
      }
    };

    render() {
        return (
            <>
              <button className="btn col" data-clicked={this.state.clicked} onClick={this.clickRegister}>
                <img
                  src={this.props.img}
                  alt={this.props.alt}
                />
              </button>
            </>
          );
    }
};

export default Clickable;
