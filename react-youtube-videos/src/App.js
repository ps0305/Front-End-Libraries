import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyB3a9E4BzF3u_LpOhB8pkiYrfK3iYZNgHw';

YTSearch({key: API_KEY, term:'surfboards'}, function(data){
  console.log(data)
})



class App extends Component {
  render(){
    return (
      <div>
        <SearchBar />
      </div>
    );
}
  }
  

export default App;
