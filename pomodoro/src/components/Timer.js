import React, { Component } from "react";

export default class Timer extends Component {
  render() {
    return (
      <div className="timer">
        <span className="count_down" onClick={this.timer}>
          {this.props.currentTime}
        </span>
        <span>{this.props.cycle}</span>
      </div>
    );
  }
}
