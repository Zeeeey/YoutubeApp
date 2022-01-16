import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from './components/search-bar';
import './App.css';
import YTSearch from 'youtube-api-search'
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

// const API_KEY = 'AIzaSyDuMiNN4F7rNdWhEQdNQ9_Q4hx2539lHns'
const API_KEY = 'AIzaSyD1NjfrSzy23hh8KbCdR__Yr-YisomUUZY'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('baby')
  }
  
  videoSearch = (term) => {
    YTSearch(
      //config option
      {
        key: API_KEY,
        term: term
      },

      //callback function
      videos => {
        this.setState({ 
          videos: videos,
          selectedVideo: videos[0]
        })
        console.log(this.state.videos)
      }
    )
  }

  render() {
    const videoSearch = _.debounce(item => {this.videoSearch(item)}, 800)
    return (
      <div className="container text-center">
        <h3>My Youtube App</h3>
        <SearchBar 
          onSearchTermChange={videoSearch}
          // onSearchTermChange={(term) => this.videoSearch(term)}
        />

        <div className="d-flex">
          <VideoDetail
            video={this.state.selectedVideo}
          />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          />
        </div>
      </div>
    );
  }
}

export default App;









// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
