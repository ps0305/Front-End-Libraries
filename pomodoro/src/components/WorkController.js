import React, { Component } from "react";

export default class WorkControllers extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-outline-success"> + </button>
        <span> /WORKTIME/ </span>
        <button className="btn btn-outline-warning"> - </button>
      </div>
    );
  }
}
