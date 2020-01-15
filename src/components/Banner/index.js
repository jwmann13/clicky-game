import React, { Component } from "react";

import "./index.css"

class Banner extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid d-flex">
        <div className="container flex-column">
          <h1 className="display-3 align-items-center">Make a Click</h1>
          <h2 className="display-5">Click on the images below and watch your score go up. <br/> But watch out! <br/>If you click the same image twice the game will be over and your score will be reset.</h2>
        </div>
      </div>
    );
  }
}

export default Banner;
