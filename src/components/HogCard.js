import React, { Component } from "react";

export default class HogCard extends Component {
  constructor() {
    super();
    this.state = {
      displayDetails: false,
      hidden: false
    };
  }
  toggleDisplayDetails = () => {
    this.setState(state => (state.displayDetails = !state.displayDetails));
    console.log(this.state);
  };

  render() {
    if (!this.state.hidden) {
      if (this.state.displayDetails) {
        return (
          <div
            className="ui four wide column card"
            onClick={this.toggleDisplayDetails}
          >
            <img src={this.props.hog.image} className="image" />
            <h3>{this.props.hog.name}</h3>

            <h4>Specialty: {this.props.hog.specialty}</h4>
            {this.props.hog.greased ? (
              <h4>Is greased</h4>
            ) : (
              <h4>Not greased</h4>
            )}
            <h4>
              Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door
              Refrigerator with Thru-the-Door Ice and Water:{" "}
              {
                this.props.hog[
                  "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
                ]
              }
            </h4>
            <h4>
              Highest medal achieved: {this.props.hog["highest medal achieved"]}
            </h4>
            <button
              className="ui inverted pink button"
              onClick={() =>
                this.setState(state => (state.hidden = !state.hidden))
              }
            >
              Hide this hog
            </button>
          </div>
        );
      } else {
        return (
          <div
            className="ui four wide column card"
            onClick={this.toggleDisplayDetails}
          >
            <img src={this.props.hog.image} className="image" />
            <h3>{this.props.hog.name}</h3>
          </div>
        );
      }
    } else {
      return null;
    }
  }
}
