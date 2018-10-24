import React, { Component } from 'react';

export default class Sound extends Component {

    toggleSound = () => {
        this.props.sound === "on" ?
        this.props.setSound("off") :
        this.props.setSound("on")
    }
    render() {
        return (
            <button onClick={this.toggleSound}> SOUND </button>
        )
    }
}