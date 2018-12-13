import React, { Component } from "react";
import HogCard from "./HogCard";

export default class AllHogs extends Component {
  render() {
    return (
      <div className="ui grid container cards">
        {this.props.hogs.map(hog => (
          <HogCard hog={hog} />
        ))}
      </div>
    );
  }
}
