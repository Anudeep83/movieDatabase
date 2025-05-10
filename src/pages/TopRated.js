import React from 'react'
import MovieGrid from '../components/MovieGrid/MovieGrid'
import {getTopRatedMovies} from '../utils/api'

class TopRated extends React.Component {
  state = {movies: []}

  componentDidMount() {
    getTopRatedMovies().then(movies => {
      this.setState({movies})
    })
  }

  render() {
    return (
      <div>
        <h2>Top Rated Movies</h2>
        <MovieGrid movies={this.state.movies} />
      </div>
    )
  }
}

export default TopRated
