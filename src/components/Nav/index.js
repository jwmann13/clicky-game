import React, { Component } from "react";
import "./index.css";
import "./scroll"
import Score from "../Score";

class Nav extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark d-block sticky-top" id="header">
          <ul className="navbar-nav d-flex justify-content-between flex-row">
            <li key="1" className="nav-item">Clickyman</li>
            <Score score={this.props.score} message={this.props.message}/>
          </ul>
        </nav>
      </>
    );
  }
}

export default Nav;
