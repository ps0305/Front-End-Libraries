import React, { Component } from "react";

export default class WorkController extends Component {

  handleWorkIncrement = () => {
    this.props.incrementWorkTime()
    if (this.props.timerRunning === false) {
      this.props.setCurrentTime(this.props.workTime)
    }
  }

  handleWorkDecrement = () => {
    this.props.decrementWorkTime()
    if (this.props.timerRunning === false) {
      this.props.setCurrentTime(this.props.workTime)
    }
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
