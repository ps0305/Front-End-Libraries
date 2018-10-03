### React Component Lifecycle

* React Component goes through the following lifecycle stages:

 1. Mounting
 2. Updating
 3. Unmounting
 
* Several lifecycle methods available in each stage

### Mounting Lifecycle Methods
* Called when an instance of a component is being created and inserted into the DOM:
1. constructor()
2. getDerivedStateFromProps()
3. render()
4. componentDidMount()
* An earlier method now deprecated called `componentWillMount()`

### Updating Lifecycle Methods
* Called when a component is being re-rendered
1. Can be caused by changes to props or state
2. getDerivedStateFromProps()
3. shouldComponentUpdate()
4. render()
5. getSnapshotBeforeUpdate()
6. componentDidUpdate()
* Two methods that are now deprecated:
`componentWillReceiveProps()` and `componentWillUpdate()`

### Unmounting Lifecycle Methods
* Is called when the component is being removed
from the DOM:
– componentWillUnmount()
* Error Handling: called when there is an error during rendering, in a lifecycle method or in the constructor of any child component
– componentDidCatch()
