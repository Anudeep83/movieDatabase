const API_KEY = '//'
const BASE_URL = 'https://api.themoviedb.org/3'

export const getPopularMovies = async (page = 1) => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`,
  )
  const data = await response.json()
  return data.results
}

export const getTopRatedMovies = async (page = 1) => {
  const response = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`,
  )
  const data = await response.json()
  return data.results
}

export const getUpcomingMovies = async (page = 1) => {
  const response = await fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=${page}`,
  )
  const data = await response.json()
  return data.results
}

// Search Movies
export const searchMovies = async query => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`,
  )
  const data = await response.json()
  return data.results
}

// Get Single Movie Details
export const getMovieDetails = async movieId => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  )
  const data = await response.json()
  return data
}

// Get Movie Cast Details
export const getMovieCast = async movieId => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  )
  const data = await response.json()
  return data.cast
}
