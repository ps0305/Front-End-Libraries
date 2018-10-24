import React, { Component } from "react";
import "../App.css";
import Timer from "./Timer";
import TimerControllers from "./TimerControllers";
import Sound from "./Sound";

class App extends Component {
  render() {
    return (
      <div className="main">
        <h1>Pomodoro Clock</h1>
        <Timer />
        <TimerControllers />
        <Sound />
      </div>
    );
  }
}

export default App;
