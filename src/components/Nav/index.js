import React, { Component } from "react";
import "./index.css";
import Score from "../Score";

class Nav extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark d-block">
          <ul className="navbar-nav d-flex justify-content-between flex-row">
            <li className="nav-item"> Clickyman</li>
            <Score />
          </ul>
        </nav>
      </>
    );
  }
}

export default Nav;
