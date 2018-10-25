import React, { Component } from "react";

export default class Timer extends Component {
  timer = () => {
    if (this.props.timerRunning === true) {
      clearInterval(this.props.timerId)
      this.props.setCurrentTime("25 : 00")
      this.props.setTimerRunning()
    } else {
      this.props.cycle === "Session"
        ? this.props.startTimer(this.props.workTime)
        : this.props.startTimer(this.props.breakTime)
    }

  }
  startTimer = (duration) => {
    this.setState({
      timerRunning: true
    })
    let time = duration * 60
    let minutes;
    let seconds;
    let runningTimer = setInterval(() => {
      this.setState({
        timerId: runningTimer
      })
      minutes = Math.floor(time / 60)
      seconds = time - minutes * 60
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      this.setState({currentTime: `${minutes} : ${seconds}`})
      if (time == 0) {
        if(this.state.cycle === "Session"){
          this.setState({
            cycle: "Break",
            timerRunning: false
          })
          clearInterval(this.state.timerId)
          this.startTimer(this.state.breakTime)
        }else{
          this.setState({
            cycle: "Session",
            timerRunning: false
          })
          clearInterval(this.state.timerId)
          this.startTimer(this.state.workTime)
        }
      }
    },1000);
  }
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
