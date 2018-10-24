import React, { Component } from "react";
import "../App.css";
import Timer from "./Timer";
import TimeController from "./TimeController";
import Sound from "./Sound";

class App extends Component {
  constructor () {
    super ()
    this.state = {
      cycle: "Session",
      workTime: 25,
      breakTime: 5,
      sound: "on"
    }
  }
  setSound = (sound) => {
    this.setState({
      sound: sound
    })
  }
  render() {
    return (
      <div className="main">
        <h1>Pomodoro Clock</h1>
        <Timer />
        <TimeController />
        <Sound setSound={this.setSound} sound={this.state.sound} />
      </div>
    );
  }
}

export default App;
