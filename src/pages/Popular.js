import React from 'react'
import MovieGrid from '../components/MovieGrid/MovieGrid'
import {getPopularMovies} from '../utils/api'

class Popular extends React.Component {
  state = {
    movies: [],
    page: 1,
  }

  componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies = () => {
    getPopularMovies(this.state.page).then(movies => {
      this.setState({movies})
    })
  }

  onClickNext = () => {
    this.setState(prevState => ({page: prevState.page + 1}), this.fetchMovies)
  }

  onClickPrev = () => {
    if (this.state.page > 1) {
      this.setState(prevState => ({page: prevState.page - 1}), this.fetchMovies)
    }
  }

  render() {
    return (
      <div>
        
        <input type="search" placeholder="Search" />
        
        <MovieGrid movies={this.state.movies} />
        <div>
          <button onClick={this.onClickPrev}>Prev</button>
          <p>{this.state.page}</p>
          <button onClick={this.onClickNext}>Next</button>
        </div>
      </div>
    )
  }
}

export default Popular
