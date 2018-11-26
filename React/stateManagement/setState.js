class Select extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      selection: props.values[0]
    };
  }
  
  render() {
    return (
      <ul onKeyDown={this.onKeyDown} tabIndex={0}>
        {this.props.values.map(value =>
          <li
            className={value === this.state.selection ? 'selected' : ''}
            key={value}
            onClick={() => this.onSelect(value)}
          >
            {value}
          </li> 
        )}  
      </ul>
    )
  }
  
  onSelect(value) {
    this.setState({ 
      selection: value
    })
    this.fireOnSelect()
  }

  onKeyDown = (e) => {
    const {values} = this.props
    const idx = values.indexOf(this.state.selection)
    if (e.keyCode === 38 && idx > 0) { /* up */
      this.setState({
        selection: values[idx - 1]
      })
    } else if (e.keyCode === 40 && idx < values.length -1) { /* down */
      this.setState({
        selection: values[idx + 1]
      })
    }
    this.fireOnSelect()
  }
   
  fireOnSelect() {
    if (typeof this.props.onSelect === "function")
      this.props.onSelect(this.state.selection) /* not what you expected..*/
  }
}

ReactDOM.render(
  <Select 
    values={["State.", "Should.", "Be.", "Synchronous."]} 
    onSelect={value => console.log(value)}
  />,
  document.getElementById("app")
)