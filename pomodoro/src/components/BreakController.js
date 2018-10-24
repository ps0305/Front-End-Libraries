import React, { Component } from "react";

export default class BreakController extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-outline-success"> + </button>
        <span> /BREAKTIME/ </span>
        <button className="btn btn-outline-warning"> - </button>
      </div>
    );
  }
}
