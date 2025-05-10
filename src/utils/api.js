const API_KEY = 'c57736968b9f8dc81aafe9ebe3ce26d3'

// Get Popular Movies
export const getPopularMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  )
  const data = await response.json()
  return data.results
}

// Get Top Rated Movies
export const getTopRatedMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  )
  const data = await response.json()
  return data.results
}

// Get Upcoming Movies
export const getUpcomingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  )
  const data = await response.json()
  return data.results
}

// Search Movies
export const searchMovies = async (query) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
  )
  const data = await response.json()
  return data.results
}

// Get Single Movie Details
export const getMovieDetails = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  )
  const data = await response.json()
  return data
}

// Get Movie Cast Details
export const getMovieCast = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  )
  const data = await response.json()
  return data.cast
}
