import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'

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
        <VideoList videos={this.state.videos} />
      </div>
    );
}
  }
  

export default App;
