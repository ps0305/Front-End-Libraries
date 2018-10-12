import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyB3a9E4BzF3u_LpOhB8pkiYrfK3iYZNgHw';






class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    YTSearch({key: API_KEY, term:'surfboards'}, (videos) => {
      //console.log(data);
      this.setState({ videos }); //ES6 same key value
      //this.setState({ videos:videos})
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
}
  }
  

export default App;
