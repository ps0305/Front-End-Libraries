Once you define a component's initial state, you can display any part of it in the UI that is rendered. 
If a component is stateful, it will always have access to the data in `state` in its `render()` method. 
You can access the data with `this.state`.

if you want to access a state value within the return of the render method, you have to enclose the value in curly braces.

`State` is one of the most powerful features of components in React. 
It allows you to track important data in your app and render a UI in response to changes in this data. 
If your data changes, your UI will change. React uses what is called a virtual DOM, to keep track of changes behind the scenes. 
When `state` data updates, 
it triggers a re-render of the components using that data - including child components that received the data as a prop. 
React updates the actual DOM, but only where necessary. This means you don't have to worry about changing the DOM. 
You simply declare what the UI should look like.

#### Note that if you make a component `stateful`, no other components are aware of its `State`. Its `State` is completely encapsulated, or local to that component, unless you pass state data to a child component as props. 
#### This notion of encapsulated `State` is very important because it allows you to write certain logic, 
then have that logic contained and isolated in one place in your code.

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React Js is Awesome !'
    }
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
          <h1>{this.state.name}</h1>
        { /* change code above this line */ }
      </div>
    );
  }
};

