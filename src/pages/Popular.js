import React from 'react'
import MovieGrid from '../components/MovieGrid/MovieGrid'
import {getPopularMovies} from '../utils/api'

class Popular extends React.Component {
  state = {movies: []}

  componentDidMount() {
    getPopularMovies().then(movies => {
      this.setState({movies})
    })
  }

  render() {
    return (
      <div>
        
        <MovieGrid movies={this.state.movies} />
      </div>
    )
  }
}

export default Popular
