import React from 'react'
import MovieGrid from '../components/MovieGrid/MovieGrid'
import {searchMovies} from '../utils/api'

class SearchResults extends React.Component {
  state = {movies: []}

  componentDidMount() {
    const query = this.props.match.params.query
    searchMovies(query).then(movies => {
      this.setState({movies})
    })
  }

  render() {
    return (
      <div>
        <h2>Search Results</h2>
        <MovieGrid movies={this.state.movies} />
      </div>
    )
  }
}

export default SearchResults
