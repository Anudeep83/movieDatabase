import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css' // Optional: Style this as you like

class MovieGrid extends Component {
  render() {
    const {movies} = this.props

    return (
      <div className="movie-grid">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-rating">⭐ {movie.vote_average}</p>
            <Link to={`/movie/${movie.id}`}>
              <button className="details-button">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

export default MovieGrid
