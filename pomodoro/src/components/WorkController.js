import React, { Component } from "react";

export default class WorkControllers extends Component {

  handleWorkIncrement = () => {
    this.props.incrementWorkTime()
  }

  handleWorkDecrement = () => {
    this.props.decrementWorkTime()
  }

  render() {
    return (
      <div className="controller">
      <p>SESSION</p>
        <button className="btn btn-outline-success"
        onClick={this.handleWorkIncrement}> + </button>
        <span> {this.props.workTime} </span>
        <button className="btn btn-outline-warning"
        onClick={this.handleWorkDecrement}> - </button>
      </div>
    );
  }
}
