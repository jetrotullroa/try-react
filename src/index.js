// import from dependencies
import _ from "lodash";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

// Youtube API
const API_KEY = 'AIzaSyAkMb7LUi72EtkKxhOtkrglTCmXOh-hIQw';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

     this.videoSearch('skateboard');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }
  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos} />
      </div>
    );
  }
}


// RENDER COMPONENTS TO DOM
ReactDOM.render(<App />, document.querySelector('.container'));
