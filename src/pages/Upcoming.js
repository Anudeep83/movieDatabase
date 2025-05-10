import React from 'react'
import MovieGrid from '../components/MovieGrid/MovieGrid'
import {getUpcomingMovies} from '../utils/api'

class Upcoming extends React.Component {
  state = {movies: []}

  componentDidMount() {
    getUpcomingMovies().then(movies => {
      this.setState({movies})
    })
  }

  render() {
    return (
      <div>
        <h2>Upcoming Movies</h2>
        <MovieGrid movies={this.state.movies} />
      </div>
    )
  }
}

export default Upcoming
