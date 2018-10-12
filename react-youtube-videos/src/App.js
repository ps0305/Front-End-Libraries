import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_details";

const API_KEY = "AIzaSyB3a9E4BzF3u_LpOhB8pkiYrfK3iYZNgHw";

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      videos: [],
      selectedVideo: null
    };
    YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
      //console.log(data);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); //ES6 same key value
      //this.setState({ videos:videos})
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
