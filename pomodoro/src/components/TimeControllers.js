import React, { Component } from "react";
import WorkController from "./WorkCOntroller";
import BreakCOntroller from "./BreakController";

export default class TimeControllers extends Componet {
  render() {
    return (
      <div className="timer-controllers">
        <WorkController />
        <BreakCOntroller />
      </div>
    );
  }
}
