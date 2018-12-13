import React, { Component } from "react";
import AllHogs from "./AllHogs.js";

export default class Filter extends Component {
  constructor() {
    super();
    this.state = {
      hogs: [],
      filtered: []
    };
  }

  clone = obj => {
    if (obj == null || typeof obj != "object") return obj;

    var temp = new obj.constructor();
    for (var key in obj) temp[key] = this.clone(obj[key]);

    return temp;
  };

  componentDidMount() {
    fetch("http://localhost:3001/hogs")
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.setState(state => {
          state.hogs = result;
          state.filtered = this.clone(result);
        });
      });
  }
  nameSorter = () => {
    function compare(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    }
    this.setState(state => (state.filtered = state.filtered.sort(compare)));
  };

  weightSorter = () => {
    function compare(a, b) {
      if (
        a[
          "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
        ] >
        b[
          "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
        ]
      )
        return -1;
      if (
        a[
          "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
        ] <
        b[
          "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
        ]
      )
        return 1;
      return 0;
    }
    this.setState(state => (state.filtered = state.filtered.sort(compare)));
  };
  greasedOnly = () => {
    this.setState(
      state =>
        (state.filtered = state.filtered.filter(hog => hog.greased === true))
    );
  };

  allHogs = () => {
    this.setState(state => (state.filtered = this.clone(state.hogs)));
  };

  render() {
    return (
      <div className="filterButtons">
        <button className="ui inverted pink button" onClick={this.nameSorter}>
          Sort by Name
        </button>
        <button className="ui inverted pink button" onClick={this.weightSorter}>
          Sort by Weight
        </button>
        <button className="ui inverted pink button" onClick={this.greasedOnly}>
          Greased Only
        </button>
        <button className="ui inverted pink button" onClick={this.allHogs}>
          All hogs
        </button>
        <div className="pigs">
          <AllHogs hogs={this.state.filtered} />
        </div>
      </div>
    );
  }
}
