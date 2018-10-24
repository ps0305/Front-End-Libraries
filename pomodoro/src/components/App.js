import React, { Component } from "react";
import "../App.css";
import Timer from "./Timer";
import TimeController from "./TimeController";
import Sound from "./Sound";

class App extends Component {
  render() {
    return (
      <div className="main">
        <h1>Pomodoro Clock</h1>
        <Timer />
        <TimeController />
        <Sound />
      </div>
    );
  }
}

export default App;
