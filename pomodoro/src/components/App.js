import React, { Component } from "react";
import "../App.css";
import Timer from "./Timer";
import TimeController from "./TimeController";
import Sound from "./Sound";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerId: 0,
      timerRunning: false,
      currentTime: "25 : 00",
      cycle: "Session",
      workTime: 25,
      breakTime: 5,
      sound: "on"
    }
  }
  setSound = sound => {
    this.setState({
      sound: sound
    });
  };

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

  incrementWorkTime = () => {
    this.setState({
      workTime: this.state.workTime + 1
    });
  };
  decrementWorkTime = () => {
    this.setState({
      workTime: this.state.workTime - 1
    });
  };
  incrementBreakTime = () => {
    this.setState({
      breakTime: this.state.breakTime + 1
    });
  };
  decrementBreakTime = () => {
    this.setState({
      breakTime: this.state.breakTime - 1
    });
  };

  render() {
    return (
      <div className="main">
        <h1>Pomodoro Clock</h1>
        <Timer />
        <TimeController
          workTime={this.state.workTime}
          breakTime={this.state.breakTime}
          incrementWorkTime={this.incrementWorkTime}
          decrementWorkTime={this.decrementWorkTime}
          incrementBreakTime={this.incrementBreakTime}
          decrementBreakTime={this.decrementBreakTime}
        />
        <Sound setSound={this.setSound} sound={this.state.sound} />
      </div>
    );
  }
}

export default App;
