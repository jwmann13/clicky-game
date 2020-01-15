import React, { Component } from "react";
import Clickable from "../Clickable";

import API from "../../utils/API";
import clicks from "../../utils/clicks.json";

class ClickContainer extends Component {
  state = {
    clickables: []
  };

  componentDidMount() {
    this.setState(state => {
      return {
        clickables: this.makeClickables(clicks)
      }
    })
  }

  makeClickables(pics) {
    const clickables = pics.map((d, i) => {
      return (
        <Clickable
          key={d.key}
          img={d.img}
          id={d.key}
          clicked={d.clicked}
          increaseScore={this.props.increaseScore}
          resetScore={this.props.resetScore}
          setMessage={this.props.setMessage}
          registerClick={key => this.registerClick(key)}
          shuffleClickables={() => this.shuffleClickables()}
        />
      );
    });
    return clickables;
  }

  getPictures() {
    API.search()
      .then(response => {
        return response.data;
      })
      .then(data => {
        let newPictures = [];

        for (let i = 0; i < data.length; i++) {
          const picture = data[i];
          newPictures.push({
            key: picture.id,
            img: picture.urls.raw,
            clicked: false
          });
        }

        return newPictures;
      })
      .then(pictures => {
        this.setState({
          pictures
        });
      })
      .then(() => {
        this.setState({
          clickables: this.makeClickables()
        });
      });
  }

  shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  shuffleClickables() {
    let shuffledClicks = this.shuffle(this.state.clickables);
    this.setState({
      clickables: shuffledClicks
    });
  }

  render() {
    // console.log(this.state);

    return (
      <div className="container">
        <div className="row">
          {this.state.clickables.map((c, i) => {
            if ((i + 1) % 5 === 0) {
              const row = (
                <>
                  {c}
                  <RowBreak />
                </>
              );
              return row;
            } else {
              return c;
            }
          })}
        </div>
      </div>
    );
  }
}

function RowBreak(props) {
  return <div className="w-100" />;
}

export default ClickContainer;
