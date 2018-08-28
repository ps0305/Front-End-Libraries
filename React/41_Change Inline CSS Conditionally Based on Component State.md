The code editor has a simple controlled input component with a styled border. 
You want to style this border red if the user types more than 15 characters of text in the input box. 
Add a condition to check for this and, if the condition is valid, set the input border style to `3px solid red`. 
You can try it out by entering text in the input.

```js


class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // change code below this line
    this.state.input.length > 15 && ( inputStyle = {border : '3px solid red'})
    // change code above this line
    return (
      <div>
        <h3>Do not Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};
