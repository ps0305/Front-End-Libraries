import React, { Component } from 'react';

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.start
    }
  }

  handleClick = (e) => {
    let {incBy,decBy,id,counterClicked}= this.props;
    let newState;
    if (e.target.textContent == "INC") {
      newState = { ...this.state, counter: this.state.counter + incBy }
    } else {
      newState = { ...this.state, counter: this.state.counter - decBy }
    }

    this.setState(newState, function () {
      console.log('state changed')
    });
    counterClicked(id);

    // this.state.counter++;
    // console.log(this.state);
  }

  render() {
    console.log('render',this.props)
    return (
      <div>
        <button onClick={this.handleClick}
          disabled={this.state.counter >= 1010}
        >
          INC
      </button>
        <span>{this.state.counter}</span>

        <button onClick={this.handleClick} disabled={this.state.counter <= 1000}>
          DEC
      </button>
      </div>
    )
  }
}


export default Counter;
