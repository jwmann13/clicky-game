import React, { Component } from "react";
import Clickable from "../Clickable";

import clicks from "../../clicks.json";

class ClickContainer extends Component {
  state = {
    clickables: clicks
  };

  generateRows() {
    let content = [];
    this.state.clickables.forEach((c, i) => {
      content.push(<Clickable img={c.img} alt={c.alt} />);
      if ((i + 1) % 4 === 0) {
        content.push(<div className="w-100"></div>);
      }
    });

    return content;
  }

  render() {
    return (
      <div className="container">
        <div className="row">{this.generateRows()}</div>
      </div>
    );
  }
}

export default ClickContainer;
