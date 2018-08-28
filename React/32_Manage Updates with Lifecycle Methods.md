Another `lifecycle` method is `componentWillReceiveProps()` which is called whenever a component is receiving new `props`. 
This method receives the new `props` as an argument, which is usually written as `nextProps`. 
You can use this argument and compare with `this.props` and perform actions before the component updates. 
For example, you may call `setState()` locally before the update is processed.

Another method is `componentDidUpdate()`, and is called immediately after a component re-renders. 
Note that rendering and mounting are considered different things in the component lifecycle. 
When a page first loads, all components are mounted and this is where methods like `componentWillMount()` and `componentDidMount()` are called. 
After this, as state changes, components re-render themselves. The next challenge covers this in more detail.

```js
class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillUpdate() {
    console.log('Component is about to update...');
  }
  // change code below this line
  componentWillReceiveProps(nextProps) {
  console.log(this.props);
  console.log(nextProps(nextProps));
  }
  
  componentDidUpdate() {
    console.log('Component has updated');
  }
  // change code above this line
  render() {
    return <h1>{this.props.message}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'First Message'
    };
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage() {
    this.setState({
      message: 'Second Message'
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.changeMessage}>Update</button>
        <Dialog message={this.state.message}/>
      </div>
    );
  }
};
