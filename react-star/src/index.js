import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactStars from './ReactStars';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <ReactStars />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
