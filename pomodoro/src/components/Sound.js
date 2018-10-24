import React, { Component } from "react";

export default class Sound extends Component {
  toggleSound = e => {
    this.props.sound === "on"
      ? this.changeSoundAttributes(
          "off",
          process.env.PUBLIC_URL + "/assets/sound.png",
          e
        )
      : this.changeSoundAttributes(
          "on",
          process.env.PUBLIC_URL + "/assets/sound.png",
          e
        );
  };

  changeSoundAttributes = (toggle, src, e) => {
    this.props.setSound(toggle);
    e.target.src = src;
  };
  render() {
    return (
      <button
        onClick={e => {
          this.toggleSound(e);
        }}
      >
        <img src={process.env.PUBLIC_URL + "/assets/sound.png" } alt="sound" height="30px"/>
      </button>
    );
  }
}
