import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar';

import './App.css';
import Watch from './components/Watch';

class App extends Component {
  state = {
    videos: []
  };

  searchVideos = (whatSearchFor) => {
    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: whatSearchFor,
        part: 'snippet',
        maxResults: 10,
        key: 'AIzaSyAjjdmj2OBbjr096PFMex2hs54gJSJSHhM'
      }
    })
      .then(response => { 
        console.log('response:', response);
        this.setState({ videos: response.data });
      })
      .catch(error => {
        console.log(error);
        throw new Error(error);
      });
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchVideos={this.searchVideos} />
        <Watch videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
