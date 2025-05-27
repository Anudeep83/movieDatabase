import React from 'react'
import MovieGrid from '../components/MovieGrid/MovieGrid'
import {getUpcomingMovies} from '../utils/api'

class Upcoming extends React.Component {
  state = {
    movies: [],
    page: 1,
  }

  componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies = () => {
    getUpcomingMovies(this.state.page).then(movies => {
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
        <h1>movieDB</h1>
        <h2>Upcoming</h2>
        <input type="search" placeholder="Search" />
        <button>Search</button>
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

export default Upcoming
