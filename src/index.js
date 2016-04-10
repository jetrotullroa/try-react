// import from dependencies
import React from 'react';
import ReactDOM from 'react-dom'

//import from cmponent files
import SearchBar from './components/search_bar.js';

// Youtube API
const API_KEY = 'AIzaSyAkMb7LUi72EtkKxhOtkrglTCmXOh-hIQw';


// COMPONENTS FOR THE DOM
const App = () => {
  return <SearchBar />
};



// RENDER COMPONENTS TO DOM
ReactDOM.render(<App />, document.querySelector('.container'));
