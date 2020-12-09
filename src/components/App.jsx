import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      videoId: 0,
      data: null
    };
  }

  componentDidMount() {
    searchYouTube({
      query: 'react javascript',
      max: 5,
      key: API_KEY,
    }, this.saveData.bind(this));
  }

  newVideoClickHandler(num) {
    this.setState({
      videoId: num,
    });
  }

  saveData(data) {
    this.setState({
      data: data
    });
  }

  searchBar(string) {
    searchYouTube({
      query: string,
      max: 5,
      key: API_KEY,
    }, this.saveData.bind(this));
  }

  render() {
    let loading = true;
    const loadingTag = <div>Loading</div>;
    if (this.state.data) {
      loading = false;
    }
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchFunc={this.searchBar.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {loading ? loadingTag : <VideoPlayer video={this.state.data[this.state.videoId]} />}
          </div>
          <div className="col-md-5">
            {loading ? loadingTag : <VideoList videos={this.state.data} vidUpdate={this.newVideoClickHandler.bind(this)} />}
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
