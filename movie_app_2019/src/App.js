import React from 'react';
import axios from 'axios';
import { async } from 'q';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMoives = async() => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json")
  }
  componentDidMount() {
    this.getMoives();
  }
  render() {
    const {isLoading} = this.state;
    return <div>{isLoading ? "Loading..." : "we are ready"}</div>
  }
}

export default App;