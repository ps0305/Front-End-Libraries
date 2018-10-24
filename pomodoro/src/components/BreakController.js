import React, { Component } from "react";

export default class BreakController extends Component {

  handleBreakIncrement = () => {
    this.props.incrementBreakTime()
  }

  handleBreakDecrement = () => {
    this.props.decrementBreakTime()
  }

  render() {
    return (
      <div className="controller">
      <p>BREAK</p>
        <button className="btn btn-outline-success" 
        onClick={this.handleBreakIncrement}> + </button>
        <span> {this.props.breakTime} </span>
        <button className="btn btn-outline-warning" 
        onClick={this.handleBreakDecrement}> - </button>
      </div>
    );
  }
}
