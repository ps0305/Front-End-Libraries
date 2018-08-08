import React, { Component } from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import './style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 1, start: 10, incBy: 1, decBy: 1 },
        { id: 2, start: 20, incBy: 1, decBy: 1 },
        { id: 3, start: 10, incBy: 1, decBy: 1 },

      ],
      stats: {
        c1: 0, c2: 0, c3: 0
      }
      
    }

    this.onCounterClicked = this.onCounterClicked.bind(this);
  }

  onCounterClicked(counterRef) {
    if (counterRef == 1) {
      this.setState({ ...this.state, stats: { ...this.state.stats, c1: this.state.stats.c1 + 1 } })
    }
  }

  render() {
    return (
      <div>
        <h1>Counter1 : {this.state.stats.c1}</h1>
        {this.state.counters.map(c => <Counter id={c.id} start={c.start} incBy={c.incBy} decBy={c.decBy} counterClicked={this.onCounterClicked} />)}
      </div>
    )
  }
}

render(<App p1={1} p2={[]} />, document.getElementById('root'));
