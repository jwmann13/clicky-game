import React, { Component } from "react";
import Nav from "../Nav";
import Banner from "../Banner";
import ClickContainer from "../ClickContainer";

class Wrapper extends Component {
  state = {
    score: 0,
    message: ""
  };

  increaseScore() {
    this.setState(state => {
      return { score: state.score + 1 };
    });
  }

  resetScore() {
    this.setState(state => {
      return { score: 0 };
    });
  }

  setMessage(newMsg) {
    this.setState(state => {
      return { message: newMsg };
    });
  }

  render() {
    return (
      <div>
        <Nav
          score={this.state.score}
          message={this.state.message}
        />
        <Banner />
        <ClickContainer
          increaseScore={() => this.increaseScore()}
          resetScore={() => this.resetScore()}
          setMessage={(msg) => this.setMessage(msg)}
        />
      </div>
    );
  }
}

export default Wrapper;
