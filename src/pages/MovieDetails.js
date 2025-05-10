import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {getMovieDetails, getMovieCast} from '../utils/api'
//import './MovieDetails.css'

class MovieDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: null,
      cast: [],
      loading: true,
      error: null,
    }
  }

  componentDidMount() {
    const movieId = this.props.match.params.id

    Promise.all([getMovieDetails(movieId), getMovieCast(movieId)])
      .then(([movieData, castData]) => {
        this.setState({
          movie: movieData,
          cast: castData,
          loading: false,
        })
      })
      .catch(err => {
        this.setState({
          error: 'Failed to load movie data',
          loading: false,
        })
      })
  }

  render() {
    const {movie, cast, loading, error} = this.state

    if (loading) {
      return <div className="loading">Loading...</div>
    }

    if (error) {
      return <div className="error">{error}</div>
    }

    return (
      <div className="movie-details-container">
        <div className="movie-info">
          <img
            className="movie-poster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-meta">
            <h2>{movie.title}</h2>
            <p>
              <strong>Rating:</strong> {movie.vote_average}
            </p>
            <p>
              <strong>Duration:</strong> {movie.runtime} minutes
            </p>
            <p>
              <strong>Genre:</strong> {movie.genres.map(g => g.name).join(', ')}
            </p>
            <p>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p>
              <strong>Overview:</strong> {movie.overview}
            </p>
          </div>
        </div>

        <h3 className="cast-heading">Cast</h3>
        <div className="cast-grid">
          {cast.map(actor => (
            <div key={actor.cast_id} className="cast-card">
              <img
                className="cast-img"
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : 'https://via.placeholder.com/200x300?text=No+Image'
                }
                alt={actor.name}
              />
              <div className="cast-details">
                <p>
                  <strong>{actor.name}</strong>
                </p>
                <p>as {actor.character}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default withRouter(MovieDetails)
