import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 1000
    }
  }

  handleClick = (e) => {
    let newState;
    if (e.target.textContent == "INC") {
      newState = { ...this.state, counter: this.state.counter + 1 }
    } else {
      newState = { ...this.state, counter: this.state.counter - 1 }
    }

    this.setState(newState, function () {
      console.log('state changed')
    });


    // this.state.counter++;
    // console.log(this.state);
  }

  render() {
    console.log('render')
    return (
      <div>
        <button onClick={this.handleClick}>
          INC
      </button>
        <span>{this.state.counter}</span>

        <button onClick={this.handleClick}>
          DEC
      </button>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
