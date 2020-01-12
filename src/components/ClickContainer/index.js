import React, { Component } from "react";
import Clickable from "../Clickable";

import API from "../../utils/API";

class ClickContainer extends Component {
  state = {
    pictures: [],
    clickables: []
  };

  componentDidMount() {
    this.getPictures();
  }

  getPictures() {
    API.search().then(response => {
      console.log(response);
      this.setState({ pictures: response.data });
    });
  }

  shuffle() {}

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.pictures.map((d, i) => {
            console.log(d);
            if ((i + 1) % 5 === 0) {
              return (
                <>
                  <Clickable
                    img={d.urls.raw}
                    key={d.id}
                    increaseScore={this.props.increaseScore}
                    resetScore={this.props.resetScore}
                    setMessage={this.props.setMessage}
                  />
                  <div className="w-100" key={i}></div>
                </>
              );
            } else {
              return (
                <Clickable
                  img={d.urls.raw}
                  key={d.id}
                  increaseScore={this.props.increaseScore}
                  resetScore={this.props.resetScore}
                  setMessage={this.props.setMessage}
                />
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default ClickContainer;
